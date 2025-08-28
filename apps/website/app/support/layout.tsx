import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get help from our team | gluestack',
  description:
    ' If you are facing issues while using gluestack tools, please ask here for support. ',
  openGraph: {
    title: 'Get help from our team | gluestack',
    description:
      'If you are facing issues while using gluestack tools, please ask here for support.',
    siteName: 'gluestack',
    url: 'https://gluestack.io/support',
    images: [
      {
        url: 'https://gluestack.io/images/og-image.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@gluestack',
    title: 'Get help from our team | gluestack',
    description:
      'If you are facing issues while using gluestack tools, please ask here for support.',
    images: [
      {
        url: 'https://gluestack.io/images/og-image.png',
        alt: 'If you are facing issues while using gluestack tools, please ask here for support.',
      },
    ],
  },
};

const SupportLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <>{children}</>;
};

export default SupportLayout;
