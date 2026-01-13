
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Starter Kit | React Native UI Kit | gluestack-ui",
  description: "Build apps faster with our Starter Kit for NextJs & React Native. Compatible with React Native Expo & NextJs, it offers a seamless React Native UI kit for streamlined app development."
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