import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why gluestack-ui v2? | gluestack',
  description:
    'gluestack-ui v2 is a modern, lightweight, and customizable component library that helps you build faster and beautiful React applications.',
  openGraph: {
    images: [
      {
        url: '/images/blogs/cover1.png',
        width: 1200,
        height: 630,
        alt: 'Why gluestack-ui v2?',
      },
    ],
  },
};
const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
