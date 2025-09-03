import React, { useEffect } from 'react';
import { Box } from '@/components/ui/box';
import { Link } from '@/components/ui/link';
import { Text } from '@/components/ui/text';
import { LinkText } from '@/components/ui/link';
import Head from 'next/head';

type Item = {
  id: string;
  title: string;
};

export const TOC = ({ items }: { items: Item[] }) => {
  const [selected, setSelected] = React.useState(items[0].id);

  const handleScroll = (scrollContainer: Element) => {
    const sections = document.querySelectorAll('h1, h2, h3, h4, h5');
    const scrollPosition = scrollContainer.scrollTop;
    const containerTop = scrollContainer.getBoundingClientRect().top;

    // Find the section that is currently in view
    let currentSection = null;
    let minDistance = Infinity;

    sections.forEach((section: Element) => {
      const htmlElement = section as HTMLElement;
      const sectionRect = htmlElement.getBoundingClientRect();
      const sectionTopRelativeToViewport = sectionRect.top;

      // Calculate distance from the top of the viewport
      const distance = Math.abs(sectionTopRelativeToViewport - containerTop);

      // Check if section is in view (within reasonable viewport range)
      if (
        sectionTopRelativeToViewport <= containerTop + 150 &&
        sectionTopRelativeToViewport >= containerTop - 100
      ) {
        if (distance < minDistance) {
          minDistance = distance;
          currentSection = section;
        }
      }
    });

    if (currentSection) {
      // Get the text content of the heading and convert it to an ID
      const headingText = (currentSection as HTMLElement).textContent || '';
      const headingId = headingText.toLowerCase().replace(/[^a-z0-9?']+/g, '-');

      // Find the matching TOC item
      const matchingItem = items.find(
        (item) =>
          item.id === headingId ||
          item.title.toLowerCase() === headingText.toLowerCase()
      );

      if (matchingItem) {
        setSelected(matchingItem.id);
      }
    }
  };

  useEffect(() => {
    // Add IDs to headings if they don't exist
    const sections = document.querySelectorAll('h1, h2, h3, h4, h5');
    sections.forEach((section: Element) => {
      const htmlElement = section as HTMLElement;
      if (!htmlElement.id) {
        const headingText = htmlElement.textContent || '';
        const headingId = headingText.toLowerCase().replace(/\s+/g, '-');
        htmlElement.id = headingId;
      }
    });

    // Find the WebsiteLayout scrollable container
    const findScrollContainer = (): Element | null => {
      // Look for the specific container with h-screen and overflow-y-scroll classes
      const selectors = [
        '[class*="h-screen"][class*="overflow-y-scroll"]',
        '[class*="h-screen"][class*="overflow-hidden"]',
        '.overflow-y-scroll',
        '.overflow-y-auto',
      ];

      for (const selector of selectors) {
        const container = document.querySelector(selector);
        if (container) {
          return container;
        }
      }

      // Fallback to document element
      return document.documentElement;
    };

    const scrollContainer = findScrollContainer();

    const scrollHandler = () => {
      if (scrollContainer) {
        handleScroll(scrollContainer);
      }
    };

    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', scrollHandler);
      // Initial call to set the correct section
      setTimeout(() => handleScroll(scrollContainer), 100);

      return () => scrollContainer.removeEventListener('scroll', scrollHandler);
    }
  }, [items]);

  return (
    <Box className="fixed right-[7%] top-[180px] hidden xl:flex">
      <Text className="text-2xl font-bold text-typography-900 py-1.5 px-0.5">
        Table of Contents
      </Text>

      <Box className="max-h-[600px] max-w-[300px] overflow-scroll">
        {items.map((item, index) => {
          return (
            <Link
              className="py-1 px-0.5"
              href={`#${item.id}`}
              key={index + item.id}
              onPress={() => setSelected(item.id)}
            >
              <LinkText
                underline={false}
                className={
                  `text-sm leading-5 font-body  no-underline ` +
                  (selected === item.id
                    ? 'text-typography-900'
                    : 'text-typography-500')
                }
              >
                {item.title.trim()}
              </LinkText>
            </Link>
          );
        })}
      </Box>
    </Box>
  );
};
