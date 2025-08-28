import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Mastering gluestack-ui v2 Animations with NativeWind: A Step-by-Step Guide | gluestack',
  description:
    'Learn to create dynamic animations in gluestack-ui using NativeWind/TailwindCSS for seamless UI experiences.',
  openGraph: {
    images: [
      {
        url: 'https://gluestack.github.io/public-blog-video-assets/AnimationBlogCoverImage.png',
        width: 1200,
        height: 630,
        alt: 'Mastering gluestack-ui v2 Animations with NativeWind',
      },
    ],
  },
};
const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
