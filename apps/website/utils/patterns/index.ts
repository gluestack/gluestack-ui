// Pattern catalog for the website. The data is generated from src/patterns by
// scripts/mappers/patterns/generate.ts (yarn dev:patterns, or the website build).
import catalog from '@/data/generated/patterns.json';

export const SITE_URL = 'https://gluestack.io';

export type PatternComponent = { name: string; title: string; docs: string | null };

export type Pattern = {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  prompt?: string;
  featured?: boolean;
  added?: string;
  code: string;
  lines: number;
  components: PatternComponent[];
  dependencies: string[];
};

export type Category = { id: string; title: string; description: string };

const data = catalog as unknown as { categories: Category[]; patterns: Pattern[] };

export const categories: Category[] = data.categories;
export const patterns: Pattern[] = data.patterns;

export const categoryById = (id: string) => categories.find((c) => c.id === id);
export const getPattern = (slug: string) => patterns.find((p) => p.slug === slug);
export const patternsIn = (category: string) => patterns.filter((p) => p.category === category);
export const featuredPatterns = () => {
  const f = patterns.filter((p) => p.featured);
  return f.length >= 6 ? f : [...f, ...patterns.filter((p) => !p.featured)];
};
export const usedCategories = () => categories.filter((c) => patterns.some((p) => p.category === c.id));

export const componentCount = () =>
  new Set(patterns.flatMap((p) => p.components.map((c) => c.name))).size;

/** Where the screen goes in the user's app (also the registry target). */
export const targetPath = (slug: string) => `components/patterns/${slug}.tsx`;

export const previewUrl = (slug: string, theme: 'light' | 'dark' = 'dark') =>
  `/preview/${slug}?theme=${theme}`;

export const screenshotUrl = (slug: string, theme: 'light' | 'dark' = 'dark') =>
  `/patterns-shots/${slug}-${theme}.webp`;

export const addCommand = (p: Pattern) =>
  p.components.length ? `npx gluestack-ui@latest add ${p.components.map((c) => c.name).join(' ')}` : '';

export const installCommand = (p: Pattern) =>
  p.dependencies.length ? `npx expo install ${p.dependencies.join(' ')}` : '';

export const registryUrl = (slug: string) => `${SITE_URL}/r/${slug}.json`;

export const shadcnCommand = (slug: string) => `npx shadcn@latest add ${registryUrl(slug)}`;

/**
 * The copy-paste prompt: everything a coding agent needs to add the screen to an
 * existing Expo / React Native app, with no further lookups.
 */
export function buildPrompt(p: Pattern): string {
  const parts: string[] = [];
  parts.push(`Add the "${p.title}" screen to my Expo / React Native app using gluestack-ui.`);
  parts.push(`What it is: ${p.description}`);
  parts.push(
    `## 1. Set up gluestack-ui\nSkip this if the project already has \`components/ui/gluestack-ui-provider\`.\n\n\`\`\`bash\nnpx gluestack-ui@latest init\n\`\`\``
  );
  const add = addCommand(p);
  if (add) {
    parts.push(
      `## 2. Add the components this screen uses\nOnly the ones missing from \`components/ui\`.\n\n\`\`\`bash\n${add}\n\`\`\``
    );
  }
  const install = installCommand(p);
  if (install) parts.push(`## 3. Install packages\n\n\`\`\`bash\n${install}\n\`\`\``);
  parts.push(
    `## ${install ? 4 : 3}. Create the screen\nSave this as \`${targetPath(p.slug)}\` and render it from a route (with Expo Router: \`app/${p.slug}.tsx\` exporting it as default).\n\n\`\`\`tsx\n${p.code.trimEnd()}\n\`\`\``
  );
  const adapt = [
    p.prompt,
    'Replace the sample data and images with real data from my app.',
    'Keep the gluestack-ui components and the semantic color tokens (bg-background, text-foreground, bg-card, border-border, text-muted-foreground) so light and dark mode keep working.',
    "Match my project's conventions: path aliases, navigation, state management and naming.",
  ].filter(Boolean);
  parts.push(`## ${install ? 5 : 4}. Make it fit my app\n${adapt.map((a) => `- ${a}`).join('\n')}`);
  const docs = p.components.filter((c) => c.docs);
  if (docs.length) {
    parts.push(
      `Component docs: ${docs.map((c) => `${c.title} ${SITE_URL}${c.docs}`).join(', ')}.\nLive preview: ${SITE_URL}/patterns/${p.slug}`
    );
  }
  return parts.join('\n\n') + '\n';
}

/** Markdown twin of a pattern page, for agents (served at /patterns/<slug>.md). */
export function patternMarkdown(p: Pattern): string {
  const cat = categoryById(p.category);
  return [
    `# ${p.title}`,
    `> ${p.description}`,
    `- Category: ${cat?.title ?? p.category}`,
    p.tags.length ? `- Tags: ${p.tags.join(', ')}` : '',
    `- Components: ${p.components.map((c) => (c.docs ? `[${c.title}](${SITE_URL}${c.docs})` : c.title)).join(', ')}`,
    p.dependencies.length ? `- Packages: ${p.dependencies.join(', ')}` : '',
    `- Install with shadcn: \`${shadcnCommand(p.slug)}\``,
    '',
    '## Prompt',
    '',
    buildPrompt(p),
  ]
    .filter((l) => l !== '')
    .join('\n');
}
