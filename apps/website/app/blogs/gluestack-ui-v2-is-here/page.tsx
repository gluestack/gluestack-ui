'use client';
import { Box } from '@/components/ui/box';
import GluestackV2IsHere from './blog.mdx';
import BlogsPageLayout from '@/components/page-components/blogs-page/BlogsPageLayout';

const GluestackUIisHere = () => {
  return (
    <BlogsPageLayout>
      <Box className="xl:w-[70%]">
        <GluestackV2IsHere />
      </Box>
    </BlogsPageLayout>
  );
};

export default GluestackUIisHere;
