
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "gluestack-ui Center Component | Installation, Usage, and API",
  description: "gluestack-ui Center component helps center-align text and content in React Native. Perfect for creating responsive layouts with React Native text center support."
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