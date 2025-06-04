import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'gluestack-ui Slider Component',
  description:
    'Create smooth, interactive controls with the gluestack-ui React Native Slider component. Customize track height, values, and states for a seamless slider UI experience.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
