// shadcn-compatible registry items (https://ui.shadcn.com/schema/registry-item.json).
import uiRegistry from '@/data/generated/ui-registry.json';
import { categories, getPattern, patterns, SITE_URL, targetPath } from './index';

type UiFile = { path: string; content: string; type: string; target: string };
type UiItem = { name: string; title: string; dependencies: string[]; registryDependencies: string[]; files: UiFile[] };

export const ui = uiRegistry as unknown as Record<string, UiItem>;

const itemUrl = (name: string) => `${SITE_URL}/r/ui/${name}.json`;

export function componentItem(name: string) {
  const c = ui[name];
  if (!c) return null;
  return {
    $schema: 'https://ui.shadcn.com/schema/registry-item.json',
    name: c.name,
    type: 'registry:ui',
    title: c.title,
    description: `gluestack-ui ${c.title} component (NativeWind). Docs: ${SITE_URL}/ui/docs/components/${c.name}`,
    dependencies: c.dependencies,
    registryDependencies: c.registryDependencies.map(itemUrl),
    files: c.files,
    docs: `Requires a gluestack-ui project: run \`npx gluestack-ui@latest init\` first.`,
  };
}

export function patternItem(slug: string) {
  const p = getPattern(slug);
  if (!p) return null;
  return {
    $schema: 'https://ui.shadcn.com/schema/registry-item.json',
    name: p.slug,
    type: 'registry:block',
    title: p.title,
    description: p.description,
    categories: [p.category, ...p.tags],
    dependencies: p.dependencies,
    registryDependencies: p.components.filter((c) => ui[c.name]).map((c) => itemUrl(c.name)),
    files: [{ path: targetPath(p.slug), content: p.code, type: 'registry:component', target: targetPath(p.slug) }],
    docs: `Requires a gluestack-ui project: run \`npx gluestack-ui@latest init\` first. Preview: ${SITE_URL}/patterns/${p.slug}`,
  };
}

export function registryIndex() {
  return {
    $schema: 'https://ui.shadcn.com/schema/registry.json',
    name: 'gluestack',
    homepage: SITE_URL,
    items: [
      ...patterns.map((p) => ({
        name: p.slug,
        type: 'registry:block',
        title: p.title,
        description: p.description,
        categories: [p.category],
        url: `${SITE_URL}/r/${p.slug}.json`,
      })),
      ...Object.values(ui).map((c) => ({
        name: `ui/${c.name}`,
        type: 'registry:ui',
        title: c.title,
        description: `gluestack-ui ${c.title} component`,
        url: itemUrl(c.name),
      })),
    ],
    categories,
  };
}
