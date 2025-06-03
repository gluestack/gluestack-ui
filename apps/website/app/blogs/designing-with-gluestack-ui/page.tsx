'use client';
import { Box } from '@/components/ui';
import DesigningWithGluestackUI from './blog.mdx';
import BlogsPageLayout from '@/components/page-components/blogs-page/BlogsPageLayout';

const DesigningWithGluestackUIV2 = () => {
  return (
    <BlogsPageLayout>
      <Box className="xl:w-[70%]">
        <DesigningWithGluestackUI />
      </Box>
    </BlogsPageLayout>
  );
};

export default DesigningWithGluestackUIV2;
