import React, {
  // Component,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import type {
  ConfigType,
  CSSObject,
  OrderedSXResolved,
  Path,
  Styled,
  StyledResolved,
  StyledValue,
  SX,
  SXResolved,
  StyleIds,
  DefaultAndState,
} from './types';

import {
  resolvedTokenization,
  resolveTokensFromConfig,
  deepMerge,
  getResolvedTokenValueFromConfig,
} from './utils';
import { convertUtilityPropsToSX } from '@gluestack/ui-convert-utility-to-sx';
import { useStyled } from './StyledProvider';
import { propertyTokenMap } from './propertyTokenMap';
import merge from 'lodash.merge';
import { Platform } from 'react-native';
import { injectInStyle } from './injectInStyle';
import { updateCSSStyleInOrderedResolved } from './updateCSSStyleInOrderedResolved';
import { generateStylePropsFromCSSIds } from './generateStylePropsFromCSSIds';

import { set, get, onChange } from '@gluestack/color-mode';
import { useSxPropsStyleTagInjector } from './useSxPropsStyleTagInjector';
set('light');
function getWeightBaseOnPath(path: Path) {
  const weightObject: {
    styled: Array<any>;
    sx: Array<any>;
    state: Array<any>;
  } = {
    styled: [],
    sx: [],
    state: [],
  };
  const STYLED_PRECENDENCE: any = {
    baseStyle: 1,
    variants: 2,
    sizes: 3,
  };

  const SX_PRECEDENCE: any = {
    style: 1,
    platform: 2,
    colorMode: 3,
    queries: 4,
    state: 5,
    descendants: 6,
  };
  const STATE_PRECENDENCE: any = {
    indeterminate: 1,
    checked: 1,
    readOnly: 1,

    required: 2,
    invalid: 2,

    focus: 3,
    focusVisible: 4,
    hover: 5,
    pressed: 6,
    active: 6,
    loading: 7,

    disabled: 10,
  };

  const tempPath = [...path];

  for (let i = 0; i < tempPath.length; i++) {
    const currentValue = tempPath[i];

    let stateType: any = '';
    switch (currentValue) {
      case 'queries':
        i = i + 2;
        break;
      case 'state':
        stateType = tempPath[i + 1];
        i = i + 1;
        break;
      case 'descendants':
        break;
      default:
    }

    if (STYLED_PRECENDENCE[currentValue]) {
      weightObject.styled.push(STYLED_PRECENDENCE[currentValue]);
    }

    if (SX_PRECEDENCE[currentValue]) {
      weightObject.sx.push(SX_PRECEDENCE[currentValue]);
    }
    if (currentValue === 'state' && STATE_PRECENDENCE[stateType]) {
      weightObject.state.push(STATE_PRECENDENCE[stateType]);
    }
  }

  const weightObjectStyledValue = weightObject.styled.reduce(
    (partialSum, a) => partialSum + a,
    0
  );
  const weightObjectSxValue = weightObject.sx.reduce(
    (partialSum, a) => partialSum + a,
    0
  );
  const weightObjectStateValue = weightObject.state.reduce(
    (partialSum, a) => partialSum + a,
    0
  );

  let weightedStyleString = '';
  if (weightObjectStyledValue < 10) {
    weightedStyleString = '0' + weightObjectStyledValue;
  } else {
    weightedStyleString = '' + weightObjectStyledValue;
  }

  let weightedSxString = '';
  if (weightObjectSxValue < 10) {
    weightedSxString = '0' + weightObjectSxValue;
  } else {
    weightedSxString = '' + weightObjectSxValue;
  }

  let weightedStateString = '';
  if (weightObjectStateValue < 10) {
    weightedStateString = '0' + weightObjectStateValue;
  } else {
    weightedStateString = '' + weightObjectStateValue;
  }

  const weight = parseInt(
    weightedStateString + weightedSxString + weightedStyleString,
    10
  );

  return weight;
}

