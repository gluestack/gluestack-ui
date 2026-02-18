
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "gluestack-ui BottomSheet | Installation, Usage & API",
  description: "Discover gluestack-ui's BottomSheet for Expo, React & React Native. Create smooth bottom sheets with ease. Check our docs to learn more"
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