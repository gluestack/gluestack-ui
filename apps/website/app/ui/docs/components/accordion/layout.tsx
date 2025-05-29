
import React from 'react';
import { Metadata } from 'next';

 export const metadata: Metadata = {
    "title": "gluestack-ui Actionsheet Component | Installation, Usage & API",
    "description": "Discover the ActionSheet component for Expo, React & React Native. Easily create intuitive action sheets in your app with gluestack-ui. Learn more in our detailed documentation!",
    "pageTitle": "Actionsheet",
    "pageDescription": "Discover the ActionSheet component for Expo, React & React Native. Easily create intuitive action sheets in your app with gluestack-ui. Learn more in our detailed documentation!",
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
