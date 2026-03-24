import { Feed } from 'feed';
import { getSortedBlogs } from './blog-data';

const SITE_URL = 'https://v5.gluestack.io';

export function generateRSSFeed(): string {
  const feed = new Feed({
    title: 'gluestack-ui Blog',
    description:
      'Latest updates, tutorials, and insights from the gluestack-ui team.',
    id: SITE_URL,
    link: SITE_URL,
    language: 'en',
    image: `${SITE_URL}/images/og-image.png`,
    favicon: `${SITE_URL}/favicon.ico`,
    copyright: `© ${new Date().getFullYear()} gluestack-ui. All rights reserved.`,
    feedLinks: {
      rss2: `${SITE_URL}/rss.xml`,
    },
    author: {
      name: 'gluestack-ui',
      link: SITE_URL,
    },
  });

  const sortedBlogs = getSortedBlogs();

  for (const blog of sortedBlogs) {
    const url = `${SITE_URL}/blogs/${blog.slug}`;
    const authorName = blog.author?.[0]?.name ?? 'gluestack-ui';

    feed.addItem({
      title: blog.title,
      id: url,
      link: url,
      date: new Date(blog.published_at.start),
      author: [
        {
          name: authorName,
        },
      ],
      description: `Read more on gluestack-ui blog`,
    });
  }

  return feed.rss2();
}
