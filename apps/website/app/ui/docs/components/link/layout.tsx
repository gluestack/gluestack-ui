
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "gluestack-ui Link Component | React Native Link Installation",
  description: "Enhance navigation with a React Native link component. Seamless UI link design for intuitive user experiences. Learn more!"
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