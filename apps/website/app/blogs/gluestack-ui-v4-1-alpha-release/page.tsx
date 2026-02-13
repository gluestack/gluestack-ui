'use client';
import { Box } from '@/components/ui/box';
import GluestackUIV41AlphaRelease from './blog.mdx';
import BlogsPageLayout from '@/components/page-components/blogs-page/BlogsPageLayout';

const GluestackUIV41AlphaReleasePage = () => {
  return (
    <BlogsPageLayout>
      <Box className="xl:w-[70%]">
        <GluestackUIV41AlphaRelease />
      </Box>
    </BlogsPageLayout>
  );
};

export default GluestackUIV41AlphaReleasePage;
