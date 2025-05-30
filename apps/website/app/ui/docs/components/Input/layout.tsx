
import React from 'react';
import { Metadata } from 'next';

 export const metadata: Metadata = {
    "title": "gluestack-ui Input Component | React Native Input Installation",
    "description": "A feature-rich React Native Input component – supports icons, validation, and styling options for seamless user input in your mobile app.",
    "pageTitle": "Input",
    "pageDescription": "A feature-rich React Native Input component – supports icons, validation, and styling options for seamless user input in your mobile app.",
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
