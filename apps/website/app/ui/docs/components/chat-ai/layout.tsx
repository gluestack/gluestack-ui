
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "gluestack-ui ChatAi Component",
  description: ""
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