import Image from 'next/image';
import { parseISO, format } from 'date-fns';
import Link from 'next/link';
import { Box, HStack, Text } from '@/components/ui';

export const BlogHeader = ({ blog }: any) => {
  const date = parseISO(blog?.published_at?.start || blog.created_time);

  const dateNewFormat = format(date, 'LLLL d, yyyy');
  return (
    <Box>
      <HStack>
        <Text className="text-typography-700 text-xs font-semibold">
          {dateNewFormat}
        </Text>
        {blog.reading_time && (
          <Text className="text-typography-500 text-xs font-semibold">
            {' '}
            • {blog.reading_time + ' minute read'}
          </Text>
        )}
      </HStack>

      <Link
        href={'/blogs/' + blog.slug}
        style={{
          textDecoration: 'none',
        }}
      >
        <Text className="text-typography-900 text-3xl font-medium">
          {blog.title}
        </Text>
      </Link>

      {blog.author &&
        blog.author.map((author: any) => {
          return (
            <HStack key={author.id} className="my-2 flex items-center gap-3">
              {author?.avatar_url && (
                <Box className="rounded-full h-7 w-7 overflow-hidden">
                  <Image src={author.avatar_url} alt={author.email} fill />
                </Box>
              )}
              <Box>
                <Text
                  fontSize="$sm"
                  lineHeight="$sm"
                  color="$red500"
                  fontWeight="$bold"
                  sx={{
                    _dark: {
                      color: '$gray300',
                    },
                  }}
                  className="text-typography-800 text-sm font-bold"
                >
                  {author?.name}
                </Text>

                <Text className="text-typography-500 text-sm font-medium">
                  {author?.occupation}
                </Text>
              </Box>
            </HStack>
          );
        })}
    </Box>
  );
};
