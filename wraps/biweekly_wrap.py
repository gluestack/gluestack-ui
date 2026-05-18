"""
gluestack-ui Bi-Weekly Social Wrap — GitHub Actions
====================================================
Fetches Slack + GitHub data in parallel threads, generates an X/Twitter
thread via Gemini, and posts the result back to Slack.

Secrets are injected via environment variables (set in GitHub repo settings):
  GEMINI_API_KEY  — Google AI Studio API key
  SLACK_TOKEN     — Slack Bot Token (xoxb-...)
  SLACK_CHANNEL   — Slack channel ID (default: C04P1FCGSR0)

Usage:
  python3 wraps/biweekly_wrap.py           # full run
  python3 wraps/biweekly_wrap.py --dry-run # fetch data + generate thread, skip Slack post
"""

import os
import json
import re
import sys
import threading
import urllib.request
import urllib.error
import urllib.parse
from datetime import datetime, timezone, timedelta

# ── Config ──────────────────────────────────────────────────────────────────
DRY_RUN = "--dry-run" in sys.argv

GEMINI_API_KEY = os.environ["GEMINI_API_KEY"]
SLACK_TOKEN    = os.environ.get("SLACK_TOKEN", "")
SLACK_CHANNEL  = os.environ.get("SLACK_CHANNEL", "C04P1FCGSR0")
GITHUB_REPO    = "gluestack/gluestack-ui"
GEMINI_MODEL   = "gemini-2.5-flash"

# Period: last 14 days ending yesterday
TODAY     = datetime.now(timezone.utc).replace(hour=0, minute=0, second=0, microsecond=0)
TO_DATE   = TODAY - timedelta(days=1)
FROM_DATE = TO_DATE - timedelta(days=13)

FROM_TS  = str(int(FROM_DATE.timestamp()))
TO_TS    = str(int(TO_DATE.timestamp()))
FROM_ISO = FROM_DATE.strftime("%Y-%m-%d")
TO_ISO   = TO_DATE.strftime("%Y-%m-%d")

# ── Helpers ─────────────────────────────────────────────────────────────────
STOPWORDS = {
    "the","and","for","with","from","this","that","have","been","will",
    "they","some","when","what","about","just","also","more","into",
    "like","your","there","gluestack","http","https","react","native",
}

def fetch(url, headers=None, data=None, timeout=8):
    """Returns (parsed_json, error_str). Never raises."""
    try:
        req = urllib.request.Request(url, headers=headers or {}, data=data)
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            body = resp.read().decode("utf-8", errors="replace")
            return json.loads(body) if body else None, None
    except urllib.error.HTTPError as e:
        body = e.read().decode("utf-8", errors="replace")
        return None, f"HTTP {e.code}: {body[:300]}"
    except Exception as e:
        return None, str(e)

def gh_headers():
    return {"Accept": "application/vnd.github.v3+json", "User-Agent": "gluestack-wrap"}

def sl_headers():
    return {"Authorization": f"Bearer {SLACK_TOKEN}", "Content-Type": "application/json"}

def extract_json_from_text(raw):
    """Try multiple strategies to extract JSON from LLM output."""
    # Strategy 1: strip markdown fences, find { ... }
    cleaned = re.sub(r"```(?:json)?\s*", "", raw)
    s, e = cleaned.find("{"), cleaned.rfind("}") + 1
    if s >= 0 and e > s:
        try:
            return json.loads(cleaned[s:e])
        except json.JSONDecodeError:
            pass
    # Strategy 2: try parsing the raw string directly
    try:
        return json.loads(raw.strip())
    except json.JSONDecodeError:
        pass
    # Strategy 3: fix common LLM JSON mistakes (trailing commas, unquoted keys)
    try:
        fixed = re.sub(r",\s*([}\]])", r"\1", cleaned[s:e])  # trailing commas
        return json.loads(fixed)
    except (json.JSONDecodeError, UnboundLocalError):
        pass
    raise ValueError(f"No JSON found in: {raw[:300]}")

def summarize_commits(commits, max_items=6):
    """Group commits into meaningful highlights for the thread."""
    if not commits:
        return "No commits this period."
    lines = []
    for c in commits[:max_items]:
        msg = c["message"]
        # Skip chore/ci/merge commits — not interesting for social
        if re.match(r"^(chore|ci|merge|v\d+\.\d+|bump|release)", msg, re.I):
            continue
        lines.append(f"- {msg} ({c['author']})")
    if len(commits) > max_items:
        lines.append(f"- ...and {len(commits) - max_items} more")
    return "\n".join(lines) if lines else f"{len(commits)} maintenance commits."

