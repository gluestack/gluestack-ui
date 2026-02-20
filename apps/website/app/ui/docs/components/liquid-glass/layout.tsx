
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "gluestack-ui LiquidGlass Component | Expo Glass Effect for React Native",
  description: "A glass effect component for React Native built on top of expo-glass-effect with gluestack-ui styling and NativeWind className support."
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