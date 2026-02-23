
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Image Viewer Component | gluestack-ui | Installation, Usage & API",
  description: "A powerful, interactive image viewer component with zoom, swipe navigation, and slide-to-dismiss gestures. Works across iOS, Android, and Web with smooth 60fps animations powered by React Native Reanimated."
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