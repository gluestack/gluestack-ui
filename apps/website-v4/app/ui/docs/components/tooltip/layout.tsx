
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "gluestack-ui Tooltip Component | React Native Tooltip Installation",
  description: "Create an intuitive UI using the gluestack-ui Tooltip component in React & React Native. Add hints & tooltips seamlessly."
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