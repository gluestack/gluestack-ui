
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    "title": "gluestack-ui Badge Component | Installation, Usage, and API",
    "pageTitle": "gluestack-ui Badge Component",
    "description": "Enhance your app with gluestack-ui's Badge component. A versatile React Native badge with multiple variants for clear status indicators in your badges component."
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