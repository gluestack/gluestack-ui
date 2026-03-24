import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import { generateText } from 'ai';

export async function POST(request: Request) {
  const body = await request.json();

  const rawMessages = body?.messages ?? [];

  if (!Array.isArray(rawMessages) || rawMessages.length === 0) {
    return new Response(JSON.stringify({ error: 'Messages cannot be empty' }), {
      status: 400,
    });
  }

  // ✅ clean messages
  const messages = rawMessages.map((m: any) => ({
    role: m.role,
    content: m.content,
  }));

  const openrouter = createOpenRouter({
    apiKey: process.env.OPENROUTER_API_KEY ?? '',
  });

  const result = await generateText({
    model: openrouter('xiaomi/mimo-v2-omni'),
    messages,
  });

  return Response.json({
    message: result.text,
  });
}
