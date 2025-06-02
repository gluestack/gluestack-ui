
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    "title": "gluestack-ui Menu Component | React Native Menu Installation, Usage & API",
    "pageTitle": "gluestack-ui Menu Component",
    "description": "Build a user-friendly interface with gluestack-ui menu component in React & React Native, designed for easy navigation and accessibility."
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