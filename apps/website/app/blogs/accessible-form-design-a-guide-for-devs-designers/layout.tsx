import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accessible Form Design: A Guide for Devs & Designers | gluestack',
  description: 'Learn how to implement accessible form design using WCAG guidelines, ARIA attributes, and keyboard navigation to create inclusive user experiences.',
  openGraph: {
    images: [
      {
        url: '/images/blogs/banner-1.png',
        width: 1200,
        height: 630,
        alt: 'Accessible Form Design: A Guide for Devs & Designers',
      },
    ],
  },
  twitter: {
    images: {
      url: '/images/blogs/banner-1.png',
      width: 1200,
      height: 630,
      alt: 'Accessible Form Design: A Guide for Devs & Designers',
    },
  },
};
const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
