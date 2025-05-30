
import React from 'react';
import { Metadata } from 'next';

 export const metadata: Metadata = {
    "title": "gluestack-ui Modal Component | React Modal Installation, Usage & API",
    "description": "Create smooth and accessible modals in React & React Native. Implement React modal components for alerts, forms, and notifications with ease. Optimize modal component for better user engagement.",
    "pageTitle": "Modal",
    "pageDescription": "Create smooth and accessible modals in React & React Native. Implement React modal components for alerts, forms, and notifications with ease. Optimize modal component for better user engagement.",
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
