
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    "title": "Upgrade to v2 with Codemod | gluestack-ui",
    "pageTitle": "Upgrade to v2 with Codemod",
    "description": "Upgrade to gluestack-ui v2 easily with Codemod. Automate code transformations for smooth migration from v1 to v2 and improve your web and mobile app development process."
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