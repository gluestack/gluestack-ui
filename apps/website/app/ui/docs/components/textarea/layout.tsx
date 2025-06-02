
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    "title": "gluestack-ui Textarea Component | React Native Textarea Installation",
    "pageTitle": "gluestack-ui Textarea Component",
    "description": "Easily integrate a React & React Native Textarea component with multi-line input. Customize size, state, and accessibility for seamless UI."
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