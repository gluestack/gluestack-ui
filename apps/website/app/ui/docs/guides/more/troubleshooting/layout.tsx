
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Troubleshooting Guide",
  description: "Troubleshoot common Nativewind issues, including dark mode, Toast in Modal, flashing in Next.js, and React Native Web styling. Follow guides and create GitHub issues if unresolved."
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