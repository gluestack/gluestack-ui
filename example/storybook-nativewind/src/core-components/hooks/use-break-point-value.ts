import { Dimensions, useWindowDimensions } from 'react-native';
import { useEffect, useState } from 'react';

import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from 'tailwind.config';

const TailwindTheme = resolveConfig(tailwindConfig);
const screenSize = TailwindTheme.theme.screens;

type breakpoints = keyof typeof screenSize | 'default';

type BreakPointValue = Partial<Record<breakpoints, any>>;

const resolveScreenWidth: any = {
  default: 0,
};

Object.entries(screenSize).forEach(([key, value]) => {
  resolveScreenWidth[key] = parseInt(value.replace('px', ''));
});

export const getBreakPointValue = (values: any, width: any) => {
  if (typeof values !== 'object') return values;

  let finalBreakPointResolvedValue: any;
  const mediaQueriesBreakpoints: any = [
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

  mediaQueriesBreakpoints.sort((a: any, b: any) => a.breakpoint - b.breakpoint);

  mediaQueriesBreakpoints.forEach((breakpoint: any, index: any) => {
    breakpoint.value = values.hasOwnProperty(breakpoint.key)
      ? // @ts-ignore
        values[breakpoint.key]
      : mediaQueriesBreakpoints[index - 1]?.value ||
        mediaQueriesBreakpoints[0]?.value;
  });

  const lastValidObject = getLastValidObject(mediaQueriesBreakpoints);

  if (!lastValidObject) {
    finalBreakPointResolvedValue = values;
  } else {
    finalBreakPointResolvedValue = lastValidObject?.value;
  }
  return finalBreakPointResolvedValue;
};

export function useBreakpointValue(values: BreakPointValue): any {
  const { width } = useWindowDimensions();

  const [currentBreakPointValue, setCurrentBreakPointValue] = useState(
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
  breakPointWidth: any,
  width: any = Dimensions.get('window')?.width
) {
  const windowWidth = width;

  if (windowWidth >= breakPointWidth) {
    return true;
  }
  return false;
}

function getLastValidObject(mediaQueries: any) {
  for (let i = mediaQueries.length - 1; i >= 0; i--) {
    if (mediaQueries[i].isValid) {
      return mediaQueries[i];
    }
  }
  return null; // No valid object found
}
