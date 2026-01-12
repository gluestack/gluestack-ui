
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "gluestack-ui Button Component | Button Installation in React Native",
  description: "Discover a powerful button component for React & React Native with customizable size, shape, color, and behavior. Perfect for UI design & seamless user interactions."
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