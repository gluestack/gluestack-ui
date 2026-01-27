'use client';
import React from 'react';
import { parseISO, format } from 'date-fns';
import NextLink from 'next/link';
import Image from 'next/image';
import { Box } from '@/components/ui/box';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import { ChangelogItem } from '@/components/page-components/changelog-page/ChangelogItem';
import { changelogEntries } from '@/app/ui/docs/changelog/changelog-data';

const ChangelogPage = () => {
  const sortedEntries = [...changelogEntries].sort((a, b) => {
    const aTime = new Date(a.date).getTime();
    const bTime = new Date(b.date).getTime();
    return bTime - aTime; // latest first
  });

  // Featured entries (first 5)
  const featuredEntries = sortedEntries.slice(0, 5);
  // More entries (rest)
  const moreEntries = sortedEntries.slice(5);

  return (
    <Box className="w-full mx-auto py-8 md:py-12">
      {/* Header */}
      <VStack className="gap-4 mb-12">
        <Heading className="text-4xl md:text-5xl font-bold text-foreground">
          Changelog
        </Heading>
        <Text className="text-lg md:text-xl text-foreground/70">
          New updates and improvements to gluestack-ui.
        </Text>
        
        {/* Follow/Subscribe buttons - similar to Expo */}
        <HStack className="gap-4 mt-4">
          <a
            href="https://x.com/gluestack"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-md bg-foreground text-background hover:bg-foreground/90 transition-colors text-sm font-medium inline-flex items-center gap-2"
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            Follow
          </a>
          <a
            href="https://github.com/gluestack/gluestack-ui"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-md border border-border hover:bg-accent transition-colors text-sm font-medium"
          >
            Subscribe
          </a>
        </HStack>
      </VStack>

      {/* Featured Changelog Entries */}
      <VStack className="gap-0">
        {featuredEntries.map((entry) => (
          <ChangelogItem key={entry.slug} entry={entry} />
        ))}
      </VStack>

      {/* More Posts Section */}
      {moreEntries.length > 0 && (
        <Box className="mt-12 pt-8 border-t border-border">
          <Heading className="text-xl font-semibold text-foreground mb-6">
            More posts
          </Heading>
          <VStack className="gap-0">
            {moreEntries.map((entry) => (
              <Box
                key={entry.slug}
                className="py-4 border-b border-border last:border-b-0"
              >
                <HStack className="items-center gap-4">
                  <NextLink
                    href={`/ui/docs/changelog/${entry.slug}`}
                    className="flex-1 no-underline hover:opacity-80 transition-opacity"
                  >
                    <Heading className="text-lg font-semibold text-foreground hover:text-primary">
                      {entry.title}
                    </Heading>
                  </NextLink>
                  <HStack className="items-center gap-2 shrink-0">
                    <Text className="text-sm text-foreground/70">
                      {format(parseISO(entry.date), 'MMM d, yyyy')}
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
                </HStack>
              </Box>
            ))}
          </VStack>
        </Box>
      )}
    </Box>
  );
};

export default ChangelogPage;
