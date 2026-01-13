
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Kitchensink App | React Native UI Components | gluestack-ui",
  description: "Explore gluestack’s React Native UI components library with the kitchensink app. Build beautiful apps with ready-to-use React Native libraries and UI elements."
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