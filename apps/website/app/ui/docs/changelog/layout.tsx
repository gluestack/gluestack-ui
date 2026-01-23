import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Changelog | gluestack-ui",
  description: "New updates and improvements to gluestack-ui."
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
