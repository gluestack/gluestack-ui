import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'gluestack-ui AlertDialog Component',
  description:
    'Build seamless React Native dialogs with the AlertDialog component. Enhance user engagement with smooth and responsive modal prompts.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
