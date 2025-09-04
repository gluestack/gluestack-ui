'use client';
import { Box } from '@/components/ui/box';
import PublicIncidentReport from './blog.mdx';
import BlogsPageLayout from '@/components/page-components/blogs-page/BlogsPageLayout';

const TheYearThatWas2024 = () => {
  return (
    <BlogsPageLayout>
      <Box className="xl:w-[70%]">
        <PublicIncidentReport />
      </Box>
    </BlogsPageLayout>
  );
};

export default TheYearThatWas2024;
