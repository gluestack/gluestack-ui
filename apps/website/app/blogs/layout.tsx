import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blogs | gluestack',
  description:
    'Welcome to gluestack blogs. Here we share in-house experiments, tips on the gluestack library, application development insights, and our opinions on trending industry insights.',
  openGraph: {
    title: 'Blogs | gluestack',
    description:
      'Welcome to gluestack blogs. Here we share in-house experiments, tips on the gluestack library, application development insights, and our opinions on trending industry insights.',
    siteName: 'gluestack',
    url: 'https://gluestack.io/blogs',
    images: [
      {
        url: 'https://gluestack.io/images/og-image.png',
        alt: 'Blogs | gluestack',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@gluestackio',
    title: 'Blogs | gluestack',
    description:
      'Welcome to gluestack blogs. Here we share in-house experiments, tips on the gluestack library, application development insights, and our opinions on trending industry insights.',
    images: [
      {
        url: 'https://gluestack.io/images/og-image.png',
        alt: 'Welcome to gluestack blogs. Here we share in-house experiments, tips on the gluestack library, application development insights, and our opinions on trending industry insights.',
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/icon/apple-touch-icon.png',
  },
};

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <>{children}</>;
};

export default Layout;
