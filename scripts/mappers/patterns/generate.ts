/**
 * Patterns generator.
 *
 * Source of truth: src/patterns/<slug>/{index.tsx, meta.json} and src/patterns/categories.json,
 * plus the components in src/components/ui.
 *
 * Destinations (all generated, all gitignored):
 *   apps/patterns-preview/patterns.generated.ts   slug -> component map for the Expo web preview app
 *   apps/website/data/generated/patterns.json     catalog the website renders (code, meta, components used)
 *   apps/website/data/generated/ui-registry.json  component sources for the /r/<name>.json install registry
 *
 * Plain fs only, so it runs from the dev watcher (yarn dev:patterns), the root sync and the
 * website build on Vercel (`npx tsx ../../scripts/mappers/patterns/generate.ts`).
 */
import fs from 'fs';
import path from 'path';

const ROOT = path.resolve(__dirname, '../../..');
const SRC_PATTERNS = path.join(ROOT, 'src/patterns');
const SRC_COMPONENTS = path.join(ROOT, 'src/components/ui');
const WEBSITE = path.join(ROOT, 'apps/website');
const WEBSITE_DOCS = path.join(WEBSITE, 'app/ui/docs/components');
const OUT_WEBSITE = path.join(WEBSITE, 'data/generated');
const OUT_PREVIEW = path.join(ROOT, 'apps/patterns-preview/patterns.generated.ts');

// Packages every gluestack-ui v5 project already has after `npx gluestack-ui init`.
const BASE_PACKAGES = new Set([
  'react',
  'react-native',
  'react-dom',
  'react-native-web',
  'nativewind',
  'tailwindcss',
  'react-native-css',
  'tailwind-variants',
  '@gluestack-ui/core',
  '@gluestack-ui/utils',
  'expo',
  'expo-router',
  'react-native-safe-area-context',
  'react-native-reanimated',
  'react-native-worklets',
  'react-native-gesture-handler',
  'react-native-svg',
]);

export type Category = { id: string; title: string; description: string };

export type PatternMeta = {
  title: string;
  description: string;
  category: string;
  tags?: string[];
  prompt?: string;
  featured?: boolean;
  added?: string;
};

export type Pattern = PatternMeta & {
  slug: string;
  code: string;
  lines: number;
  components: { name: string; title: string; docs: string | null }[];
  dependencies: string[];
};

const read = (p: string) => fs.readFileSync(p, 'utf8');
const isDir = (p: string) => fs.existsSync(p) && fs.statSync(p).isDirectory();

const titleCase = (s: string) =>
  s
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

function importsOf(code: string): string[] {
  const out = new Set<string>();
  const re = /(?:import|export)\s[^'"]*?from\s+['"]([^'"]+)['"]|import\s+['"]([^'"]+)['"]/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(code))) out.add(m[1] || m[2]);
  return [...out];
}

const packageName = (spec: string) =>
  spec.startsWith('@') ? spec.split('/').slice(0, 2).join('/') : spec.split('/')[0];

const isBare = (spec: string) => !spec.startsWith('.') && !spec.startsWith('@/') && !spec.startsWith('/');

function loadCategories(): Category[] {
  const file = path.join(SRC_PATTERNS, 'categories.json');
  return fs.existsSync(file) ? JSON.parse(read(file)) : [];
}

export function loadPatterns(): Pattern[] {
  if (!isDir(SRC_PATTERNS)) return [];
  const categories = loadCategories();
  const known = new Set(categories.map((c) => c.id));
  const patterns: Pattern[] = [];
  for (const slug of fs.readdirSync(SRC_PATTERNS).sort()) {
    const dir = path.join(SRC_PATTERNS, slug);
    const codeFile = path.join(dir, 'index.tsx');
    const metaFile = path.join(dir, 'meta.json');
    if (!isDir(dir) || !fs.existsSync(codeFile) || !fs.existsSync(metaFile)) continue;
    let meta: PatternMeta;
    try {
      meta = JSON.parse(read(metaFile));
    } catch (e) {
      console.error(`❌ patterns: ${slug}/meta.json is not valid JSON`);
      continue;
    }
    if (known.size && !known.has(meta.category)) {
      console.warn(`⚠️  patterns: ${slug} has unknown category "${meta.category}"`);
    }
    const code = read(codeFile);
    const specs = importsOf(code);
    const components = [
      ...new Set(
        specs
          .filter((s) => s.startsWith('@/components/ui/'))
          .map((s) => s.replace('@/components/ui/', '').split('/')[0])
      ),
    ]
      .sort()
      .map((name) => ({
        name,
        title: titleCase(name),
        docs: isDir(path.join(WEBSITE_DOCS, name)) ? `/ui/docs/components/${name}` : null,
      }));
    const dependencies = [
      ...new Set(specs.filter(isBare).map(packageName).filter((p) => !BASE_PACKAGES.has(p))),
    ].sort();
    patterns.push({
      slug,
      ...meta,
      tags: meta.tags ?? [],
      code,
      lines: code.split('\n').length,
      components,
      dependencies,
    });
  }
  return patterns;
}

