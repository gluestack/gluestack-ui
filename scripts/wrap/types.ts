// ─── CLI Args ─────────────────────────────────────────────────

export interface WrapArgs {
  fetchOnly: boolean;
  fromFile?: string;
  fromDate?: string;
  toDate?: string;
  channel?: string;
  dryRun: boolean;
}

// ─── Slack ────────────────────────────────────────────────────

export interface SlackMessage {
  ts: string;
  user: string;
  text: string;
  channel: string;
}

// ─── GitHub ───────────────────────────────────────────────────

export interface GitHubCommit {
  sha: string;
  message: string;
  author: string;
  date: string;
  branch: string;
  url: string;
}

// ─── Wrap Data ────────────────────────────────────────────────

export interface WrapData {
  dateRange: { from: string; to: string };
  slackMessages: SlackMessage[];
  githubCommits: GitHubCommit[];
  generatedAt: string;
}

// ─── Generated Content ────────────────────────────────────────

export interface WrapContent {
  tweet: string;
  thread: string[];
  sources: {
    slackMessageCount: number;
    githubCommitCount: Record<string, number>;
  };
}
