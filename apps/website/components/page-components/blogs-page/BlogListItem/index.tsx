import Link from 'next/link';
import Image from 'next/image';
import { BlogHeader } from '../BlogHeader';
import { Box } from '@/components/ui';

export const BlogListItem = ({ key, blog }: { key: number; blog: any }) => {
  return (
    <Box
      key={key}
      className="py-6 md:py-10 border-b border-outline-100 md:flex md:flex-row md:gap-10 last:border-b-0 "
    >
      {blog.cover && (
        <Box className="w-full aspect-[357/200.99] max-w-[357px] rounded-sm overflow-hidden">
          <Link href={'/blogs/' + blog.slug}>
            <Image src={blog.cover} alt={blog.title} fill />
          </Link>
        </Box>
      )}

      <BlogHeader blog={blog} />
    </Box>
  );
};
