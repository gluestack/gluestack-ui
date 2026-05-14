import type { AIProvider } from '../types';

const MAX_RETRIES = 3;

export async function withRetry<T>(
  fn: () => Promise<T>,
  label: string,
  maxRetries: number = MAX_RETRIES
): Promise<T> {
  let lastError: Error | undefined;
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (err: any) {
      lastError = err;
      const isRateLimit =
        err?.status === 429 || err?.statusCode === 429 || String(err?.message).includes('rate');
      if (!isRateLimit) throw err;

      const delay = Math.pow(2, attempt) * 1000; // 2s, 4s, 8s
      console.warn(`[${label}] Rate limited, retrying in ${delay}ms (attempt ${attempt}/${maxRetries})...`);
      await new Promise((r) => setTimeout(r, delay));
    }
  }
  throw lastError;
}

export abstract class BaseProvider implements AIProvider {
  abstract chat(params: {
    system: string;
    user: string;
    jsonMode: boolean;
  }): Promise<string>;

  abstract generateImage(params: {
    prompt: string;
    size: string;
  }): Promise<Buffer>;

  protected parseJSON<T>(raw: string): T {
    // Strip markdown code fences if present
    let cleaned = raw.trim();
    if (cleaned.startsWith('```')) {
      cleaned = cleaned.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '');
    }
    return JSON.parse(cleaned) as T;
  }
}