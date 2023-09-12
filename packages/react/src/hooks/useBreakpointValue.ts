import { useWindowDimensions } from 'react-native';
import type { ICustomConfig } from '../types';
import {
  findLastValidBreakpoint,
  getClosestBreakpoint,
  hasValidBreakpointFormat,
} from './utils/';
import { useStyled } from '../StyledProvider';

type BreakPointValue = Partial<{
  // @ts-ignore
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
