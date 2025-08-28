import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'The Year That Was: Lessons Learned and Milestones Achieved | gluestack',
  description:
    'Together, we are building tools that inspire innovation and set new benchmarks for the industry',
  openGraph: {
    images: [
      {
        url: 'https://gluestack.github.io/public-blog-video-assets/yearendcover.png',
        width: 1200,
        height: 630,
        alt: 'The Year That Was: Lessons Learned and Milestones Achieved',
      },
    ],
  },
};
const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};
export default Layout;