export function sxToSXResolved(
  sx: SX,
  path: Path = [],
  meta: any,
  CONFIG: any
): SXResolved {
  const resolvedCSSStyle = StyledValueToCSSObject(sx?.style, CONFIG);

  // console.log('hello here ***', sx?.style, resolvedCSSStyle);
  const styledValueResolvedWithMeta = {
    original: sx?.style,
    resolved: resolvedCSSStyle,
    meta: {
      ...meta,
      path,
      weight: getWeightBaseOnPath(path),
      // cssId: ,
      // cssRuleset: ,
    },
  };

  // console.log(styledValueResolvedWithMeta.meta, 'path here 111');

  // console.log(sx, '********');
  const ret: SXResolved = {
    //@ts-ignore
    styledValueResolvedWithMeta: styledValueResolvedWithMeta,
    //@ts-ignore
    queriesResolved: sx?.queries
      ? sx.queries.map((query, index) => {
          const resolvedCondition = resolveTokensFromConfig(CONFIG, {
            condition: query.condition,
          }).condition;

          const sxResolvedValue = sxToSXResolved(
            query.value,
            [...path, 'queries', index, query.condition],
            { queryCondition: resolvedCondition },
            CONFIG
          );

          if (sxResolvedValue?.styledValueResolvedWithMeta) {
            sxResolvedValue.styledValueResolvedWithMeta.meta.queryCondition =
              resolvedCondition;
          }

          return {
            original: {
              condition: query.condition,
              value: query.value,
            },
            resolved: {
              condition: resolvedCondition,
              value: {
                ...sxResolvedValue,
              },
            },
          };
        })
      : undefined,
    platform: sx?.platform
      ? Object.keys(sx.platform).reduce(
          (acc, key) => ({
            ...acc,
            [key]: sxToSXResolved(
              //@ts-ignore
              sx.platform[key],
              [...path, 'platform', key],
              meta,
              CONFIG
            ),
          }),
          {}
        )
      : undefined,
    colorMode: sx?.colorMode
      ? Object.keys(sx.colorMode).reduce((acc, key) => {
          const sxResolved = sxToSXResolved(
            //@ts-ignore
            sx.colorMode[key],
            [...path, 'colorMode', key],
            { colorMode: key },
            CONFIG
          );

          if (sxResolved?.styledValueResolvedWithMeta) {
            sxResolved.styledValueResolvedWithMeta.meta.colorMode = key;
          }
          return {
            ...acc,
            [key]: sxResolved,
          };
        }, {})
      : undefined,
    state: sx?.state
      ? Object.keys(sx.state).reduce(
          (acc, key) => ({
            ...acc,
            [key]: sxToSXResolved(
              //@ts-ignore
              sx.state[key],
              [...path, 'state', key],
              meta,
              CONFIG
            ),
          }),
          {}
        )
      : undefined,
    descendants: sx?.descendants
      ? Object.keys(sx.descendants).reduce(
          (acc, key) => ({
            ...acc,
            [key]: sxToSXResolved(
              //@ts-ignore
              sx.descendants[key],
              [...path, 'descendants', key],
              meta,
              CONFIG
            ),
          }),
          {}
        )
      : undefined,
  };

  // CSS computation based on Meta data
  // const { cssId, cssRuleset } = getCSSIdAndRuleset(
  //   ret.styledValueResolvedWithMeta,
  //   path
  // );

  // if(ret.queriesResolved) {
  //   // access the ret.queriesResolved[i].resolved.condition
  // }

  // console.log(ret.queriesResolved, 'ret ****');
  // console.log(ret.colorMode, 'colorMode ret ****');
  // ret.styledValueResolvedWithMeta.meta.cssId = cssId;
  // ret.styledValueResolvedWithMeta.meta.cssRuleset = cssRuleset;

  return ret;
}
export function StyledValueToCSSObject(
  input: StyledValue | undefined,
  CONFIG: any
): CSSObject {
  if (!input) {
    return {};
  }
  // return input;
  return resolvedTokenization(input, CONFIG);
}
export function SXResolvedToOrderedSXResolved(
  sxResolved: SXResolved
): OrderedSXResolved {
  let orderedSXResolved: any = [];
  if (sxResolved?.styledValueResolvedWithMeta?.original) {
    orderedSXResolved = [sxResolved.styledValueResolvedWithMeta];
  }

  if (sxResolved?.platform) {
    Object.keys(sxResolved.platform).forEach((key) => {
      //@ts-ignore
      const platformSXResolved = sxResolved?.platform[key];
      orderedSXResolved.push(
        ...SXResolvedToOrderedSXResolved(platformSXResolved)
      );
    });
  }
  if (sxResolved?.colorMode) {
    Object.keys(sxResolved.colorMode).forEach((key) => {
      //@ts-ignore
      const colorModeSXResolved = sxResolved.colorMode[key];
      orderedSXResolved.push(
        ...SXResolvedToOrderedSXResolved(colorModeSXResolved)
      );
    });
  }
  if (sxResolved?.queriesResolved) {
    sxResolved.queriesResolved.forEach((queryResolved) => {
      orderedSXResolved.push(
        //@ts-ignore

        ...SXResolvedToOrderedSXResolved(queryResolved.resolved.value)
      );
    });
  }
  if (sxResolved?.state) {
    Object.keys(sxResolved.state).forEach((key) => {
      //@ts-ignore
      const stateSXResolved = sxResolved.state[key];
      // stateSXResolved.styledValueResolvedWithMeta.meta.weight =
      //   SX_STYLE_PRECEDENCE.state + (STATE_PRECENDENCE[key] || 0) / 100;
      orderedSXResolved.push(...SXResolvedToOrderedSXResolved(stateSXResolved));
      // orderedSXResolved.push(stateSXResolved.styledValueResolvedWithMeta);
    });
  }
  if (sxResolved?.descendants) {
    Object.keys(sxResolved.descendants).forEach((key) => {
      //@ts-ignore
      const descendantSXResolved = sxResolved.descendants[key];
      orderedSXResolved.push(
        ...SXResolvedToOrderedSXResolved(descendantSXResolved)
      );
    });
  }
  return orderedSXResolved.sort(
    (a: any, b: any) => a.meta.weight - b.meta.weight
  );
}
export function styledToStyledResolved(
  styled: Styled,
  path: Path = [],
  CONFIG: any
): StyledResolved {
  return {
    baseStyle: styled?.baseStyle
      ? sxToSXResolved(styled.baseStyle, [...path, 'baseStyle'], {}, CONFIG)
      : undefined,
    variants: styled?.variants
      ? Object.keys(styled.variants).reduce(
          (acc, key) => ({
            ...acc,
            [key]: sxToSXResolved(
              //@ts-ignore
              styled.variants[key],
              [...path, 'variants', key],
              {},
              CONFIG
            ),
          }),
          {}
        )
      : undefined,
    sizes: styled?.sizes
      ? Object.keys(styled.sizes).reduce(
          (acc, key) => ({
            ...acc,
            [key]: sxToSXResolved(
              //@ts-ignore

              styled.sizes[key],
              [...path, 'sizes', key],
              {},
              CONFIG
            ),
          }),
          {}
        )
      : undefined,
  };
}

