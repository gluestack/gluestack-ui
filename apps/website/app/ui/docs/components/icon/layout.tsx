
import React from 'react';
import { Metadata } from 'next';

 export const metadata: Metadata = {
    "title": "gluestack-ui Icon Component | Installation, Usage & API",
    "description": "Use gluestack-ui Icon component to enhance your web and mobile app with scalable component icons. A must-have React Native icon library for modern development!",
    "pageTitle": "Icon",
    "pageDescription": "Use gluestack-ui Icon component to enhance your web and mobile app with scalable component icons. A must-have React Native icon library for modern development!",
    "showHeader": true,
    "tag": "RSC"
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
