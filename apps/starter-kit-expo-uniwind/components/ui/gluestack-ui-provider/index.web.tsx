'use client';
import React, { useEffect, useLayoutEffect } from 'react';
import { OverlayProvider } from '@gluestack-ui/core/overlay/creator';
import { ToastProvider } from '@gluestack-ui/core/toast/creator';
import { Uniwind } from 'uniwind';
import { script } from './script';

export type ModeType = 'light' | 'dark' | 'system';

const useSafeLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export function GluestackUIProvider({
  mode = 'dark',
  ...props
}: {
  mode?: ModeType;
  children?: React.ReactNode;
}) {
  const handleMediaQuery = React.useCallback(
    (e: MediaQueryListEvent) => {
      const resolvedMode = e.matches ? 'dark' : 'light';
      script(resolvedMode);
      Uniwind.setTheme(resolvedMode);
    },
    []
  );

  useSafeLayoutEffect(() => {
    if (mode === 'system') return;
    script(mode);
    Uniwind.setTheme(mode);
  }, [mode]);

  useSafeLayoutEffect(() => {
    if (mode !== 'system') return;
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    media.addListener(handleMediaQuery);
    return () => media.removeListener(handleMediaQuery);
  }, [handleMediaQuery, mode]);

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
