'use client';
import { Box } from '@/components/ui/box';
import BuildaSimpleUIwithGluestackuiandExpoBlog from './blog.mdx';
import BlogsPageLayout from '@/components/page-components/blogs-page/BlogsPageLayout';

const BuildaSimpleUIwithGluestackuiandExpo = () => {
  return (
    <BlogsPageLayout>
      <Box className="xl:w-[70%]">
        <BuildaSimpleUIwithGluestackuiandExpoBlog />
      </Box>
    </BlogsPageLayout>
  );
};

export default BuildaSimpleUIwithGluestackuiandExpo;
