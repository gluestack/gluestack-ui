import { Dimensions, useWindowDimensions } from 'react-native';
import { useEffect, useState } from 'react';

import resolveConfig from 'tailwindcss/resolveConfig';
import * as tailwindConfig from '@/tailwind.config';

const TailwindTheme = resolveConfig(tailwindConfig as any);
const screenSize = TailwindTheme.theme.screens;

type breakpoints = keyof typeof screenSize | 'default';

type MediaQueriesBreakpoints = {
  key: breakpoints;
  breakpoint: number;
  isValid: boolean;
  value?: unknown;
};

type BreakPointValue = Partial<Record<breakpoints, unknown>>;

const resolveScreenWidth: Record<breakpoints, number> = {
  default: 0,
};

Object.entries(screenSize).forEach(([key, value]) => {
  if (typeof value === 'string') {
    resolveScreenWidth[key] = parseInt(value.replace('px', ''), 10);
  }
});

export const getBreakPointValue = (
  values: BreakPointValue,
  width: number
): unknown => {
  if (typeof values !== 'object') return values;

  let finalBreakPointResolvedValue: unknown;
  const mediaQueriesBreakpoints: Array<MediaQueriesBreakpoints> = [
    {
      key: 'default',
      breakpoint: 0,
      isValid: true,
    },
  ];
  Object.keys(resolveScreenWidth).forEach((key) => {
    const isValid = isValidBreakpoint(resolveScreenWidth[key], width);

    mediaQueriesBreakpoints.push({
      key: key,
      breakpoint: resolveScreenWidth[key],
      isValid: isValid,
    });
  });

  mediaQueriesBreakpoints.sort(
    (a: MediaQueriesBreakpoints, b: MediaQueriesBreakpoints) =>
      a.breakpoint - b.breakpoint
  );

  mediaQueriesBreakpoints.forEach(
    (breakpoint: MediaQueriesBreakpoints, index: number) => {
      breakpoint.value = values.hasOwnProperty(breakpoint.key)
        ? values[breakpoint.key]
        : mediaQueriesBreakpoints[index - 1]?.value ||
          mediaQueriesBreakpoints[0]?.value;
    }
  );

  const lastValidObject = getLastValidObject(mediaQueriesBreakpoints);

  if (!lastValidObject) {
    finalBreakPointResolvedValue = values;
  } else {
    finalBreakPointResolvedValue = lastValidObject.value;
  }
  return finalBreakPointResolvedValue;
};

export function useBreakpointValue(values: BreakPointValue): unknown {
  const { width } = useWindowDimensions();

  const [currentBreakPointValue, setCurrentBreakPointValue] = useState<unknown>(
    getBreakPointValue(values, width)
  );

  useEffect(() => {
    if (typeof values === 'object') {
      const finalBreakPointResolvedValue = getBreakPointValue(values, width);
      setCurrentBreakPointValue(finalBreakPointResolvedValue);
    }
  }, [values, width]);

  if (typeof values !== 'object') return values;

  return currentBreakPointValue;
}

export function isValidBreakpoint(
  breakPointWidth: number,
  width: number = Dimensions.get('window')?.width || 0
) {
  const windowWidth = width;

  return windowWidth >= breakPointWidth;
}

function getLastValidObject(
  mediaQueries: Array<{
    key: breakpoints;
    breakpoint: number;
    isValid: boolean;
    value?: unknown;
  }>
) {
  for (let i = mediaQueries.length - 1; i >= 0; i--) {
    if (mediaQueries[i].isValid) {
      return mediaQueries[i];
    }
  }
  return null; // No valid object found
}
