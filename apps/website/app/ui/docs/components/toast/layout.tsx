
import React from 'react';
import { Metadata } from 'next';

 export const metadata: Metadata = {
    "title": "gluestack-ui Toast Component | React Native Toast Installation",
    "description": "gluestack-ui Toast component for React Native lets you show toast messages effortlessly. Improve your Toast component with flexible placement, duration, and actions.",
    "pageTitle": "Toast",
    "pageDescription": "gluestack-ui Toast component for React Native lets you show toast messages effortlessly. Improve your Toast component with flexible placement, duration, and actions.",
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
