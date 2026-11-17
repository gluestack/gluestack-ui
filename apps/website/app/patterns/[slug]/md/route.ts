import { getPattern, patternMarkdown, patterns } from '@/utils/patterns';

// Served at /patterns/<slug>.md through a rewrite in next.config.mjs.
export const dynamic = 'force-static';
export function generateStaticParams() {
  return patterns.map((p) => ({ slug: p.slug }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const p = getPattern((await params).slug);
  if (!p) return new Response('Not found', { status: 404 });
  return new Response(patternMarkdown(p), { headers: { 'content-type': 'text/markdown; charset=utf-8' } });
}
