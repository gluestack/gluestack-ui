import Image from 'next/image';
import { parseISO, format } from 'date-fns';
import NextLink from 'next/link';
import { Box } from '@/components/ui/box';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import { Text } from '@/components/ui/text';
import { Heading } from '@/components/ui/heading';

export interface ChangelogEntry {
  title: string;
  slug: string;
  date: string;
  authors: Array<{
    id: number;
    name: string;
    avatar_url: string;
    occupation?: string;
  }>;
  excerpt?: string;
  image?: string;
  content?: string;
}

export const ChangelogItem = ({ entry }: { entry: ChangelogEntry }) => {
  const date = parseISO(entry.date);
  const formattedDate = format(date, 'MMM d, yyyy');

  return (
    <Box className="py-6 md:py-8 border-b border-border last:border-b-0">
      <VStack className="gap-4">
        {/* Title */}
        <NextLink
          href={`/ui/docs/changelog/${entry.slug}`}
          className="no-underline hover:opacity-80 transition-opacity"
        >
          <Heading className="text-2xl md:text-3xl font-semibold text-foreground hover:text-primary">
            {entry.title}
          </Heading>
        </NextLink>

        {/* Date and Authors */}
        <HStack className="items-center gap-2 flex-wrap">
          <Text className="text-sm text-foreground/70">
            {formattedDate}
          </Text>
          <Text className="text-sm text-foreground/50">by</Text>
          {entry.authors.map((author, index) => (
            <HStack key={author.id} className="items-center gap-2">
              {author.avatar_url && (
                <Box className="rounded-full h-6 w-6 overflow-hidden shrink-0 relative">
                  <Image
                    src={author.avatar_url}
                    alt={author.name}
                    fill
                    className="object-cover"
                  />
                </Box>
              )}
              <Text className="text-sm text-foreground/70 font-medium">
                {author.name}
              </Text>
              {index < entry.authors.length - 1 && (
                <Text className="text-sm text-foreground/50">,</Text>
              )}
            </HStack>
          ))}
        </HStack>

        {/* Excerpt */}
        {entry.excerpt && (
          <Text className="text-base text-foreground/80 leading-relaxed">
            {entry.excerpt}
          </Text>
        )}

        {/* Image */}
        {entry.image && (
          <Box className="w-full rounded-lg overflow-hidden mt-2">
            <Image
              src={entry.image}
              alt={entry.title}
              width={400}
              height={400}
              className="object-cover"
            />
          </Box>
        )}

        {/* Read More Link */}
        <NextLink
          href={`/ui/docs/changelog/${entry.slug}`}
          className="text-primary hover:text-primary/80 text-sm font-medium inline-flex items-center gap-1 mt-2"
        >
          Read More
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </NextLink>
      </VStack>
    </Box>
  );
};
