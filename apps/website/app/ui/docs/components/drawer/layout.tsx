
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    "title": "gluestack-ui Drawer Component | React Native Drawer Installation",
    "pageTitle": "gluestack-ui Drawer Component",
    "description": "Implement a responsive Drawer component in React & React Native for navigation and content display. Learn how to install, customize, and integrate it into your project."
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