import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Default Tokens | gluestack-ui | Colored Tokens',
  description:
    'gluestack-ui v2 ships with default tokens, including colored tokens that provide access to theme values and flexibility to build and customize your own themed UI components.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
