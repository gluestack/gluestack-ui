import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'gluestack-ui v4 Alpha: Modern Design, Powerful Animations, Enhanced DX',
  description: 'Introducing gluestack-ui v4 alpha: shadcn-inspired design system, react-native-reanimated animations, semantic color tokens, and exceptional developer experience. Transform your React Native and Next.js apps today.',
  openGraph: {
    images: [
      {
        url: 'https://gluestack.io/images/blogs/expo55-beta.png',
        width: 1200,
        height: 630,
        alt: 'gluestack-ui v4 alpha is here 🚀 Modern Design & Powerful Animations',
      },
    ],
  },
  twitter: {
    images: {
      url: 'https://gluestack.io/images/blogs/expo55-beta.png',
      width: 1200,
      height: 630,
      alt: 'gluestack-ui v4 alpha is here 🚀 Modern Design & Powerful Animations',
    },
  },
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
