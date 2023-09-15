import { useWindowDimensions } from 'react-native';
import type { ICustomConfig } from '../types';
import { useStyled } from '../StyledProvider';
import { isValidBreakpoint } from '../generateStylePropsFromCSSIds';
import { extractWidthValues } from '../utils';

type BreakPointValue = Partial<{
  // @ts-ignore
  [key in keyof ICustomConfig['tokens']['breakpoints']]: any;
}>;

export function useBreakpointValue(values: BreakPointValue) {
  let { width } = useWindowDimensions();
  const theme = useStyled();
  const mediaQueries = theme?.config?.tokens?.mediaQueries;

  let validBreakpoints: any = [];
  Object.keys(mediaQueries).forEach((key: any) => {
    const currentBreakpoint: any = extractWidthValues(mediaQueries[key]);
    const isValid = isValidBreakpoint(theme.config, mediaQueries[key], width);
    if (isValid) {
      validBreakpoints.push({ key: key, value: currentBreakpoint[0] });
    }
  });

  if (validBreakpoints.length === 0) {
    return values;
  }
  validBreakpoints.sort((a: any, b: any) => a.value - b.value);
  return values[validBreakpoints[validBreakpoints.length - 1].key];
}
