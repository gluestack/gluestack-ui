
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "gluestack-ui Tabs Component | React Native Tabs Installation",
  description: "Create an organized UI using the gluestack-ui Tabs component in React & React Native. Add tabbed navigation seamlessly with animations."
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