def summarize_prs(prs, max_items=5):
    if not prs:
        return "No PRs merged."
    lines = []
    for pr in prs[:max_items]:
        lines.append(f"- #{pr['number']} {pr['title']} by @{pr['author']}")
    if len(prs) > max_items:
        lines.append(f"- ...and {len(prs) - max_items} more")
    return "\n".join(lines)

# ── Parallel fetchers ───────────────────────────────────────────────────────
results = {}

def fetch_slack():
    if not SLACK_TOKEN:
        results["slack_messages"] = []
        results["slack_errors"]   = ["SLACK_TOKEN not set — skipping Slack fetch"]
        return
    params = urllib.parse.urlencode({
        "channel": SLACK_CHANNEL,
        "oldest":  FROM_TS,
        "latest":  TO_TS,
        "limit":   "100",
    })
    data, err = fetch(
        f"https://slack.com/api/conversations.history?{params}",
        headers=sl_headers(),
    )
    msgs, errs = [], []
    if err:
        errs.append(f"Slack fetch: {err}")
    elif not data.get("ok"):
        slack_err = data.get("error", "unknown")
        hint = ""
        if slack_err == "not_in_channel":
            hint = " → Invite the bot to the channel: /invite @your-bot-name"
        elif slack_err == "missing_scope":
            hint = " → Add channels:history OAuth scope and reinstall the app"
        errs.append(f"Slack error: {slack_err}{hint}")
    else:
        for m in data.get("messages", []):
            text = m.get("text", "").strip()
            if (len(text) > 20
                    and m.get("subtype") not in ("bot_message", "channel_join", "channel_leave")
                    and not text.startswith("<!")):
                msgs.append({"text": text[:400], "user": m.get("user", "team")})
    results["slack_messages"] = msgs
    results["slack_errors"]   = errs

def fetch_commits(branch="main"):
    key = f"commits_{branch.replace('-','_')}"
    url = (
        f"https://api.github.com/repos/{GITHUB_REPO}/commits"
        f"?sha={branch}&since={FROM_DATE.isoformat()}&until={TO_DATE.isoformat()}&per_page=50"
    )
    data, err = fetch(url, headers=gh_headers())
    commits, errs = [], []
    if err:
        errs.append(f"GitHub commits/{branch}: {err}")
    elif isinstance(data, list):
        for c in data:
            commits.append({
                "message": c["commit"]["message"].split("\n")[0][:120],
                "author":  c["commit"]["author"].get("name", "team"),
                "branch":  branch,
                "sha":     c["sha"][:7],
            })
    results[key]     = commits
    results[f"{key}_err"] = errs

def fetch_prs():
    url = (
        f"https://api.github.com/repos/{GITHUB_REPO}/pulls"
        f"?state=closed&sort=updated&direction=desc&per_page=30"
    )
    data, err = fetch(url, headers=gh_headers())
    prs, errs = [], []
    if err:
        errs.append(f"GitHub PRs: {err}")
    elif isinstance(data, list):
        for pr in data:
            merged_at = pr.get("merged_at")
            if not merged_at:
                continue
            dt = datetime.fromisoformat(merged_at.replace("Z", "+00:00"))
            if dt < FROM_DATE:
                break
            if FROM_DATE <= dt <= TO_DATE:
                prs.append({
                    "title":  pr["title"][:120],
                    "number": pr["number"],
                    "author": pr["user"]["login"],
                    "url":    pr["html_url"],
                })
    results["prs"]     = prs
    results["prs_err"] = errs

def fetch_releases():
    url = f"https://api.github.com/repos/{GITHUB_REPO}/releases?per_page=5"
    data, err = fetch(url, headers=gh_headers())
    releases, errs = [], []
    if err:
        errs.append(f"GitHub releases: {err}")
    elif isinstance(data, list):
        for r in data:
            pub = r.get("published_at", "")
            if pub:
                dt = datetime.fromisoformat(pub.replace("Z", "+00:00"))
                if FROM_DATE <= dt <= TO_DATE:
                    releases.append({
                        "name": r.get("name") or r.get("tag_name", ""),
                        "tag":  r.get("tag_name", ""),
                        "url":  r.get("html_url", ""),
                    })
    results["releases"]     = releases
    results["releases_err"] = errs

