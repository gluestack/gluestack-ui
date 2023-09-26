import React, { cloneElement } from 'react';
import { useBreakpointValue, useColorMode } from '@gluestack-style/react';
import IHiddenProps from './types';
import { useStyled } from '@gluestack-style/react';
import { Platform } from 'react-native';

export const Hidden = ({
  children,
  from,
  till,
  only,
  colorMode: colorModeforHide,
  platform: platformforHide,
}: IHiddenProps) => {
  const {
    config: {
      tokens: { breakpoints },
    },
  } = useStyled();
  const breakpointShowArray = Object.keys(breakpoints).map((key) => ({
    [key]: true,
  }));
  const colorMode = useColorMode();

  let showFrom = true;
  let showTill = true;
  let showOnly = true;
  let showColorMode = true;
  let showPlatform = true;

  // from case
  let breakPointFrom = { base: true } as any;
  if (from) {
    let flag = 0;
    breakPointFrom = { ...breakpoints };
    for (const bpvalue of breakpointShowArray) {
      for (const key in bpvalue) {
        breakPointFrom[key] = true;
        if (flag === 1) {
          breakPointFrom[key] = false;
        }
        if (key === from) {
          flag = 1;
          breakPointFrom[key] = false;
        }
      }
    }
  }
  showFrom = useBreakpointValue(breakPointFrom);

  // till case
  let breakPointTill = { base: true } as any;
  if (till) {
    let flag = 0;
    breakPointTill = { ...breakpoints };
    for (const bpvalue of breakpointShowArray) {
      for (const key in bpvalue) {
        breakPointTill[key] = false;
        if (flag === 1) {
          breakPointTill[key] = true;
        }
        if (key === till) {
          flag = 1;
        }
      }
    }
  }
  showTill = useBreakpointValue(breakPointTill);

  // only case
  let breakPointOnly = { base: true } as any;
  if (only) {
    showOnly = false;
    breakPointOnly = { ...breakpoints };
    for (const key in breakPointOnly) {
      breakPointOnly[key] = true;
    }
    if (typeof only === 'string') breakPointOnly[only] = false;
    else {
      for (const bpvalue of only) breakPointOnly[bpvalue] = false;
    }
  }
  showOnly = useBreakpointValue(breakPointOnly);

  // platform case
  if (platformforHide) {
    showPlatform = false;
    if (Platform.OS !== platformforHide) showPlatform = true;
  }

  // colorMode case
  if (colorModeforHide) {
    showColorMode = false;
    if (colorModeforHide !== colorMode) {
      showColorMode = true;
    }
  }
  return showFrom &&
    showTill &&
    showOnly &&
    showColorMode &&
    showPlatform &&
    children ? (
    <>{children}</>
  ) : (
    <>{cloneElement(children, { display: 'none' })}</>
  );
};
