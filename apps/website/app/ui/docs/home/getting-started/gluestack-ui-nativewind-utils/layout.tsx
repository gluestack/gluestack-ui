
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "gluestack-ui/nativewind utils | Build with NativeWind Components",
  description: "gluestack-ui/nativewind-utils provides a collection of utility functions for your gluestack-ui components. A must-have NativeWind UI library for faster and smoother UI development."
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