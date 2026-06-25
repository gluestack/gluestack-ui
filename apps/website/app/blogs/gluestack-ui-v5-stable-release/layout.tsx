import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'gluestack-ui v5 Stable Release: Production-Ready Native Performance',
  description:
    'Announcing the stable release of gluestack-ui v5, built entirely around native performance, NativeWind v5 (Tailwind CSS v4), Expo Router, and a redesigned CLI experience.',
  openGraph: {
    images: [
      {
        url: 'https://gluestack.io/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'gluestack-ui v5 Stable Release — Production-Ready Native Performance',
      },
    ],
  },
  twitter: {
    images: {
      url: 'https://gluestack.io/images/og-image.png',
      width: 1200,
      height: 630,
      alt: 'gluestack-ui v5 Stable Release — Production-Ready Native Performance',
    },
  },
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
