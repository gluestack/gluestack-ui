'use client';
import React, { useEffect } from 'react';
import { config } from './config';
import { OverlayProvider } from '@gluestack-ui/overlay';
import { ToastProvider } from '@gluestack-ui/toast';
import { setFlushStyles } from '@gluestack-ui/nativewind-utils/flush';

const styleTagId = 'gluestack-ui-nativewind';
const createStyle = (styleTagId: string) => {
  let style = document.createElement('style');
  style.id = styleTagId;
  style.appendChild(document.createTextNode(''));
  return style;
};

export function GluestackUIProvider({
  mode = 'light',
  ...props
}: {
  mode?: 'light' | 'dark';
  children?: React.ReactNode;
}) {
  const stringcssvars = Object.keys(config[mode]).reduce((acc, cur) => {
    acc += `${cur}:${config[mode][cur]};`;
    return acc;
  }, '');

  setFlushStyles(`:root {${stringcssvars}} `);

  useEffect(() => {
    if (config[mode] && typeof document !== 'undefined') {
      const element = document.documentElement;
      if (element) {
        element.classList.add(mode);
        element.classList.remove(mode === 'light' ? 'dark' : 'light');
        const head = element.querySelector('head');
        let style = head?.querySelector(`[id='${styleTagId}']`);
        if (!style) {
          style = createStyle(styleTagId);
        }
        style.innerHTML = `:root {${stringcssvars}} `;
        if (head) head.appendChild(style);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  return (
    <OverlayProvider>
      <ToastProvider>{props.children}</ToastProvider>
    </OverlayProvider>
  );
}
