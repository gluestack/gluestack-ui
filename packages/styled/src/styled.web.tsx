import React, { useContext, useEffect, useState } from 'react';
import { inject } from '@gluestack/css-injector';
import type { ConfigType, ThemeType } from './types';
import { config } from './nativebase.config';
import { Cssify } from '@gluestack/cssify';

import {
  resolveThemeAndIdGenerator,
  getDefaultStyleFromIds,
  getVariantDefaultStylesFromIds,
  // getStateStylesFromIds,
  toBeInjectedCssRulesRuntime,
  toBeInjectedCssRulesBoottime,
  resolvedTokenization,
  resolveTokensFromConfig,
} from './utils';
import { forEach } from 'lodash';

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
    // toBeInjectedStyle = {
    //   condition: styleValueResolvedWithMeta.meta.queryCondition,
    //   colorMode: styleValueResolvedWithMeta.meta.colorMode,
    //   style: styleValueResolvedWithMeta.resolved,
    // };
  } else if (styleValueResolvedWithMeta.meta.queryCondition) {
    toBeInjectedStyle.condition =
      styleValueResolvedWithMeta.meta.queryCondition;

    // toBeInjectedStyle = {
    //   condition: styleValueResolvedWithMeta.meta.queryCondition,
    //   style: toBeInjectedStyle,
    // };
  } else if (styleValueResolvedWithMeta.meta.colorMode) {
    toBeInjectedStyle.condition = styleValueResolvedWithMeta.meta.colorMode;
    // toBeInjectedStyle = {
    //   condition: styleValueResolvedWithMeta.meta.colorMode,
    //   style: toBeInjectedStyle,
    // };
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
    hover: 1,
    focus: 2,
    focusVisible: 3,
    active: 4,
  };
  // style.baseStyle
  // style.variants
  // style.sizes

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

    // if (currentValue === 'descendants') {
    //   break;
    // }

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

  return parseInt(weightedStateString + weightedSxString + weightedStyleString);
}

