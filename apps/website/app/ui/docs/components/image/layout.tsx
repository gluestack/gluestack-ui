
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    "title": "gluestack-ui Image Component | Image Installation, Usage & API",
    "pageTitle": "gluestack-ui Image Component",
    "description": "Enhance your app with the Image component from gluestack-ui. Build seamless UI component images in React & React Native with ease. Explore the docs now!"
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