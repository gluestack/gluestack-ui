
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "gluestack-ui Input Component",
  description: "A feature-rich React Native Input component – supports icons, validation, and styling options for seamless user input in your mobile app."
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