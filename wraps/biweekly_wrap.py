"""
gluestack-ui Bi-Weekly Wrap — GitHub Actions
============================================
Fetches Slack + GitHub data in parallel, generates a detailed wrap post
via Gemini, and posts it to Slack.

Secrets (set in GitHub repo Settings > Secrets and variables > Actions):
  GEMINI_API_KEY  — Google AI Studio API key
  SLACK_TOKEN     — Slack Bot Token (xoxb-...) with channels:history + chat:write
  SLACK_CHANNEL   — Slack channel ID (default: C04P1FCGSR0)

Usage:
  python3 wraps/biweekly_wrap.py           # full run
  python3 wraps/biweekly_wrap.py --dry-run # fetch data + generate, skip Slack post
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

SKIP_COMMIT_PATTERN = re.compile(
    r"^(chore|ci|merge|v\d+\.\d+|bump|release|\[skip ci\]|docs?:|dependabot)",
    re.I
)

def fetch(url, headers=None, data=None, timeout=10):
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

def extract_json(raw):
    """Extract JSON from LLM output — tries multiple strategies."""
    # Strip fences
    cleaned = re.sub(r"```(?:json)?\s*", "", raw).strip()
    # Find outermost { ... }
    s, e = cleaned.find("{"), cleaned.rfind("}") + 1
    if s >= 0 and e > s:
        candidate = cleaned[s:e]
        # Fix trailing commas before } or ]
        candidate = re.sub(r",\s*([}\]])", r"\1", candidate)
        try:
            return json.loads(candidate)
        except json.JSONDecodeError:
            pass
    # Try raw
    try:
        return json.loads(raw.strip())
    except json.JSONDecodeError:
        pass
    raise ValueError(f"Could not parse JSON. Raw starts: {raw[:400]}")

def is_meaningful_commit(msg):
    return not SKIP_COMMIT_PATTERN.match(msg)

# ── Parallel fetchers ───────────────────────────────────────────────────────
results = {}

def fetch_slack():
    if not SLACK_TOKEN:
        results["slack_messages"] = []
        results["slack_errors"]   = []
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
            hint = " — /invite @bot-name in the Slack channel"
        elif slack_err == "missing_scope":
            hint = " — add channels:history OAuth scope"
        errs.append(f"Slack: {slack_err}{hint}")
    else:
        for m in data.get("messages", []):
            text = m.get("text", "").strip()
            if (len(text) > 20
                    and m.get("subtype") not in ("bot_message", "channel_join", "channel_leave")
                    and not text.startswith("<!")):
                msgs.append({"text": text[:500], "user": m.get("user", "team")})
    results["slack_messages"] = msgs
    results["slack_errors"]   = errs

def fetch_commits(branch="main"):
    key = f"commits_{branch.replace('-','_')}"
    url = (
        f"https://api.github.com/repos/{GITHUB_REPO}/commits"
        f"?sha={branch}&since={FROM_DATE.isoformat()}&until={TO_DATE.isoformat()}&per_page=60"
    )
    data, err = fetch(url, headers=gh_headers())
    commits, errs = [], []
    if err:
        errs.append(f"GitHub commits/{branch}: {err}")
    elif isinstance(data, list):
        for c in data:
            full_msg = c["commit"]["message"]
            first_line = full_msg.split("\n")[0][:150]
            commits.append({
                "message": first_line,
                "author":  c["commit"]["author"].get("name", "team"),
                "login":   c.get("author", {}).get("login", ""),
                "branch":  branch,
                "sha":     c["sha"][:7],
                "url":     c["html_url"],
            })
    results[key]     = commits
    results[f"{key}_err"] = errs

def fetch_prs():
    url = (
        f"https://api.github.com/repos/{GITHUB_REPO}/pulls"
        f"?state=closed&sort=updated&direction=desc&per_page=40"
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
                labels = [l["name"] for l in pr.get("labels", [])]
                prs.append({
                    "title":  pr["title"][:150],
                    "number": pr["number"],
                    "author": pr["user"]["login"],
                    "url":    pr["html_url"],
                    "body":   (pr.get("body") or "")[:300],
                    "labels": labels,
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
                        "body": (r.get("body") or "")[:500],
                    })
    results["releases"]     = releases
    results["releases_err"] = errs

# ── Data helpers ────────────────────────────────────────────────────────────
def build_data_context(slack_msgs, commits, prs, releases):
    """Build a rich data block that Gemini uses as source material."""

    # -- Slack topics --
    topics = {}
    for m in slack_msgs:
        for w in re.findall(r"[a-z]{5,}", m["text"].lower()):
            if w not in STOPWORDS:
                topics[w] = topics.get(w, 0) + 1
    top_topics = sorted(topics.items(), key=lambda x: x[1], reverse=True)[:10]
    slack_section = "\n".join(
        f"- {m['text'][:300]}" for m in slack_msgs[:15]
    ) if slack_msgs else "(no Slack activity this period)"

    # -- Meaningful commits (exclude chores/ci) --
    meaningful = [c for c in commits if is_meaningful_commit(c["message"])]
    commit_section = "\n".join(
        f"- [{c['branch'][:4]}] {c['message']} — {c['author']}"
        for c in (meaningful or commits)[:20]
    )

    # -- PRs with author --
    pr_section = "\n".join(
        f"- #{pr['number']} {pr['title']} by @{pr['author']}"
        + (f" [{', '.join(pr['labels'])}]" if pr['labels'] else "")
        for pr in prs[:12]
    ) if prs else "(no PRs merged)"

    # -- Releases --
    rel_section = "\n".join(
        f"- {r['name']} ({r['tag']})\n  {r['body'][:200]}"
        for r in releases
    ) if releases else "(no releases this period)"

    # -- All contributors --
    commit_authors = set()
    for c in commits:
        login = c.get("login", "")
        author = c["author"]
        if login:
            commit_authors.add(f"@{login}")
        elif author and author != "team":
            commit_authors.add(author)
    pr_authors = set(f"@{pr['author']}" for pr in prs)
    all_contributors = sorted(commit_authors | pr_authors)

    hot_topics = ", ".join(t[0] for t in top_topics) if top_topics else "none"

    context = (
        f"PERIOD: {FROM_ISO} → {TO_ISO}\n"
        f"REPO: {GITHUB_REPO}\n\n"
        f"=== COMMITS ({len(commits)} total, {len(meaningful)} significant) ===\n"
        f"{commit_section}\n\n"
        f"=== MERGED PRs ({len(prs)}) ===\n"
        f"{pr_section}\n\n"
        f"=== RELEASES ===\n"
        f"{rel_section}\n\n"
        f"=== SLACK / COMMUNITY ({len(slack_msgs)} messages) ===\n"
        f"Hot topics: {hot_topics}\n"
        f"{slack_section}\n\n"
        f"=== CONTRIBUTORS ===\n"
        f"{', '.join(all_contributors) if all_contributors else 'none'}\n"
    )
    return context, top_topics, hot_topics, all_contributors, meaningful

# ── Gemini ──────────────────────────────────────────────────────────────────
GEMINI_SYSTEM = (
    "You are the editor of a bi-weekly open-source wrap for the gluestack-ui "
    "project — a React Native / web component library.\n\n"
    "Your job: turn raw GitHub + community data into a detailed, engaging "
    "Slack post (using Slack mrkdwn).\n\n"
    "RULES:\n"
    "- Write in a natural, enthusiastic tone. Like a team lead sharing "
    "updates with the team. Not corporate, not robotic.\n"
    "- Be specific: mention PR numbers, author names, actual commit "
    "descriptions. Never say 'various improvements' or 'multiple fixes'.\n"
    "- Group related work into themes (e.g. 'Button fixes', 'Docs updates', "
    "'v5-alpha prep').\n"
    "- Celebrate contributors by name.\n"
    "- Sections should have real substance — at least 2-3 bullet points each "
    "if there's data for it.\n\n"
    "OUTPUT: Return ONLY valid JSON (no markdown fences):\n"
    '{\n'
    '  "title": "Optional catchy title for the wrap (1 line)",\n'
    '  "overview": "2-3 sentence high-level summary of the period",\n'
    '  "sections": [\n'
    '    {"heading": "Section Title", "body": "Slack mrkdwn content — '
    'bullet points with *bold*, `code`, ~strikethrough~, etc. Each section '
    'should be detailed, 3-8 lines.", "emoji": "rocket"},\n'
    '    ...\n'
    '  ],\n'
    '  "contributor_shoutout": "Line thanking named contributors",\n'
    '  "footer_note": "CTA or closing line"\n'
    '}'
)

def call_gemini(context):
    prompt = (
        f"Here is the raw data for this period. Write the bi-weekly wrap now.\n\n"
        f"{context}"
    )
    payload = json.dumps({
        "system_instruction": {"parts": [{"text": GEMINI_SYSTEM}]},
        "contents": [{"role": "user", "parts": [{"text": prompt}]}],
        "generationConfig": {
            "temperature": 0.8,
            "topP": 0.95,
            "maxOutputTokens": 4096,
        },
    }).encode("utf-8")

    url = (
        f"https://generativelanguage.googleapis.com/v1beta/models/"
        f"{GEMINI_MODEL}:generateContent?key={GEMINI_API_KEY}"
    )

    resp, err = fetch(url, headers={"Content-Type": "application/json"}, data=payload, timeout=25)
    if err:
        return None, err

    try:
        candidates = resp.get("candidates", [])
        if not candidates:
            return None, "Gemini returned no candidates"
        raw = candidates[0]["content"]["parts"][0]["text"]
        finish = candidates[0].get("finishReason", "UNKNOWN")
        print(f"[gemini] finishReason={finish}, output_length={len(raw)}")
        if finish != "STOP":
            return None, f"Gemini finishReason={finish} (output may be truncated)"
        parsed = extract_json(raw)
        return parsed, None
    except Exception as e:
        # Print raw for debugging
        try:
            raw = candidates[0]["content"]["parts"][0]["text"]
            print(f"[gemini] Raw output ({len(raw)} chars):")
            print(raw[:800])
        except Exception:
            pass
        return None, str(e)

# ── Fallback generator ──────────────────────────────────────────────────────
def build_fallback_wrap(commits, prs, releases, slack_msgs, top_topics, contributors):
    """Produce a detailed wrap without Gemini — rich enough to stand alone."""

    meaningful = [c for c in commits if is_meaningful_commit(c["message"])]

    # Overview
    overview = (
        f"Over the past two weeks ({FROM_ISO} to {TO_ISO}), "
        f"the gluestack-ui repo saw *{len(commits)} commits* across main and "
        f"main-v5-alpha, with *{len(prs)} PRs merged*"
    )
    if releases:
        overview += f" and *{len(releases)} release(s)* shipped."
    else:
        overview += "."
    if contributors:
        overview += f" {len(contributors)} contributors pushed the project forward."

    sections = []

    # -- PR section --
    if prs:
        pr_body = "\n".join(
            f"• <{pr['url']}|*#{pr['number']}*> {pr['title']} — by @{pr['author']}"
            for pr in prs[:10]
        )
        if len(prs) > 10:
            pr_body += f"\n• ...and {len(prs) - 10} more PRs"
        sections.append({
            "heading": "Merged Pull Requests",
            "body": pr_body,
            "emoji": "merge",
        })

    # -- Meaningful commits --
    if meaningful:
        commit_body = "\n".join(
            f"• `{c['sha']}` {c['message']} — *{c['author']}*"
            for c in meaningful[:15]
        )
        if len(meaningful) > 15:
            commit_body += f"\n• ...and {len(meaningful) - 15} more"
        sections.append({
            "heading": "Key Changes",
            "body": commit_body,
            "emoji": "hammer_and_wrench",
        })

    # -- Releases --
    if releases:
        rel_body = "\n".join(
            f"• <{r['url']}|*{r['name']}*> — {r['body'][:200]}"
            for r in releases
        )
        sections.append({
            "heading": "Releases",
            "body": rel_body,
            "emoji": "package",
        })

    # -- Community --
    if slack_msgs:
        topics_text = ", ".join(t[0] for t in top_topics[:5])
        comm_body = (
            f"*Hot topics:* {topics_text}\n\n"
            + "\n".join(f"• {m['text'][:200]}" for m in slack_msgs[:8])
        )
        sections.append({
            "heading": "Community Conversations",
            "body": comm_body,
            "emoji": "speech_balloon",
        })

    # -- Stats --
    stats_body = (
        f"• Commits: *{len(commits)}* ({len(meaningful)} significant)\n"
        f"• PRs merged: *{len(prs)}*\n"
        f"• Releases: *{len(releases)}*\n"
        f"• Slack messages: *{len(slack_msgs)}*\n"
        f"• Contributors: *{len(contributors)}*"
    )
    sections.append({
        "heading": "By the Numbers",
        "body": stats_body,
        "emoji": "bar_chart",
    })

    contributor_line = (
        f"Thank you to everyone who contributed this fortnight"
        + (f" — {', '.join(contributors[:12])}" if contributors else "")
        + (" and more!" if len(contributors) > 12 else "")
        + " :pray:"
    )

    return {
        "title": f"gluestack-ui Bi-Weekly Wrap: {FROM_ISO} → {TO_ISO}",
        "overview": overview,
        "sections": sections,
        "contributor_shoutout": contributor_line,
        "footer_note": (
            "Star us on GitHub: https://github.com/gluestack/gluestack-ui | "
            "Docs: https://ui.gluestack.io | Join the community Discord!"
        ),
    }

# ── Slack formatting ────────────────────────────────────────────────────────
def format_slack_post(wrap, stats, errors):
    """Render the wrap dict into a Slack mrkdwn string."""
    lines = []

    # Header
    title = wrap.get("title", f"gluestack-ui Bi-Weekly Wrap: {FROM_ISO} → {TO_ISO}")
    lines.append(f":newspaper: *{title}*")
    lines.append(f"_{FROM_ISO} — {TO_ISO}_")
    lines.append("")

    # Overview
    if wrap.get("overview"):
        lines.append(wrap["overview"])
        lines.append("")

    # Sections
    for sec in wrap.get("sections", []):
        emoji = sec.get("emoji", "arrow_forward")
        heading = sec.get("heading", "")
        body = sec.get("body", "")
        lines.append(f":{emoji}: *{heading}*")
        lines.append(body)
        lines.append("")

    # Contributor shoutout
    if wrap.get("contributor_shoutout"):
        lines.append(wrap["contributor_shoutout"])
        lines.append("")

    # Footer
    if wrap.get("footer_note"):
        lines.append(f"_{wrap['footer_note']}_")
        lines.append("")

    # Stats footer (always shown)
    lines.append("---")
    lines.append(f":bar_chart: *Period Stats*")
    lines.append(f"• Commits: *{len(commits)}* | PRs merged: *{len(prs)}* | Releases: *{len(releases)}* | Slack messages: *{len(slack_msgs)}*")
    lines.append(f"• Generated by Gemini {'OK' if not errors else 'with fallback due to errors'}")

    if errors:
        lines.append("")
        lines.append(f":warning: _Issues: {'; '.join(errors)}_")

    return "\n".join(lines)

# ── Main ────────────────────────────────────────────────────────────────────
def main():
    # 1. Fetch all data in parallel
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
        t.join(timeout=10)

    # Merge + deduplicate commits
    all_commits = (results.get("commits_main", [])
                   + results.get("commits_main_v5_alpha", []))
    seen, commits = set(), []
    for c in all_commits:
        if c["sha"] not in seen:
            seen.add(c["sha"])
            commits.append(c)

    slack_msgs  = results.get("slack_messages", [])
    prs         = results.get("prs", [])
    releases    = results.get("releases", [])

    errors = (
        results.get("slack_errors", [])
        + results.get("commits_main_err", [])
        + results.get("commits_main_v5_alpha_err", [])
        + results.get("prs_err", [])
        + results.get("releases_err", [])
    )

    print(f"Data: {len(commits)} commits, {len(prs)} PRs, {len(releases)} releases, {len(slack_msgs)} slack msgs")

    # 2. Build data context
    context, top_topics, topics_text, contributors, meaningful = build_data_context(
        slack_msgs, commits, prs, releases
    )

    # 3. Generate wrap (Gemini, with fallback)
    wrap = None
    gemini_err = None

    if GEMINI_API_KEY:
        wrap, gemini_err = call_gemini(context)
        if gemini_err:
            errors.append(f"Gemini: {gemini_err}")
    else:
        errors.append("GEMINI_API_KEY not set")

    if wrap is None:
        print("[info] Using fallback wrap generator")
        wrap = build_fallback_wrap(commits, prs, releases, slack_msgs, top_topics, contributors)

    # 4. Format and print
    slack_text = format_slack_post(wrap, {
        "commits": len(commits), "prs": len(prs),
        "releases": len(releases), "slack_msgs": len(slack_msgs),
    }, errors)

    print("=" * 60)
    print(slack_text)
    print("=" * 60)

    # 5. Post to Slack
    if DRY_RUN:
        print("\n[DRY-RUN] Skipping Slack post.")
        return

    post_success = False
    slack_post_error = None

    slack_body = json.dumps({
        "channel":      SLACK_CHANNEL,
        "text":         slack_text,
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
        post_success = slack_resp.get("ok", False)
        if not post_success:
            slack_post_error = slack_resp.get("error", "unknown")
            hint = ""
            if slack_post_error == "not_in_channel":
                hint = " — /invite @bot-name in the Slack channel"
            elif slack_post_error == "missing_scope":
                hint = " — add chat:write OAuth scope"
            errors.append(f"Slack post: {slack_post_error}{hint}")

    print(f"Slack post: {'ok' if post_success else 'FAILED'}")

    # 6. GITHUB_OUTPUT
    if "GITHUB_OUTPUT" in os.environ:
        with open(os.environ["GITHUB_OUTPUT"], "a") as f:
            f.write(f"commits_count={len(commits)}\n")
            f.write(f"prs_count={len(prs)}\n")
            f.write(f"releases_count={len(releases)}\n")
            f.write(f"slack_messages_count={len(slack_msgs)}\n")
            f.write(f"slack_post_success={str(post_success).lower()}\n")
            f.write(f"period_from={FROM_ISO}\n")
            f.write(f"period_to={TO_ISO}\n")
            f.write(f"used_fallback={str(wrap is None or bool(gemini_err)).lower()}\n")

    if "GITHUB_STEP_SUMMARY" in os.environ:
        with open(os.environ["GITHUB_STEP_SUMMARY"], "a") as f:
            f.write(f"## Bi-Weekly Wrap: {FROM_ISO} → {TO_ISO}\n\n")
            f.write(slack_text.replace("\n", "\n\n"))

    if not post_success:
        sys.exit(1)

if __name__ == "__main__":
    main()