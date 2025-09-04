import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'React Native ARIA & gluestack-ui Security Incident Report',
  description:
    'Comprehensive analysis of the June 2025 supply chain attack affecting React Native ARIA packages',
  openGraph: {
    images: [
      {
        url: 'https://gluestack.github.io/public-blog-video-assets/yearendcover.png',
        width: 1200,
        height: 630,
        alt: 'React Native ARIA & gluestack-ui Security Incident Report',
      },
    ],
  },
};
const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};
export default Layout;
