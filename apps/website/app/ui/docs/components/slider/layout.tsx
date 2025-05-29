
import React from 'react';
import { Metadata } from 'next';

 export const metadata: Metadata = {
    "title": "gluestack-ui Slider Component | Slider Installation, Usage & API",
    "description": "Create smooth, interactive controls with the gluestack-ui React Native Slider component. Customize track height, values, and states for a seamless slider UI experience.",
    "pageTitle": "Slider",
    "pageDescription": "Create smooth, interactive controls with the gluestack-ui React Native Slider component. Customize track height, values, and states for a seamless slider UI experience.",
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
