
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Quick Start | Styled Components React & React Native UI Kit | gluestack-UI",
  description: "Get started with gluestack-ui! A React & React Native UI Starter Kit with Styled Components, powerful styling for seamless development. Start building now!"
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