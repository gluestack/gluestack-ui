
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "gluestack-ui CheckBox Component | Checkbox Installation in React Native",
  description: "Build interactive forms with a checkbox component for React & React Native. Features include hover, focus, disabled states, and multiple checkbox selection."
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