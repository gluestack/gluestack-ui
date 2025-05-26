import React, { useEffect } from "react";
import { Box, Link, Text, LinkText } from "@/components/ui";
import Head from "next/head";

type Item = {
  id: string;
  title: string;
};

export const TOC = ({ items }: { items: Item[] }) => {
  const [selected, setSelected] = React.useState(items[0].id);

  const handleScroll = () => {
    const sections = document.querySelectorAll("h1, h2, h3, h4, h5");
    const scrollPosition = window.scrollY;

    // Find the section that is currently in view
    let currentSection = null;
    let minDistance = Infinity;

    sections.forEach((section: Element) => {
      const htmlElement = section as HTMLElement;
      const sectionTop = htmlElement.offsetTop;
      const sectionBottom = sectionTop + htmlElement.clientHeight;
      const distance = Math.abs(scrollPosition - sectionTop);

      if (
        scrollPosition >= sectionTop - 100 &&
        scrollPosition < sectionBottom
      ) {
        if (distance < minDistance) {
          minDistance = distance;
          currentSection = section;
        }
      }
    });

    if (currentSection) {
      // Get the text content of the heading and convert it to an ID
      const headingText = (currentSection as HTMLElement).textContent || "";
      const headingId = headingText.toLowerCase().replace(/[^a-z0-9]+/g, "-");

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
    const sections = document.querySelectorAll("h1, h2, h3, h4, h5");
    sections.forEach((section: Element) => {
      const htmlElement = section as HTMLElement;
      if (!htmlElement.id) {
        const headingText = htmlElement.textContent || "";
        const headingId = headingText.toLowerCase().replace(/[^a-z0-9]+/g, "-");
        htmlElement.id = headingId;
      }
    });

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
                    ? "text-typography-900"
                    : "text-typography-500")
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