// export function flattenStyledResolvedWithMeta(styledResolved: StyledResolved) {
//   const flattedStyledResolvedArray = [];
//   flattedStyledResolvedArray.push(
//     styledResolved.baseStyle.styledValueResolvedWithMeta
//   );
//   Object.keys(styledResolved)
// }
export function styledResolvedToOrderedSXResolved(
  styledResolved: StyledResolved
): OrderedSXResolved {
  const orderedSXResolved: OrderedSXResolved = [
    //@ts-ignore
    ...SXResolvedToOrderedSXResolved(styledResolved?.baseStyle),
  ];

  if (styledResolved.variants) {
    Object.keys(styledResolved.variants).forEach((key) => {
      //@ts-ignore
      const variantSXResolved = styledResolved?.variants[key];
      // variantSXResolved.styledValueResolvedWithMeta.meta.weight =
      //   STYLED_PRECENDENCE.variants;
      orderedSXResolved.push(
        ...SXResolvedToOrderedSXResolved(variantSXResolved)
      );
    });
  }

  if (styledResolved.sizes) {
    Object.keys(styledResolved.sizes).forEach((key) => {
      //@ts-ignore
      const sizeSXResolved = styledResolved?.sizes[key];
      // sizeSXResolved.styledValueResolvedWithMeta.meta.weight =
      //   STYLED_PRECENDENCE.sizes;
      orderedSXResolved.push(...SXResolvedToOrderedSXResolved(sizeSXResolved));
    });
  }

  return orderedSXResolved.sort(
    (a: any, b: any) => a.meta.weight - b.meta.weight
  );
}

