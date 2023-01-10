import type React from 'react';
import { Box as BoxMain } from './Box';

export function createBox<T>({
  StyledBox,
}: {
  StyledBox: React.ComponentType<T>;
}) {
  const Box = BoxMain(StyledBox);
  Box.displayName = 'Box';
  return Box;
}
