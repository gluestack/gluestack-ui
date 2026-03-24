'use client';
import React from 'react';
import { Box } from '@/components/ui/box';
import { Heading } from '@/components/ui/heading';
import { BlogListItem } from '@/components/page-components/blogs-page/BlogListItem';
import BlogsPageLayout from '@/components/page-components/blogs-page/BlogsPageLayout';
import { getSortedBlogs } from '@/lib/blog-data';

const Blogs = () => {
  const sortedBlogs = getSortedBlogs();
  return (
    <BlogsPageLayout>
      <Heading className="text-4xl lg:text-5xl my-6 pt-4 text-foreground">
        Latest posts
      </Heading>
      <Box>
        {sortedBlogs &&
          sortedBlogs.map((blog: any) => {
            return <BlogListItem key={blog.slug} blog={blog} />;
          })}
      </Box>
    </BlogsPageLayout>
  );
};

export default Blogs;
