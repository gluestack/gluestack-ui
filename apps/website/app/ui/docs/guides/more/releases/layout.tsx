
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Releases",
  description: "Stay updated with the latest gluestack-ui releases and improvements. Check out detailed release notes and GitHub updates for gluestack-ui."
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