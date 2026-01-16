
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sponsored Apps | gluestack-ui",
  description: "Check out our sponsored apps and partners."
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
