import { generateRSSFeed } from '@/lib/rss';

export const dynamic = 'force-static';

export async function GET() {
  const xml = generateRSSFeed();

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