export function sxToSXResolved(sx: SX, path: Path, meta: any): SXResolved {
  const resolvedCSSStyle = StyledValueToCSSObject(sx.style, config);

  const styledValueResolvedWithMeta = {
    original: sx.style,
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
    styledValueResolvedWithMeta,
    queriesResolved: sx.queries
      ? sx.queries.map((query, index) => {
          const resolvedCondition = resolveTokensFromConfig(config, {
            condition: query.condition,
          }).condition;

          const sxResolvedValue = sxToSXResolved(
            query.value,
            [...path, 'queries', index, query.condition],
            { queryCondition: resolvedCondition }
          );

          sxResolvedValue.styledValueResolvedWithMeta.meta.queryCondition =
            resolvedCondition;

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
    platform: sx.platform
      ? Object.keys(sx.platform).reduce(
          (acc, key) => ({
            ...acc,
            [key]: sxToSXResolved(
              sx.platform[key],
              [...path, 'platform', key],
              meta
            ),
          }),
          {}
        )
      : undefined,
    colorMode: sx.colorMode
      ? Object.keys(sx.colorMode).reduce((acc, key) => {
          const sxResolved = sxToSXResolved(
            sx.colorMode[key],
            [...path, 'colorMode', key],
            { colorMode: key }
          );

          sxResolved.styledValueResolvedWithMeta.meta.colorMode = key;

          return {
            ...acc,
            [key]: sxResolved,
          };
        }, {})
      : undefined,
    state: sx.state
      ? Object.keys(sx.state).reduce(
          (acc, key) => ({
            ...acc,
            [key]: sxToSXResolved(sx.state[key], [...path, 'state', key], meta),
          }),
          {}
        )
      : undefined,
    descendants: sx.descendants
      ? Object.keys(sx.descendants).reduce(
          (acc, key) => ({
            ...acc,
            [key]: sxToSXResolved(
              sx.descendants[key],
              [...path, 'descendants', key],
              meta
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
  config1: Config
): CSSObject {
  // return input;
  return resolvedTokenization(input, config);
}
export function SXResolvedToOrderedSXResolved(
  sxResolved: SXResolved
): OrderedSXResolved {
  const orderedSXResolved: OrderedSXResolved = [
    sxResolved.styledValueResolvedWithMeta,
  ];

  if (sxResolved.platform) {
    Object.keys(sxResolved.platform).forEach((key) => {
      const platformSXResolved = sxResolved.platform[key];
      // platformSXResolved.styledValueResolvedWithMeta.meta.weight =
      //   SX_STYLE_PRECEDENCE.platform;
      orderedSXResolved.push(
        ...SXResolvedToOrderedSXResolved(platformSXResolved)
      );
    });
  }
  if (sxResolved.colorMode) {
    Object.keys(sxResolved.colorMode).forEach((key) => {
      const colorModeSXResolved = sxResolved.colorMode[key];
      // colorModeSXResolved.styledValueResolvedWithMeta.meta.weight =
      //   SX_STYLE_PRECEDENCE.colorMode;

      orderedSXResolved.push(
        ...SXResolvedToOrderedSXResolved(colorModeSXResolved)
      );
    });
  }
  if (sxResolved.queriesResolved) {
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
  if (sxResolved.state) {
    Object.keys(sxResolved.state).forEach((key) => {
      const stateSXResolved = sxResolved.state[key];
      // stateSXResolved.styledValueResolvedWithMeta.meta.weight =
      //   SX_STYLE_PRECEDENCE.state + (STATE_PRECENDENCE[key] || 0) / 100;
      orderedSXResolved.push(...SXResolvedToOrderedSXResolved(stateSXResolved));
      // orderedSXResolved.push(stateSXResolved.styledValueResolvedWithMeta);
    });
  }
  if (sxResolved.descendants) {
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
  path: Path = []
): StyledResolved {
  return {
    baseStyle: sxToSXResolved(styled.baseStyle, [...path, 'baseStyle']),
    variants: Object.keys(styled.variants).reduce(
      (acc, key) => ({
        ...acc,
        [key]: sxToSXResolved(styled.variants[key], [...path, 'variants', key]),
      }),
      {}
    ),
    sizes: Object.keys(styled.sizes).reduce(
      (acc, key) => ({
        ...acc,
        [key]: sxToSXResolved(styled.sizes[key], [...path, 'sizes', key]),
      }),
      {}
    ),
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

function injectInStyle(orderedSXResolved: OrderedSXResolved) {
  let toBeInjectedCssRulesBoottime = '';

  orderedSXResolved.forEach((styleResolved: StyledValueResolvedWithMeta) => {
    toBeInjectedCssRulesBoottime += styleResolved.meta.cssRuleset;
  });

  inject(`@media screen {${toBeInjectedCssRulesBoottime}}`, 'boottime');
}
// *******

function getDefaultStyle(styles: OrderedSXResolved) {
  return styles.filter(
    (style) =>
      !(
        style.meta.path.includes('state') ||
        style.meta.path.includes('variants') ||
        style.meta.path.includes('sizes') ||
        style.meta.path.includes('descendants')
      )
  );
}

function getDefaultStyleIds(styles) {
  return styles.map((style) => style.meta.cssId);
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
  if (
    item.meta.path.includes(keyToCheck) &&
    !item.meta.path.includes('state') &&
    !item.meta.path.includes('descendants')
  ) {
    ret.default.push(item.meta.cssId);
    return;
  }

  if (item.meta.path.includes(keyToCheck) && item.meta.path.includes('state')) {
    const state = item.meta.path[item.meta.path.indexOf('state') + 1];
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

function getComponentStyleIds(arr: any): StyleIds {
  const ret = {
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

    if (item.meta.path.includes('variants')) {
      variantName = item.meta.path[item.meta.path.indexOf('variants') + 1];

      if (!ret.variants[variantName])
        ret.variants[variantName] = { default: [], state: {} };

      checkAndPush(item, ret.variants[variantName], 'variants', true);
    }

    if (item.meta.path.includes('sizes')) {
      variantName = item.meta.path[item.meta.path.indexOf('sizes') + 1];

      if (!ret.sizes[variantName])
        ret.sizes[variantName] = { default: [], state: {} };

      checkAndPush(item, ret.sizes[variantName], 'sizes', true);
    }

    //checkAndPush(item, ret, 'sizes', true);
  }

  return ret;
}

function getDescendantStyleIds(arr: any, descendantStyle: any = []): StyleIds {
  const ret = {};
  // return ret;
  descendantStyle.forEach((style) => {
    // const ret = {
    //   defaultAndState: {
    //     default: [],
    //     state: {},
    //   },
    //   variants: {},
    //   sizes: {},
    // };

    ret[style] = {
      defaultAndState: {
        default: [],
        state: {},
      },
      variants: {},
      sizes: {},
    };

    for (let i in arr) {
      const item = arr[i];

      if (
        item.meta.path.includes(style) &&
        !item.meta.path.includes('state') &&
        item.meta.path.includes('descendants')
      ) {
        //     console.log(item, item.meta.cssId, '*******');
        ret[style].defaultAndState.default.push(item.meta.cssId);
        //   }
        //   if (item.meta.path.includes(style) && item.meta.path.includes('state')) {
        //     const state = item.meta.path[item.meta.path.indexOf('state') + 1];
        //     if (!ret[style].state[state]) {
        //       ret[style].state[state] = [];
        //     }
        //     ret.state[state].push(item.meta.cssId);
      }
      if (
        item.meta.path.includes(style) &&
        item.meta.path.includes('state') &&
        item.meta.path.includes('descendants')
      ) {
        const state = item.meta.path[item.meta.path.indexOf('state') + 1];
        if (!ret[style].defaultAndState.state[state]) {
          ret[style].defaultAndState.state[state] = [];
        }
        ret[style].defaultAndState.state[state].push(item.meta.cssId);
        // console.log(item, '******* ret here');
      }
      //   //checkAndPush(item, ret, 'sizes', true);
    }
  });

  return ret;
}

// function getDecendantStyleIds(
//   { baseStyleMap, variantsMap, sizesMap }: any,
//   variant: any,
//   size: any
// ) {
//   let resolvedMapOfBaseStyleIds = getArrayOfIdsResolvedFromMap(baseStyleMap);
//   let resolvedMapOfVariantsIds = getArrayOfIdsResolvedFromMap(
//     variantsMap,
//     variant
//   );
//   let resolvedMapOfSizesIds = getArrayOfIdsResolvedFromMap(sizesMap, size);
//   return [
//     ...resolvedMapOfBaseStyleIds,
//     ...resolvedMapOfVariantsIds,
//     ...resolvedMapOfSizesIds,
//   ];
// }

function getStateStylesFromIds(styleIdObject, states) {
  let stateStyleIds = '';

  if (states?.hover) {
    stateStyleIds = ' ' + styleIdObject.state?.hover?.join(' ');
  }
  if (states?.focus) {
    stateStyleIds = ' ' + styleIdObject.state?.focus?.join(' ');
  }
  if (states?.active) {
    stateStyleIds = ' ' + styleIdObject.state?.active?.join(' ');
  }
  if (states?.focusVisible) {
    stateStyleIds = ' ' + styleIdObject.state?.focusVisible?.join(' ');
  }

  // console.log(stateStyleIds, 'hello dididid 22');

  return stateStyleIds;
}

const getMergeDescendantsStyleIds = (
  descendantStyles: any,
  variant: any,
  size: any,
  mergedDescendantStateStyles: any
) => {
  const descendantStyleObj = {};

  Object.keys(descendantStyles).forEach((key) => {
    const styleObj = descendantStyles[key];
    let variantStates = '';
    let sizesStates = '';
    const defaultStates = styleObj.defaultAndState.default?.join(' ');

    if (variant) {
      variantStates = styleObj.variants[variant].default?.join(' ');
    }
    if (size) {
      sizesStates = styleObj.sizes[size].default?.join(' ');
    }
    const defaultBaseIds =
      defaultStates + ' ' + variantStates + ' ' + sizesStates;

    descendantStyleObj[key] = [defaultBaseIds];

    if (mergedDescendantStateStyles[key]) {
      // console.log(descendantStyleObj, descendantStyles[key], 'hello here ****');

      if (mergedDescendantStateStyles[key]) {
        descendantStyleObj[key].push(mergedDescendantStateStyles[key]);
      }
    }
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

export function styled<P>(
  Component: React.ComponentType<P>,
  theme: ThemeType,
  compConfig: ConfigType
) {
  const styledResolved = styledToStyledResolved(theme);

  const orderedResovled = styledResolvedToOrderedSXResolved(styledResolved);
  updateCSSStyleInOrderedResolved(orderedResovled);
  //set css ruleset
  globalOrderedList.push(...orderedResovled);

  //
  // default styling
  const componentStyleIds = getComponentStyleIds(orderedResovled);

  const descendantStyle = getDescendantStyleIds(
    orderedResovled,
    compConfig.descendentStyle
  );

  const NewComp = (properties: any, ref: any) => {
    const mergedProps = {
      ...theme?.defaultProps,
      ...properties,
    };
    // console.log(value, 'hhhhh&*');

    const [mergedStateStyles, setMergedStateStyles] = useState('');
    const [mergedDescendantStateStyles, setMergedDescendantStateStyles] =
      useState({});
    const { children, sx, variant, size, states, colorMode, ...props } =
      mergedProps;

    const contextValue = useContext(Context);

    let descendentCSSIds = React.useMemo(() =>
      getMergeDescendantsStyleIds(
        descendantStyle,
        variant,
        size,
        mergedDescendantStateStyles
      )
    );

    function getMergedStateStyle(componentStyleIds: any) {
      let variantStates = '';
      let sizesStates = '';

      let defaultStates = getStateStylesFromIds(
        componentStyleIds.defaultAndState,
        states
      );

      if (variant) {
        variantStates = getStateStylesFromIds(
          componentStyleIds.variants[variant],
          states
        );
      }

      if (size) {
        sizesStates = getStateStylesFromIds(
          componentStyleIds.sizes[size],
          states
        );
      }
      const mergedStateStyles =
        defaultStates + ' ' + variantStates + ' ' + sizesStates;
      return mergedStateStyles;
    }
    useEffect(() => {
      setMergedStateStyles(getMergedStateStyle(componentStyleIds));
      const mergedDescendantsStyle = {};
      Object.keys(descendantStyle).forEach((key) => {
        const mergedStyle = getMergedStateStyle(descendantStyle[key]);
        mergedDescendantsStyle[key] = mergedStyle;
      });
      setMergedDescendantStateStyles(mergedDescendantsStyle);
    }, [states]);

    const getMergedFinalStyleIds = (compConfig: any) => {
      let variantStates = '';
      let sizesStates = '';
      const defaultStates =
        componentStyleIds.defaultAndState.default?.join(' ');

      if (variant) {
        variantStates = componentStyleIds.variants[variant].default?.join(' ');
      }

      if (size) {
        sizesStates = componentStyleIds.sizes[size].default?.join(' ');
      }
      const defaultBaseIds =
        defaultStates + ' ' + variantStates + ' ' + sizesStates;

      // // ancestor styles
      let ancestorStyleIds: any[] = [];
      if (compConfig.ancestorStyle?.length > 0) {
        compConfig.ancestorStyle.forEach((ancestor: any) => {
          if (contextValue[ancestor]) {
            ancestorStyleIds = contextValue[ancestor];
          }
        });
      }

      const mergedFinalStyles =
        defaultBaseIds +
        ' ' +
        mergedStateStyles +
        ' ' +
        ancestorStyleIds?.join(' ');

      return mergedFinalStyles;
    };
    //

    const component = (
      <Component
        dataSet={{
          style: getMergedFinalStyleIds(compConfig),
        }} // style
        {...props}
        ref={ref}
      >
        {children}
      </Component>
    );

    if (compConfig.descendentStyle?.length > 0) {
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
  StyledComp.config = compConfig;
  return StyledComp;
}
