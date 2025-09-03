import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'gluestack v3 – Universal React & React Native Component Library',
  description: 'Introducing gluestack v3: a universal React & React Native component library with Next.js 15, Expo SDK 53, and TypeScript-first tooling. Optimized for performance, accessibility, and contributor scalability with a new Source-to-Destination architecture.',
  openGraph: {
    images: [
      {
        url: 'https://gluestack.io/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'gluestack v3 is here 🚀 Universal React & React Native Components',
      },
    ],
  },
  twitter: {
    images: {
      url: 'https://gluestack.io/images/og-image.png',
      width: 1200,
      height: 630,
      alt: 'gluestack v3 is here 🚀 Universal React & React Native Components',
    },
  },
};
const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
