import { slugify } from '../utils/slugify';

export function generatePageTs(slug: string): string {
  const componentName = slug
    .split('-')
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join('');

  return `'use client';
import { Box } from '@/components/ui/box';
import BlogContent from './blog.mdx';
import BlogsPageLayout from '@/components/page-components/blogs-page/BlogsPageLayout';

const ${componentName}Page = () => {
  return (
    <BlogsPageLayout>
      <Box className="xl:w-[70%]">
        <BlogContent />
      </Box>
    </BlogsPageLayout>
  );
};

export default ${componentName}Page;
`;
}