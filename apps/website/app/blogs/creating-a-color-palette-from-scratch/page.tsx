'use client';
import { Box } from '@/components/ui';
import CreatingaColorPalettefromScratchBlog from './blog.mdx';
import BlogsPageLayout from '@/components/page-components/blogs-page/BlogsPageLayout';

const CreatingaColorPalettefromScratch = () => {
  return (
    <BlogsPageLayout>
      <Box className="xl:w-[70%]">
        <CreatingaColorPalettefromScratchBlog />
      </Box>
    </BlogsPageLayout>
  );
};

export default CreatingaColorPalettefromScratch;
