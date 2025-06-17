import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CLI | gluestack-ui | The Essential CLI Tool for UI Components',
  description:
    'A powerful CLI tool for seamlessly adding gluestack-ui components to your React Native projects. Simplify your workflow with an intuitive CLI UI for fast development..',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