function checkAndPush(item: any, ret: any, keyToCheck: any) {
  function getIndexes(array: any, str: any) {
    return array
      .map((item: any, index: number) => (item === str ? index : -1))
      .filter((i: any) => i !== -1);
  }

  function createNestedObject(arr: any) {
    let obj = {};
    arr.reduce((acc: any, curr: any) => {
      return (acc[curr] = {});
    }, obj);
    return obj;
  }

  function setNestedObjectValue(obj: any, keyPath: any, value: any) {
    // If the key path is empty, return the value
    if (keyPath.length === 0) return value;

    // Otherwise, set the value at the current key path and recurse
    const key = keyPath[0];
    obj[key] = obj[key] || {};
    obj[key] = setNestedObjectValue(obj[key], keyPath.slice(1), value);
    return obj;
  }
  // keyToCheck = "baseStyle" | "variants" | "sizes"
  if (item.meta.path.includes(keyToCheck)) {
    if (Platform.OS === 'web' && !item.meta.path.includes('state')) {
      ret.default.push(item.meta.cssId);
    } else if (
      !item.meta.path.includes('state') &&
      !item.meta.path.includes('colorMode')
    ) {
      ret.default.push(item.meta.cssId);
    } else if (
      item.meta.path.includes('state') ||
      item.meta.path.includes('colorMode')
    ) {
      const allStates = getIndexes(item.meta.path, 'state');
      const allColorModes = getIndexes(item.meta.path, 'colorMode');

      const allStatesAndColorMode = [...allStates, ...allColorModes];

      let mergeAllStateKey: any = [];

      allStatesAndColorMode.forEach((statePath: any) => {
        const state = item.meta.path[statePath + 1];
        mergeAllStateKey.push(state);
      });

      let stateObject = createNestedObject(mergeAllStateKey);

      setNestedObjectValue(stateObject, mergeAllStateKey, {
        ids: [item.meta.cssId],
      });
      ret.state = deepMerge(ret.state, stateObject);
    }
    // else {
    //   const colorMode =
    //     item.meta.path[item.meta.path.lastIndexOf('colorMode') + 1];
    //   if (!ret.colorMode[colorMode]) {
    //     ret.colorMode[colorMode] = [];
    //   }
    //   ret.colorMode[colorMode].push(item.meta.cssId);
    // }
    // }
  }
}

// function getAllDescendantStyles(styles: OrderedSXResolved) {
//   return styles.filter((style) => style.meta.path.includes('descendants'));
// }

// function getDescendantStyles(styles: OrderedSXResolved, key: string) {
//   return styles.filter(
//     (style) =>
//       style.meta.path.includes('descendants') && style.meta.path.includes(key)
//   );
// }

// function getDescendantStylesIds(styles: OrderedSXResolved) {
//   return styles.map((style) => style.meta.cssId);
// }

// function getDefaultAndStateIds(arr: OrderedSXResolved): DefaultAndState {
//   //
//   const ret: DefaultAndState = {
//     default: [],
//     state: {},
//   };

//   for (let i in arr) {
//     const item = arr[i];
//     checkAndPush(item, ret, '', false);
//   }

//   console.log(ret, 'ret ....');
//   return ret;
// }

function getComponentStyleIds(arr: OrderedSXResolved): StyleIds {
  const ret: StyleIds = {
    defaultAndState: {
      default: [],
      state: {},
    },
    variants: {},
    sizes: {},
  };

  for (let i in arr) {
    const item = arr[i];
    checkAndPush(item, ret.defaultAndState, 'baseStyle');

    let variantName: string | number = '';

    if (item?.meta?.path?.includes('variants')) {
      variantName = item.meta.path[item.meta.path.indexOf('variants') + 1];

      if (!ret.variants[variantName])
        ret.variants[variantName] = { default: [], state: {} };

      checkAndPush(item, ret.variants[variantName], 'variants');
    }

    if (item?.meta?.path?.includes('sizes')) {
      variantName = item.meta.path[item.meta.path.indexOf('sizes') + 1];

      if (!ret.sizes[variantName])
        ret.sizes[variantName] = { default: [], state: {} };

      checkAndPush(item, ret.sizes[variantName], 'sizes');
    }
  }

  return ret;
}

function getDescendantStyleIds(arr: any, descendantStyle: any = []): StyleIds {
  const ret: any = {};
  // return ret;
  descendantStyle.forEach((style: any) => {
    const filteredOrderListByDescendant = arr.filter(
      (item: any) =>
        item.meta.path[item.meta.path.lastIndexOf('descendants') + 1] === style
    );

    ret[style] = getComponentStyleIds(filteredOrderListByDescendant);
  });

  return ret;
}

