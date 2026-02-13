'use client';
import { Box } from '@/components/ui/box';
import GluestackUIV4AlphaRelease from './blog.mdx';
import BlogsPageLayout from '@/components/page-components/blogs-page/BlogsPageLayout';

const GluestackUIV4AlphaReleasePage = () => {
  return (
    <BlogsPageLayout>
      <Box className="xl:w-[70%]">
        <GluestackUIV4AlphaRelease />
      </Box>
    </BlogsPageLayout>
  );
};

export default GluestackUIV4AlphaReleasePage;
