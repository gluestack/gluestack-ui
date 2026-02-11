
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Upgrade to gluestack-ui v4 | gluestack-ui",
  description: "Complete guide to upgrade from gluestack-ui v3 to v4. Step-by-step instructions for upgrading packages, updating configurations, and migrating to the new animation system."
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