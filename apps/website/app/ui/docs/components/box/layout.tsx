
import React from 'react';
import { Metadata } from 'next';

 export const metadata: Metadata = {
    "title": "gluestack-ui Box Components | Installation, Usage, and API",
    "description": "Use gluestack-ui Box, a powerful box component for flexible layouts. Customize styles, props, and structure easily for web and native platforms.",
    "pageTitle": "Box",
    "pageDescription": "Use gluestack-ui Box, a powerful box component for flexible layouts. Customize styles, props, and structure easily for web and native platforms.",
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
