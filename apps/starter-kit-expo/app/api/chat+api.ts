import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import { convertToModelMessages, streamText } from 'ai';

export async function POST(request: Request) {
  const { messages } = await request.json();

  const openrouter = createOpenRouter({
    apiKey: process.env.OPENROUTER_API_KEY ?? '',
  });

  const result = streamText({
    model: openrouter('openai/gpt-5-image-mini'),
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
