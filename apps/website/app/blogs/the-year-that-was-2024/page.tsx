'use client';
import { Box } from '@/components/ui';
import TheYearThatWas2024Content from './blog.mdx';
import BlogsPageLayout from '@/components/page-components/blogs-page/BlogsPageLayout';

const TheYearThatWas2024 = () => {
  return (
    <BlogsPageLayout>
      <Box className="xl:w-[70%]">
        <TheYearThatWas2024Content />
      </Box>
    </BlogsPageLayout>
  );
};

export default TheYearThatWas2024;
