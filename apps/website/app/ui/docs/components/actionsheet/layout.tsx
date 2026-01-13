
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "gluestack-ui ActionSheet | Installation, Usage & API",
  description: "Discover gluestack-ui’s ActionSheet for Expo, React & React Native. Create smooth action sheets with ease. Check our docs to learn more"
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