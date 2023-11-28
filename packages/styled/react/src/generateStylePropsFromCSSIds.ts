import { Dimensions, Platform } from 'react-native';
import { GluestackStyleSheet } from './style-sheet';
import { extractWidthValues } from './utils';

export function getClosestBreakpoint(
  values: Record<string, any>,
  point: number
) {
  const dimValues = Object.values(values);
  let index = -1;
  let breakpointsObj: any = {};
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
  return breakpoints[index];
}

function getMinWidthFromMediaQuery(mediaQuery: string) {
  const regex = /\(\s*min-width:\s*(\d+)px\s*\)/;
  const matches = regex.exec(mediaQuery);
  if (matches) {
    return parseInt(matches[1], 10);
  }
  return 0;
}

export function getClosestBreakpointValue(
  mediaQueries: Record<string, any>,
  value: number
) {
  if (!mediaQueries) return;

  const dimValues = Object.values(mediaQueries);
  let index: any = -1;

  let breakpointsObj: any = {};
  for (let i = 0; i < dimValues.length; i++) {
    const minWidth = getMinWidthFromMediaQuery(dimValues[i]);
    breakpointsObj[minWidth] = dimValues[i];
  }

  const breakpoints = Object.keys(breakpointsObj);
  for (let i = 0; i < breakpoints.length; i++) {
    if (parseInt(breakpoints[i]) === value) {
      index = breakpoints[i];
      break;
    } else if (parseInt(breakpoints[i]) > value && i !== 0) {
      index = breakpoints[i - 1];
      break;
    }
    // If windowWidth is greater than last available breakpoint clamp it to last index
    else if (parseInt(breakpoints[i]) < value && i === dimValues.length - 1) {
      index = breakpoints[i];
      break;
    }
  }

  return index;
}

export function isValidBreakpoint(
  config: any,
  queryCondition: any,
  width: any = Dimensions.get('window')?.width
) {
  const windowWidth = width;

  const currentBreakpointValue = getClosestBreakpointValue(
    config.tokens.mediaQueries,
    windowWidth
  );

  const queryWidth = extractWidthValues(queryCondition);

  if (queryWidth.length > 0) {
    if (queryWidth.length === 1) {
      if (queryWidth[0] !== null && queryWidth[0] <= currentBreakpointValue) {
        return true;
      }
    } else {
      if (
        currentBreakpointValue >= queryWidth[0] &&
        currentBreakpointValue <= queryWidth[1]
      ) {
        return true;
      }
    }
  }

  return false;
}

function getDataStyle(props: any, styleCSSIdsString: string) {
  if (Platform.OS === 'web') {
    if (props?.dataSet?.style && props?.['data-style']) {
      return (
        props['data-style'] +
        ' ' +
        props.dataSet.style +
        ' ' +
        styleCSSIdsString
      );
    } else if (props?.dataSet?.style) {
      return props.dataSet.style + ' ' + styleCSSIdsString;
    } else if (props?.['data-style']) {
      return props['data-style'] + ' ' + styleCSSIdsString;
    } else {
      return styleCSSIdsString;
    }
  } else {
    return '';
  }
}
export function generateStylePropsFromCSSIds(
  props: any,
  styleCSSIds: any,
  config: any,
  activeTheme: any,
  componentConfig: any
) {
  const propsStyles = Array.isArray(props?.style)
    ? props?.style
    : [props?.style];

  // for RN
  const styleObj: any = [];
  let styleCSSIdsString: any = '';

  if (styleCSSIds.length > 0) {
    if (Platform.OS !== 'web') {
      const nativeStyleMap = GluestackStyleSheet.getStyleMap();
      styleCSSIds.forEach((cssId: any) => {
        const nativeStyle = nativeStyleMap.get(cssId);

        if (nativeStyle) {
          const queryCondition = nativeStyle?.meta?.queryCondition;
          const styleSheet = nativeStyle?.resolved;
          if (queryCondition) {
            if (isValidBreakpoint(config, queryCondition)) {
              styleObj.push(styleSheet);
            }
          } else {
            styleObj.push(styleSheet);
          }
          if (nativeStyle.meta.themeCondition && activeTheme) {
            styleObj.push({
              ...nativeStyle.meta.themeCondition[activeTheme],
            });
          }
        }
      });
    } else {
      styleCSSIdsString = styleCSSIds.join(' ');
    }
  }

  Object.assign(props, {
    'style': propsStyles ? [...styleObj, ...propsStyles] : styleObj,
    'dataSet': {
      ...props?.dataSet,
      style: getDataStyle(props, styleCSSIdsString),
    },
    // DONOT REMOVE THIS LINE, THIS IS FOR SPECIFIC COMPONENTS LIKE next/link
    'data-style': getDataStyle(props, styleCSSIdsString),
  });

  if (Platform.OS === 'web') {
    Object.assign(props, {
      dataSet: {
        ...props?.dataSet,
        componentConfig: JSON.stringify(componentConfig),
      },
    });
  }

  return props;
}
