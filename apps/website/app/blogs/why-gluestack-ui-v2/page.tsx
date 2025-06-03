'use client';
import { Box } from '@/components/ui';
import WhyGluestackUI from './blog.mdx';
import BlogsPageLayout from '@/components/page-components/blogs-page/BlogsPageLayout';

const WhyGluestackUIV2 = () => {
  return (
    <BlogsPageLayout>
      <Box className="xl:w-[70%]">
        <WhyGluestackUI />
      </Box>
    </BlogsPageLayout>
  );
};

export default WhyGluestackUIV2;
