"""
gluestack-ui Bi-Weekly Social Wrap — GitHub Actions
====================================================
Fetches Slack + GitHub data in parallel threads, generates an X/Twitter
thread via Gemini, and posts the result back to Slack.

Secrets are injected via environment variables (set in GitHub repo settings):
  GEMINI_API_KEY  — Google AI Studio API key
  SLACK_TOKEN     — Slack Bot Token (xoxb-...)
  SLACK_CHANNEL   — Slack channel ID (default: C04P1FCGSR0)
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
GEMINI_API_KEY = os.environ["GEMINI_API_KEY"]
SLACK_TOKEN    = os.environ["SLACK_TOKEN"]
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
        return None, f"HTTP {e.code}: {body[:200]}"
    except Exception as e:
        return None, str(e)

def gh_headers():
    return {"Accept": "application/vnd.github.v3+json", "User-Agent": "gluestack-wrap"}

def sl_headers():
    return {"Authorization": f"Bearer {SLACK_TOKEN}", "Content-Type": "application/json"}

def clean_llm_json(raw):
    raw = re.sub(r"```(?:json)?", "", raw).strip()
    s, e = raw.find("{"), raw.rfind("}") + 1
    if s >= 0 and e > s:
        return json.loads(raw[s:e])
    raise ValueError("No JSON found")

# ── Parallel fetchers ───────────────────────────────────────────────────────
results = {}

def fetch_slack():
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
        errs.append(f"Slack error: {data.get('error','unknown')}")
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
                "message": c["commit"]["message"].split("\n")[0][:100],
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
                    "title":  pr["title"][:100],
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

    # -- Build text blocks ----------------------------------------------------
    topics = {}
    for m in slack_messages:
        for w in re.findall(r"[a-z]{5,}", m["text"].lower()):
            if w not in STOPWORDS:
                topics[w] = topics.get(w, 0) + 1
    top_topics = sorted(topics.items(), key=lambda x: x[1], reverse=True)[:8]
    topics_text = ", ".join(t[0] for t in top_topics) or "none"

    slack_block = "\n".join(
        f"- [{m['user']}]: {m['text'][:300]}" for m in slack_messages[:25]
    ) or "No community messages this period."

    commits_block = "\n".join(
        f"- [{c['branch']}] {c['message']} — {c['author']}" for c in github_commits[:20]
    ) or "No commits this period."

    prs_block = "\n".join(
        f"- PR #{pr['number']}: {pr['title']} by @{pr['author']}" for pr in github_prs[:15]
    ) or "No merged PRs this period."

    releases_block = "\n".join(
        f"- {r['name']} ({r['tag']})" for r in github_releases
    ) or "No releases this period."

    # -- Gemini ---------------------------------------------------------------
    SYSTEM = (
        "You write bi-weekly open-source wrap threads for X (Twitter). Rules:\n"
        "- Every string <= 280 characters (count carefully).\n"
        "- Use @gluestack_ui in main_tweet only.\n"
        "- Max 2 hashtags total across the whole thread.\n"
        "- Base claims on the data given — no hallucinated features.\n"
        "- Return ONLY valid JSON, no markdown fences, no extra text.\n"
        'Schema: {"main_tweet":"string","thread":["t1","t2","t3","t4"]}'
    )

    PROMPT = (
        f"Period: {FROM_ISO} to {TO_ISO}\n\n"
        f"SLACK ({len(slack_messages)} msgs) | hot topics: {topics_text}\n{slack_block}\n\n"
        f"COMMITS ({len(github_commits)} unique)\n{commits_block}\n\n"
        f"MERGED PRs ({len(github_prs)})\n{prs_block}\n\n"
        f"RELEASES\n{releases_block}\n\n"
        f"Write the bi-weekly X thread now."
    )

    gemini_payload = json.dumps({
        "system_instruction": {"parts": [{"text": SYSTEM}]},
        "contents": [{"role": "user", "parts": [{"text": PROMPT}]}],
        "generationConfig": {
            "temperature": 0.75,
            "topP": 0.95,
            "maxOutputTokens": 800,
            "responseMimeType": "application/json",
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
        timeout=10,
    )

    if gemini_err:
        errors.append(f"Gemini: {gemini_err}")
    elif gemini_resp:
        try:
            candidates = gemini_resp.get("candidates", [])
            if candidates:
                gemini_raw = candidates[0]["content"]["parts"][0]["text"]
                parsed = clean_llm_json(gemini_raw)
        except Exception as e:
            errors.append(f"Gemini parse: {e}")

    # -- Fallback -------------------------------------------------------------
    if parsed is None:
        top3 = ", ".join(t[0] for t in top_topics[:3]) or "open-source"
        parsed = {
            "main_tweet": (
                f"gluestack-ui Bi-Weekly Wrap ({FROM_ISO} to {TO_ISO}): "
                f"{len(github_commits)} commits, {len(github_prs)} PRs merged. "
                f"Full thread below @gluestack_ui #ReactNative"
            )[:280],
            "thread": [
                f"Commits this fortnight: {len(github_commits)} across main & main-v5-alpha. Steady progress on stability and new component APIs."[:280],
                f"Community: {len(slack_messages)} Slack messages. Hot topics: {top3}. Thank you for being part of gluestack-ui!"[:280],
                (f"{len(github_prs)} PRs merged"
                 + (f" — latest: {github_prs[0]['title'][:80]}" if github_prs else ".")
                 + " Keep the contributions coming!")[:280],
                "Explore gluestack-ui: https://github.com/gluestack/gluestack-ui | Docs: https://ui.gluestack.io #OpenSource"[:280],
            ],
        }

    parsed["main_tweet"] = parsed["main_tweet"][:280]
    parsed["thread"]     = [t[:280] for t in parsed.get("thread", [])[:4]]

    # -- Post to Slack --------------------------------------------------------
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
    slack_message_ts = None
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
        slack_message_ts = slack_resp.get("ts")
        if not post_success:
            slack_post_error = slack_resp.get("error", "unknown")
            errors.append(f"Slack post error: {slack_post_error}")

    # -- Print summary (visible in GitHub Actions logs) -----------------------
    print("=" * 60)
    print(f"gluestack-ui Bi-Weekly Wrap: {FROM_ISO} → {TO_ISO}")
    print("=" * 60)
    print(f"\nCommits:     {len(github_commits)}")
    print(f"PRs merged:  {len(github_prs)}")
    print(f"Releases:    {len(github_releases)}")
    print(f"Slack msgs:  {len(slack_messages)}")
    print(f"Gemini:      {'fallback' if not gemini_raw else 'ok'}")
    print(f"Slack post:  {'ok' if post_success else 'FAILED'}")
    print(f"\nMain tweet:\n{parsed['main_tweet']}")
    for i, t in enumerate(parsed["thread"], 1):
        print(f"\nThread {i}: {t}")
    if errors:
        print(f"\nErrors: {'; '.join(errors)}")

    # -- Set GITHUB_OUTPUT for downstream steps -------------------------------
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

    # -- Write step summary (renders in GitHub Actions UI) --------------------
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