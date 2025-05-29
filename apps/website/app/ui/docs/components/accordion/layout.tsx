
import React from 'react';
import { Metadata } from 'next';

 export const metadata: Metadata = {
    "title": "Accordion Component | gluestack-ui | Installation, Usage & API",
    "description": "Explore gluestack's Accordion component for Expo, next.js, React & React Native. Build sleek, interactive accordions with ease.",
    "pageTitle": "Accordion",
    "pageDescription": "Explore gluestack's Accordion component for Expo, next.js, React & React Native. Build sleek, interactive accordions with ease.",
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
