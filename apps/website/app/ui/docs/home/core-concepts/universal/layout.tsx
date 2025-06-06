
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Universal",
  description: "Universal provides gluestack snippets, offering shorthand for commonly used Universal UI components. The ultimate Universal UI component for building seamless user interfaces."
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