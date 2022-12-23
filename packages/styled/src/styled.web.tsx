/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-nocheck
import React, { useContext, useEffect, useRef, useState } from 'react';
import { inject } from '@gluestack/css-injector';
import type { ConfigType, ITheme, ThemeType } from './types';
import { Cssify } from '@gluestack/cssify';

// import { nbConfig } from './../../';

// setTimeout(() => {
// console.log(config, '*****');

// const css = Cssify.create(
//   {
//     xyz: {
//       style: {
//         background: 'red',
//       },
//       condition: '@media (min-width: 640px)',
//       colorMode: 'dark',
//     },
//   },
//   'style'
// );

// console.log(css, 'css object');

// });
import {
  resolvedTokenization,
  resolveTokensFromConfig,
  getTokenFromConfig,
} from './utils';
import { convertUtilityPropsToSX } from '@gluestack/ui-convert-utility-to-sx';

// *******
//

type StyledValue = { [key: string]: any }; // This contains aliases and tokens
type CSSObject = { [key: string]: any };
type PLATFORMS = 'ios' | 'android' | 'web' | 'mobile';
type COLORMODES = 'dark' | 'light';
type STATES = 'hover' | 'active' | 'focus' | 'focusVisible';
type Path = Array<string>;
type QueryType = {
  condition: string;
  value: SX;
};

type QueryTypeResolved = {
  original: QueryType;
  resolved: QueryType;
};
type SX = {
  style?: StyledValue;
  queries?: Array<QueryType>;
  platform?: { [K in PLATFORMS]?: SX };
  colorMode?: { [K in COLORMODES]?: SX };
  state?: { [K in STATES]?: SX };
  descendants?: { [key: string]: SX };
};
type SXResolved = {
  styledValueResolvedWithMeta: StyledValueResolvedWithMeta;
  queriesResolved: Array<QueryTypeResolved>;
  colorMode?: { [key: string]: SXResolved };
  state?: { [key: string]: SXResolved };
  descendants?: { [key: string]: SXResolved };
};
type Styled = {
  baseStyle: SX;
  variants: { [key: string]: SX };
  sizes: { [key: string]: SX };
};
type StyledResolved = {
  baseStyle: SXResolved;
  variants: { [key: string]: SXResolved };
  sizes: { [key: string]: SXResolved };
};
type StyledValueResolvedWithMeta = {
  original: StyledValue;
  resolved: CSSObject;
  meta: {
    path?: Path;
    weight?: number;
    cssId: string;
    cssRuleset: string;
    colorMode?: string;
    queryCondition?: string;
  };
};
type OrderedSXResolved = Array<StyledValueResolvedWithMeta>;
type Config = {
  alias: { [K: string]: any };
  tokens: {
    colors: { [K: string]: any };
    mediaQueries: { [K: string]: any };
  };
};
function getCSSIdAndRuleset(
  styleValueResolvedWithMeta: StyledValueResolvedWithMeta
  // path: Path
) {
  let dataType: any = 'style';
  // if (styleValueResolvedWithMeta.meta.path.includes('state')) {
  //   // dataType = 'state';
  // } else if (styleValueResolvedWithMeta.meta.path.includes('queries')) {
  //   // dataType = 'media';
  // } else if (styleValueResolvedWithMeta.meta.path.includes('colorMode')) {
  //   // dataType = 'media';
  // }
  let toBeInjectedStyle = { style: styleValueResolvedWithMeta.resolved };

  if (
    styleValueResolvedWithMeta.meta.queryCondition &&
    styleValueResolvedWithMeta.meta.colorMode
  ) {
    toBeInjectedStyle.condition =
      styleValueResolvedWithMeta.meta.queryCondition;
    toBeInjectedStyle.colorMode = styleValueResolvedWithMeta.meta.colorMode;
  } else if (styleValueResolvedWithMeta.meta.queryCondition) {
    toBeInjectedStyle.condition =
      styleValueResolvedWithMeta.meta.queryCondition;
  } else if (styleValueResolvedWithMeta.meta.colorMode) {
    toBeInjectedStyle.colorMode = styleValueResolvedWithMeta.meta.colorMode;
  }

  //
  const cssObject = Cssify.create({ style: toBeInjectedStyle }, dataType);

  return cssObject;
  // return { cssId: ids.style, cssRuleset: rules.style };
}

