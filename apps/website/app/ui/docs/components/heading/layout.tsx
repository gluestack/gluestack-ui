
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "gluestack-ui Heading Component | Installation, Usage, and API",
  description: "Explore the gluestack-ui Heading Component with installation steps, API reference, and usage examples. Customize React Native headings with different sizes and styles easily for your projects."
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