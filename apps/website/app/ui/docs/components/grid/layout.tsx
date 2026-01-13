
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "gluestack-ui Grid Component | React Native Grid Installation, Usage, and API",
  description: "Create responsive layouts with the gluestack-ui Grid component. A flexible React Native grid layout for seamless UI design in web and mobile apps with rows and columns."
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