import OpenAI from 'openai';
import { BaseProvider, withRetry } from './base';

/**
 * LiteLLM provider — uses an OpenAI-compatible API to proxy to any model
 * supported by LiteLLM (vLLM, Ollama, HuggingFace, etc.).
 *
 * Typical setup: run LiteLLM proxy locally or on a server pointing to
 * vLLM serving Gemma 4, then point this provider at it.
 *
 *   litellm --model vllm/gemma-4 --port 4000
 *   → LITELLM_BASE_URL=http://localhost:4000
 *   → LITELLM_API_KEY=anything (or your vLLM key)
 *   → BLOG_CLI_MODEL=vllm/gemma-4
 */
export class LiteLLMProvider extends BaseProvider {
  private client: OpenAI;
  private model: string;

  constructor(model: string = 'vllm/gemma-4', baseUrl?: string, apiKey?: string) {
    super();
    this.model = model;
    this.client = new OpenAI({
      baseURL: baseUrl || process.env.LITELLM_BASE_URL || 'http://localhost:4000',
      apiKey: apiKey || process.env.LITELLM_API_KEY || 'anything',
    });
  }

  async chat(params: {
    system: string;
    user: string;
    jsonMode: boolean;
  }): Promise<string> {
    return withRetry(async () => {
      const response = await this.client.chat.completions.create({
        model: this.model,
        messages: [
          { role: 'system', content: params.system },
          { role: 'user', content: params.user },
        ],
        ...(params.jsonMode ? { response_format: { type: 'json_object' } } : {}),
        temperature: params.jsonMode ? 0.3 : 0.7,
      });

      const content = response.choices[0]?.message?.content;
      if (!content) throw new Error('Empty response from LiteLLM');
      return content;
    }, 'LiteLLM chat');
  }

  async generateImage(params: {
    prompt: string;
    size: string;
  }): Promise<Buffer> {
    // LiteLLM/vLLM don't have image generation — fall back to OpenAI DALL-E
    if (!process.env.OPENAI_API_KEY) {
      throw new Error(
        'LiteLLM does not support image generation. Set OPENAI_API_KEY for cover image generation, or use --skip-image.'
      );
    }
    const { OpenAIProvider } = await import('./openai');
    const openai = new OpenAIProvider('gpt-4o', 'dall-e-3');
    return openai.generateImage(params);
  }
}