import type { WrapData, WrapContent } from './types';
import { LiteLLMProvider } from '../blog-cli/providers/litellm';
import { log } from '@clack/prompts';

const GENERATE_SYSTEM = `You are a social media manager for gluestack-ui, a universal React & React Native component library. You write engaging, developer-focused content for X.com (Twitter).

Rules:
- Tweet must be under 280 characters
- Thread tweets can each be up to 280 characters
- Use developer-friendly language, not marketing speak
- Reference @gluestack_ui handle
- Use 1-2 relevant hashtags per tweet (#ReactNative #UI #DesignSystem #TailwindCSS #Expo)
- Be specific — mention actual features, commits, or discussions, not vague statements
- Thread should tell a story: what happened → why it matters → what's next

Return ONLY valid JSON with this exact shape:
{
  "tweet": "string — single tweet under 280 chars",
  "thread": [
    "string — tweet 1 of thread",
    "string — tweet 2 of thread",
    "string — tweet 3 of thread",
    "string — tweet 4 of thread (optional)",
    "string — tweet 5 of thread (optional)"
  ]
}`;

export async function generateWrap(
  data: WrapData,
  litellmBaseUrl?: string,
  litellmApiKey?: string,
  model?: string
): Promise<WrapContent> {
  log.step('Generating wrap content with AI...');

  const provider = new LiteLLMProvider(
    model || process.env.BLOG_CLI_MODEL || 'vllm/gemma4-26b',
    litellmBaseUrl,
    litellmApiKey
  );

  // Summarize Slack messages (keep it manageable for the prompt)
  const slackSummary = data.slackMessages
    .slice(0, 50) // Limit to avoid token overflow
    .map((m) => `[${m.user}]: ${m.text.substring(0, 200)}`)
    .join('\n');

  // Summarize GitHub commits by branch
  const commitsByBranch: Record<string, string[]> = {};
  for (const commit of data.githubCommits) {
    if (!commitsByBranch[commit.branch]) commitsByBranch[commit.branch] = [];
    commitsByBranch[commit.branch].push(
      `- ${commit.message.substring(0, 120)} (${commit.author})`
    );
  }

  let commitsSummary = '';
  for (const [branch, commits] of Object.entries(commitsByBranch)) {
    commitsSummary += `\n### Branch: ${branch} (${commits.length} commits)\n`;
    commitsSummary += commits.slice(0, 30).join('\n');
    if (commits.length > 30) {
      commitsSummary += `\n... and ${commits.length - 30} more`;
    }
  }

  const userPrompt = `Generate a bi-weekly wrap for gluestack-ui.

Date range: ${data.dateRange.from} to ${data.dateRange.to}

### Slack Discussions (from the gluestack community channel):
${slackSummary || 'No Slack messages found for this period.'}

### GitHub Commits:
${commitsSummary || 'No commits found for this period.'}

Generate a compelling tweet and a 3-5 tweet thread summarizing the highlights.`;

  const response = await provider.chat({
    system: GENERATE_SYSTEM,
    user: userPrompt,
    jsonMode: true,
  });

  // Parse the response — try multiple extraction methods
  let content: WrapContent;
  try {
    const cleaned = response
      .replace(/^```(?:json)?\n?/, '')
      .replace(/\n?```$/, '')
      .trim();
    const parsed = JSON.parse(cleaned);
    content = {
      tweet: parsed.tweet || '',
      thread: Array.isArray(parsed.thread) ? parsed.thread : [],
      sources: {
        slackMessageCount: data.slackMessages.length,
        githubCommitCount: Object.fromEntries(
          Object.entries(commitsByBranch).map(([b, c]) => [b, c.length])
        ),
      },
    };
  } catch {
    // Fallback: try to find JSON object in the response
    const startIdx = response.indexOf('{');
    const endIdx = response.lastIndexOf('}');
    if (startIdx !== -1 && endIdx > startIdx) {
      try {
        const extracted = response.slice(startIdx, endIdx + 1);
        const parsed = JSON.parse(extracted);
        content = {
          tweet: parsed.tweet || '',
          thread: Array.isArray(parsed.thread) ? parsed.thread : [],
          sources: {
            slackMessageCount: data.slackMessages.length,
            githubCommitCount: Object.fromEntries(
              Object.entries(commitsByBranch).map(([b, c]) => [b, c.length])
            ),
          },
        };
      } catch {
        throw new Error('Failed to parse AI-generated wrap content. Raw response:\n' + response.substring(0, 500));
      }
    } else {
      throw new Error('Failed to parse AI-generated wrap content. Raw response:\n' + response.substring(0, 500));
    }
  }

  return content;
}
