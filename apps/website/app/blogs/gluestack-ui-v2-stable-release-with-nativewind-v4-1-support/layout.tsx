import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'gluestack v2 stable release with NativeWind v4.1 support | gluestack',
  description: 'gluestack v2 stable release with NativeWind v4.1 support.',
  openGraph: {
    images: [
      {
        url: 'https://gluestack.github.io/public-blog-video-assets/stable-release-v2-min.png',
        width: 1200,
        height: 630,
        alt: 'gluestack v2 stable release with NativeWind v4.1 support',
      },
    ],
  },
  twitter: {
    images: {
      url: 'https://gluestack.github.io/public-blog-video-assets/stable-release-v2-min.png',
      width: 1200,
      height: 630,
      alt: 'gluestack v2 stable release with NativeWind v4.1 support',
    },
  },
};
const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
