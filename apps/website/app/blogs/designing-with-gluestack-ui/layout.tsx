import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Designing with gluestack-ui: Essential Practices for Consistent Results | gluestack',
  description:
    'Designing with gluestack-ui is a modern, lightweight, and customizable component library that helps you build faster and beautiful React applications.',
  openGraph: {
    images: [
      {
        url: '/images/blogs/blog-4/cover4.png',
        width: 1200,
        height: 630,
        alt: 'My custom alt text',
      },
    ],
  },
};
const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
