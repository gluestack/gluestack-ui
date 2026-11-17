import { patterns } from '@/utils/patterns';
import { componentItem, patternItem, registryIndex, ui } from '@/utils/patterns/registry';

// /r/registry.json, /r/<pattern>.json, /r/ui/<component>.json
export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return [
    { path: ['registry.json'] },
    ...patterns.map((p) => ({ path: [`${p.slug}.json`] })),
    ...Object.keys(ui).map((name) => ({ path: ['ui', `${name}.json`] })),
  ];
}

const json = (body: unknown) =>
  new Response(JSON.stringify(body, null, 2), {
    headers: { 'content-type': 'application/json; charset=utf-8', 'access-control-allow-origin': '*' },
  });

export async function GET(_req: Request, { params }: { params: Promise<{ path: string[] }> }) {
  const { path } = await params;
  const strip = (s: string) => s.replace(/\.json$/, '');
  if (path.length === 1 && path[0] === 'registry.json') return json(registryIndex());
  if (path.length === 1) {
    const item = patternItem(strip(path[0]));
    if (item) return json(item);
  }
  if (path.length === 2 && path[0] === 'ui') {
    const item = componentItem(strip(path[1]));
    if (item) return json(item);
  }
  return new Response(JSON.stringify({ error: 'not_found' }), { status: 404, headers: { 'content-type': 'application/json' } });
}
