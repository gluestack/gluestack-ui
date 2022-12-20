// @ts-nocheck
import React, { useEffect, useState } from 'react';
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
const SX_STYLE_PRECEDENCE = {
  platform: 1,
  colorMode: 2,
  queries: 3,
  state: 4,
};
const STATE_PRECENDENCE = {
  hover: 1,
  focus: 2,
  focusVisible: 3,
  active: 4,
};
const STYLED_PRECENDENCE = {
  baseStyle: 1,
  variants: 2,
  sizes: 3,
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

export function sxToSXResolved(sx: SX, path: Path): SXResolved {
  const resolvedCSSStyle = StyledValueToCSSObject(sx.style, config);

  const styledValueResolvedWithMeta = {
    original: sx.style,
    resolved: resolvedCSSStyle,
    meta: {
      path,
      weight: path.length,
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
      orderedSXResolved.push(platformSXResolved.styledValueResolvedWithMeta);
    });
  }
  if (sxResolved.colorMode) {
    Object.keys(sxResolved.colorMode).forEach((key) => {
      const colorModeSXResolved = sxResolved.colorMode[key];
      // colorModeSXResolved.styledValueResolvedWithMeta.meta.weight =
      //   SX_STYLE_PRECEDENCE.colorMode;
      orderedSXResolved.push(colorModeSXResolved.styledValueResolvedWithMeta);
    });
  }
  if (sxResolved.queriesResolved) {
    sxResolved.queriesResolved.forEach((queryResolved) => {
      // querySXResolved.styledValueResolvedWithMeta.meta.weight =
      //   SX_STYLE_PRECEDENCE.queries;
      orderedSXResolved.push(
        queryResolved.resolved.value.styledValueResolvedWithMeta
      );
    });
  }
  if (sxResolved.state) {
    Object.keys(sxResolved.state).forEach((key) => {
      const stateSXResolved = sxResolved.state[key];
      // stateSXResolved.styledValueResolvedWithMeta.meta.weight =
      //   SX_STYLE_PRECEDENCE.state + (STATE_PRECENDENCE[key] || 0) / 100;
      orderedSXResolved.push(stateSXResolved.styledValueResolvedWithMeta);
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
      orderedSXResolved.push(variantSXResolved.styledValueResolvedWithMeta);
    });
  }

  if (styledResolved.sizes) {
    Object.keys(styledResolved.sizes).forEach((key) => {
      const sizeSXResolved = styledResolved.sizes[key];
      // sizeSXResolved.styledValueResolvedWithMeta.meta.weight =
      //   STYLED_PRECENDENCE.sizes;
      orderedSXResolved.push(sizeSXResolved.styledValueResolvedWithMeta);
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

export function styled<P>(
  Component: React.ComponentType<P>,
  theme: ThemeType,
  compConfig: ConfigType
) {
  const styledResolved = styledToStyledResolved(theme);

  const orderedDictionary = styledResolvedToOrderedSXResolved(styledResolved);

  //set css ruleset
  injectInStyle(orderedDictionary);

  const defaultStyle = getDefaultStyle(orderedDictionary);
  const defautlStyleIds = getDefaultStyleIds(defaultStyle);

  console.log(orderedDictionary, 'default');
  // console.log(orderedDictionary, 'ordered list');
  const NewComp = (properties: any, ref: any) => {
    const mergedProps = {
      ...theme?.defaultProps,
      ...properties,
    };

    const { children, sx, variant, size, states, colorMode, ...props } =
      mergedProps;
    const [mergedIdsRuntimeMap, setMergedIdsRuntimeMap] = useState({});
    const [defaultRuntimeIds, setDefaultRuntimeIds] = useState({});

    const [
      variantAndSizeBasedDefaultStyle,
      setVariantAndSizeBasedDefaultStyle,
    ] = useState({});
    // const [stateBaseStyles, setStateBaseStyles] = useState({});
    const [dataSetFinalIds, setDataSetFinalIds] = useState({});

    // useEffect(() => {
    //   const localMergedIdsRuntimeMap = resolveThemeAndIdGenerator(
    //     { baseStyle: sx },
    //     'runtime'
    //   );
    //   setMergedIdsRuntimeMap(localMergedIdsRuntimeMap);
    //   const localDefaultRuntimeIds = getDefaultStyleFromIds(
    //     localMergedIdsRuntimeMap
    //   );
    //   setDefaultRuntimeIds(localDefaultRuntimeIds);
    //   const localVariantAndSizeBasedDefaultStyleRuntime =
    //     getVariantDefaultStylesFromIds(localMergedIdsRuntimeMap, variant, size);

    //   // console.log(localMergedIdsRuntimeMap, 'hello here @@@@');
    //   // setVariantAndSizeBasedDefaultStyleRuntime(
    //   //   localVariantAndSizeBasedDefaultStyleRuntime
    //   // );
    //   const localVariantAndSizeBasedDefaultStyle =
    //     getVariantDefaultStylesFromIds(styleDictionary, variant, size);
    //   setVariantAndSizeBasedDefaultStyle(localVariantAndSizeBasedDefaultStyle);
    //   // console.log(localVariantAndSizeBasedDefaultStyle, 'style < > media');

    //   inject(`@media screen {${toBeInjectedCssRulesRuntime}}`, 'runtime');

    //   setDataSetFinalIds({
    //     style: [
    //       // decandant styles will be injected in the order of the array
    //       ...defaultIds?.basic,
    //       ...localDefaultRuntimeIds?.basic,
    //       ...localVariantAndSizeBasedDefaultStyle?.basic,
    //       ...localVariantAndSizeBasedDefaultStyleRuntime?.basic,
    //       // ...stateBaseStyles?.style,
    //       // ...stateBaseStylesRuntime?.style,
    //     ].join(' '),
    //     media: [
    //       ...defaultIds?.media,
    //       ...localDefaultRuntimeIds?.media,
    //       ...localVariantAndSizeBasedDefaultStyle?.media,
    //       ...localVariantAndSizeBasedDefaultStyleRuntime?.media,
    //       // ...stateBaseStyles?.media,
    //       // ...stateBaseStylesRuntime?.media,
    //     ].join(' '),
    //     state: [
    //       ...defaultIds?.state,
    //       ...localDefaultRuntimeIds?.state,
    //       ...localVariantAndSizeBasedDefaultStyle?.state,
    //       ...localVariantAndSizeBasedDefaultStyleRuntime?.state,
    //       // ...stateBaseStyles?.state,
    //       // ...stateBaseStylesRuntime?.state,
    //     ].join(' '),
    //   });
    // }, []);

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
    return (
      <Component
        // dataSet={{
        //   style: resolvedDefaultSizeIds.join(' '),
        //   // media: flattenStyle(newStyle.styleSheetsObj).join(' '),
        //   state: getIdsFromMap(resolvedStyleIdsOfStates).join(' '),
        // }}
        dataSet={{
          style: defautlStyleIds.join(' '),
          style: defautlStyleIds.join(' '),
        }} // style
        {...props}
        ref={ref}
      >
        {typeof children === 'function'
          ? children({
              // // resolveContextChildrenStyleIds: {
              //   {isDecendant: true,
              //     media:["cssid1","cssid2"],
              //     state:[],
              //     style: [],
              // }
              // }
              // getDecendantStyleIds(
              //   {
              //     baseStyle: {
              // media:[],
              // },
              //     variantsMap: variantStyleNewMap,
              //     sizesMap: sizesStyleNewMap,
              //   },
              //   variant,
              //   size
              // ),
              // resolveContextChildrenStateIds: getDecendantStateStyleIds(
              //   { baseStyleStateNewMap, sizesStateNewMap, variantStateNewMap },
              //   states,
              //   variant,
              //   size
              // ),
            })
          : children}
      </Component>
    );
  };

  const StyledComp = React.forwardRef(NewComp);
  // @ts-ignore
  StyledComp.config = compConfig;
  return StyledComp;
}
