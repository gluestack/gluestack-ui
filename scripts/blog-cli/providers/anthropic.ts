import Anthropic from '@anthropic-ai/sdk';
import { BaseProvider, withRetry } from './base';

export class AnthropicProvider extends BaseProvider {
  private client: Anthropic;
  private model: string;

  constructor(model: string = 'claude-sonnet-4-20250514') {
    super();
    this.client = new Anthropic();
    this.model = model;
  }

  async chat(params: {
    system: string;
    user: string;
    jsonMode: boolean;
  }): Promise<string> {
    return withRetry(async () => {
      const response = await this.client.messages.create({
        model: this.model,
        max_tokens: 8192,
        system: params.system,
        messages: [{ role: 'user', content: params.user }],
        ...(params.jsonMode
          ? {
              tool_choice: { type: 'tool', name: 'json_output' },
              tools: [
                {
                  name: 'json_output',
                  description: 'Output structured JSON data',
                  input_schema: {
                    type: 'object',
                    properties: { data: { type: 'string' } },
                    required: ['data'],
                  },
                },
              ],
            }
          : {}),
      });

      // Extract text content
      const textBlocks = response.content.filter((b) => b.type === 'text');
      let text = textBlocks.map((b) => (b as any).text).join('');

      // If using tool_choice, extract from tool use
      const toolBlocks = response.content.filter((b) => b.type === 'tool_use');
      if (toolBlocks.length > 0) {
        const toolBlock = toolBlocks[0] as any;
        text = toolBlock.input?.data || text;
      }

      if (!text) throw new Error('Empty response from Anthropic');
      return text;
    }, 'Anthropic chat');
  }

  async generateImage(params: {
    prompt: string;
    size: string;
  }): Promise<Buffer> {
    // Anthropic doesn't have image generation — fall back to OpenAI
    if (!process.env.OPENAI_API_KEY) {
      throw new Error(
        'Anthropic does not support image generation. Set OPENAI_API_KEY for cover image generation, or use --skip-image.'
      );
    }
    const { OpenAIProvider } = await import('./openai');
    const openai = new OpenAIProvider('gpt-4o', 'dall-e-3');
    return openai.generateImage(params);
  }
}