
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    "title": "gluestack-ui Portal Component | React Portal Installation, Usage & API",
    "pageTitle": "gluestack-ui Portal Component",
    "description": "Learn how to use the Portal component in React and React Native to render content outside the DOM hierarchy. Explore installation, API reference, and props."
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