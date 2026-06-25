'use client';
import { Box } from '@/components/ui/box';
import GluestackUIV5StableRelease from './blog.mdx';
import BlogsPageLayout from '@/components/page-components/blogs-page/BlogsPageLayout';

const GluestackUIV5StableReleasePage = () => {
  return (
    <BlogsPageLayout>
      <Box className="xl:w-[70%]">
        <GluestackUIV5StableRelease />
      </Box>
    </BlogsPageLayout>
  );
};

export default GluestackUIV5StableReleasePage;
