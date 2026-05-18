import { intro, log, outro } from '@clack/prompts';
import fs from 'fs';
import path from 'path';
import type { WrapArgs, WrapData, WrapContent } from './types';
import { fetchSlackMessages } from './slack';
import { fetchGitHubCommits } from './github';
import { generateWrap } from './generate';

// ─── Env Loading ──────────────────────────────────────────────

function loadEnvFile(): void {
  const envPath = path.join(__dirname, '.env');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf-8');
    for (const line of envContent.split('\n')) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const eqIndex = trimmed.indexOf('=');
      if (eqIndex === -1) continue;
      const key = trimmed.slice(0, eqIndex).trim();
      const value = trimmed.slice(eqIndex + 1).trim().replace(/^["']|["']$/g, '');
      if (!process.env[key]) {
        process.env[key] = value;
      }
    }
  }

  // Also load blog-cli .env for shared AI config
  const blogEnvPath = path.join(__dirname, '..', 'blog-cli', '.env');
  if (fs.existsSync(blogEnvPath)) {
    const envContent = fs.readFileSync(blogEnvPath, 'utf-8');
    for (const line of envContent.split('\n')) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const eqIndex = trimmed.indexOf('=');
      if (eqIndex === -1) continue;
      const key = trimmed.slice(0, eqIndex).trim();
      const value = trimmed.slice(eqIndex + 1).trim().replace(/^["']|["']$/g, '');
      if (!process.env[key]) {
        process.env[key] = value;
      }
    }
  }
}

// ─── CLI Arg Parsing ──────────────────────────────────────────

function parseArgs(argv: string[]): WrapArgs {
  const args: WrapArgs = {
    fetchOnly: false,
    dryRun: false,
  };

  let i = 2;
  while (i < argv.length) {
    const arg = argv[i];
    switch (arg) {
      case '--fetch-only':
        args.fetchOnly = true;
        break;
      case '--from-file':
        args.fromFile = argv[++i];
        break;
      case '--from':
        args.fromDate = argv[++i];
        break;
      case '--to':
        args.toDate = argv[++i];
        break;
      case '--channel':
        args.channel = argv[++i];
        break;
      case '--dry-run':
        args.dryRun = true;
        break;
      case '--help':
      case '-h':
        printHelp();
        process.exit(0);
    }
    i++;
  }

  return args;
}

function printHelp(): void {
  console.log(`
gluestack Bi-Weekly Wrap — Automated social media wrap generator

Usage:
  yarn wrap [options]

Options:
  --fetch-only          Fetch data only, skip AI generation
  --from-file <path>    Generate from an existing data JSON file
  --from <YYYY-MM-DD>   Start date (default: 14 days ago)
  --to <YYYY-MM-DD>     End date (default: today)
  --channel <id>        Slack channel ID (overrides SLACK_CHANNEL_ID env)
  --dry-run             Print output, don't save to file
  --help, -h            Show this help message

Environment Variables:
  SLACK_BOT_TOKEN       Slack bot OAuth token (xoxb-...)
  SLACK_CHANNEL_ID      Default Slack channel ID
  GITHUB_TOKEN          GitHub personal access token
  LITELLM_BASE_URL      AI provider base URL
  LITELLM_API_KEY       AI provider API key
  BLOG_CLI_MODEL        AI model name (default: vllm/gemma4-26b)

Examples:
  yarn wrap
  yarn wrap --from 2026-05-01 --to 2026-05-15
  yarn wrap --fetch-only
  yarn wrap --from-file wraps/2026-05-15-raw.json
  yarn wrap --dry-run
`);
}

// ─── Date Helpers ─────────────────────────────────────────────

function getDateRange(args: WrapArgs): { from: Date; to: Date } {
  const to = args.toDate ? new Date(args.toDate) : new Date();
  const from = args.fromDate
    ? new Date(args.fromDate)
    : new Date(to.getTime() - 14 * 24 * 60 * 60 * 1000);

  // Set to end of day for 'to'
  to.setHours(23, 59, 59, 999);
  from.setHours(0, 0, 0, 0);

  return { from, to };
}

// ─── Output Formatting ────────────────────────────────────────

function formatOutput(content: WrapContent, dateRange: { from: string; to: string }): string {
  const fromDate = new Date(dateRange.from).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });
  const toDate = new Date(dateRange.to).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  let output = `# Bi-Weekly Wrap: ${fromDate}–${toDate}\n\n`;

  output += `## Tweet\n\n${content.tweet}\n\n---\n\n`;
  output += `## Thread\n\n`;

  content.thread.forEach((tweet, i) => {
    output += `${i + 1}/ ${tweet}\n\n`;
  });

  output += `---\n\n`;
  output += `## Sources\n`;
  output += `- Slack messages: ${content.sources.slackMessageCount}\n`;

  for (const [branch, count] of Object.entries(content.sources.githubCommitCount)) {
    output += `- GitHub commits (${branch}): ${count}\n`;
  }

  return output;
}

