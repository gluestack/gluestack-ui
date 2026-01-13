
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Roadmap | gluestack-ui | Explore New Components and Enhancements",
  description: "Track upcoming gluestack-ui releases: new components (Date/Time Picker, BottomSheet), smoother animations, performance gains, NativeWind utility props, and DX upgrades."
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