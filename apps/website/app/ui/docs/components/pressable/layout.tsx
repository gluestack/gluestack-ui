import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'gluestack-ui Pressable Component',
  description:
    'Simplify interactive UI with the Pressable component in React Native. Manage hover, pressed, and focus events efficiently. Install now and improve your mobile app responsiveness!',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
