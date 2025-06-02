
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "VS Code Extensions",
  description: "VS Code Extensions provide gluestack snippets, which are shorthand for commonly used gluestack-ui components. Perfect for a streamlined Visual Studio Code experience."
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