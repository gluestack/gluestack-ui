
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "gluestack-ui DateTimePicker Component | DateTimePicker Installation in React Native",
  description: "A cross-platform date and time picker component for React & React Native that uses native pickers on iOS/Android and a custom implementation on web."
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