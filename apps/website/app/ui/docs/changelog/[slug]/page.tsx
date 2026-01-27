import React from 'react';
import { parseISO, format } from 'date-fns';
import NextLink from 'next/link';
import Image from 'next/image';
import { Box } from '@/components/ui/box';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import { getChangelogEntryBySlug, getAllChangelogSlugs } from '@/components/page-components/changelog-page/changelog-data';
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

  // Parse content and render markdown-like formatting
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let currentParagraph: string[] = [];
    let inList = false;

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();

      if (trimmedLine.startsWith('## ')) {
        // Heading
        if (currentParagraph.length > 0) {
          elements.push(
            <Text key={`p-${index}`} className="text-base text-foreground/80 leading-relaxed mb-4">
              {currentParagraph.join(' ')}
            </Text>
          );
          currentParagraph = [];
        }
        elements.push(
          <Heading key={`h2-${index}`} className="text-2xl font-semibold text-foreground mt-8 mb-4">
            {trimmedLine.replace('## ', '')}
          </Heading>
        );
      } else if (trimmedLine.startsWith('### ')) {
        // Subheading
        if (currentParagraph.length > 0) {
          elements.push(
            <Text key={`p-${index}`} className="text-base text-foreground/80 leading-relaxed mb-4">
              {currentParagraph.join(' ')}
            </Text>
          );
          currentParagraph = [];
        }
        elements.push(
          <Heading key={`h3-${index}`} className="text-xl font-semibold text-foreground mt-6 mb-3">
            {trimmedLine.replace('### ', '')}
          </Heading>
        );
      } else if (trimmedLine.startsWith('◆')) {
        // List item
        if (!inList) {
          inList = true;
          if (currentParagraph.length > 0) {
            elements.push(
              <Text key={`p-${index}`} className="text-base text-foreground/80 leading-relaxed mb-4">
                {currentParagraph.join(' ')}
              </Text>
            );
            currentParagraph = [];
          }
        }
        const listText = trimmedLine.replace('◆', '').trim();
        // Check for markdown links
        const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/;
        const linkMatch = listText.match(linkRegex);
        
        if (linkMatch) {
          const beforeLink = listText.substring(0, linkMatch.index);
          const linkText = linkMatch[1];
          const linkUrl = linkMatch[2];
          const afterLink = listText.substring((linkMatch.index || 0) + linkMatch[0].length);
          
          elements.push(
            <HStack key={`li-${index}`} className="items-start gap-2 mb-2">
              <Text className="text-primary text-sm">◆</Text>
              <Text className="text-base text-foreground/80 flex-1">
                {beforeLink}
                <NextLink
                  href={linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline hover:text-primary/80"
                >
                  {linkText}
                </NextLink>
                {afterLink}
              </Text>
            </HStack>
          );
        } else {
          elements.push(
            <HStack key={`li-${index}`} className="items-start gap-2 mb-2">
              <Text className="text-primary text-sm">◆</Text>
              <Text className="text-base text-foreground/80 flex-1">
                {listText}
              </Text>
            </HStack>
          );
        }
      } else if (trimmedLine === '') {
        // Empty line - end list or paragraph
        if (inList) {
          inList = false;
        }
        if (currentParagraph.length > 0) {
          elements.push(
            <Text key={`p-${index}`} className="text-base text-foreground/80 leading-relaxed mb-4">
              {currentParagraph.join(' ')}
            </Text>
          );
          currentParagraph = [];
        }
      } else {
        // Regular paragraph text
        if (inList) {
          inList = false;
        }
        currentParagraph.push(trimmedLine);
      }
    });

    // Add remaining paragraph
    if (currentParagraph.length > 0) {
      elements.push(
        <Text key="p-final" className="text-base text-foreground/80 leading-relaxed mb-4">
          {currentParagraph.join(' ')}
        </Text>
      );
    }

    return elements;
  };

  return (
    <Box className="w-full max-w-[1200px] mx-auto py-8 md:py-12 px-4 md:px-6 lg:px-8">
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
              width={1200}
              height={675}
              className="w-full h-auto object-cover"
            />
          </Box>
        )}
      </VStack>

      {/* Content */}
      {entry.content && (
        <Box className="prose prose-lg max-w-none">
          <VStack className="gap-0">
            {renderContent(entry.content)}
          </VStack>
        </Box>
      )}

      {/* Back to top link */}
      <Box className="mt-12 pt-8 border-t border-border">
        <NextLink
          href="/ui/docs/changelog"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <Text className="text-sm font-medium">Back to Changelog</Text>
        </NextLink>
      </Box>
    </Box>
  );
}

export default ChangelogEntryPage;
