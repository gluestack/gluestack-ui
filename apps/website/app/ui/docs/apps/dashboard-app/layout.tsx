
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "gluestack-ui Dashboard App Component | React Native Dashboard App Installation",
  description: "Create beautiful React Native dashboard app component using gluestack-ui. Design your ideal dashboard app with advanced components for efficient app management."
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