# ── Gemini prompt builder ────────────────────────────────────────────────────
def build_prompt(slack_msgs, commits, prs, releases):
    """Build a compact, high-signal prompt that Gemini can process quickly."""
    # Slack: just top messages + topics
    topics = {}
    for m in slack_msgs:
        for w in re.findall(r"[a-z]{5,}", m["text"].lower()):
            if w not in STOPWORDS:
                topics[w] = topics.get(w, 0) + 1
    top_topics = sorted(topics.items(), key=lambda x: x[1], reverse=True)[:8]
    slack_summary = "\n".join(
        f"- {m['text'][:200]}" for m in slack_msgs[:10]
    ) if slack_msgs else "(no Slack messages this period)"

    # Commits: filter to meaningful ones
    meaningful = [c for c in commits if not re.match(
        r"^(chore|ci|merge|v\d+\.\d+|bump|release|\[skip ci\]|docs?:)",
        c["message"], re.I
    )]
    commit_summary = "\n".join(
        f"- [{c['branch'][:4]}] {c['message']}" for c in (meaningful or commits)[:12]
    )

    # PRs
    pr_summary = "\n".join(
        f"- #{pr['number']} {pr['title']} (@{pr['author']})" for pr in prs[:8]
    ) if prs else "(no PRs merged)"

    # Releases
    rel_summary = "\n".join(
        f"- {r['name']}" for r in releases
    ) if releases else "(no releases)"

    hot = ", ".join(t[0] for t in top_topics) if top_topics else "none"

    return (
        f"Period: {FROM_ISO} → {TO_ISO}\n\n"
        f"SLACK ACTIVITY ({len(slack_msgs)} msgs) — hot topics: {hot}\n{slack_summary}\n\n"
        f"NOTABLE COMMITS ({len(meaningful or commits)} significant):\n{commit_summary}\n\n"
        f"MERGED PRs ({len(prs)}):\n{pr_summary}\n\n"
        f"RELEASES:\n{rel_summary}\n\n"
        f"Write the X thread. Make it specific — mention actual PR authors, "
        f"real commit topics, real community themes. No generic filler."
    ), top_topics, hot

