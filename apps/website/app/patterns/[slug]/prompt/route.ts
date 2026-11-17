import { buildPrompt, getPattern, patterns } from '@/utils/patterns';

export const dynamic = 'force-static';
export function generateStaticParams() {
  return patterns.map((p) => ({ slug: p.slug }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const p = getPattern((await params).slug);
  if (!p) return new Response('Not found', { status: 404 });
  return new Response(buildPrompt(p), { headers: { 'content-type': 'text/plain; charset=utf-8' } });
}
