'use client';
import { Box } from '@/components/ui';
import GluestackUIV2DesignKit from './blog.mdx';
import BlogsPageLayout from '@/components/page-components/blogs-page/BlogsPageLayout';

const GluestackUIDesignKit = () => {
  return (
    <BlogsPageLayout>
      <Box className="xl:w-[70%]">
        <GluestackUIV2DesignKit />
      </Box>
    </BlogsPageLayout>
  );
};

export default GluestackUIDesignKit;
