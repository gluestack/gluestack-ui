'use client';

export interface UIConfig {}
export interface UIComponents {}

declare module '@gluestack-style/react' {
  interface ICustomConfig extends UIConfig {}
  interface ICustomComponents extends UIComponents {}
}

export * from './components/unstyled';
export * from '@gluestack-style/react';
