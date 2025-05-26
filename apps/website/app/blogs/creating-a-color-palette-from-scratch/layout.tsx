import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Creating a Color Palette from Scratch: A Practical Guide for Design Systems | gluestack',
  description:
    'Crafting the perfect color palette is a crucial step in building a cohesive and visually appealing design system.',
  openGraph: {
    images: [
      {
        url: 'https://gluestack.github.io/public-blog-video-assets/colorpalette.png',
        width: 1200,
        height: 630,
        alt: 'Creating a Color Palette from Scratch: A Practical Guide for Design Systems',
      },
    ],
  },
};
const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
