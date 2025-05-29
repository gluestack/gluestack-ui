
import React from 'react';
import { Metadata } from 'next';

 export const metadata: Metadata = {
    "title": "gluestack-ui VStack Component | Installation, Usage, and API",
    "description": "Use the gluestack-ui VStack component to arrange elements vertically with customizable spacing. Simplify layout design with VStack React Native for seamless UIs.",
    "pageTitle": "VStack",
    "pageDescription": "Use the gluestack-ui VStack component to arrange elements vertically with customizable spacing. Simplify layout design with VStack React Native for seamless UIs.",
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
