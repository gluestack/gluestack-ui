
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Frequently Asked Questions - Discord | gluestack-ui",
  description: "Find answers to common questions about gluestack-ui on Discord. Explore FAQs, troubleshooting tips, and best practices to enhance your development experience."
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