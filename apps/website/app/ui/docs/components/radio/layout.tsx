import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'gluestack-ui Radio Component',
  description:
    'Enhance your UI with a React Native radio button. Easily integrate radio buttons component with full accessibility support.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