type RegistryFile = { path: string; content: string; type: string; target: string };
type UiItem = {
  name: string;
  title: string;
  dependencies: string[];
  registryDependencies: string[];
  files: RegistryFile[];
};

function walk(dir: string, rel = ''): string[] {
  const out: string[] = [];
  for (const entry of fs.readdirSync(dir)) {
    if (entry === 'docs' || entry === 'examples' || entry === 'dependencies.json') continue;
    const abs = path.join(dir, entry);
    const r = rel ? `${rel}/${entry}` : entry;
    if (isDir(abs)) out.push(...walk(abs, r));
    else out.push(r);
  }
  return out;
}

export function loadUiRegistry(): Record<string, UiItem> {
  const out: Record<string, UiItem> = {};
  if (!isDir(SRC_COMPONENTS)) return out;
  for (const name of fs.readdirSync(SRC_COMPONENTS).sort()) {
    const dir = path.join(SRC_COMPONENTS, name);
    if (!isDir(dir)) continue;
    // NativeWind flavour only; uniwind variants are installed by the CLI's uniwind path.
    const files = walk(dir).filter((f) => !f.includes('.uniwind.') && /\.(tsx?|jsx?|css)$/.test(f));
    if (!files.length) continue;
    const deps = new Set<string>();
    const registryDependencies = new Set<string>();
    const regFiles: RegistryFile[] = files.map((f) => {
      const content = read(path.join(dir, f));
      for (const spec of importsOf(content)) {
        if (spec.startsWith('@/components/ui/')) {
          const other = spec.replace('@/components/ui/', '').split('/')[0];
          if (other !== name) registryDependencies.add(other);
        } else if (isBare(spec)) {
          const pkg = packageName(spec);
          if (!['react', 'react-native', 'react-dom'].includes(pkg)) deps.add(pkg);
        }
      }
      return {
        path: `components/ui/${name}/${f}`,
        content,
        type: 'registry:ui',
        target: `components/ui/${name}/${f}`,
      };
    });
    const depFile = path.join(dir, 'dependencies.json');
    if (fs.existsSync(depFile)) {
      try {
        const j = JSON.parse(read(depFile));
        for (const [pkg, version] of Object.entries<string>(j.dependencies || {})) {
          deps.delete(pkg);
          deps.add(`${pkg}@${version}`);
        }
        for (const c of j.components || []) registryDependencies.add(c);
      } catch {
        /* ignore malformed dependencies.json */
      }
    }
    out[name] = {
      name,
      title: titleCase(name),
      dependencies: [...deps].sort(),
      registryDependencies: [...registryDependencies].sort(),
      files: regFiles,
    };
  }
  return out;
}

function writeIfChanged(file: string, content: string) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  if (fs.existsSync(file) && read(file) === content) return false;
  fs.writeFileSync(file, content);
  return true;
}

export function generate() {
  const categories = loadCategories();
  const patterns = loadPatterns();

  const ident = (slug: string) => 'P_' + slug.replace(/[^a-zA-Z0-9]/g, '_');
  const preview =
    `// Generated by scripts/mappers/patterns/generate.ts from src/patterns. Do not edit.\n` +
    `import type { ComponentType } from 'react';\n` +
    patterns.map((p) => `import ${ident(p.slug)} from '@/patterns/${p.slug}';`).join('\n') +
    `\n\nexport const patterns: Record<string, ComponentType> = {\n` +
    patterns.map((p) => `  '${p.slug}': ${ident(p.slug)},`).join('\n') +
    `\n};\n`;

  const catalog = JSON.stringify({ categories, patterns }, null, 2) + '\n';
  const registry = JSON.stringify(loadUiRegistry()) + '\n';

  const changed = [
    writeIfChanged(OUT_PREVIEW, preview) && 'preview map',
    writeIfChanged(path.join(OUT_WEBSITE, 'patterns.json'), catalog) && 'catalog',
    writeIfChanged(path.join(OUT_WEBSITE, 'ui-registry.json'), registry) && 'ui registry',
  ].filter(Boolean);
  console.log(
    `🧩 patterns: ${patterns.length} patterns in ${categories.length} categories` +
      (changed.length ? ` (updated ${changed.join(', ')})` : ' (unchanged)')
  );
}

if (require.main === module) generate();
