import { useWindowDimensions } from 'react-native';
import { isValidBreakpoint } from '../generateStylePropsFromCSSIds';
import { useStyled } from '../StyledProvider';
import type { GSConfig } from '../types';

type BreakPointValue = Partial<{
  [key in keyof GSConfig['tokens']['breakpoints']]: boolean;
}>;

export const useMedia = (): BreakPointValue => {
  const theme = useStyled();
  const { width } = useWindowDimensions();
  const mediaQueries = theme?.config?.tokens?.mediaQueries;

  const breakpoints: any = {};

  Object.keys(mediaQueries).forEach((currentBreakPoint: any) => {
    breakpoints[currentBreakPoint] = isValidBreakpoint(
      theme?.config,
      mediaQueries[currentBreakPoint],
      width
    );
  });

  return breakpoints;
};
