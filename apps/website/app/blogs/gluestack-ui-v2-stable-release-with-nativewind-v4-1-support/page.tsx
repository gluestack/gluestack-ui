'use client';
import { Box } from '@/components/ui';
import MasteringGluestackUI from './blog.mdx';
import BlogsPageLayout from '@/components/page-components/blogs-page/BlogsPageLayout';

const MasteringGluestackUIV2AnimationsWithNativeWind = () => {
  return (
    <BlogsPageLayout>
      <Box className="xl:w-[70%]">
        <MasteringGluestackUI />
      </Box>
    </BlogsPageLayout>
  );
};

export default MasteringGluestackUIV2AnimationsWithNativeWind;
