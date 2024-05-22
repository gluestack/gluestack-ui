'use client';
import React, { useContext } from 'react';
import { config } from './config';
import { OverlayProvider } from '@gluestack-ui/overlay';
import { ToastProvider } from '@gluestack-ui/toast';
import { setFlushStyles } from '@gluestack-ui/nativewind-utils/flush';
import { ThemeContext } from '../../../util/ThemeProvider';

export function GluestackUIProvider({
  mode = 'light',
  ...props
}: {
  mode?: 'light' | 'dark';
  children?: any;
}) {
  const { value } = useContext(ThemeContext);

  // const stringcssvars = Object.keys(config[mode]).reduce((acc, cur) => {
  //   acc += `${cur}:${config[mode][cur]};`;
  //   return acc;
  // }, "");

  const valueString = Object.keys(value).reduce((acc, cur) => {
    acc += `${cur}:${value[cur]};`;
    return acc;
  }, '');

  setFlushStyles(`:root {${valueString}} `);

  if (config[mode] && typeof document !== 'undefined') {
    const element = document.documentElement;
    if (element) {
      const head = element.querySelector('head');
      const style = document.createElement('style');
      style.innerHTML = `:root {${valueString}} `;
      if (head) head.appendChild(style);
    }
  }

  return (
    <OverlayProvider>
      <ToastProvider>{props.children}</ToastProvider>
    </OverlayProvider>
  );
}
