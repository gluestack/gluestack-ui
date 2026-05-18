import OpenAI from 'openai';
import { BaseProvider, withRetry } from './base';

export class OpenAIProvider extends BaseProvider {
  private client: OpenAI;
  private model: string;
  private imageModel: string;

  constructor(model: string = 'gpt-4o', imageModel: string = 'dall-e-3') {
    super();
    this.client = new OpenAI();
    this.model = model;
    this.imageModel = imageModel;
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
      if (!content) throw new Error('Empty response from OpenAI');
      return content;
    }, 'OpenAI chat');
  }

  async generateImage(params: {
    prompt: string;
    size: string;
  }): Promise<Buffer> {
    return withRetry(async () => {
      const response = await this.client.images.generate({
        model: this.imageModel,
        prompt: params.prompt,
        n: 1,
        size: (params.size as any) || '1792x1024',
        response_format: 'b64_json',
      });

      const b64 = response.data?.[0]?.b64_json;
      if (!b64) throw new Error('No image data from OpenAI');
      return Buffer.from(b64, 'base64');
    }, 'OpenAI image');
  }
}