function getWeightBaseOnPath(path: Path) {
  const weightObject = {
    styled: [],
    sx: [],
    state: [],
  };
  const STYLED_PRECENDENCE = {
    baseStyle: 1,
    variants: 2,
    sizes: 3,
  };

  const SX_PRECEDENCE = {
    style: 1,
    platform: 2,
    colorMode: 3,
    queries: 4,
    state: 5,
    descendants: 6,
  };
  const STATE_PRECENDENCE = {
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

    let stateType = '';
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

  weightObject.styled = weightObject.styled.reduce(
    (partialSum, a) => partialSum + a,
    0
  );
  weightObject.sx = weightObject.sx.reduce(
    (partialSum, a) => partialSum + a,
    0
  );
  weightObject.state = weightObject.state.reduce(
    (partialSum, a) => partialSum + a,
    0
  );

  let weightedStyleString = '';
  if (weightObject.styled < 10) {
    weightedStyleString = '0' + weightObject.styled;
  } else {
    weightedStyleString = '' + weightObject.styled;
  }

  let weightedSxString = '';
  if (weightObject.sx < 10) {
    weightedSxString = '0' + weightObject.sx;
  } else {
    weightedSxString = '' + weightObject.sx;
  }

  let weightedStateString = '';
  if (weightObject.state < 10) {
    weightedStateString = '0' + weightObject.state;
  } else {
    weightedStateString = '' + weightObject.state;
  }

  const weight = parseInt(
    weightedStateString + weightedSxString + weightedStyleString
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
  const ret = {
    styledValueResolvedWithMeta: styledValueResolvedWithMeta,
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
  input: StyledValue,
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
  let orderedSXResolved = [];
  if (sxResolved?.styledValueResolvedWithMeta?.original) {
    orderedSXResolved = [sxResolved.styledValueResolvedWithMeta];
  }

  if (sxResolved?.platform) {
    Object.keys(sxResolved.platform).forEach((key) => {
      const platformSXResolved = sxResolved.platform[key];
      // platformSXResolved.styledValueResolvedWithMeta.meta.weight =
      //   SX_STYLE_PRECEDENCE.platform;
      orderedSXResolved.push(
        ...SXResolvedToOrderedSXResolved(platformSXResolved)
      );
    });
  }
  if (sxResolved?.colorMode) {
    Object.keys(sxResolved.colorMode).forEach((key) => {
      const colorModeSXResolved = sxResolved.colorMode[key];
      // colorModeSXResolved.styledValueResolvedWithMeta.meta.weight =
      //   SX_STYLE_PRECEDENCE.colorMode;

      orderedSXResolved.push(
        ...SXResolvedToOrderedSXResolved(colorModeSXResolved)
      );
    });
  }
  if (sxResolved?.queriesResolved) {
    sxResolved.queriesResolved.forEach((queryResolved) => {
      // querySXResolved.styledValueResolvedWithMeta.meta.weight =
      //   SX_STYLE_PRECEDENCE.queries;

      orderedSXResolved.push(
        ...SXResolvedToOrderedSXResolved(queryResolved.resolved.value)
      );
      // orderedSXResolved.push(
      //   queryResolved.resolved.value.styledValueResolvedWithMeta
      // );
    });
  }
  if (sxResolved?.state) {
    Object.keys(sxResolved.state).forEach((key) => {
      const stateSXResolved = sxResolved.state[key];
      // stateSXResolved.styledValueResolvedWithMeta.meta.weight =
      //   SX_STYLE_PRECEDENCE.state + (STATE_PRECENDENCE[key] || 0) / 100;
      orderedSXResolved.push(...SXResolvedToOrderedSXResolved(stateSXResolved));
      // orderedSXResolved.push(stateSXResolved.styledValueResolvedWithMeta);
    });
  }
  if (sxResolved?.descendants) {
    Object.keys(sxResolved.descendants).forEach((key) => {
      const descendantSXResolved = sxResolved.descendants[key];
      orderedSXResolved.push(
        ...SXResolvedToOrderedSXResolved(descendantSXResolved)
      );
    });
  }
  return orderedSXResolved.sort((a, b) => a.meta.weight - b.meta.weight);
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
    ...SXResolvedToOrderedSXResolved(styledResolved.baseStyle),
  ];

  if (styledResolved.variants) {
    Object.keys(styledResolved.variants).forEach((key) => {
      const variantSXResolved = styledResolved.variants[key];
      // variantSXResolved.styledValueResolvedWithMeta.meta.weight =
      //   STYLED_PRECENDENCE.variants;
      orderedSXResolved.push(
        ...SXResolvedToOrderedSXResolved(variantSXResolved)
      );
    });
  }

  if (styledResolved.sizes) {
    Object.keys(styledResolved.sizes).forEach((key) => {
      const sizeSXResolved = styledResolved.sizes[key];
      // sizeSXResolved.styledValueResolvedWithMeta.meta.weight =
      //   STYLED_PRECENDENCE.sizes;
      orderedSXResolved.push(...SXResolvedToOrderedSXResolved(sizeSXResolved));
    });
  }

  return orderedSXResolved.sort((a, b) => a.meta.weight - b.meta.weight);
}

function updateCSSStyleInOrderedResolved(orderedSXResolved: OrderedSXResolved) {
  orderedSXResolved.forEach((styleResolved: StyledValueResolvedWithMeta) => {
    const cssData = getCSSIdAndRuleset(styleResolved);
    styleResolved.meta.cssId = cssData.ids.style;
    styleResolved.meta.cssRuleset = cssData.rules.style;
  });
}

function injectInStyle(orderedSXResolved: OrderedSXResolved, styleTagId: any) {
  let toBeInjectedCssRules = '';

  orderedSXResolved.forEach((styleResolved: StyledValueResolvedWithMeta) => {
    toBeInjectedCssRules += styleResolved.meta.cssRuleset;
  });

  if (styleTagId) {
    inject(`@media screen {${toBeInjectedCssRules}}`, styleTagId);
  } else {
    inject(`@media screen {${toBeInjectedCssRules}}`, 'css-injected-boot-time');
  }
}

type StyleIds = {
  defaultAndState: DefaultAndState;
  variants: {
    [key: string]: DefaultAndState;
  };
  sizes: {
    [key: string]: DefaultAndState;
  };
};

function checkAndPush(item, ret, keyToCheck, isMap = false) {
  function getIndexes(array, str) {
    return array
      .map((item, index) => (item === str ? index : -1))
      .filter((i) => i !== -1);
  }

  // const array = ['foo', 'bar', 'baz', 'foo', 'qux', 'foo'];
  // const indexes = getIndexes(array, 'foo');

  if (
    item.meta.path.includes(keyToCheck) &&
    !item.meta.path.includes('state')
  ) {
    ret.default.push(item.meta.cssId);
    return;
  }

  if (item.meta.path.includes(keyToCheck) && item.meta.path.includes('state')) {
    const allStates = getIndexes(item.meta.path, 'state');
    let mergeAllStateKey = [];

    allStates.forEach((statePath) => {
      const state = item.meta.path[statePath + 1];
      mergeAllStateKey.push(state);
    });

    const state = mergeAllStateKey.join('.');

    // const state = item.meta.path[item.meta.path.lastIndexOf('state') + 1];
    if (!ret.state[state]) {
      ret.state[state] = [];
    }

    ret.state[state].push(item.meta.cssId);
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
    checkAndPush(item, ret.defaultAndState, 'baseStyle', false);

    let variantName = '';

    if (item?.meta?.path?.includes('variants')) {
      variantName = item.meta.path[item.meta.path.indexOf('variants') + 1];

      if (!ret.variants[variantName])
        ret.variants[variantName] = { default: [], state: {} };

      checkAndPush(item, ret.variants[variantName], 'variants', true);
    }

    if (item?.meta?.path?.includes('sizes')) {
      variantName = item.meta.path[item.meta.path.indexOf('sizes') + 1];

      if (!ret.sizes[variantName])
        ret.sizes[variantName] = { default: [], state: {} };

      checkAndPush(item, ret.sizes[variantName], 'sizes', true);
    }
  }

  return ret;
}

function getDescendantStyleIds(
  arr: any,
  descendantStyle: any = [],
  componentConfig: any
): StyleIds {
  const ret = {};
  // return ret;
  descendantStyle.forEach((style) => {
    const filteredOrderListByDescendant = arr.filter(
      (item) =>
        item.meta.path[item.meta.path.lastIndexOf('descendants') + 1] === style
    );
    // if (componentConfig?.DEBUG === 'CHECKBOX') {
    //   console.log(
    //     filteredOrderListByDescendant,
    //     arr.filter(
    //       (item) =>
    //         item.meta.path[item.meta.path.lastIndexOf('descendants') + 1] ===
    //         style
    //     ),
    //     // arr,
    //     'array of descendants'
    //   );
    // }

    ret[style] = getComponentStyleIds(filteredOrderListByDescendant);
  });

  return ret;
}

function getStateStyleCSSFromStyleIds(styleIdObject: DefaultAndState, states) {
  let stateStyleCSSIds = [];

  if (states) {
    function isSubset(subset, set) {
      return subset.every((item) => set.includes(item));
    }
    Object.keys(styleIdObject?.state).forEach((styleId) => {
      const styleIdKeyArray = styleId.split('.');
      const currentStateArray = Object.keys(states).filter(
        (key) => states[key] === true
      );
      if (isSubset(styleIdKeyArray, currentStateArray)) {
        stateStyleCSSIds.push(...styleIdObject?.state[styleId]);
      }
    });
    // Object.keys(states).forEach((currentState) => {
    //   if (states[currentState] && styleIdObject?.state[currentState]) {
    //     stateStyleCSSIds.push(...styleIdObject?.state[currentState]);
    //   }
    //   const currentStateArray = Object.keys(states).filter(
    //     (key) => states[key] === true
    //   );

    //   const styleObject;

    //   if (states[currentState] && styleIdObject?.state[currentState]) {
    //     stateStyleCSSIds.push(...styleIdObject?.state[currentState]);
    //   }
    // });
    // console.log(states, styleIdObject, 'hello states here ****');
  }
  // // console.log(styleIdObject, states, 'styleIdObject');
  // if (states?.hover && styleIdObject?.state?.hover) {
  //   stateStyleCSSIds.push(...styleIdObject?.state?.hover);
  // }
  // if (states?.focus && styleIdObject?.state?.focus) {
  //   stateStyleCSSIds.push(...styleIdObject?.state?.focus);
  // }
  // if (states?.active && styleIdObject?.state?.active) {
  //   stateStyleCSSIds.push(...styleIdObject?.state?.active);
  // }
  // if (states?.focusVisible && styleIdObject?.state?.focusVisible) {
  //   stateStyleCSSIds.push(...styleIdObject?.state?.focusVisible);
  // }

  // if (states?.invalid && styleIdObject?.state?.invalid) {
  //   stateStyleCSSIds.push(...styleIdObject?.state?.invalid);
  // }

  // if (states?.disabled && styleIdObject?.state?.disabled) {
  //   stateStyleCSSIds.push(...styleIdObject?.state?.disabled);
  // }

  // if (states?.checked && styleIdObject?.state?.checked) {
  //   stateStyleCSSIds.push(...styleIdObject?.state?.checked);
  // }

  return stateStyleCSSIds;
}

function getMergedDefaultCSSIds(componentStyleIds: StyleIds, variant, size) {
  let defaultStyleCSSIds = [];

  defaultStyleCSSIds.push(...componentStyleIds.defaultAndState.default);

  if (variant && componentStyleIds.variants[variant]) {
    defaultStyleCSSIds.push(...componentStyleIds.variants[variant].default);
  }
  if (size && componentStyleIds.sizes[size]) {
    defaultStyleCSSIds.push(...componentStyleIds.sizes[size].default);
  }

  return defaultStyleCSSIds;
}

const getMergeDescendantsStyleCSSIdsWithKey = (
  descendantStyles: any,
  variant: any,
  size: any,
  componentStyleConfig: any
) => {
  const descendantStyleObj = {};

  Object.keys(descendantStyles).forEach((key) => {
    const styleObj = descendantStyles[key];

    const defaultBaseCSSIds = getMergedDefaultCSSIds(styleObj, variant, size);
    descendantStyleObj[key] = defaultBaseCSSIds;
  });

  return descendantStyleObj;
};

const Context = React.createContext({});

const globalOrderedList: any = [];
setTimeout(() => {
  const orderedList = globalOrderedList.sort(
    (a, b) => a.meta.weight - b.meta.weight
  );
  injectInStyle(orderedList);
});

function getMergedStateCSSIds(
  componentStyleIds: StyleIds,
  states,
  variant,
  size
) {
  let stateStyleCSSIds = [];

  stateStyleCSSIds.push(
    ...getStateStyleCSSFromStyleIds(componentStyleIds.defaultAndState, states)
  );

  if (variant && componentStyleIds.variants[variant]) {
    stateStyleCSSIds.push(
      ...getStateStyleCSSFromStyleIds(
        componentStyleIds.variants[variant],
        states
      )
    );
  }

  if (size && componentStyleIds.sizes[size]) {
    stateStyleCSSIds.push(
      ...getStateStyleCSSFromStyleIds(componentStyleIds.sizes[size], states)
    );

    // console.log(
    //   getStateStyleCSSFromStyleIds(componentStyleIds.sizes[size], states),
    //   'hhhhhhh'
    // );
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
function mergeArraysInObjects(...objects) {
  const merged = {};
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
export function styled<P>(
  Component: React.ComponentType<P>,
  theme: ThemeType,
  componentStyleConfig: ConfigType,
  CONFIG: any
) {
  const styledResolved = styledToStyledResolved(theme, [], CONFIG);
  const orderedResovled = styledResolvedToOrderedSXResolved(styledResolved);

  updateCSSStyleInOrderedResolved(orderedResovled);
  //set css ruleset
  globalOrderedList.push(...orderedResovled);

  // StyleIds
  const componentStyleIds = getComponentStyleIds(
    orderedResovled.filter((item) => !item.meta.path?.includes('descendants'))
  );

  if (componentStyleConfig.DEBUG === 'INPUT') {
    // console.log(componentStyleIds, 'hello state here >>');
  }

  // Descendants
  const descendantStyleIds = getDescendantStyleIds(
    orderedResovled.filter((item) => item.meta.path?.includes('descendants')),
    componentStyleConfig.descendantStyle,
    componentStyleConfig
  );

  if (componentStyleConfig.DEBUG === 'INPUT') {
    // if (componentStyleConfig.DEBUG === 'INPUT') {
    // console.log(
    //   descendantStyleIds,
    //   componentStyleConfig.descendantStyle,
    //   'hello state here >>'
    // );
    // }
  }
  // console.log(
  //   orderedResovled.filter((item) => item.meta.path?.includes('descendants')),
  //   'component style ids'
  // );

  const NewComp = (properties: any, ref: any) => {
    const mergedWithUtilitProps = {
      ...theme?.defaultProps,
      ...properties,
    };

    if (componentStyleConfig?.DEBUG === 'MENU_ITME') {
      // console.log('menu item', properties);
    }

    const { children, variant, size, states, colorMode, ...props } =
      mergedWithUtilitProps;

    // Inline prop based style resolution
    const resolvedInlineProps = {};
    if (componentStyleConfig.resolveProps) {
      componentStyleConfig.resolveProps.forEach((toBeResovledProp) => {
        if (props[toBeResovledProp]) {
          resolvedInlineProps[toBeResovledProp] = getTokenFromConfig(
            CONFIG,
            toBeResovledProp,
            props[toBeResovledProp]
          );
          delete props[toBeResovledProp];
        }
      });
    }

    const { sxProps: sx, mergedProps } = convertUtilityPropsToSX(
      CONFIG,
      componentStyleConfig?.descendantStyle,
      props
    );

    const contextValue = useContext(Context);
    const applyComponentStyleCSSIds = getMergedDefaultCSSIds(
      componentStyleIds,
      variant,
      size
    );

    // console.log(componentStyleIds, 'hello hee');
    const [applyComponentStateStyleIds, setApplyComponentStateStyleIds] =
      useState([]);

    const applyDescendantsStyleCSSIdsWithKey =
      getMergeDescendantsStyleCSSIdsWithKey(
        descendantStyleIds,
        variant,
        size,
        componentStyleConfig
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

    // Descendant resolution
    // let descendentCSSIds = {};
    // if (componentStyleConfig.DEBUG === 'CHECKBOX') {
    //   console.log(
    //     applyDescendantsStyleCSSIdsWithKey,

    //     'hello here >>>>'
    //   );
    // }

    // SX resolution
    const styleTagId = useRef(
      `style-tag-${Math.random().toString().slice(2, 17)}`
    );

    useEffect(() => {
      let styleTag = document.getElementById(styleTagId?.current);
      if (!styleTag) {
        styleTag = document.createElement('style');
        styleTag.id = styleTagId.current;
        document.body.appendChild(styleTag);
      }

      return () => {
        //@ts-ignore
        // eslint-disable-next-line react-hooks/exhaustive-deps
        const styleTag = document.getElementById(styleTagId?.current);
        if (styleTag) {
          try {
            document.body.removeChild(styleTag);
          } catch (e) {
            console.error(e);
          }
        }
      };
    }, []);

    useEffect(() => {
      const styleTag = document.getElementById(styleTagId?.current);
      styleTag.innerHTML = '';
    }, [sx]);

    // FOR SX RESOLUTION
    const sxStyledResolved = styledToStyledResolved(
      { baseStyle: sx },
      [],
      CONFIG
    );
    const orderedSXResolved =
      styledResolvedToOrderedSXResolved(sxStyledResolved);

    updateCSSStyleInOrderedResolved(orderedSXResolved);
    injectInStyle(orderedSXResolved, styleTagId.current);

    // const sxComponentStyleIds =
    sxComponentStyleIds.current = getComponentStyleIds(
      orderedSXResolved.filter(
        (item) => !item.meta.path?.includes('descendants')
      )
    );

    const sxStyleCSSIds = getMergedDefaultCSSIds(
      sxComponentStyleIds.current,
      variant,
      size
    );

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

    // setApplySxDescendantStyleCSSIdsWithKey(sxDescendantsStyleCSSIdsWithKey);

    // const [sxStyleIds, setSXStyleIds] = useState({});
    // inline sx props
    // useEffect(() => {
    //   // create a new style tag with a unique ID and append it to the body
    //   let styleTag = document.getElementById(styleTagId.current);
    //   if (!styleTag) {
    //     styleTag = document.createElement('style');
    //     styleTag.id = styleTagId.current;
    //     document.body.appendChild(styleTag);
    //   }
    //   styleTag.innerHTML = '';
    //   const sxStyledResolved = styledToStyledResolved(
    //     { baseStyle: sx },
    //     [],
    //     CONFIG
    //   );
    //   const orderedSXResolved =
    //     styledResolvedToOrderedSXResolved(sxStyledResolved);

    //   updateCSSStyleInOrderedResolved(orderedSXResolved);
    //   injectInStyle(orderedSXResolved, styleTagId.current);

    //   // const sxComponentStyleIds =
    //   sxComponentStyleIds.current = getComponentStyleIds(
    //     orderedSXResolved.filter(
    //       (item) => !item.meta.path?.includes('descendants')
    //     )
    //   );

    //   const sxStyleCSSIds = getMergedDefaultCSSIds(
    //     sxComponentStyleIds.current,
    //     variant,
    //     size
    //   );

    //   // if (componentStyleConfig?.DEBUG === 'AVATAR') {
    //   //   console.log(
    //   //     sxStyleCSSIds,
    //   //     sx,
    //   //     orderedResovled.filter(
    //   //       (item) => !item.meta.path?.includes('descendants')
    //   //     ),
    //   //     'SX HERE'
    //   //   );
    //   // }
    //   // setApplySxStyleCSSIds(sxStyleCSSIds);
    //   // setApplySxStyleCSSIds(sxStyleCSSIds);

    //   // SX descendants
    //   // sxDescendantStyleIds.current = getDescendantStyleIds(
    //   //   orderedSXResolved.filter((item) =>
    //   //     item.meta.path?.includes('descendants')
    //   //   ),
    //   //   componentStyleConfig.descendantStyle
    //   // );

    //   // const sxDescendantsStyleCSSIdsWithKey =
    //   //   getMergeDescendantsStyleCSSIdsWithKey(
    //   //     sxDescendantStyleIds.current,
    //   //     variant,
    //   //     size
    //   //   );

    //   // setApplySxDescendantStyleCSSIdsWithKey(sxDescendantsStyleCSSIdsWithKey);

    //   // return a cleanup function to remove the style tag when the component unmounts
    //   return () => {
    //     //@ts-ignore
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    //     const styleTag = document.getElementById(styleTagId?.current);
    //     if (styleTag) {
    //       document.body.removeChild(styleTag);
    //     }
    //   };
    // }, [size, sx, variant]); // run the effect only once when the component mounts

    // Style ids resolution

    useEffect(() => {
      // for component style
      const mergedStateIds = getMergedStateCSSIds(
        componentStyleIds,
        states,
        variant,
        size
      );

      // console.log(mergedStateIds, states, '*******>>>');
      setApplyComponentStateStyleIds(mergedStateIds);

      // for sx props
      const mergedSxStateIds = getMergedStateCSSIds(
        sxComponentStyleIds.current,
        states,
        variant,
        size
      );
      setApplyStateSxStyleCSSIds(mergedSxStateIds);

      // for descendants
      const mergedDescendantsStyle = {};
      Object.keys(descendantStyleIds).forEach((key) => {
        const mergedStyle = getMergedStateCSSIds(
          descendantStyleIds[key],
          states,
          variant,
          size
        );
        mergedDescendantsStyle[key] = mergedStyle;
      });
      setApplyDescendantStateStyleCSSIdsWithKey(mergedDescendantsStyle);

      // for sx descendants

      const mergedSxDescendantsStyle = {};
      Object.keys(sxDescendantStyleIds.current).forEach((key) => {
        // console.log(sxDescendantStyleIds.current, 'hhhhhh11');
        const mergedStyle = getMergedStateCSSIds(
          sxDescendantStyleIds.current[key],
          states,
          variant,
          size
        );
        mergedSxDescendantsStyle[key] = mergedStyle;
      });
      setApplySxDescendantStateStyleCSSIdsWithKey(mergedSxDescendantsStyle);
    }, [size, states, variant]);

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

    const component = (
      <Component
        // style
        {...mergedProps}
        {...resolvedInlineProps}
        dataSet={{
          ...props.dataSet,
          style:
            applyComponentStyleCSSIds.join(' ') +
            ' ' +
            applyComponentStateStyleIds.join(' ') +
            ' ' +
            applyAncestorStyleCSSIds.join(' ') +
            ' ' +
            applySxStyleCSSIds.current.join(' ') +
            ' ' +
            applySxStateStyleCSSIds.join(' '),
        }}
        ref={ref}
        // placeholderTextColor={'#737373'}
      >
        {children}
      </Component>
    );

    if (componentStyleConfig.descendantStyle?.length > 0) {
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
