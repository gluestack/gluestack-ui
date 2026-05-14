import type { BlogMetadata, PipelineConfig, StageResult } from '../types';
import path from 'path';
import { safeWrite, readText } from '../utils/file-io';
import { log } from '@clack/prompts';

export async function runUpdateListing(
  metadata: BlogMetadata,
  config: PipelineConfig
): Promise<StageResult<string[]>> {
  try {
    log.step('Updating blog listing and sitemap...');

    const modifiedFiles: string[] = [];

    // 1. Update blogs/page.tsx
    const pagePath = path.join(config.websiteDir, 'app', 'blogs', 'page.tsx');
    const pageContent = readText(pagePath);
    if (!pageContent) {
      return { ok: false, error: `Cannot read ${pagePath}`, recoverable: false };
    }

    const updatedPage = injectBlogEntry(pageContent, metadata);
    safeWrite(pagePath, updatedPage);
    modifiedFiles.push(pagePath);
    log.info(`  Updated: ${path.relative(config.websiteDir, pagePath)}`);

    // 2. Update sitemap.ts
    const sitemapPath = path.join(config.websiteDir, 'app', 'sitemap.ts');
    const sitemapContent = readText(sitemapPath);
    if (!sitemapContent) {
      return { ok: false, error: `Cannot read ${sitemapPath}`, recoverable: false };
    }

    const updatedSitemap = injectSitemapSlug(sitemapContent, metadata.slug);
    safeWrite(sitemapPath, updatedSitemap);
    modifiedFiles.push(sitemapPath);
    log.info(`  Updated: ${path.relative(config.websiteDir, sitemapPath)}`);

    return { ok: true, data: modifiedFiles };
  } catch (err: any) {
    return { ok: false, error: err.message, recoverable: false };
  }
}

function injectBlogEntry(content: string, metadata: BlogMetadata): string {
  // Build the new blog entry matching the exact structure
  const authorEntries = metadata.author
    .map(
      (a) => `      {
        id: ${a.id},
        avatar_url: '${a.avatarUrl}',
        email: '${a.email}',
        name: '${a.name}',
        occupation: '${a.occupation}',
      }`
    )
    .join(',\n');

  const newEntry = `  {
    title: '${metadata.title.replace(/'/g, "\\'")}',
    cover: '${metadata.coverPath}',
    slug: '${metadata.slug}',
    published_at: {
      start: '${metadata.publishedAt}',
    },
    reading_time: ${metadata.readingTime},
    author: [
${authorEntries}
    ],
  },`;

  // Find the blogs array and inject after the opening bracket
  const arrayStartRegex = /const blogs = \[\n/;
  const match = content.match(arrayStartRegex);
  if (!match) {
    throw new Error('Cannot find "const blogs = [" in page.tsx');
  }

  const insertIndex = match.index! + match[0].length;
  return content.slice(0, insertIndex) + newEntry + '\n' + content.slice(insertIndex);
}

function injectSitemapSlug(content: string, slug: string): string {
  // Find the blogSlugs array and inject after the opening bracket
  const arrayStartRegex = /const blogSlugs = \[\n/;
  const match = content.match(arrayStartRegex);
  if (!match) {
    throw new Error('Cannot find "const blogSlugs = [" in sitemap.ts');
  }

  const insertIndex = match.index! + match[0].length;
  return content.slice(0, insertIndex) + `    '${slug}',\n` + content.slice(insertIndex);
}