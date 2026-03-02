'use client';
import React, { useEffect, useLayoutEffect } from 'react';
import { OverlayProvider } from '@gluestack-ui/core/overlay/creator';
import { ToastProvider } from '@gluestack-ui/core/toast/creator';
import { script } from './script';

export type ModeType = 'light' | 'dark' | 'system';

export const useSafeLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export function GluestackUIProvider({
  mode = 'light',
  ...props
}: {
  mode?: ModeType;
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
    <>
      <script
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: `(${script.toString()})('${mode}')`,
        }}
      />
      <OverlayProvider>
        <ToastProvider>{props.children}</ToastProvider>
      </OverlayProvider>
    </>
  );
}
