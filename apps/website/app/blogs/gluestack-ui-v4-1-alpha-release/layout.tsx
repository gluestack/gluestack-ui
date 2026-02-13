import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'gluestack-ui v4.1 Alpha: Supercharged Expo Apps with Uniwind & Tailwind v4',
  description: 'Introducing gluestack-ui v4.1 alpha with Uniwind and Tailwind v4 support for Expo projects. Experience 39% faster renders, 26% smaller bundles, and zero runtime overhead for your Expo apps.',
  openGraph: {
    images: [
      {
        url: 'https://gluestack.io/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'gluestack-ui v4.1 alpha - Uniwind & Tailwind v4 for Expo 🚀',
      },
    ],
  },
  twitter: {
    images: {
      url: 'https://gluestack.io/images/og-image.png',
      width: 1200,
      height: 630,
      alt: 'gluestack-ui v4.1 alpha - Uniwind & Tailwind v4 for Expo 🚀',
    },
  },
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