function getStateStyleCSSFromStyleIds(
  styleIdObject: DefaultAndState,
  states: any
) {
  const stateStyleCSSIds: Array<any> = [];

  if (states) {
    function isSubset(subset: any, set: any) {
      return subset.every((item: any) => set.includes(item));
    }

    function flattenObject(obj: any) {
      const flat: any = {};

      // Recursive function to flatten the object
      function flatten(obj: any, path: any = []) {
        // Iterate over the object's keys
        for (const key of Object.keys(obj)) {
          // If the value is an object, recurse
          if (key === 'ids') {
            flat[`${path.join('.')}`] = obj[key];
          } else if (typeof obj[key] === 'object') {
            flatten(obj[key], [...path, key]);
          } else {
            // Otherwise, add the key-value pair to the flat object
            flat[`${path.join('.')}`] = obj[key];
          }
        }
      }

      flatten(obj);
      return flat;
    }

    const flatternStyleIdObject = flattenObject(styleIdObject?.state);

    Object.keys(flatternStyleIdObject).forEach((styleId) => {
      const styleIdKeyArray = styleId.split('.');
      const currentStateArray = Object.keys(states).filter(
        (key) => states[key] === true
      );
      // console.log(currentStateArray, styleIdKeyArray, 'states here');
      if (isSubset(styleIdKeyArray, currentStateArray)) {
        stateStyleCSSIds.push(...flatternStyleIdObject[styleId]);
      }
    });
  }

  return stateStyleCSSIds;
}

function getMergedDefaultCSSIds(
  componentStyleIds: StyleIds,
  variant: string,
  size: string
) {
  const defaultStyleCSSIds = [];

  if (componentStyleIds && componentStyleIds?.defaultAndState) {
    defaultStyleCSSIds.push(...componentStyleIds?.defaultAndState?.default);
  }
  if (
    variant &&
    componentStyleIds?.variants &&
    componentStyleIds?.variants[variant]
  ) {
    defaultStyleCSSIds.push(...componentStyleIds?.variants[variant]?.default);
  }
  if (size && componentStyleIds?.sizes && componentStyleIds?.sizes[size]) {
    defaultStyleCSSIds.push(...componentStyleIds?.sizes[size]?.default);
  }

  return defaultStyleCSSIds;
}

const getMergeDescendantsStyleCSSIdsWithKey = (
  descendantStyles: any,
  variant: any,
  size: any
) => {
  const descendantStyleObj: any = {};

  Object.keys(descendantStyles).forEach((key) => {
    const styleObj = descendantStyles[key];

    const defaultBaseCSSIds = getMergedDefaultCSSIds(styleObj, variant, size);
    descendantStyleObj[key] = defaultBaseCSSIds;
  });

  return descendantStyleObj;
};

const Context = React.createContext({});

const globalStyleMap: Map<string, any> = new Map<string, any>();
//

// window['globalStyleMap'] = globalStyleMap;
// const globalOrderedList: any = [];
// setTimeout(() => {
//   const orderedList = globalOrderedList.sort(
//     (a: any, b: any) => a.meta.weight - b.meta.weight
//   );
//   injectInStyle(orderedList);
// });

function getMergedStateCSSIds(
  componentStyleIds: StyleIds,
  states: any,
  variant: string,
  size: string,
  COLOR_MODE: 'light' | 'dark'
) {
  const stateStyleCSSIds = [];

  states = {
    ...states,
    [COLOR_MODE]: true,
  };

  if (componentStyleIds.defaultAndState) {
    stateStyleCSSIds.push(
      ...getStateStyleCSSFromStyleIds(componentStyleIds.defaultAndState, states)
    );
  }

  if (
    variant &&
    componentStyleIds.variants &&
    componentStyleIds.variants[variant]
  ) {
    stateStyleCSSIds.push(
      ...getStateStyleCSSFromStyleIds(
        componentStyleIds.variants[variant],
        states
      )
    );
  }

  if (size && componentStyleIds.sizes && componentStyleIds.sizes[size]) {
    stateStyleCSSIds.push(
      ...getStateStyleCSSFromStyleIds(componentStyleIds.sizes[size], states)
    );
  }

  return stateStyleCSSIds;
}

function getAncestorCSSStyleIds(compConfig: any, context: any) {
  let ancestorStyleIds: any[] = [];
  if (compConfig.ancestorStyle?.length > 0) {
    compConfig.ancestorStyle.forEach((ancestor: any) => {
      if (context[ancestor]) {
        ancestorStyleIds = context[ancestor];
      }
    });
  }

  return ancestorStyleIds;
}
function mergeArraysInObjects(...objects: any) {
  const merged: any = {};
  for (const object of objects) {
    for (const [key, value] of Object.entries(object)) {
      if (
        merged.hasOwnProperty(key) &&
        Array.isArray(merged[key]) &&
        Array.isArray(value)
      ) {
        merged[key] = merged[key].concat(value);
      } else {
        merged[key] = value;
      }
    }
  }
  return merged;
}

