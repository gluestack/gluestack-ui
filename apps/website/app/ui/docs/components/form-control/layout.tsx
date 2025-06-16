
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "gluestack-ui FormControl Component | React FormControl Installation",
  description: "Enhance form usability with FormControl components in React. Manage validation, disabled states, and more. Easy integration for seamless form handling."
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