
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Customizing Theme | gluestack-ui | Tailwind Css Theme",
  description: "Customize your UI theme in gluestack-ui v4 using shadcn-inspired semantic color tokens. Define your theme in config.ts and apply it via GluestackUIProvider for consistent, accessible styling."
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