import { useWindowDimensions } from 'react-native';
import type { ICustomConfig } from '../types';
import { useStyled } from '../StyledProvider';
import { isValidBreakpoint } from '../generateStylePropsFromCSSIds';
import { extractWidthValues } from '../utils';

type BreakPointValue = Partial<{
  // @ts-ignore
  [key in keyof ICustomConfig['tokens']['breakpoints']]: any;
}>;

function getLastValidObject(mediaQueries: any) {
  for (let i = mediaQueries.length - 1; i >= 0; i--) {
    if (mediaQueries[i].isValid) {
      return mediaQueries[i];
    }
  }
  return null; // No valid object found
}

export function useBreakpointValue(values: BreakPointValue) {
  let { width } = useWindowDimensions();
  const theme = useStyled();
  const mediaQueries = theme?.config?.tokens?.mediaQueries;

  let mediaQueriesBreakpoints: any = [];

  Object.keys(mediaQueries).forEach((key: any) => {
    const currentBreakpoint: any = extractWidthValues(mediaQueries[key]);
    const isValid = isValidBreakpoint(theme.config, mediaQueries[key], width);

    mediaQueriesBreakpoints.push({
      key: key,
      breakpoint: currentBreakpoint[0],
      query: mediaQueries[key],
      isValid: isValid,
    });
  });

  mediaQueriesBreakpoints.sort((a: any, b: any) => a.breakpoint - b.breakpoint);

  mediaQueriesBreakpoints.forEach((breakpoint: any, index: any) => {
    breakpoint.value = values.hasOwnProperty(breakpoint.key)
      ? values[breakpoint.key]
      : mediaQueriesBreakpoints[index - 1].value;
  });

  const lastValidObject = getLastValidObject(mediaQueriesBreakpoints);

  if (!lastValidObject) {
    return values;
  }

  return lastValidObject.value;
}
