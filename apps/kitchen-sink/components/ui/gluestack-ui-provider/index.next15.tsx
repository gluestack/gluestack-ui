// This is a Next.js 15 compatible version of the GluestackUIProvider
'use client';
import React, { useEffect, useLayoutEffect } from 'react';
import { OverlayProvider } from '@gluestack-ui/core/overlay/creator';
import { ToastProvider } from '@gluestack-ui/core/toast/creator';
import { script } from './script';

export const useSafeLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export function GluestackUIProvider({
  mode = 'light',
  ...props
}: {
  mode?: 'light' | 'dark' | 'system';
  children?: React.ReactNode;
}) {
  useSafeLayoutEffect(() => {
    if (mode !== 'system') {
      const documentElement = document.documentElement;
      if (documentElement) {
        documentElement.classList.add(mode);
        documentElement.classList.remove(mode === 'light' ? 'dark' : 'light');
        documentElement.style.colorScheme = mode;
      }
    }
  }, [mode]);

  useSafeLayoutEffect(() => {
    if (mode !== 'system') return;
    const handleMediaQuery = (e: MediaQueryListEvent) => {
      script(e.matches ? 'dark' : 'light');
    };
    const media = window.matchMedia('(prefers-color-scheme: dark)');

    media.addEventListener('change', handleMediaQuery);

    return () => media.removeEventListener('change', handleMediaQuery);
  }, []);

  return (
    <OverlayProvider>
      <ToastProvider>{props.children}</ToastProvider>
    </OverlayProvider>
  );
}