// ─── Main ─────────────────────────────────────────────────────

async function main(): Promise<void> {
  loadEnvFile();

  const args = parseArgs(process.argv);
  const { from, to } = getDateRange(args);

  const fromStr = from.toISOString().split('T')[0];
  const toStr = to.toISOString().split('T')[0];

  intro(`Bi-Weekly Wrap: ${fromStr} to ${toStr}`);

  let data: WrapData;

  // Load from file if specified
  if (args.fromFile) {
    log.info(`Loading data from ${args.fromFile}`);
    const raw = fs.readFileSync(args.fromFile, 'utf-8');
    data = JSON.parse(raw) as WrapData;
  } else {
    data = {
      dateRange: { from: fromStr, to: toStr },
      slackMessages: [],
      githubCommits: [],
      generatedAt: new Date().toISOString(),
    };

    // ─── Fetch Slack Messages ────────────────────────────
    const slackToken = process.env.SLACK_BOT_TOKEN;
    const channelId = args.channel || process.env.SLACK_CHANNEL_ID;

    if (slackToken && channelId) {
      log.step('Fetching Slack messages...');
      try {
        data.slackMessages = await fetchSlackMessages(channelId, slackToken, from, to);
        log.info(`  Found ${data.slackMessages.length} messages`);
      } catch (err: any) {
        log.warn(`  Slack fetch failed: ${err.message}`);
        log.warn('  Continuing without Slack data...');
      }
    } else {
      log.warn('  Skipping Slack: SLACK_BOT_TOKEN or SLACK_CHANNEL_ID not set');
    }

    // ─── Fetch GitHub Commits ────────────────────────────
    const githubToken = process.env.GITHUB_TOKEN;

    if (githubToken) {
      log.step('Fetching GitHub commits...');
      try {
        data.githubCommits = await fetchGitHubCommits(githubToken, from, to);
        const branches = [...new Set(data.githubCommits.map((c) => c.branch))];
        for (const branch of branches) {
          const count = data.githubCommits.filter((c) => c.branch === branch).length;
          log.info(`  ${branch}: ${count} commits`);
        }
      } catch (err: any) {
        log.warn(`  GitHub fetch failed: ${err.message}`);
        log.warn('  Continuing without GitHub data...');
      }
    } else {
      log.warn('  Skipping GitHub: GITHUB_TOKEN not set');
    }

    // Save raw data for potential re-use
    if (!args.dryRun && !args.fetchOnly) {
      const wrapsDir = path.join(process.cwd(), 'wraps');
      if (!fs.existsSync(wrapsDir)) fs.mkdirSync(wrapsDir, { recursive: true });
      const rawPath = path.join(wrapsDir, `${toStr}-raw.json`);
      fs.writeFileSync(rawPath, JSON.stringify(data, null, 2));
      log.info(`  Raw data saved: ${rawPath}`);
    }
  }

  // ─── Fetch-only mode ─────────────────────────────────────
  if (args.fetchOnly) {
    outro('Data fetched. Use --from-file to generate from this data.');
    return;
  }

  // ─── Check we have data ──────────────────────────────────
  if (data.slackMessages.length === 0 && data.githubCommits.length === 0) {
    log.error('No data available. Set SLACK_BOT_TOKEN + SLACK_CHANNEL_ID and/or GITHUB_TOKEN.');
    process.exit(1);
  }

  // ─── Generate Content ────────────────────────────────────
  let content: WrapContent;
  try {
    content = await generateWrap(data);
  } catch (err: any) {
    log.error(`Generation failed: ${err.message}`);
    process.exit(1);
  }

  const output = formatOutput(content, data.dateRange);

  if (args.dryRun) {
    console.log('\n' + output);
    outro('Dry run complete.');
    return;
  }

  // Save output
  const wrapsDir = path.join(process.cwd(), 'wraps');
  if (!fs.existsSync(wrapsDir)) fs.mkdirSync(wrapsDir, { recursive: true });
  const outputPath = path.join(wrapsDir, `${toStr}.md`);
  fs.writeFileSync(outputPath, output);
  log.info(`  Wrap saved: ${outputPath}`);

  outro('Bi-weekly wrap generated!');
}

main().catch((err) => {
  log.error(`Fatal error: ${err.message}`);
  process.exit(1);
});
