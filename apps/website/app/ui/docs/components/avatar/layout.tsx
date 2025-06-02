
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    "title": "gluestack-ui Avatar Component | Avatar Installation, Usage & API",
    "pageTitle": "gluestack-ui Avatar Component",
    "description": "Enhance your UI with our React Native Avatar component. Explore gluestack's-ui Avatar for seamless design and customization. Check out the docs to add an Avatar component to your app!"
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