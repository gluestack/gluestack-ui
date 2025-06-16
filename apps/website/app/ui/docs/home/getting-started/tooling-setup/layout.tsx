
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "UI Tooling Setup | gluestack-UI | Install Tailwind CSS in React",
  description: "Setting up Tailwind CSS in React & React Native? Our UI tooling guide simplifies Tailwind installation. Learn how to install Tailwind in just a few steps!."
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