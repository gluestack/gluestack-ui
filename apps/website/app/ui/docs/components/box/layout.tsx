
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "gluestack-ui Box Components",
  description: "Use gluestack-ui Box, a powerful box component for flexible layouts. Customize styles, props, and structure easily for web and native platforms."
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