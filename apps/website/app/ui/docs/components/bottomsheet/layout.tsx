import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'gluestack-ui Bottomsheet Component',
  description:
    "Implement a dynamic bottom sheet in React & React Native with gluestack's bottomsheet component. Learn how to integrate and customize the Bottom Sheet in React Native.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
