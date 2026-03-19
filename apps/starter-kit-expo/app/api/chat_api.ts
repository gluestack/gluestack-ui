import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import { convertToModelMessages, streamText } from 'ai';

export async function POST(request: Request) {
  const { messages } = await request.json();

  const openrouter = createOpenRouter({
    apiKey: process.env.OPENROUTER_API_KEY ?? '',
  });

  const result = streamText({
    model: openrouter('anthropic/claude-3.5-sonnet'),
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
