import type { BlogMetadata, PipelineConfig, StageResult } from '../types';
import path from 'path';
import { safeWrite, ensureDir } from '../utils/file-io';
import { generatePageTs } from '../templates/page-tpl';
import { generateLayoutTs } from '../templates/layout-tpl';
import { log } from '@clack/prompts';

export async function runFileGen(
  metadata: BlogMetadata,
  mdxContent: string,
  config: PipelineConfig
): Promise<StageResult<string[]>> {
  try {
    log.step('Generating blog files...');

    const blogDir = path.join(config.websiteDir, 'app', 'blogs', metadata.slug);
    ensureDir(blogDir);

    const files: string[] = [];

    // 1. page.tsx
    const pageContent = generatePageTs(metadata.slug);
    const pagePath = path.join(blogDir, 'page.tsx');
    safeWrite(pagePath, pageContent);
    files.push(pagePath);
    log.info(`  Created: ${path.relative(config.websiteDir, pagePath)}`);

    // 2. layout.tsx
    const layoutContent = generateLayoutTs(metadata.title, metadata.description, metadata.coverPath);
    const layoutPath = path.join(blogDir, 'layout.tsx');
    safeWrite(layoutPath, layoutContent);
    files.push(layoutPath);
    log.info(`  Created: ${path.relative(config.websiteDir, layoutPath)}`);

    // 3. blog.mdx
    const mdxPath = path.join(blogDir, 'blog.mdx');
    safeWrite(mdxPath, mdxContent);
    files.push(mdxPath);
    log.info(`  Created: ${path.relative(config.websiteDir, mdxPath)}`);

    return { ok: true, data: files };
  } catch (err: any) {
    return { ok: false, error: err.message, recoverable: false };
  }
}