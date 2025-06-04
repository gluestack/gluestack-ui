import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Figma UI Kit',
  description:
    'The Figma UI Kit provides a collection of ready-to-use UI components from the gluestack-ui library, designed for seamless React Native Figma UI Kit integration..',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
