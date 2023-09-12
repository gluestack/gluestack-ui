export function findLastValidBreakpoint(
  values: any,
  themeBreakpoints: any,
  currentBreakpoint: number
) {
  const valArray = Array.isArray(values)
    ? values
    : Object.keys(themeBreakpoints).map((bPoint: string) => values[bPoint]);
  return (
    valArray[currentBreakpoint] ??
    valArray
      .slice(0, currentBreakpoint + 1)
      .filter((v: any) => v ?? false)
      .pop()
  );
}
export function hasValidBreakpointFormat(breaks: any, themeBreakpoints?: any) {
  if (Array.isArray(breaks)) {
    return breaks.length ? true : false;
  } else if (typeof breaks === 'object' && breaks !== null) {
    const keys = Object.keys(breaks);
    const themeBreakPointKeys = Object.keys(themeBreakpoints);
    for (let i = 0; i < keys.length; i++) {
      if (themeBreakPointKeys.indexOf(keys[i]) === -1) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}
export function getClosestBreakpoint(
  values: Record<string, any>,
  point: number
) {
  const dimValues = Object.values(values);
  let index = -1;
  const breakpointsObj: any = {};
  for (let i = 0; i < dimValues.length; i++) {
    breakpointsObj[dimValues[i]] = i;
  }
  const breakpoints = Object.keys(breakpointsObj);
  for (let i = 0; i < breakpoints.length; i++) {
    if (parseInt(breakpoints[i]) === point) {
      index = breakpointsObj[breakpoints[i]];
      break;
    } else if (parseInt(breakpoints[i]) > point && i !== 0) {
      index = breakpointsObj[breakpoints[i - 1]];
      break;
    }
    // If windowWidth is greater than last available breakpoint clamp it to last index
    else if (parseInt(breakpoints[i]) < point && i === dimValues.length - 1) {
      index = breakpointsObj[breakpoints[i]];
      break;
    }
  }
  return index;
}
