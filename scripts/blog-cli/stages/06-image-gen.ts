import type { AIProvider, PipelineConfig, StageResult } from '../types';
import path from 'path';
import { safeWriteBuffer, ensureDir } from '../utils/file-io';
import { log } from '@clack/prompts';

export async function runImageGen(
  provider: AIProvider,
  title: string,
  slug: string,
  config: PipelineConfig
): Promise<StageResult<string>> {
  try {
    log.step('Generating cover image...');

    const prompt = `A modern, clean technical blog cover image for an article titled "${title}". The style should be ${config.coverStyle}. Abstract geometric shapes representing technology and code. No text overlay. Aspect ratio 16:9.`;

    const buffer = await provider.generateImage({
      prompt,
      size: '1792x1024',
    });

    const coverDir = path.join(config.websiteDir, 'public', 'images', 'blogs');
    ensureDir(coverDir);

    const coverPath = path.join(coverDir, `${slug}-cover.png`);
    safeWriteBuffer(coverPath, buffer);

    const relativePath = `/images/blogs/${slug}-cover.png`;
    log.info(`  Cover image saved: ${relativePath}`);

    return { ok: true, data: relativePath };
  } catch (err: any) {
    log.warn(`  Image generation failed: ${err.message}`);
    log.warn('  Using placeholder. Add a cover image manually before publishing.');

    // Fallback: use a placeholder
    const placeholderPath = '/images/blogs/banner-1.png';
    return { ok: true, data: placeholderPath };
  }
}