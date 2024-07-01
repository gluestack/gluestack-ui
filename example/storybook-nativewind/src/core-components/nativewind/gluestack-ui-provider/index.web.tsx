'use client';
import React, { useEffect, useState, createContext } from 'react';
import { config } from './config';
import { OverlayProvider } from '@gluestack-ui/overlay';
import { ToastProvider } from '@gluestack-ui/toast';
import { setFlushStyles } from '@gluestack-ui/nativewind-utils/flush';

const styleTagId = 'gluestack-ui-nativewind';
const createStyle = (styleTagId: any) => {
  let style = document.createElement('style');
  style.id = styleTagId;
  style.appendChild(document.createTextNode(''));
  return style;
};

export const GluestackUIContext = createContext<any>({});

export function GluestackUIProvider({
  mode = 'light',
  ...props
}: {
  mode?: 'light' | 'dark';
  children?: any;
}) {
  const [colorMode, setColorMode] = useState<'light' | 'dark'>(mode);

  const stringcssvars = Object.keys(config[colorMode]).reduce((acc, cur) => {
    acc += `${cur}:${config[colorMode][cur]};`;
    return acc;
  }, '');

  setFlushStyles(`:root {${stringcssvars}} `);

  useEffect(() => {
    setColorMode(mode);
  }, [mode]);

  useEffect(() => {
    if (config[colorMode] && typeof document !== 'undefined') {
      const element = document.documentElement;
      if (element) {
        element.classList.add(colorMode);
        element.classList.remove(colorMode === 'light' ? 'dark' : 'light');
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
  }, [colorMode]);

  return (
    <GluestackUIContext.Provider value={{ colorMode, setColorMode }}>
      <OverlayProvider>
        <ToastProvider>{props.children}</ToastProvider>
      </OverlayProvider>
    </GluestackUIContext.Provider>
  );
}
