
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Dark Mode | gluestack-ui | Tailwind Dark Mode Theme",
  description: "Customize the theme in gluestack-ui v3 with Tailwind dark mode, UI theme dark mode colors, and React Native light & dark mode for different color schemes and color mode support."
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