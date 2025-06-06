
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "gluestack-ui Popover Component",
  description: "Improve user experience with a React Popover component—perfect for contextual modals, tooltips & interactive UI elements. Works seamlessly in React & React Native!"
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