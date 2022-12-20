// @ts-nocheck
import React, { useContext, useEffect, useState } from 'react';
import { inject } from '@gluestack/css-injector';
import type { ConfigType, ThemeType } from './types';
import { config } from './nativebase.config';
import { Cssify } from '@gluestack/cssify';

import {
  resolveThemeAndIdGenerator,
  getDefaultStyleFromIds,
  getVariantDefaultStylesFromIds,
  getStateStylesFromIds,
  toBeInjectedCssRulesRuntime,
  toBeInjectedCssRulesBoottime,
  resolvedTokenization,
  resolveTokensFromConfig,
} from './utils';

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

function getWeightBaseOnPath(path) {
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
  };
  const STATE_PRECENDENCE = {
    hover: 1,
    focus: 2,
    focusVisible: 3,
    active: 4,
  };

  const tempPath = [...path];

  for (let i = 0; i < tempPath.length; i++) {
    const currentValue = tempPath[i];
    console.log(currentValue, 'path');

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

    if (currentValue === 'descendants') {
      break;
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

  // console.log(
  //   parseInt(weightedStateString + weightedSxString + weightedStyleString),
  //   path,
  //   'path ****'
  // );
  return parseInt(weightedStateString + weightedSxString + weightedStyleString);
}

export function sxToSXResolved(sx: SX, path: Path): SXResolved {
  const resolvedCSSStyle = StyledValueToCSSObject(sx.style, config);

  const styledValueResolvedWithMeta = {
    original: sx.style,
    resolved: resolvedCSSStyle,
    meta: {
      path,
      weight: getWeightBaseOnPath(path),
      // cssId: ,
      // cssRuleset: ,
    },
  };

  // console.log(sx, '********');
  const ret = {
    styledValueResolvedWithMeta,
    queriesResolved: sx.queries
      ? sx.queries.map((query, index) => {
          const sxResolvedValue = sxToSXResolved(query.value, [
            ...path,
            'queries',
            index,
            query.condition,
          ]);

          const resolvedCondition = resolveTokensFromConfig(config, {
            condition: query.condition,
          }).condition;

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
            [key]: sxToSXResolved(sx.platform[key], [...path, 'platform', key]),
          }),
          {}
        )
      : undefined,
    colorMode: sx.colorMode
      ? Object.keys(sx.colorMode).reduce((acc, key) => {
          const sxResolved = sxToSXResolved(sx.colorMode[key], [
            ...path,
            'colorMode',
            key,
          ]);

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
            [key]: sxToSXResolved(sx.state[key], [...path, 'state', key]),
          }),
          {}
        )
      : undefined,
    descendants: sx.descendants
      ? Object.keys(sx.descendants).reduce(
          (acc, key) => ({
            ...acc,
            [key]: sxToSXResolved(sx.descendants[key], [
              ...path,
              'descendants',
              key,
            ]),
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

function injectInStyle(orderedSXResolved: OrderedSXResolved) {
  let toBeInjectedCssRulesBoottime = '';

  orderedSXResolved.forEach((styleResolved: StyledValueResolvedWithMeta) => {
    const cssData = getCSSIdAndRuleset(styleResolved);

    // console.log(cssData, 'css data');
    styleResolved.meta.cssId = cssData.ids.style;
    styleResolved.meta.cssRuleset = cssData.rules.style;
    toBeInjectedCssRulesBoottime += styleResolved.meta.cssRuleset;
  });
  // const defaultIds = getDefaultStyleFromIds(styleDictionary);
  console.log(toBeInjectedCssRulesBoottime, 'hello css');

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

function getAllDescendantStyles(styles: OrderedSXResolved) {
  return styles.filter((style) => style.meta.path.includes('descendants'));
}

function getDescendantStyles(styles: OrderedSXResolved, key: string) {
  return styles.filter(
    (style) =>
      style.meta.path.includes('descendants') && style.meta.path.includes(key)
  );
}

function getDescendantStylesIds(styles: OrderedSXResolved) {
  return styles.map((style) => style.meta.cssId);
}

function getStyleIds(arr: any): StyleIds {
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

const Context = React.createContext({
  test: 1,
});

export function styled<P>(
  Component: React.ComponentType<P>,
  theme: ThemeType,
  compConfig: ConfigType
) {
  const styledResolved = styledToStyledResolved(theme);

  const orderedDictionary = styledResolvedToOrderedSXResolved(styledResolved);

  //set css ruleset
  injectInStyle(orderedDictionary);
  const styleIds = getStyleIds(orderedDictionary);

  const descendantStyles = getAllDescendantStyles(orderedDictionary);
  console.log('****** styledToStyledResolved', descendantStyles);
  // console.log('****** styledResolvedToOrderedSXResolved', orderedDictionary);
  // console.log(orderedDictionary, 'ordered list');

  console.log(compConfig, 'config here');
  const NewComp = (properties: any, ref: any) => {
    const mergedProps = {
      ...theme?.defaultProps,
      ...properties,
    };
    const contextValue = useContext(Context);

    // console.log(value, 'hhhhh&*');

    const [mergedStateStyles, setMergedStateStyles] = useState('');
    const { children, sx, variant, size, states, colorMode, ...props } =
      mergedProps;

    // const [mergedIdsRuntimeMap, setMergedIdsRuntimeMap] = useState({});
    // const [defaultRuntimeIds, setDefaultRuntimeIds] = useState({});

    // const [
    //   variantAndSizeBasedDefaultStyle,
    //   setVariantAndSizeBasedDefaultStyle,
    // ] = useState({});
    // // const [stateBaseStyles, setStateBaseStyles] = useState({});
    // const [dataSetFinalIds, setDataSetFinalIds] = useState({});

    const getStateStylesFromIds = (styleIdObject, states) => {
      let stateStyleIds = '';

      if (states?.hover) {
        stateStyleIds = ' ' + styleIdObject.state.hover;
      }
      if (states?.focus) {
        stateStyleIds = ' ' + styleIdObject.state.focus;
      }
      if (states?.active) {
        stateStyleIds = ' ' + styleIdObject.state.active;
      }
      if (states?.focusVisible) {
        stateStyleIds = ' ' + styleIdObject.state.focusVisible;
      }

      return stateStyleIds;
    };
    useEffect(() => {
      let variantStates = '';
      let sizesStates = '';
      let defaultStates = getStateStylesFromIds(
        styleIds.defaultAndState,
        states
      );

      if (variant) {
        variantStates = getStateStylesFromIds(
          styleIds.variants[variant],
          states
        );
      }

      if (size) {
        sizesStates = getStateStylesFromIds(styleIds.sizes[size], states);
      }
      const mergedStateStyles =
        defaultStates + ' ' + variantStates + ' ' + sizesStates;

      setMergedStateStyles(mergedStateStyles);
    }, [props, states]);

    const getMergedFinalStyleIds = () => {
      let variantStates = '';
      let sizesStates = '';
      const defaultStates = styleIds.defaultAndState.default.join(' ');

      if (variant) {
        variantStates = styleIds.variants[variant].default.join(' ');
      }

      if (size) {
        sizesStates = styleIds.sizes[size].default.join(' ');
      }
      const defaultBaseIds =
        defaultStates + ' ' + variantStates + ' ' + sizesStates;

      // consume styleIds from context from styled.consumes
      // console.log(properties, 'properties');
      return defaultBaseIds + ' ' + mergedStateStyles;
    };

    // console.log();
    // getting runtime ids
    // useEffect(() => {
    //   const localStateBaseStylesRuntime = getStateStylesFromIds(
    //     mergedIdsRuntimeMap,
    //     variant,
    //     size,
    //     states
    //   );
    //   // setStateBaseStylesRuntime(localStateBaseStylesRuntime);
    //   const localStateBaseStyles = getStateStylesFromIds(
    //     styleDictionary,
    //     variant,
    //     size,
    //     states
    //   );

    //   // console.log(localStateBaseStyles, 'hello here 3333');
    //   // setStateBaseStyles(localStateBaseStyles);
    //   // console.log(
    //   //   defaultIds,
    //   //   defaultRuntimeIds,
    //   //   variantAndSizeBasedDefaultStyle,
    //   //   'useEffect'
    //   // );
    //   if (
    //     Object.keys(defaultRuntimeIds).length === 3 &&
    //     Object.keys(variantAndSizeBasedDefaultStyle).length === 3
    //   ) {
    //     setDataSetFinalIds({
    //       style: [
    //         ...defaultIds?.basic,
    //         ...defaultRuntimeIds?.basic,
    //         ...variantAndSizeBasedDefaultStyle?.basic,
    //         ...localStateBaseStyles?.basic,
    //         ...localStateBaseStylesRuntime?.basic,
    //       ].join(' '),
    //       media: [
    //         ...defaultIds?.media,
    //         ...defaultRuntimeIds?.media,
    //         ...variantAndSizeBasedDefaultStyle?.media,
    //         ...localStateBaseStyles?.media,
    //         ...localStateBaseStylesRuntime?.media,
    //       ].join(' '),
    //       state: [
    //         ...defaultIds?.state,
    //         ...defaultRuntimeIds?.state,
    //         ...variantAndSizeBasedDefaultStyle?.state,
    //         ...localStateBaseStyles?.state,
    //         ...localStateBaseStylesRuntime?.state,
    //       ].join(' '),
    //     });
    //   }
    //   // console.log(
    //   //   // mergedIdsRuntimeMap,
    //   //   defaultIds,
    //   //   'defaultIds',
    //   //   variantAndSizeBasedDefaultStyle,
    //   //   'variantAndSizeBasedDefaultStyle',
    //   //   defaultRuntimeIds,
    //   //   'defaultRuntimeIds',
    //   //   [
    //   //     // ...defaultIds?.style,
    //   //     // // ...variantAndSizeBasedDefaultStyle?.style,
    //   //     // ...stateBaseStyles?.style,
    //   //     // ...stateBaseStylesRuntime?.style,
    //   //   ],
    //   //   'style < > media',
    //   //   // [
    //   //   //   ...defaultIds?.media,
    //   //   //   ...variantAndSizeBasedDefaultStyle?.media,
    //   //   //   ...stateBaseStyles?.media,
    //   //   //   ...stateBaseStylesRuntime?.media,
    //   //   // ],
    //   //   // [
    //   //   //   ...defaultIds?.state,
    //   //   //   ...variantAndSizeBasedDefaultStyle?.state,
    //   //   //   ...stateBaseStyles?.state,
    //   //   //   ...stateBaseStylesRuntime?.state,
    //   //   // ],
    //   //   '< >',
    //   //   'mergedIdsRuntimjkjheMap'
    //   // );
    // }, [
    //   states,
    //   variantAndSizeBasedDefaultStyle,
    //   defaultRuntimeIds,
    //   mergedIdsRuntimeMap,
    //   variant,
    //   size,
    // ]);

    // getting boot time ids

    //dataSet - own(!isDescendent) + descendants

    // filter data set
    // dataSetFinalIds -> own - descendants
    // minusDecendant -> children pass

    // if own descendant -> set own dataSet

    // if forwardStyling -> set value in context
    // set css id against key of forwardStyling
    // eg _text: ["css-id..."],

    let ancestorStyleIds = [];
    if (compConfig.ancestorStyle?.length > 0) {
      compConfig.ancestorStyle.forEach((ancestor: any) => {
        ancestorStyleIds = contextValue[ancestor];
      });
    }

    const component = (
      <Component
        dataSet={{
          style: getMergedFinalStyleIds() + ' ' + ancestorStyleIds.join(' '),
        }} // style
        {...props}
        ref={ref}
      >
        {children}
      </Component>
    );

    if (compConfig.descendentStyle?.length > 0) {
      const descendentCSSIds = {};

      compConfig.descendentStyle.forEach((descendant: any) => {
        const descendantStyle = getDescendantStyles(
          descendantStyles,
          descendant
        );
        descendentCSSIds[descendant] = getDescendantStylesIds(descendantStyle);
      });
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
