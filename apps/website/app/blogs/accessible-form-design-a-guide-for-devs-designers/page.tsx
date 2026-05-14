'use client';
import { Box } from '@/components/ui/box';
import BlogContent from './blog.mdx';
import BlogsPageLayout from '@/components/page-components/blogs-page/BlogsPageLayout';

const AccessibleFormDesignAGuideForDevsDesignersPage = () => {
  return (
    <BlogsPageLayout>
      <Box className="xl:w-[70%]">
        <BlogContent />
      </Box>
    </BlogsPageLayout>
  );
};

export default AccessibleFormDesignAGuideForDevsDesignersPage;
