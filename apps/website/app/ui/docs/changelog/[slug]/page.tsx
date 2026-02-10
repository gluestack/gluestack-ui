import React from 'react';
import { parseISO, format } from 'date-fns';
import NextLink from 'next/link';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { Box } from '@/components/ui/box';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import { getChangelogEntryBySlug, getAllChangelogSlugs } from '@/app/ui/docs/changelog/changelog-data';
import { ArrowLeft } from 'lucide-react';

export function generateStaticParams() {
  return getAllChangelogSlugs().map((slug) => ({
    slug,
  }));
}

async function ChangelogEntryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getChangelogEntryBySlug(slug);

  if (!entry) {
    return (
      <Box className="w-full max-w-[1200px] mx-auto py-8 md:py-12 px-4 md:px-6 lg:px-8">
        <VStack className="gap-4">
          <Heading className="text-3xl font-bold text-foreground">
            Changelog Entry Not Found
          </Heading>
          <Text className="text-foreground/70">
            The changelog entry you're looking for doesn't exist.
          </Text>
          <NextLink
            href="/ui/docs/changelog"
            className="text-primary hover:text-primary/80 inline-flex items-center gap-2 mt-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Changelog
          </NextLink>
        </VStack>
      </Box>
    );
  }

  const date = parseISO(entry.date);
  const formattedDate = format(date, 'MMMM d, yyyy');

  return (
    <Box className="w-full mx-auto py-8 md:py-12 border-b border-border/80 mb-8">
      {/* Back Link */}
      <NextLink
        href="/ui/docs/changelog"
        className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
      </NextLink>

      {/* Header */}
      <VStack className="gap-6 mb-8">
        <Heading className="text-4xl md:text-5xl font-bold text-foreground">
          {entry.title}
        </Heading>

        {/* Date and Authors */}
        <HStack className="items-center gap-2 flex-wrap">
          <Text className="text-sm text-foreground/70">
            {formattedDate}
          </Text>
          <Text className="text-sm text-foreground/50">by</Text>
          {entry.authors.map((author, index) => (
            <HStack key={author.id} className="items-center gap-2">
              {author.avatar_url && (
                <Box className="rounded-full h-8 w-8 overflow-hidden shrink-0 relative">
                  <Image
                    src={author.avatar_url}
                    alt={author.name}
                    fill
                    className="object-cover"
                  />
                </Box>
              )}
              <VStack className="gap-0">
                <Text className="text-sm text-foreground font-semibold">
                  {author.name}
                </Text>
                {author.occupation && (
                  <Text className="text-xs text-foreground/60">
                    {author.occupation}
                  </Text>
                )}
              </VStack>
              {index < entry.authors.length - 1 && (
                <Text className="text-sm text-foreground/50">,</Text>
              )}
            </HStack>
          ))}
        </HStack>

        {/* Image */}
        {entry.image && (
          <Box className="w-full rounded-lg overflow-hidden mt-4">
            <Image
              src={entry.image}
              alt={entry.title}
              width={800}
              height={675}
              className="w-full h-auto object-cover max-w-[800px] max-h-[675px]"
            />
          </Box>
        )}
      </VStack>

      {/* Content */}
      {entry.content && (
        <Box className="prose prose-lg max-w-none changelog-content">
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm]}
            components={{
              h2: ({ children }) => (
                <Heading className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  {children}
                </Heading>
              ),
              h3: ({ children }) => (
                <Heading className="text-xl font-semibold text-foreground mt-6 mb-3">
                  {children}
                </Heading>
              ),
              p: ({ children }) => (
                <Text className="text-base text-foreground/80 leading-relaxed mb-4">
                  {children}
                </Text>
              ),
              a: ({ href, children }) => (
                <NextLink
                  href={href || '#'}
                  target={href?.startsWith('http') ? '_blank' : undefined}
                  rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-primary underline hover:text-primary/80"
                >
                  {children}
                </NextLink>
              ),
              code: ({ children, className }) => (
                <code className={`${className} bg-muted px-1.5 py-0.5 rounded text-sm font-mono`}>
                  {children}
                </code>
              ),
              pre: ({ children }) => (
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">
                  {children}
                </pre>
              ),
            }}
          >
            {entry.content}
          </ReactMarkdown>
        </Box>
      )}
    </Box>
  );
}

export default ChangelogEntryPage;
