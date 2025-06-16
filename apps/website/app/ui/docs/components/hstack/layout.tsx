
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "gluestack-ui HStack Component | Hstack React Native Installation",
  description: "Use the gluestack-ui HStack component in React Native to align elements horizontally. Easily customize layouts with spacing and reverse props. Learn how to install and use HStack today!"
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