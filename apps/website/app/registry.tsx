'use client';
import React, { useRef } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { flush } from '@gluestack-ui/utils/nativewind-utils';

export default function StyleRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const isServerInserted = useRef(false);

  useServerInsertedHTML(() => {
    if (!isServerInserted.current) {
      isServerInserted.current = true;

      // Get nativewind/gluestack styles that were prepared by GluestackUIProvider
      const nativewindStyles = flush();

      // Return the flushed styles for SSR
      if (nativewindStyles) {
        return <>{nativewindStyles}</>;
      }
    }
    return null;
  });

  return <>{children}</>;
}
