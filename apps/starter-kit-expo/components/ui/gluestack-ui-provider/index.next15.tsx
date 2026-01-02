// This is a Next.js 15 compatible version of the GluestackUIProvider
'use client';
import React, { useEffect, useLayoutEffect } from 'react';
import { OverlayProvider } from '@gluestack-ui/core/overlay/creator';
import { ToastProvider } from '@gluestack-ui/core/toast/creator';

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
    if (mode === 'system') {
      const updateColorScheme = (e: MediaQueryListEvent | MediaQueryList) => {
        const documentElement = document.documentElement;
        const isDark = e.matches;
        if (documentElement) {
          documentElement.classList.remove('light', 'dark');
          documentElement.classList.add(isDark ? 'dark' : 'light');
          documentElement.style.colorScheme = isDark ? 'dark' : 'light';
        }
      };

      const media = window.matchMedia('(prefers-color-scheme: dark)');

      // Set initial value
      updateColorScheme(media);

      // Listen for changes
      media.addEventListener('change', updateColorScheme);

      return () => media.removeEventListener('change', updateColorScheme);
    }
  }, [mode]);

  return (
    <OverlayProvider>
      <ToastProvider>{props.children}</ToastProvider>
    </OverlayProvider>
  );
}
