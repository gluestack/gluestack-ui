import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dark Mode',
  description:
    'Customizing the theme in gluestack-ui v2 for different color schemes and color mode support.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
