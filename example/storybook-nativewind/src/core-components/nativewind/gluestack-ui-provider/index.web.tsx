'use client';
import React from 'react';
import { config } from './config';
import { OverlayProvider } from '@gluestack-ui/overlay';
import { ToastProvider } from '@gluestack-ui/toast';

export function GluestackUIProvider({
  mode = 'light',
  ...props
}: {
  mode?: 'light' | 'dark';
  children?: any;
}) {
  if (config[mode] && typeof document !== 'undefined') {
    const element = document.documentElement;
    if (element) {
      const head = element.querySelector('head');
      const style = document.createElement('style');
      const stringcssvars = Object.keys(config[mode]).reduce((acc, cur) => {
        acc += `${cur}:${config[mode][cur]};`;
        return acc;
      }, '');
      style.innerHTML = `:root {${stringcssvars}} `;
      if (head) head.appendChild(style);
    }
  }
  return (
    <OverlayProvider>
      <ToastProvider>{props.children}</ToastProvider>
    </OverlayProvider>
  );
}
