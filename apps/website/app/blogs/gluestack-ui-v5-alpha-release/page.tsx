'use client';
import { Box } from '@/components/ui/box';
import GluestackUIV5AlphaRelease from './blog.mdx';
import BlogsPageLayout from '@/components/page-components/blogs-page/BlogsPageLayout';

const GluestackUIV5AlphaReleasePage = () => {
  return (
    <BlogsPageLayout>
      <Box className="xl:w-[70%]">
        <GluestackUIV5AlphaRelease />
      </Box>
    </BlogsPageLayout>
  );
};

export default GluestackUIV5AlphaReleasePage;
