import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'gluestack-ui Toast Component',
  description:
    'gluestack-ui Toast component for React Native lets you show toast messages effortlessly. Improve your Toast component with flexible placement, duration, and actions.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
