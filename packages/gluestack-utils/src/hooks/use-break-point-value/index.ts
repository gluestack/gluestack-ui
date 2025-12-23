import { Dimensions, useWindowDimensions } from 'react-native';
import { useEffect, useState } from 'react';

// Default Tailwind breakpoints
const DEFAULT_BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

type Breakpoints = Record<string, number>;
type BreakpointKey<T extends Breakpoints> = keyof T | 'default';
type BreakPointValue<T extends Breakpoints = typeof DEFAULT_BREAKPOINTS> = Partial<Record<BreakpointKey<T>, unknown>>;

type MediaQueriesBreakpoints<T extends Breakpoints> = {
  key: BreakpointKey<T>;
  breakpoint: number;
  isValid: boolean;
  value?: unknown;
};

function getBreakPointValue<T extends Breakpoints>(
  values: BreakPointValue<T>,
  width: number,
  breakpoints: T
): unknown {
  if (typeof values !== 'object') return values;

  let finalBreakPointResolvedValue: unknown;
  const mediaQueriesBreakpoints: Array<MediaQueriesBreakpoints<T>> = [
    {
      key: 'default',
      breakpoint: 0,
      isValid: true,
    },
  ];

  Object.entries(breakpoints).forEach(([key, breakpointWidth]) => {
    const isValid = isValidBreakpoint(breakpointWidth, width);

    mediaQueriesBreakpoints.push({
      key: key as BreakpointKey<T>,
      breakpoint: breakpointWidth,
      isValid: isValid,
    });
  });

  mediaQueriesBreakpoints.sort(
    (a: MediaQueriesBreakpoints<T>, b: MediaQueriesBreakpoints<T>) =>
      a.breakpoint - b.breakpoint
  );

  mediaQueriesBreakpoints.forEach(
    (breakpoint: MediaQueriesBreakpoints<T>, index: number) => {
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
}

export function createBreakpointHook<T extends Breakpoints = typeof DEFAULT_BREAKPOINTS>(
  customBreakpoints?: T
) {
  const breakpoints = (customBreakpoints || DEFAULT_BREAKPOINTS) as T;

  return function useBreakpointValue(values: BreakPointValue<T>): unknown {
    const { width } = useWindowDimensions();

    const [currentBreakPointValue, setCurrentBreakPointValue] = useState<unknown>(
      getBreakPointValue(values, width, breakpoints)
    );

    useEffect(() => {
      if (typeof values === 'object') {
        const finalBreakPointResolvedValue = getBreakPointValue(
          values,
          width,
          breakpoints
        );
        setCurrentBreakPointValue(finalBreakPointResolvedValue);
      }
    }, [values, width]);

    if (typeof values !== 'object') return values;

    return currentBreakPointValue;
  };
}

// Default export for backward compatibility
export function useBreakpointValue(
  values: BreakPointValue<typeof DEFAULT_BREAKPOINTS>
): unknown {
  const { width } = useWindowDimensions();

  const [currentBreakPointValue, setCurrentBreakPointValue] = useState<unknown>(
    getBreakPointValue(values, width, DEFAULT_BREAKPOINTS)
  );

  useEffect(() => {
    if (typeof values === 'object') {
      const finalBreakPointResolvedValue = getBreakPointValue(
        values,
        width,
        DEFAULT_BREAKPOINTS
      );
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

function getLastValidObject<T extends Breakpoints>(
  mediaQueries: Array<MediaQueriesBreakpoints<T>>
) {
  for (let i = mediaQueries.length - 1; i >= 0; i--) {
    if (mediaQueries[i].isValid) {
      return mediaQueries[i];
    }
  }
  return null;
}

// Export getBreakPointValue for users who need it
export { getBreakPointValue };