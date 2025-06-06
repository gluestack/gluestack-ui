
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "gluestack-ui Icon Component",
  description: "Use gluestack-ui Icon component to enhance your web and mobile app with scalable component icons. A must-have React Native icon library for modern development!"
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