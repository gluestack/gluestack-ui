
import React from 'react';
import { Metadata } from 'next';

 export const metadata: Metadata = {
    "title": "gluestack-ui Skeleton Component | React Skeleton Installation, Usage & API",
    "description": "Discover the ultimate gluestack-ui Skeleton component for React & React Native. Improve app loading visuals with gluestack-ui easy-to-use Skeleton.",
    "pageTitle": "Skeleton",
    "pageDescription": "Discover the ultimate gluestack-ui Skeleton component for React & React Native. Improve app loading visuals with gluestack-ui easy-to-use Skeleton.",
    "showHeader": true,
    "tag": "alpha, RSC"
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
