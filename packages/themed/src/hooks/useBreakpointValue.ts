import { useWindowDimensions } from 'react-native';
import { useStyled, ICustomConfig } from '@gluestack-style/react';
import {
  findLastValidBreakpoint,
  getClosestBreakpoint,
  hasValidBreakpointFormat,
} from './utils.ts';

type BreakPointValue = Partial<{
  [key in keyof ICustomConfig['tokens']['breakpoints']]: any;
}>;

export function useBreakpointValue(values: BreakPointValue) {
  const windowWidth = useWindowDimensions()?.width;
  const theme = useStyled();
  const breakpoints = theme?.config?.tokens?.breakpoints;
  if (!breakpoints) {
    console.warn('No breakpoints found in config');
    return values;
  }
  if (hasValidBreakpointFormat(values, breakpoints)) {
    const currentBreakpoint = getClosestBreakpoint(breakpoints, windowWidth);
    return findLastValidBreakpoint(values, breakpoints, currentBreakpoint);
  } else {
    return values;
  }
}
