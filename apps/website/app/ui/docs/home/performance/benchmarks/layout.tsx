import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Performance Benchmarks | gluestack-ui | Nativewind Performance',
  description:
    'gluestack-ui harnesses the power of NativeWind, a universal and highly performant styling library, to style the components, ensuring seamless optimized performance UI across platforms.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
