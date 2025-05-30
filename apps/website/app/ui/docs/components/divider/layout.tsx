
import React from 'react';
import { Metadata } from 'next';

 export const metadata: Metadata = {
    "title": "gluestack-ui Divider Component | React Native Divider Installation",
    "description": "gluestack-ui's Divider component ensures a well-structured interface. Use the Divider component for clean content separation in your design with flexible orientation options.",
    "pageTitle": "Divider",
    "pageDescription": "gluestack-ui's Divider component ensures a well-structured interface. Use the Divider component for clean content separation in your design with flexible orientation options.",
    "showHeader": true
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
