
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    "title": "Introduction | gluestack-ui",
    "pageTitle": "Introduction",
    "description": "React & React Native Components & Patterns (copy-paste components & patterns crafted with Tailwind CSS (NativeWind))"
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