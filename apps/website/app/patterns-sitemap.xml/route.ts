import { AGENTS } from '@/components/patterns/agents-data';
import { patterns, SITE_URL, usedCategories } from '@/utils/patterns';

// Sitemap for the patterns platform. The docs keep their own public/sitemap.xml.
export const dynamic = 'force-static';

export function GET() {
  const now = new Date().toISOString();
  const urls: [string, string][] = [
    ['/', '1.00'],
    ['/patterns', '0.95'],
    ['/ui', '0.90'],
    ['/agents', '0.85'],
    ...usedCategories().map((c): [string, string] => [`/patterns/category/${c.id}`, '0.80']),
    ...patterns.map((p): [string, string] => [`/patterns/${p.slug}`, '0.75']),
    ...AGENTS.map((a): [string, string] => [`/for/${a.slug}`, '0.70']),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(([u, p]) => `  <url><loc>${SITE_URL}${u}</loc><lastmod>${now}</lastmod><priority>${p}</priority></url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'content-type': 'application/xml; charset=utf-8' } });
}
