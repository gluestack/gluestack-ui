/**
 * Search indexer — run at build time (after yarn sync:website)
 * Reads all index.mdx files from apps/website/app/ui/docs,
 * extracts plain text + frontmatter, and writes
 * apps/website/public/search-index.json
 *
 * Usage:  tsx scripts/search/indexer.ts
 */

import fs from 'fs';
import path from 'path';

export interface SearchDocument {
  id: string;
  title: string;
  description: string;
  content: string;
  path: string;
  section: string;
  subsection: string;
}

const DOCS_ROOT = path.resolve(__dirname, '../../apps/website/app/ui/docs');
const OUTPUT = path.resolve(__dirname, '../../apps/website/public/search-index.json');

// ─── Frontmatter ──────────────────────────────────────────────────────────────

function parseFrontmatter(raw: string): { title: string; description: string; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { title: '', description: '', body: raw };

  const fm = match[1];
  const body = match[2];

  const titleMatch = fm.match(/^title:\s*['"]?(.+?)['"]?\s*$/m);
  const descMatch = fm.match(/^description:\s*['"]?(.+?)['"]?\s*$/m);

  return {
    title: titleMatch?.[1]?.trim() ?? '',
    description: descMatch?.[1]?.trim() ?? '',
    body,
  };
}

// ─── Text extraction ──────────────────────────────────────────────────────────

function extractText(mdx: string): string {
  const lines = mdx.split('\n');
  const kept: string[] = [];
  let inImportBlock = false;
  let inCodeBlock = false;
  let inJsxTag = false;

  for (const line of lines) {
    const trimmed = line.trim();

    // Track fenced code blocks
    if (/^```/.test(trimmed)) {
      inCodeBlock = !inCodeBlock;
      continue;
    }
    if (inCodeBlock) continue;

    // Skip export statements
    if (/^export\s/.test(trimmed)) continue;

    // Multi-line import tracking
    if (!inImportBlock && /^import\s/.test(trimmed)) {
      inImportBlock = true;
    }
    if (inImportBlock) {
      // Import ends when we see `from '...'` or a bare semicolon line or closing brace + from
      if (/from\s+['"]/.test(trimmed) || /^\s*;?\s*$/.test(trimmed)) {
        inImportBlock = false;
      }
      continue;
    }

    // Skip lines that are only JSX tag openers/closers with no prose
    if (/^<[A-Za-z]/.test(trimmed) && !/[a-z]{3,}/.test(trimmed.replace(/<[^>]+>/g, ''))) {
      continue;
    }

    kept.push(line);
  }

  return kept
    .join('\n')
    // Remove inline code
    .replace(/`[^`\n]+`/g, '')
    // Remove JSX self-closing tags  <Component prop="val" />
    .replace(/<[A-Za-z][A-Za-z0-9.]*[^>]*\/>/g, '')
    // Remove JSX opening / closing tags — keep any plain text children
    .replace(/<\/?[A-Za-z][A-Za-z0-9.]*[^>]*>/g, '')
    // Remove HTML comments
    .replace(/<!--[\s\S]*?-->/g, '')
    // Remove heading markers (keep text)
    .replace(/^#{1,6}\s+/gm, '')
    // Remove markdown images
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    // Unwrap markdown links — keep label
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    // Remove bold / italic markers
    .replace(/[*_]{1,3}([^*_\n]+)[*_]{1,3}/g, '$1')
    // Remove blockquote markers
    .replace(/^>\s+/gm, '')
    // Remove horizontal rules
    .replace(/^[-*_]{3,}\s*$/gm, '')
    // Remove leftover brace-only lines (empty JSX attribute blocks)
    .replace(/^\s*[{}]\s*$/gm, '')
    // Collapse whitespace
    .replace(/[ \t]+/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

// ─── Section labels ───────────────────────────────────────────────────────────

const SECTION_LABELS: Record<string, string> = {
  home: 'Home',
  components: 'Components',
  guides: 'Guides',
  changelog: 'Changelog',
  apps: 'Apps',
  hooks: 'Hooks',
  'mcp-server': 'MCP Server',
};

const SUBSECTION_LABELS: Record<string, string> = {
  'getting-started': 'Getting Started',
  overview: 'Overview',
  'core-concepts': 'Core Concepts',
  'theme-configuration': 'Theme',
  performance: 'Performance',
  more: 'More',
  'upgrade-to-v4': 'Upgrade',
  'upgrade-to-v5': 'Upgrade',
};

function getLabels(segments: string[]): { section: string; subsection: string } {
  const [top, sub] = segments;
  return {
    section: SECTION_LABELS[top] ?? top ?? '',
    subsection: SUBSECTION_LABELS[sub] ?? sub?.replace(/-/g, ' ') ?? '',
  };
}

// ─── File walker ──────────────────────────────────────────────────────────────

function findMdxFiles(dir: string, results: string[] = []): string[] {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      findMdxFiles(full, results);
    } else if (entry.name === 'index.mdx') {
      results.push(full);
    }
  }
  return results;
}

// ─── URL path derivation ──────────────────────────────────────────────────────
// /abs/path/app/ui/docs/home/getting-started/installation/index.mdx
// → /ui/docs/home/getting-started/installation

function toUrlPath(absPath: string): string {
  const relative = path.relative(
    path.resolve(__dirname, '../../apps/website/app'),
    absPath
  );
  // Remove index.mdx suffix and normalise to forward slashes
  return '/' + relative.replace(/[/\\]index\.mdx$/, '').replace(/\\/g, '/');
}

function toSegments(urlPath: string): string[] {
  // /ui/docs/home/getting-started/installation → ['home', 'getting-started', 'installation']
  return urlPath.replace(/^\/ui\/docs\//, '').split('/');
}

// ─── Slug ─────────────────────────────────────────────────────────────────────

function toId(urlPath: string): string {
  return urlPath.replace(/\//g, '-').replace(/^-/, '');
}

// ─── Main ─────────────────────────────────────────────────────────────────────

function run() {
  if (!fs.existsSync(DOCS_ROOT)) {
    console.error(`Docs root not found: ${DOCS_ROOT}`);
    console.error('Run "yarn sync:website" first to generate docs pages.');
    process.exit(1);
  }

  const files = findMdxFiles(DOCS_ROOT);
  const documents: SearchDocument[] = [];

  for (const file of files) {
    try {
      const raw = fs.readFileSync(file, 'utf8');
      const { title, description, body } = parseFrontmatter(raw);
      const urlPath = toUrlPath(file);
      const segments = toSegments(urlPath);
      const { section, subsection } = getLabels(segments);
      const content = extractText(body);

      // Derive title from first H1 in body if frontmatter has none
      let resolvedTitle = title;
      if (!resolvedTitle) {
        const h1 = body.match(/^#\s+(.+)$/m);
        resolvedTitle = h1?.[1]?.trim() ?? segments[segments.length - 1]?.replace(/-/g, ' ') ?? '';
      }

      documents.push({
        id: toId(urlPath),
        title: resolvedTitle,
        description,
        // Cap content to avoid code blobs dominating search weight
        content: content.slice(0, 3000),
        path: urlPath,
        section,
        subsection,
      });
    } catch (err) {
      console.warn(`Skipped ${file}: ${(err as Error).message}`);
    }
  }

  fs.writeFileSync(OUTPUT, JSON.stringify(documents, null, 2), 'utf8');
  console.log(`Search index written → ${OUTPUT}`);
  console.log(`  Indexed ${documents.length} documents`);
}

run();
