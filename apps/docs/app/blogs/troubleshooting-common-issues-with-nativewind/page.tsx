'use client';
import { Box } from '@/components/ui';
import TroubleshootingCommonIssuesWithNativeWind from './blog.mdx';
import BlogsPageLayout from '@/components/custom/blogs-page/BlogsPageLayout';

const TroubleshootingCommonIssuesWithNativeWindPage = () => {
  return (
    <BlogsPageLayout>
      <Box className="xl:w-[70%]">
        <TroubleshootingCommonIssuesWithNativeWind />
      </Box>
    </BlogsPageLayout>
  );
};

export default TroubleshootingCommonIssuesWithNativeWindPage;
