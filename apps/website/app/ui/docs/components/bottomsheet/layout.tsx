
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "gluestack-ui BottomSheet Component | React Native Bottom Sheet",
  description: "A bottom sheet component for React Native built on top of @gorhom/bottom-sheet with gluestack-ui styling support."
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