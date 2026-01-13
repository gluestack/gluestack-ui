
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Manual Migration to gluestack-ui v3 | gluestack-ui",
  description: "Complete manual migration guide from gluestack-ui v2 to gluestack-ui v3. Step-by-step instructions for upgrading packages, updating configurations, and transforming your codebase."
}

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}