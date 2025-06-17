
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "All Components | gluestack-ui | React Native UI Components",
  description: "gluestack-ui offers 30+ responsive components, including a React Native slider, switch, spinner, etc. The ultimate React Native UI components library for every screen and style."
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