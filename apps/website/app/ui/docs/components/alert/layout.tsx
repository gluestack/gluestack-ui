
import React from 'react';
import { Metadata } from 'next';

 export const metadata: Metadata = {
    "title": "gluestack-ui Alert Component | React Native Alert Installation & API",
    "description": "gluestack-ui offers a responsive React Native Alert component with multiple styles. Easily integrate alerts into your UI with customizable React Native alert styles.",
    "pageTitle": "Alert",
    "pageDescription": "gluestack-ui offers a responsive React Native Alert component with multiple styles. Easily integrate alerts into your UI with customizable React Native alert styles.",
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
