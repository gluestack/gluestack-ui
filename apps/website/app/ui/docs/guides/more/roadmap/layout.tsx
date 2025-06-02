
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    "title": "Roadmap | gluestack-ui | Explore New Components and Enhancements",
    "pageTitle": "Roadmap",
    "description": "New features like Tooltip Arrow, Nested Menu, and utility props support for NativeWind. Get ready for exciting updates, component redesigns, and performance boosts."
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