
import React from 'react';
import { Metadata } from 'next';

 export const metadata: Metadata = {
    "title": "gluestack-ui Text Component | Installation, Usage, and API",
    "description": "Enhance your app with gluestack-ui's Text component—an adaptable React Native text area with multiple styles, sizes, and formatting options for seamless UI design.",
    "pageTitle": "Text",
    "pageDescription": "Enhance your app with gluestack-ui's Text component—an adaptable React Native text area with multiple styles, sizes, and formatting options for seamless UI design.",
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
