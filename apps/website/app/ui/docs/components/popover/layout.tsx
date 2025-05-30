
import React from 'react';
import { Metadata } from 'next';

 export const metadata: Metadata = {
    "title": "gluestack-ui Popover Component | React Popover Installation",
    "description": "Improve user experience with a React Popover component—perfect for contextual modals, tooltips & interactive UI elements. Works seamlessly in React & React Native!",
    "pageTitle": "Popover",
    "pageDescription": "Improve user experience with a React Popover component—perfect for contextual modals, tooltips & interactive UI elements. Works seamlessly in React & React Native!",
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
