
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "gluestack-ui DateTimePicker Component | DateTimePicker React Native Installation, Usage & API",
  description: "A comprehensive date and time picker component for React Native. Supports date-only, time-only, and datetime modes with range selection capabilities."
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