// let resolvedComponentMap = new Map<Component, any>();

// function isAlreadyResolved(Component) {

// }
function resolvePlatformTheme(theme: any, platform: any) {
  Object.keys(theme).forEach((themeKey) => {
    if (themeKey !== 'style') {
      if (theme[themeKey].platform) {
        let temp = { ...theme[themeKey] };
        theme[themeKey] = merge({}, temp, theme[themeKey].platform[platform]);
        delete theme[themeKey].platform;
        resolvePlatformTheme(theme[themeKey], platform);
      } else if (themeKey === 'queries') {
        theme[themeKey].forEach((query: any) => {
          if (query.value.platform) {
            let temp = { ...query.value };
            query.value = merge({}, temp, query.value.platform[platform]);
            delete query.value.platform;
          }
          resolvePlatformTheme(query.value, platform);
        });
      } else {
        resolvePlatformTheme(theme[themeKey], platform);
      }
    }
  });
}

export function styled<P>(
  Component: React.ComponentType<P>,
  theme: Styled,
  componentStyleConfig: ConfigType,
  ExtendedConfig?: any
) {
  let styleHashCreated = false;

  let componentStyleIds: StyleIds; // = {};
  let componentDescendantStyleIds: StyleIds; // StyleIds = {};
  let componentExtendedConfig: any = {};
  resolvePlatformTheme(theme, Platform.OS);
  // const styledResolved = styledToStyledResolved(theme, [], CONFIG);
  // const orderedResovled = styledResolvedToOrderedSXResolved(styledResolved);

  // updateCSSStyleInOrderedResolved(orderedResovled);
  // //set css ruleset
  // globalOrderedList.push(...orderedResovled);

  // // StyleIds
  // const componentStyleIds = getComponentStyleIds(
  //   orderedResovled.filter((item) => !item.meta.path?.includes('descendants'))
  // );

  // if (componentStyleConfig.DEBUG === 'INPUT') {
  //   // console.log(componentStyleIds, 'hello state here >>');
  // }

  // // Descendants
  // const descendantStyleIds = getDescendantStyleIds(
  //   orderedResovled.filter((item) => item.meta.path?.includes('descendants')),
  //   componentStyleConfig.descendantStyle
  // );

  //

  const NewComp = (properties: any, ref: any) => {
    const styledContext = useStyled();
    const CONFIG = { ...styledContext.config, propertyTokenMap };
    const [COLOR_MODE, setCOLOR_MODE] = useState(get() as 'light' | 'dark');

    onChange((colorMode: any) => {
      if (Platform.OS !== 'web') {
        setCOLOR_MODE(colorMode);
      }
    });

    if (!styleHashCreated) {
      componentExtendedConfig = CONFIG;
      if (ExtendedConfig) {
        componentExtendedConfig = merge({}, CONFIG, ExtendedConfig);
      }
      // if (componentStyleConfig.DEBUG === 'BUTTON_STYLED') {
      //   console.log(componentExtendedConfig, '>>>>');
      // }

      /* Boot time */
      const styledResolved = styledToStyledResolved(
        theme,
        [],
        componentExtendedConfig
      );

      if (componentStyleConfig.DEBUG === 'STYLED_BUTTON') {
        // console.log(styledResolved, 'resolved style');
      }
      const orderedResovled = styledResolvedToOrderedSXResolved(styledResolved);

      updateCSSStyleInOrderedResolved(orderedResovled);

      const componentOrderResolved = orderedResovled.filter(
        (item) => !item.meta.path?.includes('descendants')
      );
      const descendantOrderResolved = orderedResovled.filter((item) =>
        item.meta.path?.includes('descendants')
      );

      // if (componentStyleConfig.DEBUG === 'ACTIONSHEET_ITEM') {
      //   console.log(styledResolved, 'porororor');
      // }

      injectInStyle(
        componentOrderResolved,
        'css-injected-boot-time',
        globalStyleMap
      );

      injectInStyle(
        descendantOrderResolved,
        'css-injected-boot-time-descendant',
        globalStyleMap
      );

      //set css ruleset
      // globalOrderedList.push(...orderedResovled);

      // StyleIds
      componentStyleIds = getComponentStyleIds(componentOrderResolved);

      // Descendants
      componentDescendantStyleIds = getDescendantStyleIds(
        descendantOrderResolved,
        componentStyleConfig.descendantStyle
      );

      styleHashCreated = true;
      /* Boot time */
    }

    // console.log(
    //   componentStyleIds.current,
    //   descendantStyleIds.current,
    //   '*****',
    //   componentStyleConfig,
    //   resolved
    // );
    const mergedWithUtilitProps = {
      ...theme?.defaultProps,
      ...properties,
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { children, variant, size, states, colorMode, ...props } =
      mergedWithUtilitProps;

    // Inline prop based style resolution
    const resolvedInlineProps = {};
    if (
      componentStyleConfig.resolveProps &&
      Object.keys(componentExtendedConfig).length > 0
    ) {
      componentStyleConfig.resolveProps.forEach((toBeResovledProp) => {
        if (props[toBeResovledProp]) {
          //@ts-ignore
          resolvedInlineProps[toBeResovledProp] =
            getResolvedTokenValueFromConfig(
              componentExtendedConfig,
              props,
              toBeResovledProp,
              props[toBeResovledProp]
            );
          delete props[toBeResovledProp];
        }
      });
    }

    const { sxProps: sx, mergedProps } = convertUtilityPropsToSX(
      componentExtendedConfig,
      componentStyleConfig?.descendantStyle,
      props
    );

    const contextValue = useContext(Context);
    const applyComponentStyleCSSIds = getMergedDefaultCSSIds(
      //@ts-ignore
      componentStyleIds,
      variant,
      size
    );

    // console.log(componentStyleIds, 'hello hee');
    const [applyComponentStateStyleIds, setApplyComponentStateStyleIds] =
      useState([]);

    const applyDescendantsStyleCSSIdsWithKey =
      getMergeDescendantsStyleCSSIdsWithKey(
        componentDescendantStyleIds,
        variant,
        size
      );

    const [
      applyDescendantStateStyleCSSIdsWithKey,
      setApplyDescendantStateStyleCSSIdsWithKey,
    ] = useState({});

    // ancestorCSSStyleId
    const applyAncestorStyleCSSIds = getAncestorCSSStyleIds(
      componentStyleConfig,
      contextValue
    );

    // const [applyComponentStyleIds, setApplyComponentStyleIds] = useState([]);

    const sxComponentStyleIds = useRef({});
    const sxDescendantStyleIds = useRef({});

    // const [applySxStyleCSSIds, setApplySxStyleCSSIds] = useState([]);
    const applySxStyleCSSIds = useRef([]);

    const applySxDescendantStyleCSSIdsWithKey = useRef({});

    const [applySxStateStyleCSSIds, setApplyStateSxStyleCSSIds] = useState([]);
    const [
      applySxDescendantStateStyleCSSIdsWithKey,
      setApplySxDescendantStateStyleCSSIdsWithKey,
    ] = useState({});

    // SX resolution
    const styleTagId = useRef(
      `style-tag-${Math.random().toString().slice(2, 17)}`
    );

    useSxPropsStyleTagInjector(styleTagId, sx);

    // FOR SX RESOLUTION
    let inLineSxTheme = {
      baseStyle: sx,
    };
    resolvePlatformTheme(inLineSxTheme, Platform.OS);
    const sxStyledResolved = styledToStyledResolved(
      inLineSxTheme,
      [],
      componentExtendedConfig
    );

    const orderedSXResolved =
      styledResolvedToOrderedSXResolved(sxStyledResolved);

    updateCSSStyleInOrderedResolved(orderedSXResolved);
    injectInStyle(orderedSXResolved, styleTagId.current, globalStyleMap);

    // const sxComponentStyleIds =
    sxComponentStyleIds.current = getComponentStyleIds(
      orderedSXResolved.filter(
        (item) => !item.meta.path?.includes('descendants')
      )
    );

    const sxStyleCSSIds = getMergedDefaultCSSIds(
      //@ts-ignore
      sxComponentStyleIds.current,
      variant,
      size
    );
    //@ts-ignore
    applySxStyleCSSIds.current = sxStyleCSSIds;

    // if (componentStyleConfig?.DEBUG === 'AVATAR') {
    //   console.log(
    //     sxStyleCSSIds,
    //     sx,
    //     orderedResovled.filter(
    //       (item) => !item.meta.path?.includes('descendants')
    //     ),
    //     'SX HERE'
    //   );
    // }
    // setApplySxStyleCSSIds(sxStyleCSSIds);
    // setApplySxStyleCSSIds(sxStyleCSSIds);

    // SX descendants
    sxDescendantStyleIds.current = getDescendantStyleIds(
      orderedSXResolved.filter((item) =>
        item.meta.path?.includes('descendants')
      ),
      componentStyleConfig.descendantStyle
    );

    const sxDescendantsStyleCSSIdsWithKey =
      getMergeDescendantsStyleCSSIdsWithKey(
        sxDescendantStyleIds.current,
        variant,
        size
      );
    applySxDescendantStyleCSSIdsWithKey.current =
      sxDescendantsStyleCSSIdsWithKey;

    // Style ids resolution

    useEffect(() => {
      // for component style
      const mergedStateIds: any = getMergedStateCSSIds(
        //@ts-ignore
        componentStyleIds,
        states,
        variant,
        size,
        COLOR_MODE
      );

      // console.log(mergedStateIds, states, '*******>>>');
      setApplyComponentStateStyleIds(mergedStateIds);

      // for sx props
      const mergedSxStateIds: any = getMergedStateCSSIds(
        //@ts-ignore

        sxComponentStyleIds.current,
        states,
        variant,
        size,
        COLOR_MODE
      );
      setApplyStateSxStyleCSSIds(mergedSxStateIds);

      // for descendants
      const mergedDescendantsStyle: any = {};
      Object.keys(componentDescendantStyleIds).forEach((key) => {
        const mergedStyle = getMergedStateCSSIds(
          //@ts-ignore

          componentDescendantStyleIds[key],
          states,
          variant,
          size,
          COLOR_MODE
        );
        mergedDescendantsStyle[key] = mergedStyle;
      });
      setApplyDescendantStateStyleCSSIdsWithKey(mergedDescendantsStyle);

      // for sx descendants

      const mergedSxDescendantsStyle: any = {};
      Object.keys(sxDescendantStyleIds.current).forEach((key) => {
        // console.log(sxDescendantStyleIds.current, 'hhhhhh11');
        const mergedStyle = getMergedStateCSSIds(
          //@ts-ignore
          sxDescendantStyleIds.current[key],
          states,
          variant,
          size,
          COLOR_MODE
        );
        mergedSxDescendantsStyle[key] = mergedStyle;
      });
      setApplySxDescendantStateStyleCSSIdsWithKey(mergedSxDescendantsStyle);
    }, [size, states, variant, COLOR_MODE]);

    const descendentCSSIds = React.useMemo(() => {
      return mergeArraysInObjects(
        applyDescendantsStyleCSSIdsWithKey,
        applyDescendantStateStyleCSSIdsWithKey,
        applySxDescendantStyleCSSIdsWithKey.current,
        applySxDescendantStateStyleCSSIdsWithKey,
        contextValue
      );
    }, [
      applyDescendantsStyleCSSIdsWithKey,
      applyDescendantStateStyleCSSIdsWithKey,
      applySxDescendantStateStyleCSSIdsWithKey,
      applySxDescendantStyleCSSIdsWithKey,
      contextValue,
    ]);

    // console.log(
    //   applySxDescendantStyleCSSIdsWithKey,
    //   applySxDescendantStateStyleCSSIdsWithKey,
    //   'sx descendants'
    // );

    // console.log('Ancestor style', applyAncestorStyleCSSIds);

    // if (componentStyleConfig.DEBUG === 'AVATAR') {
    //   console.log(
    //     // componentStyleConfig,
    //     applySxStyleCSSIds,
    //     'hello descendentCSSIds'
    //   );
    // }

    const styleCSSIds = [
      ...applyComponentStyleCSSIds,
      ...applyComponentStateStyleIds,
      ...applyAncestorStyleCSSIds,
      ...applySxStyleCSSIds.current,
      ...applySxStateStyleCSSIds,
    ];

    const resolvedStyleProps = generateStylePropsFromCSSIds(
      props,
      styleCSSIds,
      globalStyleMap,
      CONFIG
    );

    const component = (
      <Component
        {...mergedProps}
        {...resolvedInlineProps}
        {...resolvedStyleProps}
        ref={ref}
      >
        {children}
      </Component>
    );

    if (
      componentStyleConfig?.descendantStyle &&
      componentStyleConfig?.descendantStyle?.length > 0
    ) {
      return (
        <Context.Provider value={descendentCSSIds}>
          {component}
        </Context.Provider>
      );
    }
    return component;
  };

  const StyledComp = React.forwardRef(NewComp);
  // @ts-ignore
  // StyledComp.config = componentStyleConfig;
  return StyledComp;
}
