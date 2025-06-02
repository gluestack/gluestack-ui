
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    "title": "gluestack-ui Fab Component | React Native Fab Installation, Usage & API",
    "pageTitle": "gluestack-ui Fab Component",
    "description": "Improve your React Native app with the FAB component. Learn how to implement a React Native FAB button using gluestack-ui for a smooth UI experience."
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