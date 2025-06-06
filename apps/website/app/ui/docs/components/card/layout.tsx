
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "gluestack-ui Card Component",
  description: "Build beautiful interfaces with the gluestack-ui Card component. This React Native card offers a clean, modern design for any project. Perfect for seamless card design UI integration."
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