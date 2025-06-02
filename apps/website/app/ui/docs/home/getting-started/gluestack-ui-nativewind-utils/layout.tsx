
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    "title": "gluestack-ui Accessibility Guide | Core Concepts for Inclusive Design",
    "pageTitle": "gluestack-ui Accessibility Guide",
    "description": "gluestack-ui is a UI library with universal, unstyled components, offering keyboard accessibility, focus management, and accessibility UI design for better functionality."
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