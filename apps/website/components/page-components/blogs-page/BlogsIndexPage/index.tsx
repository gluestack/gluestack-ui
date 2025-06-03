import React from "react";
import { Box, Heading, Link as DSLink, Divider } from "@/components/ui";
import { BlogListItem } from "../BlogListItem";

const Blogs = ({ blogs }: { blogs: any }) => {
  // const totalCards = cardDetails.length;

  return (
    <Box>
      <Heading className="text-typography-950 text-2xl font-bold">
        Latest posts
      </Heading>
      <div className="flex flex-col w-full">
        {blogs &&
          blogs.map((blog: any) => {
            return <BlogListItem key={blog.id} blog={blog} />;
          })}
      </div>
    </Box>
  );
};

export default Blogs;
