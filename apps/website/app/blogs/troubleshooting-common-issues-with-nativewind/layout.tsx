import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Troubleshooting Common Issues with NativeWind (and Why You Should Try gluestack-ui) | gluestack',
  description:
    'NativeWind has revolutionized how developers style React Native apps by bringing the power of Tailwind CSS to the ecosystem ter and beautiful React applications.',
  openGraph: {
    images: [
      {
        url: 'https://gluestack.github.io/public-blog-video-assets/troubleshooting.png',
        width: 1200,
        height: 630,
        alt: 'Troubleshooting Common Issues with NativeWind (and Why You Should Try gluestack-ui)',
      },
    ],
  },
  twitter: {
    images: {
      url: 'https://gluestack.github.io/public-blog-video-assets/troubleshooting.png',
      width: 1200,
      height: 630,
      alt: 'Troubleshooting Common Issues with NativeWind (and Why You Should Try gluestack-ui)',
    },
  },
};
const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
