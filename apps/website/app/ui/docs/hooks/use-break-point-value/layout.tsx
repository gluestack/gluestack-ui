
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "gluestack-ui useBreakpoint Component | Breakpoint Values Installation",
  description: "Learn how to use the useBreakpointValue hook to manage breaking point values, breakpoint components in Expo, React & React Native for responsive design."
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