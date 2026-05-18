import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

function extractPaths(obj: any): string[] {
  const paths: string[] = [];
  if (obj.path) paths.push(obj.path);
  if (Array.isArray(obj.items))
    obj.items.forEach((i: any) => paths.push(...extractPaths(i)));
  if (Array.isArray(obj.subsections))
    obj.subsections.forEach((s: any) => paths.push(...extractPaths(s)));
  if (Array.isArray(obj.sections))
    obj.sections.forEach((s: any) => paths.push(...extractPaths(s)));
  return paths;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gluestack.io';

  const sidebarPath = path.join(process.cwd(), 'sidebar.json');
  const sidebarRaw = fs.readFileSync(sidebarPath, 'utf-8');
  const sidebarData = JSON.parse(sidebarRaw);

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/support`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/community`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/experts`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookie-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  const docPaths = extractPaths(sidebarData);
  const docPages: MetadataRoute.Sitemap = docPaths.map((p) => ({
    url: `${baseUrl}${p}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const blogSlugs = [
    'accessible-form-design-a-guide-for-devs-designers',
    'public-incident-report',
    'gluestack-v3-release',
    'build-a-simple-ui-with-gluestack-ui-and-expo',
    'creating-a-color-palette-from-scratch',
    'the-year-that-was-2024',
    'troubleshooting-common-issues-with-nativewind',
    'gluestack-ui-v2-stable-release-with-nativewind-v4-1-support',
    'mastering-gluestack-ui-v2-animations-with-nativewind',
    'designing-with-gluestack-ui',
    'gluestack-ui-v2-design-kit',
    'why-gluestack-ui-v2',
    'gluestack-ui-v2-is-here',
  ];
  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blogs/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...docPages, ...blogPages];
}
