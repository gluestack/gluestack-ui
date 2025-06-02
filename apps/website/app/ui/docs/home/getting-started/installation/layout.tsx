
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    "title": "Installation | gluestack-ui | UI Component Library",
    "pageTitle": "Installation",
    "description": "Quickly set up gluestack-ui, the ultimate UI components library. Build modern, scalable interfaces effortlessly with our easy installation guide."
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