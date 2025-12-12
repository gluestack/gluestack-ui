// This is a Next.js 15 compatible version of the GluestackUIProvider
'use client';
import React, { useEffect, useLayoutEffect } from 'react';
import { config } from './config';
import { OverlayProvider } from '@gluestack-ui/core/overlay/creator';
import { ToastProvider } from '@gluestack-ui/core/toast/creator';
import { setFlushStyles } from '@gluestack-ui/utils/nativewind-utils';

const variableStyleTagId = 'nativewind-style';
const createStyle = (styleTagId: string) => {
  const style = document.createElement('style');
  style.id = styleTagId;
  style.appendChild(document.createTextNode(''));
  return style;
};

export const useSafeLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

/**
 * GluestackUIProvider - Sets up CSS variables and provides overlay/toast context.
 * 
 * Theme switching (dark/light class on HTML) is now handled by:
 * 1. Server-side cookie reading in layout.tsx
 * 2. An inline script that prevents flash
 * 3. The useTheme hook from lib/theme for toggling
 * 
 * This provider only handles CSS variable injection and overlay/toast providers.
 */
export function GluestackUIProvider({
  children,
}: {
  children?: React.ReactNode;
}) {
  // Generate CSS variables for both light and dark modes
  let cssVariablesWithMode = ``;
  Object.keys(config).forEach((configKey) => {
    cssVariablesWithMode +=
      configKey === 'dark' ? `\n .dark {\n ` : `\n:root {\n`;
    const cssVariables = Object.keys(
      config[configKey as keyof typeof config]
    ).reduce((acc: string, curr: string) => {
      acc += `${curr}:${config[configKey as keyof typeof config][curr]}; `;
      return acc;
    }, '');
    cssVariablesWithMode += `${cssVariables} \n}`;
  });

  setFlushStyles(cssVariablesWithMode);

  // Inject CSS variables into the document head
  useSafeLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      const documentElement = document.documentElement;
      if (documentElement) {
        const head = documentElement.querySelector('head');
        let style = head?.querySelector(`[id='${variableStyleTagId}']`);
        if (!style) {
          style = createStyle(variableStyleTagId);
          style.innerHTML = cssVariablesWithMode;
          if (head) head.appendChild(style);
        }
      }
    }
  }, []);

  return (
    <OverlayProvider>
      <ToastProvider>{children}</ToastProvider>
    </OverlayProvider>
  );
}
