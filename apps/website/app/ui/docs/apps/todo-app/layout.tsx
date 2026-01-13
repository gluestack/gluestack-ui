
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Todo App | React Native Todo App | gluestack-ui",
  description: "Build a React & React Native Todo App component with gluestack-ui. Explore gluestack-ui menu components to create a sleek, efficient Todo app interface. Perfect for your next project."
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