
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    "title": "FAQs | Migration from V1 to V2 | gluestack-ui",
    "pageTitle": "FAQs",
    "description": "Find answers to common questions about migrating from Gluestack v1 to v2, compatibility, new features, and integration with frameworks. Learn about new components, performance improvements, and more."
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