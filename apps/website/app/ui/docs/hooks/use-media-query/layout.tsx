
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "gluestack-ui useMediaQuery Component | React UseMediaQuery Installation",
  description: "Implement responsive designs in React & React Native with the useMediaQuery hook and component. Learn how to use the React useMediaQuery hook today."
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