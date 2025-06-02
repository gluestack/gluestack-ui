
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "gluestack-ui Spinner Component",
  description: "Enhance your UI with the gluestack-ui Spinner component. A React Native spinner with ShadCN styling for smooth loading indicators. Optimize your spinner UI design with ease."
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