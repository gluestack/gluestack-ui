
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    "title": "gluestack-ui Table Component | Table Installation, Usage, and API",
    "pageTitle": "gluestack-ui Table Component",
    "description": "Effortlessly manage tabular data with gluestack-ui Table component. A fully customizable React Native table component for smooth data display in your UI. Perfect for any project!"
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