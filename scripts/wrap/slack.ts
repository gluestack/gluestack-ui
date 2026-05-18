import type { SlackMessage } from './types';

/**
 * Fetch messages from a Slack channel for the past N days.
 * Uses the Slack Web API conversations.history endpoint.
 */
export async function fetchSlackMessages(
  channelId: string,
  botToken: string,
  fromDate: Date,
  toDate: Date
): Promise<SlackMessage[]> {
  const messages: SlackMessage[] = [];
  const oldest = Math.floor(fromDate.getTime() / 1000).toString();
  const latest = Math.floor(toDate.getTime() / 1000).toString();

  let cursor: string | undefined;

  do {
    const url = new URL('https://slack.com/api/conversations.history');
    url.searchParams.set('channel', channelId);
    url.searchParams.set('oldest', oldest);
    url.searchParams.set('latest', latest);
    url.searchParams.set('limit', '200');
    if (cursor) url.searchParams.set('cursor', cursor);

    const response = await fetch(url.toString(), {
      headers: {
        Authorization: `Bearer ${botToken}`,
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!data.ok) {
      throw new Error(`Slack API error: ${data.error || 'Unknown error'}`);
    }

    for (const msg of data.messages || []) {
      // Skip bot messages and empty messages
      if (msg.subtype === 'bot_message' || !msg.text?.trim()) continue;
      // Skip messages that are just URLs or very short
      if (msg.text.trim().length < 10) continue;

      messages.push({
        ts: msg.ts,
        user: msg.user || msg.username || 'unknown',
        text: msg.text,
        channel: channelId,
      });
    }

    cursor = data.response_metadata?.next_cursor;
    if (cursor === '') cursor = undefined;
  } while (cursor);

  return messages;
}
