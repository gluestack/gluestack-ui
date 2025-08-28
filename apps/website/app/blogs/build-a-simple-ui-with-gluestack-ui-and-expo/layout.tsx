import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Build a Simple UI with gluestack-ui and Expo | gluestack',
  description:
    'Quickly build a functional UI with gluestack and Expo. Follow this guide to set up, customize, and enhance your mobile apps interface effortlessly.',
  openGraph: {
    images: [
      {
        url: 'https://gluestack.github.io/public-blog-video-assets/simpleuicover.png',
        width: 1200,
        height: 630,
        alt: 'Quickly build a functional UI with gluestack and Expo',
      },
    ],
  },
  twitter: {
    images: {
      url: 'https://gluestack.github.io/public-blog-video-assets/simpleuicover.png',
      width: 1200,
      height: 630,
      alt: 'Quickly build a functional UI with gluestack and Expo',
    },
  },
};
const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
