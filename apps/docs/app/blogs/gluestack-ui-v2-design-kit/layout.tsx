import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'gluestack-ui v2 Design Kit | gluestack',
  description:
    'gluestack-ui v2 is a modern, lightweight, and customizable component library that helps you build faster and beautiful React applications.',
  openGraph: {
    images: [
      {
        url: '/images/blogs/cover3.png',
        width: 1200,
        height: 630,
        alt: 'gluestack-ui v2 Design Kit',
      },
    ],
  },
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
