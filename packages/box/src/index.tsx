import type React from 'react';
import { Box as BoxMain } from './Box';

export function createBox<T>({ Root }: { Root: React.ComponentType<T> }) {
  const Box = BoxMain(Root);
  Box.displayName = 'Box';
  return Box;
}
