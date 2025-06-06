
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Learn to build an eCommerce app using gluestack-ui",
  description: "Learn to build an eCommerce app using the React & React Native framework with gluestack. Enhance your React Native skills with our comprehensive tutorial."
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