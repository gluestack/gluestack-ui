
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Upgrade to gluestack-ui v5 | gluestack-ui",
  description: "Complete guide to upgrade from gluestack-ui v4 to v5 with NativeWind v5 or UniWind. Step-by-step instructions for migrating to Tailwind CSS v4."
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