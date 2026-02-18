
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "gluestack-ui Calendar Component | Calendar Installation in React Native",
  description: "A versatile calendar component for React & React Native with support for single, multiple, and range date selection. Features include event markers, disabled dates, week numbers, and customizable styling."
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