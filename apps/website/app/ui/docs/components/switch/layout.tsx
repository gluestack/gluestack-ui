
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "gluestack-ui Switch Component | React Native Switch Installation, Usage & API",
  description: "Enhance your UI with a sleek Switch Component. Built on React Native, it's customizable and accessible. Perfect for toggling options seamlessly."
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