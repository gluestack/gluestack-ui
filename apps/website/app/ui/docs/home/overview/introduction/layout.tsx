import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Introduction - gluestack-UI | React, Next.js & React Native Components',
  description:
    'Elevate your UI with gluestack—React Native components, Tailwind styling & shadows for web & mobile apps. The best UI library for React, Next.js & React Native.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
