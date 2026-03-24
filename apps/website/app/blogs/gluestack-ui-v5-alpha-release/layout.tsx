import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'gluestack-ui v5 Alpha: Tailwind CSS v4, NativeWind v5, and UniWind',
  description:
    'Introducing gluestack-ui v5 alpha with Tailwind CSS v4 CSS-first theming, NativeWind v5 and UniWind engine choices, new upgrade CLI command, and updated core packages.',
  openGraph: {
    images: [
      {
        url: 'https://gluestack.io/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'gluestack-ui v5 Alpha Release — Tailwind CSS v4 is here',
      },
    ],
  },
  twitter: {
    images: {
      url: 'https://gluestack.io/images/og-image.png',
      width: 1200,
      height: 630,
      alt: 'gluestack-ui v5 Alpha Release — Tailwind CSS v4 is here',
    },
  },
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
