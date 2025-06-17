import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'gluestack-ui Progress Component | React Native Progress Bar Installation',
  description:
    'Enhance your app with a responsive Progress component. gluestack-ui offers a React Native progress bar for tracking steps, ensuring a smooth progress bar UI experience.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