# ── Main ────────────────────────────────────────────────────────────────────
def main():
    # Fire all 5 fetches in parallel
    threads = [
        threading.Thread(target=fetch_slack),
        threading.Thread(target=fetch_commits, args=("main",)),
        threading.Thread(target=fetch_commits, args=("main-v5-alpha",)),
        threading.Thread(target=fetch_prs),
        threading.Thread(target=fetch_releases),
    ]
    for t in threads:
        t.start()
    for t in threads:
        t.join(timeout=9)

    # Merge + deduplicate commits
    all_commits = (results.get("commits_main", [])
                   + results.get("commits_main_v5_alpha", []))
    seen, github_commits = set(), []
    for c in all_commits:
        if c["sha"] not in seen:
            seen.add(c["sha"])
            github_commits.append(c)

    slack_messages  = results.get("slack_messages", [])
    github_prs      = results.get("prs", [])
    github_releases = results.get("releases", [])

    errors = (
        results.get("slack_errors", [])
        + results.get("commits_main_err", [])
        + results.get("commits_main_v5_alpha_err", [])
        + results.get("prs_err", [])
        + results.get("releases_err", [])
    )

    # ── Gemini ────────────────────────────────────────────────────────────
    SYSTEM = (
        "You write bi-weekly open-source wrap threads for X/Twitter.\n"
        "RULES:\n"
        "- Every string MUST be <= 280 characters.\n"
        "- Use @gluestack_ui in the main tweet only.\n"
        "- Max 2 hashtags total across the entire thread.\n"
        "- Be SPECIFIC: name PR authors, mention actual features/fixes, "
        "reference real commit topics. No filler like 'steady progress'.\n"
        "- The thread should feel like a human wrote it — enthusiastic, "
        "conversational, celebrating contributors by name.\n"
        "- Return ONLY this exact JSON structure, nothing else:\n"
        '  {"main_tweet": "...", "thread": ["t1", "t2", "t3", "t4"]}'
    )

    prompt, top_topics, topics_text = build_prompt(
        slack_messages, github_commits, github_prs, github_releases
    )

    gemini_payload = json.dumps({
        "system_instruction": {"parts": [{"text": SYSTEM}]},
        "contents": [{"role": "user", "parts": [{"text": prompt}]}],
        "generationConfig": {
            "temperature": 0.8,
            "topP": 0.95,
            "maxOutputTokens": 1024,
        },
    }).encode("utf-8")

    gemini_url = (
        f"https://generativelanguage.googleapis.com/v1beta/models/"
        f"{GEMINI_MODEL}:generateContent?key={GEMINI_API_KEY}"
    )

    parsed     = None
    gemini_raw = ""
    gemini_resp, gemini_err = fetch(
        gemini_url,
        headers={"Content-Type": "application/json"},
        data=gemini_payload,
        timeout=15,
    )

    if gemini_err:
        errors.append(f"Gemini: {gemini_err}")
    elif gemini_resp:
        try:
            candidates = gemini_resp.get("candidates", [])
            if candidates:
                gemini_raw = candidates[0]["content"]["parts"][0]["text"]
                print(f"[DEBUG] Gemini raw response ({len(gemini_raw)} chars):")
                print(gemini_raw[:500])
                print("---")
                parsed = extract_json_from_text(gemini_raw)
        except Exception as e:
            errors.append(f"Gemini parse: {e}")
            print(f"[DEBUG] Gemini parse failed. Raw response:")
            print(gemini_raw[:1000] if gemini_raw else "(empty)")

    # ── Smart fallback (when Gemini fails) ────────────────────────────────
    if parsed is None:
        # Build meaningful tweets from actual data
        meaningful = [c for c in github_commits if not re.match(
            r"^(chore|ci|merge|v\d+\.\d+|bump|release|\[skip ci\]|docs?:)",
            c["message"], re.I
        )]

        # Tweet 1: highlight a notable PR or commit
        if github_prs:
            top_pr = github_prs[0]
            detail_1 = (
                f"Top PR: #{top_pr['number']} \"{top_pr['title'][:100]}\" "
                f"by @{top_pr['author']} — merged this fortnight!"
            )[:280]
        elif meaningful:
            detail_1 = f"Key commit: {meaningful[0]['message'][:200]} — {meaningful[0]['author']}"[:280]
        else:
            detail_1 = f"{len(github_commits)} commits landed across main & main-v5-alpha branches."[:280]

        # Tweet 2: contributor shoutouts
        authors = list(set(c["author"] for c in github_commits if c["author"] != "team"))
        pr_authors = list(set(pr["author"] for pr in github_prs))
        all_contributors = list(set(authors + pr_authors))[:8]
        if all_contributors:
            detail_2 = (
                f"Shoutout to contributors this fortnight: "
                + ", ".join(f"@{a}" for a in all_contributors)
                + " — thank you for pushing gluestack-ui forward!"
            )[:280]
        else:
            detail_2 = f"{len(github_prs)} PRs merged this fortnight. The community keeps growing!"[:280]

        # Tweet 3: community or what's being worked on
        if slack_messages:
            detail_3 = (
                f"Community Slack highlights: {topics_text}. "
                f"{len(slack_messages)} messages from the community this fortnight. "
                f"Come join: https://gluestack.io/discord"
            )[:280]
        elif meaningful:
            areas = set()
            for c in meaningful[:5]:
                msg = c["message"].lower()
                if "button" in msg: areas.add("Button")
                if "input" in msg: areas.add("Input")
                if "modal" in msg: areas.add("Modal")
                if "select" in msg: areas.add("Select")
                if "form" in msg: areas.add("Form")
                if "aria" in msg: areas.add("a11y")
                if "v5" in msg: areas.add("v5-alpha")
            areas_text = ", ".join(areas) if areas else "component APIs & stability"
            detail_3 = f"Active work areas: {areas_text}. Steady iteration on the library."[:280]
        else:
            detail_3 = f"Contributors landed {len(github_prs)} PRs this fortnight. The open-source momentum continues."[:280]

        # Tweet 4: CTA
        detail_4 = "Star us on GitHub: https://github.com/gluestack/gluestack-ui | Docs: https://ui.gluestack.io | Join the community! #OpenSource"[:280]

        parsed = {
            "main_tweet": (
                f"gluestack-ui Bi-Weekly Wrap ({FROM_ISO} → {TO_ISO}): "
                f"{len(github_commits)} commits, {len(github_prs)} PRs merged. "
                f"What's new this fortnight? Thread  @gluestack_ui #ReactNative"
            )[:280],
            "thread": [detail_1, detail_2, detail_3, detail_4],
        }

    parsed["main_tweet"] = parsed["main_tweet"][:280]
    parsed["thread"]     = [t[:280] for t in parsed.get("thread", [])[:4]]

    # ── Print result ──────────────────────────────────────────────────────
    print("=" * 60)
    print(f"gluestack-ui Bi-Weekly Wrap: {FROM_ISO} → {TO_ISO}")
    print("=" * 60)
    print(f"\nCommits:     {len(github_commits)}")
    print(f"PRs merged:  {len(github_prs)}")
    print(f"Releases:    {len(github_releases)}")
    print(f"Slack msgs:  {len(slack_messages)}")
    print(f"Gemini:      {'fallback' if not gemini_raw else 'ok'}")
    print(f"\nMain tweet ({len(parsed['main_tweet'])} chars):")
    print(parsed["main_tweet"])
    for i, t in enumerate(parsed["thread"], 1):
        print(f"\nThread {i} ({len(t)} chars):")
        print(t)
    if errors:
        print(f"\n[ERRORS] {'; '.join(errors)}")

    # ── Post to Slack ─────────────────────────────────────────────────────
    if DRY_RUN:
        print("\n[DRY-RUN] Skipping Slack post.")
        return

    thread_lines = "\n".join(
        f"*[{i}]* {tw}" for i, tw in enumerate(parsed["thread"], 1)
    )
    releases_line = (
        " | ".join(f"<{r['url']}|{r['name']}>" for r in github_releases)
        if github_releases else "none this period"
    )

    slack_post_text = (
        f":newspaper: *gluestack-ui Bi-Weekly Wrap*\n"
        f"_{FROM_ISO} — {TO_ISO}_\n\n"
        f":mega: *X Thread — ready to post:*\n\n"
        f"*Main tweet:*\n{parsed['main_tweet']}\n\n"
        f"*Thread:*\n{thread_lines}\n\n"
        f"---\n"
        f":bar_chart: *Period Stats*\n"
        f"- :pencil: Commits: *{len(github_commits)}*\n"
        f"- :merge: PRs merged: *{len(github_prs)}*\n"
        f"- :package: Releases: {releases_line}\n"
        f"- :speech_balloon: Slack messages: *{len(slack_messages)}*\n"
        f"- :fire: Hot topics: {topics_text}\n"
        + (f"\n:warning: _Errors: {'; '.join(errors)}_" if errors else "")
    )

    post_success     = False
    slack_post_error = None

    slack_body = json.dumps({
        "channel":      SLACK_CHANNEL,
        "text":         slack_post_text,
        "mrkdwn":       True,
        "unfurl_links": False,
        "unfurl_media": False,
    }).encode("utf-8")

    slack_resp, slack_err = fetch(
        "https://slack.com/api/chat.postMessage",
        headers=sl_headers(),
        data=slack_body,
        timeout=8,
    )

    if slack_err:
        slack_post_error = slack_err
        errors.append(f"Slack post failed: {slack_err}")
    elif slack_resp:
        post_success     = slack_resp.get("ok", False)
        if not post_success:
            slack_post_error = slack_resp.get("error", "unknown")
            hint = ""
            if slack_post_error == "not_in_channel":
                hint = " — Invite the bot via /invite @bot-name in the channel"
            errors.append(f"Slack post error: {slack_post_error}{hint}")

    print(f"Slack post:  {'ok' if post_success else 'FAILED'}")
    if not post_success:
        print(f"Slack error: {slack_post_error}")

    # ── GITHUB_OUTPUT ─────────────────────────────────────────────────────
    if "GITHUB_OUTPUT" in os.environ:
        with open(os.environ["GITHUB_OUTPUT"], "a") as f:
            f.write(f"commits_count={len(github_commits)}\n")
            f.write(f"prs_count={len(github_prs)}\n")
            f.write(f"releases_count={len(github_releases)}\n")
            f.write(f"slack_messages_count={len(slack_messages)}\n")
            f.write(f"slack_post_success={str(post_success).lower()}\n")
            f.write(f"period_from={FROM_ISO}\n")
            f.write(f"period_to={TO_ISO}\n")
            f.write(f"used_fallback={str(not bool(gemini_raw)).lower()}\n")

    if "GITHUB_STEP_SUMMARY" in os.environ:
        with open(os.environ["GITHUB_STEP_SUMMARY"], "a") as f:
            f.write("## Bi-Weekly Wrap\n\n")
            f.write(f"**Period:** {FROM_ISO} to {TO_ISO}\n\n")
            f.write(f"| Metric | Count |\n|---|---|\n")
            f.write(f"| Commits | {len(github_commits)} |\n")
            f.write(f"| PRs Merged | {len(github_prs)} |\n")
            f.write(f"| Releases | {len(github_releases)} |\n")
            f.write(f"| Slack Messages | {len(slack_messages)} |\n")
            f.write(f"| Gemini | {'fallback' if not gemini_raw else 'ok'} |\n")
            f.write(f"| Slack Post | {'ok' if post_success else 'FAILED'} |\n\n")
            f.write(f"### X Thread\n\n**Main:** {parsed['main_tweet']}\n\n")
            for i, t in enumerate(parsed["thread"], 1):
                f.write(f"{i}. {t}\n")

    if not post_success:
        sys.exit(1)

if __name__ == "__main__":
    main()