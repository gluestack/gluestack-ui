import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'gluestack-ui Select Component',
  description:
    'Enhance your React Native app with a customizable Select dropdown component. Supports accessibility, animations, and flexible styling for a smooth user experience.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
