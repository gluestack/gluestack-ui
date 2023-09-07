/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';

import type {
  OrderedSXResolved,
  StyleIds,
  ComponentProps,
  UtilityProps,
  IVerbosedTheme,
  ITheme,
  ExtendedConfigType,
  IComponentStyleConfig,
} from './types';
import {
  deepMerge,
  getResolvedTokenValueFromConfig,
  deepMergeObjects,
  resolveStringToken,
  shallowMerge,
  deepMergeArray,
  addThemeConditionInMeta,
} from './utils';
import { convertUtilityPropsToSX } from './core/convert-utility-to-sx';
import { useStyled } from './StyledProvider';
import { useTheme } from './Theme';
import { propertyTokenMap } from './propertyTokenMap';
import { Platform, StyleSheet } from 'react-native';
import { INTERNAL_updateCSSStyleInOrderedResolved } from './updateCSSStyleInOrderedResolved';
import { generateStylePropsFromCSSIds } from './generateStylePropsFromCSSIds';

import { get, onChange } from './core/colorMode';

import { styledResolvedToOrderedSXResolved } from './resolver/orderedResolved';
import { styledToStyledResolved } from './resolver/styledResolved';
import { getStyleIds } from './resolver/getStyleIds';
import { injectComponentAndDescendantStyles } from './resolver/injectComponentAndDescendantStyles';

import {
  convertStyledToStyledVerbosed,
  convertSxToSxVerbosed,
} from './convertSxToSxVerbosed';
import { stableHash } from './stableHash';
import { DeclarationType, GluestackStyleSheet } from './style-sheet';
import { CSSPropertiesMap } from './core/styled-system';
import { updateOrderUnResolvedMap } from './updateOrderUnResolvedMap';

const styledSystemProps = { ...CSSPropertiesMap };

function isSubset(subset: any, set: any) {
  return subset.every((item: any) => set.includes(item));
}

function flattenObject(obj: any = {}) {
  const flat: any = {};

  // Recursive function to flatten the object
  function flatten(obj: any, path: any = []) {
    // Iterate over the object's keys

    if (Array.isArray(obj)) {
      flat[`${path.join('.')}`] = obj;
    } else {
      for (const key of Object.keys(obj)) {
        // If the value is an object, recurse
        if (key === 'ids' && path.length > 0) {
          flat[`${path.join('.')}`] = obj[key];
        } else if (key === 'props') {
          flat[`${path.join('.')}.${key}`] = obj[key];
        } else if (typeof obj[key] === 'object') {
          flatten(obj[key], [...path, key]);
        } else {
          flat[`${path.join('.')}`] = obj[key];
        }
      }
    }
  }

  flatten(obj);
  return flat;
}

function convertUtiltiyToSXFromProps(
  componentProps: any,
  styledSystemProps: any,
  componentStyleConfig: any
) {
  // if (componentProps.debug === 'BOX_TEST') {
  //   return {
  //     sx: {},
  //     rest: {},
  //   };
  // }
  const { sx: userSX, ...componentRestProps }: any = componentProps;

  const resolvedSXVerbosed = convertSxToSxVerbosed(userSX);

  const { sxProps: utilityResolvedSX, mergedProps: restProps } =
    convertUtilityPropsToSX(
      styledSystemProps,
      componentStyleConfig?.descendantStyle,
      componentRestProps
    );

  const resolvedSxVerbose = deepMerge(utilityResolvedSX, resolvedSXVerbosed);

  return { sx: resolvedSxVerbose, rest: restProps };
}

function getStateStyleCSSFromStyleIdsAndProps(
  flatternStyleIdObject: any,
  currentStateArray: any
) {
  const stateStyleCSSIds: Array<any> = [];
  let props = {};

  Object.keys(flatternStyleIdObject).forEach((styleId) => {
    const styleIdKeyArray = styleId.split('.');

    const filteredStyleIdKeyArray = styleIdKeyArray.filter(
      (item) => item !== 'colorMode' && item !== 'state' && item !== 'props'
    );

    if (styleId.includes('ids')) {
      // if (type === 'inline' && ) {
      // stateStyleCSSIds.push(...flatternStyleIdObject[styleId]);
      // }
    } else if (
      styleId.includes('props') &&
      isSubset(filteredStyleIdKeyArray, currentStateArray)
    ) {
      props = deepMergeObjects(props, flatternStyleIdObject[styleId]);
    } else {
      if (isSubset(filteredStyleIdKeyArray, currentStateArray)) {
        stateStyleCSSIds.push(...flatternStyleIdObject[styleId]);
      }
    }
  });

  return { cssIds: stateStyleCSSIds, passingProps: props };
}

export function resolveBuildTimeSx(
  userSX: any,
  verboseSx: any,
  utilityResolvedSX: any,
  componentExtendedConfig: any
) {
  const resolvedSXVerbosed = convertSxToSxVerbosed(userSX);
  const resolvedSxVerbose = deepMerge(utilityResolvedSX, resolvedSXVerbosed);
  const sx = deepMerge(resolvedSxVerbose, verboseSx);

  let STABLEHASH_sx = stableHash(sx);
  let orderedSXResolved: any = [];
  if (Object.keys(sx).length > 0) {
    const inlineSxTheme = {
      baseStyle: sx,
    };

    resolvePlatformTheme(inlineSxTheme, Platform.OS);
    const sxStyledResolved = styledToStyledResolved(
      // @ts-ignore
      inlineSxTheme,
      [],
      componentExtendedConfig
    );
    orderedSXResolved = styledResolvedToOrderedSXResolved(sxStyledResolved);
  }
  return {
    orderedSXResolved,
    STABLEHASH_sx,
  };
}

function isValidVariantCondition(condition: any, variants: any) {
  for (const key in condition) {
    if (!variants.hasOwnProperty(key) || variants[key] !== condition[key]) {
      return false;
    }
  }
  return true;
}

function getMergedDefaultCSSIdsAndProps(
  componentStyleIds: StyleIds,
  incomingVariantProps: any,
  theme: any,
  properties: any
) {
  // console.setStartTimeStamp('getMergedDefaultCSSIdsAndProps');

  let props: any = {};

  const baseStyleCSSIds: Array<string> = [];
  const variantStyleCSSIds: Array<string> = [];
  if (
    componentStyleIds &&
    componentStyleIds?.baseStyle &&
    componentStyleIds?.baseStyle?.ids
  ) {
    baseStyleCSSIds.push(...componentStyleIds?.baseStyle?.ids);
    props = deepMergeObjects(props, componentStyleIds?.baseStyle?.props);
  }
  let passingVariantProps = {};

  // if (props) {
  passingVariantProps = getVariantProps(props, theme).variantProps;
  // }

  const mergedVariantProps = shallowMerge(
    { ...passingVariantProps },
    incomingVariantProps
  );

  Object.keys(mergedVariantProps).forEach((variant) => {
    const variantName = mergedVariantProps[variant];

    if (
      variant &&
      componentStyleIds?.variants &&
      componentStyleIds?.variants[variant] &&
      componentStyleIds?.variants[variant]?.[variantName] &&
      componentStyleIds?.variants[variant]?.[variantName]?.ids
    ) {
      variantStyleCSSIds.push(
        //@ts-ignore
        ...componentStyleIds?.variants[variant]?.[variantName]?.ids
      );

      // if this variant exist in remaining props, remove it from remaining props
      if (properties[variant]) {
        delete properties[variant];
      }
      if (props[variant]) {
        delete props[variant];
      }
      props = deepMergeObjects(
        props,
        componentStyleIds?.variants[variant]?.[variantName]?.props
      );
    }
  });

  componentStyleIds?.compoundVariants.forEach((compoundVariant) => {
    if (
      isValidVariantCondition(compoundVariant.condition, mergedVariantProps)
    ) {
      if (compoundVariant.ids) {
        variantStyleCSSIds.push(
          //@ts-ignore
          ...compoundVariant.ids
        );
      }
      props = deepMergeObjects(props, compoundVariant?.props);
    }
  });

  // console.setEndTimeStamp('getMergedDefaultCSSIdsAndProps');

  return {
    baseStyleCSSIds: baseStyleCSSIds,
    variantStyleCSSIds: variantStyleCSSIds,
    passingProps: props,
  };
}

const getMergeDescendantsStyleCSSIdsAndPropsWithKey = (
  descendantStyles: any,
  variantProps: any,
  theme: any,
  properties: any
) => {
  // console.setStartTimeStamp('getMergeDescendantsStyleCSSIdsAndPropsWithKey');

  const descendantStyleObj: any = {};
  if (descendantStyles) {
    Object.keys(descendantStyles)?.forEach((key) => {
      const styleObj = descendantStyles[key];

      const {
        baseStyleCSSIds,
        variantStyleCSSIds,
        passingProps: defaultPassingProps,
      } = getMergedDefaultCSSIdsAndProps(
        styleObj,
        variantProps,
        theme,
        properties
      );
      descendantStyleObj[key] = {
        baseStyleCSSIds: baseStyleCSSIds,
        variantStyleCSSIds: variantStyleCSSIds,
        passingProps: defaultPassingProps,
      };
    });
  }
  // console.setEndTimeStamp('getMergeDescendantsStyleCSSIdsAndPropsWithKey');

  return descendantStyleObj;
};

const AncestorStyleContext = React.createContext({});
//

// window['globalStyleMap'] = globalStyleMap;
// const globalOrderedList: any = [];
// setTimeout(() => {
//   const orderedList = globalOrderedList.sort(
//     (a: any, b: any) => a.meta.weight - b.meta.weight
//   );
//   injectInStyle(orderedList);
// });

function getFlattenStyleObjectFromStyleIds(styleIds: any) {
  const componentBaseStyleFlatternStyleIdObject = flattenObject(
    styleIds?.baseStyle
  );

  const componentVariantFlatternStyleIdObject: any = {};
  const componentCompoundVariantFlatternStyleIdObject: any = [];
  const variantKeys = Object.keys(styleIds?.variants ?? {});

  variantKeys.forEach((variant) => {
    Object.keys(styleIds?.variants[variant]).forEach((currentVariant) => {
      const flatternVariantStyle = flattenObject(
        styleIds?.variants[variant][currentVariant]
      );
      componentVariantFlatternStyleIdObject[`${variant}.${currentVariant}`] =
        flatternVariantStyle;
    });
  });

  styleIds?.compoundVariants?.forEach((compoundVariant: any) => {
    componentCompoundVariantFlatternStyleIdObject.push(
      flattenObject(compoundVariant)
    );
  });

  return {
    componentBaseStyleFlatternStyleIdObject,
    componentVariantFlatternStyleIdObject,
    componentCompoundVariantFlatternStyleIdObject,
  };
}

function push_unique(arr: any, ele: any) {
  if (Array.isArray(arr)) {
    if (Array.isArray(ele)) {
      ele.forEach((element: any) => {
        if (!arr.includes(element)) {
          arr.push(element);
        }
      });
    } else {
      if (!arr.includes(ele)) {
        arr.push(ele);
      }
    }
  }

  return arr;
}
function setStateAndColorModeCssIdsAndProps(
  colorMode: 'light' | 'dark',
  states: any,
  variantProps: any,
  theme: any,
  componentStyleIds: any,
  sxComponentStyleIds: any,
  componentBaseStyleFlatternStyleIdObject: any,
  componentVariantFlatternStyleIdObject: any,
  componentCompoundVariantFlatternStyleIdObject: any,
  componentDescendantFlattenStyleObject: any,
  sxBaseStyleFlatternStyleObject: any,
  sxVariantFlatternStyleObject: any,
  sxCompoundVariantFlatternStyleObject: any,
  sxDescendantFlattenStyleObject: any,
  componentDescendantStyleIds: any,
  sxDescendantStyleIds: any
) {
  if (!componentStyleIds) {
    return {
      baseStyleCSSIds: [],
      variantStyleCSSIds: [],
      passingProps: {},
    };
  }
  let stateColorMode: any = {};
  let currentStateArray: any = [];
  if (colorMode || states) {
    stateColorMode = {
      ...states,
      [colorMode]: true,
    };
    currentStateArray = Object.keys(stateColorMode).filter(
      (key) => stateColorMode[key] === true
    );
  }
  const {
    baseStyleCSSIds: mergedBaseStyleCSSIds,
    variantStyleCSSIds: mergedVariantStyleCSSIds,
    passingProps: stateProps,
  }: any = getMergedStateAndColorModeCSSIdsAndProps(
    componentStyleIds,
    //@ts-ignore
    componentBaseStyleFlatternStyleIdObject,
    states,
    variantProps,
    colorMode,
    theme,
    componentVariantFlatternStyleIdObject,
    componentCompoundVariantFlatternStyleIdObject,
    currentStateArray
  );

  // for sx props
  const {
    baseStyleCSSIds: mergedSXBaseStyleCSSIds,
    variantStyleCSSIds: mergedSXVariantStyleCSSIds,
    passingProps: mergedSxStateProps,
  }: any = getMergedStateAndColorModeCSSIdsAndProps(
    sxComponentStyleIds.current,
    //@ts-ignore
    sxBaseStyleFlatternStyleObject,
    states,
    variantProps,
    colorMode,
    theme,
    sxVariantFlatternStyleObject,
    sxCompoundVariantFlatternStyleObject,
    currentStateArray
  );

  // for descendants
  const mergedDescendantsStyle: any = {};

  if (
    componentDescendantStyleIds &&
    Object.keys(componentDescendantStyleIds).length > 0
  ) {
    Object.keys(componentDescendantStyleIds).forEach((key) => {
      const {
        baseStyleCSSIds: descendantBaseStyleCSSIds,
        variantStyleCSSIds: descendantVariantStyleCSSIds,
        passingProps: mergedPassingProps,
      } = getMergedStateAndColorModeCSSIdsAndProps(
        //@ts-ignore
        componentDescendantStyleIds,
        componentDescendantFlattenStyleObject[key]?.[
          'componentBaseStyleFlatternStyleIdObject'
        ],
        states,
        variantProps,
        colorMode,
        theme,
        componentDescendantFlattenStyleObject[key]?.[
          'componentVariantFlatternStyleIdObject'
        ],
        componentDescendantFlattenStyleObject[key]?.[
          'componentCompoundVariantFlatternStyleIdObject'
        ],
        currentStateArray
      );
      mergedDescendantsStyle[key] = {
        baseStyleCSSIds: descendantBaseStyleCSSIds,
        variantStyleCSSIds: descendantVariantStyleCSSIds,
        passingProps: mergedPassingProps,
      };
    });
  }

  // for sx descendants
  const mergedSxDescendantsStyle: any = {};
  if (
    sxDescendantStyleIds.current &&
    Object.keys(sxDescendantStyleIds.current).length > 0
  ) {
    Object.keys(sxDescendantStyleIds.current).forEach((key) => {
      const {
        baseStyleCSSIds: sxDescendantBaseStyleCSSIds,
        variantStyleCSSIds: sxDescendantVariantStyleCSSIds,
        passingProps: mergedPassingProps,
      } = getMergedStateAndColorModeCSSIdsAndProps(
        //@ts-ignore
        sxDescendantStyleIds.current,
        sxDescendantFlattenStyleObject[key]?.[
          'componentBaseStyleFlatternStyleIdObject'
        ],
        states,
        variantProps,
        colorMode,
        theme,
        sxDescendantFlattenStyleObject[key]?.[
          'componentVariantFlatternStyleIdObject'
        ],
        sxDescendantFlattenStyleObject[key]?.[
          'componentCompoundVariantFlatternStyleIdObject'
        ],
        currentStateArray
      );

      mergedSxDescendantsStyle[key] = {
        baseStyleCSSIds: sxDescendantBaseStyleCSSIds,
        variantStyleCSSIds: sxDescendantVariantStyleCSSIds,
        passingProps: mergedPassingProps,
      };
    });
  }

  return {
    mergedSXBaseStyleCSSIds,
    mergedSXVariantStyleCSSIds,
    mergedSxStateProps,
    mergedBaseStyleCSSIds,
    mergedVariantStyleCSSIds,
    stateProps,
    mergedSxDescendantsStyle,
    mergedDescendantsStyle,
  };
}

function getMergedStateAndColorModeCSSIdsAndProps(
  componentStyleIds: any,
  componentBaseStyleFlatternStyleIdObject: any,
  _states: any,
  incomingVariantProps: any,
  _COLOR_MODE: 'light' | 'dark',
  theme: any,
  componentVariantFlatternStyleIdObject: any,
  componentCompoundVariantFlatternStyleIdObject: any,
  currentStateArray: any
) {
  if (!componentStyleIds) {
    return {
      baseStyleCSSIds: [],
      variantStyleCSSIds: [],
      passingProps: {},
    };
  }

  const stateBaseStyleCSSIds: Array<string> = [];
  const stateVariantStyleCSSIds: Array<string> = [];
  let props = {};

  if (componentBaseStyleFlatternStyleIdObject) {
    const { cssIds: stateStleCSSFromStyleIds, passingProps: stateStyleProps } =
      getStateStyleCSSFromStyleIdsAndProps(
        componentBaseStyleFlatternStyleIdObject,
        currentStateArray
      );

    push_unique(stateBaseStyleCSSIds, stateStleCSSFromStyleIds);
    // stateBaseStyleCSSIds.push(...stateStleCSSFromStyleIds);
    props = deepMergeObjects(props, stateStyleProps);
  }

  let passingVariantProps = getVariantProps(props, theme).variantProps;

  const mergedVariantProps = shallowMerge(
    { ...passingVariantProps },
    incomingVariantProps
  );

  if (componentVariantFlatternStyleIdObject) {
    Object.keys(mergedVariantProps).forEach((variant) => {
      const variantObjectPath = `${variant}.${mergedVariantProps[variant]}`;

      if (
        variant &&
        componentVariantFlatternStyleIdObject?.[variantObjectPath]
      ) {
        const {
          cssIds: stateStleCSSFromStyleIds,
          passingProps: stateStyleProps,
        } = getStateStyleCSSFromStyleIdsAndProps(
          componentVariantFlatternStyleIdObject[variantObjectPath],
          currentStateArray
        );

        push_unique(stateVariantStyleCSSIds, stateStleCSSFromStyleIds);

        props = deepMergeObjects(props, stateStyleProps);
      }
    });
  }

  if (componentCompoundVariantFlatternStyleIdObject.length > 0) {
    componentStyleIds?.compoundVariants?.forEach(
      (compoundVariant: any, index: number) => {
        if (
          isValidVariantCondition(compoundVariant.condition, mergedVariantProps)
        ) {
          const {
            cssIds: stateStleCSSFromStyleIds,
            passingProps: stateStyleProps,
          } = getStateStyleCSSFromStyleIdsAndProps(
            componentCompoundVariantFlatternStyleIdObject[index],
            currentStateArray
          );

          push_unique(stateVariantStyleCSSIds, stateStleCSSFromStyleIds);

          props = deepMergeObjects(props, stateStyleProps);
        }
      }
    );
  }

  return {
    baseStyleCSSIds: stateBaseStyleCSSIds,
    variantStyleCSSIds: stateVariantStyleCSSIds,
    passingProps: props,
  };
}

function getAncestorCSSStyleIds(compConfig: any, context: any) {
  let ancestorBaseStyleIds: any[] = [];
  let ancestorVariantStyleIds: any[] = [];
  let ancestorPassingProps: any = {};

  if (compConfig.ancestorStyle?.length > 0) {
    if (context) {
      compConfig.ancestorStyle.forEach((ancestor: any) => {
        if (context[ancestor]) {
          ancestorBaseStyleIds = context[ancestor]?.baseStyleCSSIds;
          ancestorVariantStyleIds = context[ancestor]?.variantStyleCSSIds;
          ancestorPassingProps = context[ancestor]?.passingProps;
        }
      });
    }
  }

  return {
    baseStyleCSSIds: ancestorBaseStyleIds,
    variantStyleIds: ancestorVariantStyleIds,
    passingProps: ancestorPassingProps,
  };
}

function mergeArraysInObjects(...objects: any) {
  const merged: any = {};

  for (const object of objects) {
    Object.keys(object).forEach((key) => {
      const value = object[key];
      if (!merged[key]) {
        merged[key] = {
          baseStyleCSSIds: [],
          variantStyleCSSIds: [],
          passingProps: {},
        };
      }
      merged[key].baseStyleCSSIds.push(...value.baseStyleCSSIds);
      merged[key].variantStyleCSSIds.push(...value.variantStyleCSSIds);
      merged[key].passingProps = deepMergeObjects(
        merged[key].passingProps,
        value.passingProps
      );
    });
  }

  return merged;
}

function resolvePlatformTheme(theme: any, platform: any) {
  if (typeof theme === 'object') {
    Object.keys(theme).forEach((themeKey) => {
      if (themeKey !== 'style' && themeKey !== 'defaultProps') {
        if (theme[themeKey].platform) {
          let temp = { ...theme[themeKey] };
          theme[themeKey] = deepMerge(temp, theme[themeKey].platform[platform]);
          delete theme[themeKey].platform;
          resolvePlatformTheme(theme[themeKey], platform);
        } else if (themeKey === 'queries') {
          theme[themeKey].forEach((query: any) => {
            if (query.value.platform) {
              let temp = { ...query.value };
              query.value = deepMerge(temp, query.value.platform[platform]);
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
}

export function getVariantProps(
  props: any,
  theme: any,
  shouldDeleteVariants: boolean = true
) {
  const variantTypes = theme?.variants ? Object.keys(theme.variants) : [];
  const variantProps: any = {};
  let restProps = { ...props };

  if (restProps) {
    variantTypes?.forEach((variant) => {
      if (
        props.hasOwnProperty(variant) &&
        theme.variants[variant]?.[props[variant]]
      ) {
        variantProps[variant] = props[variant];

        restProps = {
          ...theme?.variants[variant][props[variant]]?.props,
          ...restProps,
        };

        if (shouldDeleteVariants) {
          delete restProps[variant];
        }
      }
    });
  }

  return {
    variantProps,
    restProps,
  };
}

const getStyleIdsFromMap = (
  CONFIG: any,
  ExtendedConfig: any,
  styleIds: any
) => {
  let componentExtendedConfig = CONFIG;
  if (ExtendedConfig) {
    componentExtendedConfig = deepMerge(CONFIG, ExtendedConfig);
  }
  Object.assign(styledSystemProps, componentExtendedConfig?.aliases);
  const componentStyleIds = styleIds.component;
  const componentDescendantStyleIds = styleIds.descendant;

  const {
    componentBaseStyleFlatternStyleIdObject,
    componentVariantFlatternStyleIdObject,
    componentCompoundVariantFlatternStyleIdObject,
  } = getFlattenStyleObjectFromStyleIds(componentStyleIds);

  const descendantFlattenStyles: any = {};

  if (componentDescendantStyleIds) {
    Object.keys(componentDescendantStyleIds).forEach(
      (currentDescendant: any) => {
        descendantFlattenStyles[currentDescendant] =
          getFlattenStyleObjectFromStyleIds(
            componentDescendantStyleIds[currentDescendant]
          );
      }
    );
  }

  const componentStyleObject = {
    componentStyleIds,
    componentDescendantStyleIds,
    componentExtendedConfig,
    componentBaseStyleFlatternStyleIdObject,
    componentVariantFlatternStyleIdObject,
    componentCompoundVariantFlatternStyleIdObject,
    descendantFlattenStyles,
  };

  return componentStyleObject;
};

export function verboseStyled<P, Variants, ComCon>(
  Component: React.ComponentType<P>,
  theme: Partial<IVerbosedTheme<Variants, P>>,
  componentStyleConfig: IComponentStyleConfig<ComCon> = {},
  ExtendedConfig?: any,
  BUILD_TIME_PARAMS?: {
    orderedResolved: OrderedSXResolved;
    verbosedStyleIds: {
      component: StyleIds;
      descendant: StyleIds;
    };
    toBeInjected: any;
    styledIds: Array<string>;
  }
) {
  const componentName = componentStyleConfig?.componentName;
  const componentHash = stableHash({
    ...theme,
    ...componentStyleConfig,
    ...ExtendedConfig,
  });

  let declarationType: DeclarationType = 'boot';

  if (Component.displayName === '__AsForwarder__') {
    declarationType = 'forwarded';
  }

  resolvePlatformTheme(theme, Platform.OS);

  // const DEBUG_TAG = componentStyleConfig?.DEBUG;
  // const DEBUG =
  //   process.env.NODE_ENV === 'development' && DEBUG_TAG ? false : false;

  //@ts-ignore
  type ITypeReactNativeStyles = P['style'];
  let styleHashCreated = false;
  let orderedResolved: OrderedSXResolved;
  let componentStyleIds: any = {};
  let componentDescendantStyleIds: any = {}; // StyleIds = {};
  let componentExtendedConfig: any = {};
  let componentBaseStyleFlatternStyleIdObject: any = {};
  let componentVariantFlatternStyleIdObject = {};
  let componentCompoundVariantFlatternStyleIdObject: any = [];
  let componentDescendantFlattenStyles: any = {};
  let styleIds = {} as {
    component: StyleIds;
    descendant: StyleIds;
  };
  let orderedCSSIds: any = [];
  // const orderedUnResolvedTheme = updateOrderUnResolvedMap(
  //   theme,
  //   componentHash,
  //   declarationType,
  //   ExtendedConfig
  // );

  // styleIds = getStyleIds(orderedUnResolvedTheme, componentStyleConfig);

  if (BUILD_TIME_PARAMS?.orderedResolved) {
    orderedResolved = BUILD_TIME_PARAMS?.orderedResolved;
    orderedCSSIds = BUILD_TIME_PARAMS?.styledIds;

    GluestackStyleSheet.update(orderedResolved);
  } else {
    const { styledIds: g, verbosedStyleIds } = updateOrderUnResolvedMap(
      theme,
      componentHash,
      declarationType,
      componentStyleConfig
    );

    orderedCSSIds = g;

    styleIds = verbosedStyleIds;
  }

  if (BUILD_TIME_PARAMS?.verbosedStyleIds) {
    styleIds = BUILD_TIME_PARAMS?.verbosedStyleIds;
  }

  function injectSx(sx: any, type: any = 'inline') {
    const inlineSxTheme = {
      baseStyle: sx,
    };

    resolvePlatformTheme(inlineSxTheme, Platform.OS);
    const sxStyledResolved = styledToStyledResolved(
      // @ts-ignore
      inlineSxTheme,
      [],
      componentExtendedConfig
    );

    let componentTheme: any =
      // @ts-ignore
      sxStyledResolved.baseStyle.styledValueResolvedWithMeta;

    // sxStyledResolved.baseStyle.styledValueResolvedWithMeta =
    addThemeConditionInMeta(componentTheme, CONFIG);

    const colorModeComponentThemes: any = sxStyledResolved.baseStyle?.colorMode;
    if (colorModeComponentThemes) {
      Object.keys(colorModeComponentThemes).forEach(
        (colorModeComponentTheme: any) => {
          if (
            !colorModeComponentThemes[colorModeComponentTheme]
              .styledValueResolvedWithMeta?.meta.themeCondition
          ) {
            colorModeComponentThemes[
              colorModeComponentTheme
            ].styledValueResolvedWithMeta.meta.themeCondition = {};
          }

          let componentTheme: any =
            colorModeComponentThemes[colorModeComponentTheme]
              .styledValueResolvedWithMeta;

          addThemeConditionInMeta(componentTheme, CONFIG);
        }
      );
    }

    const sxHash = stableHash(sx);

    const orderedSXResolved =
      styledResolvedToOrderedSXResolved(sxStyledResolved);

    INTERNAL_updateCSSStyleInOrderedResolved(
      orderedSXResolved,
      sxHash,
      false,
      'gs'
    );

    injectComponentAndDescendantStyles(
      orderedSXResolved,
      sxHash,
      type,
      GluestackStyleSheet,
      Platform.OS
    );

    return orderedSXResolved;
  }

  // END BASE COLOR MODE RESOLUTION

  let CONFIG: any = {};
  let isInjected = false;
  let sxStyleIds: any = {};

  const containsDescendant =
    componentStyleConfig?.descendantStyle &&
    componentStyleConfig?.descendantStyle?.length > 0;

  const NewComp = (
    {
      children,
      //@ts-ignore
      orderedResolved: BUILD_TIME_ORDERED_RESOLVED = [],
      //@ts-ignore
      verbosedStyleIds: BUILD_TIME_VERBOSED_STYLE_IDS = {},
      //@ts-ignore
      toBeInjected: BUILD_TIME_toBeInjected = {},
      // styledIds: BUILD_TIME_STYLE_IDS = [],
      // sxHash: BUILD_TIME_sxHash = '',
      ...componentProps
    }: Omit<P, keyof Variants> &
      Partial<ComponentProps<ITypeReactNativeStyles, Variants, P, ComCon>> &
      Partial<UtilityProps<ITypeReactNativeStyles>> & {
        as?: any;
        children?: any;
      },
    ref: React.ForwardedRef<P>
  ) => {
    const isClient = React.useRef(false);

    //@ts-ignore style: 222ms
    let themeDefaultProps = { ...theme.baseStyle?.props };

    // 240ms
    const sxComponentStyleIds = useRef({});
    const sxDescendantStyleIds: any = useRef({});

    const sxComponentPassingProps = useRef({});

    // const applySxStyleCSSIds = useRef([]);
    const applySxBaseStyleCSSIds = useRef([]);
    const applySxVariantStyleCSSIds = useRef([]);

    const applySxDescendantStyleCSSIdsAndPropsWithKey = useRef({});

    // const [applySxStateStyleCSSIds, setApplyStateSxStyleCSSIds] = useState([]);
    const [componentStatePassingProps, setComponentStatePassingProps] =
      useState({});
    const [sxStatePassingProps, setSxStatePassingProps] = useState({});

    //200ms
    // let time = Date.now();
    const styledContext = useStyled();
    const { theme: activeTheme } = useTheme();

    const ancestorStyleContext = useContext(AncestorStyleContext);
    let incomingComponentProps = {};
    let remainingComponentProps = {};
    let sxBaseStyleFlatternStyleObject = {};
    let sxVariantFlatternStyleObject = {};
    let sxCompoundVariantFlatternStyleObject = {};
    let sxDescendantFlattenStyles: any = {};

    const COLOR_MODE: any = get();

    if (!styleHashCreated) {
      CONFIG = {
        ...styledContext.config,
        propertyTokenMap,
      };

      const EXTENDED_THEME =
        componentName && CONFIG?.components?.[componentName]?.theme?.theme;

      // Injecting style
      if (EXTENDED_THEME) {
        theme.variants = deepMerge(theme.variants, EXTENDED_THEME.variants);
        theme.defaultProps = deepMerge(
          theme.defaultProps,
          EXTENDED_THEME.props
        );
        // @ts-ignore
        theme.props = deepMerge(theme.props, EXTENDED_THEME.props);

        // Merge of Extended Config Style ID's with Component Style ID's
        deepMergeArray(
          styleIds,
          CONFIG?.components?.[`${componentName}`]?.theme
            ?.extendedVerbosedStyleIds
        );
        // Injecting Extended StyleSheet from Config
        orderedCSSIds = [
          ...orderedCSSIds,
          ...CONFIG?.components?.[`${componentName}`]?.theme?.extendedStyleIds,
        ];
      }

      //@ts-ignore
      const globalStyle = styledContext.globalStyle;

      if (globalStyle) {
        const { globalStyleIds, globalVerbosedStyleIds, globalTheme } =
          globalStyle;
        theme.variants = deepMerge(theme.variants, globalTheme.variants);
        // Merge of Extended Config Style ID's with Component Style ID's
        deepMergeArray(styleIds, globalVerbosedStyleIds);
        // Injecting Extended StyleSheet from Config
        orderedCSSIds = [...orderedCSSIds, ...globalStyleIds];
      }

      if (
        !BUILD_TIME_PARAMS ||
        !BUILD_TIME_PARAMS?.orderedResolved ||
        BUILD_TIME_PARAMS?.orderedResolved.length === 0
      ) {
        const toBeInjected = GluestackStyleSheet.resolve(
          orderedCSSIds,
          CONFIG,
          componentExtendedConfig
        );
        if (Platform.OS === 'web') {
          GluestackStyleSheet.inject(toBeInjected);
        }
      } else {
        if (Platform.OS === 'web') {
          //@ts-ignore
          GluestackStyleSheet.inject(BUILD_TIME_PARAMS.toBeInjected);
        }
      }

      Object.assign(styledSystemProps, CONFIG?.aliases);

      const {
        componentStyleIds: c,
        componentDescendantStyleIds: d,
        componentExtendedConfig: f,
        componentBaseStyleFlatternStyleIdObject: g,
        componentVariantFlatternStyleIdObject: h,
        componentCompoundVariantFlatternStyleIdObject: i,
        descendantFlattenStyles,
      } = getStyleIdsFromMap(CONFIG, ExtendedConfig, styleIds);

      componentStyleIds = c;
      componentDescendantStyleIds = d;
      componentExtendedConfig = f;
      componentBaseStyleFlatternStyleIdObject = g;
      componentVariantFlatternStyleIdObject = h;
      componentCompoundVariantFlatternStyleIdObject = i;
      componentDescendantFlattenStyles = descendantFlattenStyles;
      styleHashCreated = true;

      /* Boot time */
    }

    const {
      passingProps: applyAncestorPassingProps,
      baseStyleCSSIds: applyAncestorBaseStyleCSSIds,
      variantStyleIds: applyAncestorVariantStyleCSSIds,
    } = getAncestorCSSStyleIds(componentStyleConfig, ancestorStyleContext);

    Object.assign(incomingComponentProps, applyAncestorPassingProps);
    Object.assign(incomingComponentProps, componentProps);

    Object.assign(themeDefaultProps, incomingComponentProps);

    const { variantProps, restProps: componentPropsWithoutVariants } =
      getVariantProps(themeDefaultProps, theme);

    const {
      baseStyleCSSIds: applyBaseStyleCSSIds,
      variantStyleCSSIds: applyVariantStyleCSSIds,
      passingProps: applyComponentPassingProps,
    } = getMergedDefaultCSSIdsAndProps(
      //@ts-ignore
      componentStyleIds,
      variantProps,
      theme,
      incomingComponentProps
    );

    // passingProps is specific to current component
    const passingProps = deepMergeObjects(
      applyComponentPassingProps,
      componentStatePassingProps,
      sxComponentPassingProps.current,
      sxStatePassingProps
    );

    const { sx: filteredComponentSx, rest: filteredComponentRemainingProps } =
      convertUtiltiyToSXFromProps(
        componentPropsWithoutVariants,
        styledSystemProps,
        componentStyleConfig
      );

    let { sx: filteredPassingSx, rest: filteredPassingRemainingProps } =
      convertUtiltiyToSXFromProps(
        shallowMerge({ ...passingProps }, applyAncestorPassingProps),
        styledSystemProps,
        componentStyleConfig
      );

    let containsSX = false;
    Object.assign(remainingComponentProps, filteredPassingRemainingProps);
    Object.assign(remainingComponentProps, filteredComponentRemainingProps);

    if (
      Object.keys(filteredComponentSx).length > 0 ||
      Object.keys(filteredPassingSx).length > 0
    ) {
      containsSX = true;
    }

    let { states, ...applyComponentInlineProps }: any = remainingComponentProps;

    // const STABLEHASH_states = stableHash(states);
    // 520ms

    // Inline prop based style resolution TODO: Diagram insertion
    const resolvedInlineProps = {};
    if (
      componentStyleConfig.resolveProps &&
      Object.keys(componentExtendedConfig).length > 0
    ) {
      componentStyleConfig.resolveProps.forEach((toBeResovledProp: any) => {
        if (applyComponentInlineProps[toBeResovledProp]) {
          let value = applyComponentInlineProps[toBeResovledProp];
          if (
            CONFIG.propertyResolver &&
            CONFIG.propertyResolver.props &&
            CONFIG.propertyResolver.props[toBeResovledProp]
          ) {
            let transformer = CONFIG.propertyResolver.props[toBeResovledProp];
            let aliasTokenType = CONFIG.propertyTokenMap[toBeResovledProp];
            let token = transformer(
              value,
              (value1: any, scale = aliasTokenType) =>
                resolveStringToken(
                  value1,
                  CONFIG,
                  CONFIG.propertyTokenMap,
                  toBeResovledProp,
                  scale
                )
            );
            //@ts-ignore
            resolvedInlineProps[toBeResovledProp] = token;
          } else {
            //@ts-ignore
            resolvedInlineProps[toBeResovledProp] =
              getResolvedTokenValueFromConfig(
                componentExtendedConfig,
                applyComponentInlineProps,
                toBeResovledProp,
                applyComponentInlineProps[toBeResovledProp]
              );
          }
          delete applyComponentInlineProps[toBeResovledProp];
        }
      });
    }

    let applyDescendantsStyleCSSIdsAndPropsWithKey = {};
    if (containsDescendant) {
      applyDescendantsStyleCSSIdsAndPropsWithKey =
        getMergeDescendantsStyleCSSIdsAndPropsWithKey(
          componentDescendantStyleIds,
          variantProps,
          theme,
          incomingComponentProps
        );
    }

    // ancestorCSSStyleId

    // const [applySxStyleCSSIds, setApplySxStyleCSSIds] = useState([]);

    // SX resolution

    // const styleTagId = useRef(`style-tag-sx-${stableHash(sx)}`);

    // FOR SX RESOLUTION
    let orderedComponentSXResolved: any = [];
    let orderedPassingSXResolved: any = [];

    if (BUILD_TIME_ORDERED_RESOLVED.length > 0 && !isClient.current) {
      if (!isInjected) {
        GluestackStyleSheet.update(BUILD_TIME_ORDERED_RESOLVED);
        if (Platform.OS === 'web') {
          GluestackStyleSheet.inject(BUILD_TIME_toBeInjected);
        }
        isInjected = true;
      }
      sxStyleIds = BUILD_TIME_VERBOSED_STYLE_IDS;

      if (!sxStyleIds.component) {
        sxStyleIds.component = {};
      }
      sxStyleIds.component.variants = componentStyleIds.variants;
      //@ts-ignore
      sxStyleIds.component.compoundVariants =
        componentStyleIds.compoundVariants;
      // console.setStartTimeStamp('setColorModeBaseStyleIds');
      sxComponentStyleIds.current = sxStyleIds?.component;
      sxDescendantStyleIds.current = sxStyleIds.descendant;
      // 315ms
      // SX component style
      //@ts-ignore
      const {
        baseStyleCSSIds: sxBaseStyleCSSIds,
        variantStyleCSSIds: sxVariantStyleCSSIds,
        passingProps: sxPassingProps,
      } = getMergedDefaultCSSIdsAndProps(
        //@ts-ignore
        sxComponentStyleIds.current,
        variantProps,
        theme,
        incomingComponentProps
      );
      //@ts-ignore
      // applySxStyleCSSIds.current = sxStyleCSSIds;
      //@ts-ignore
      applySxBaseStyleCSSIds.current = sxBaseStyleCSSIds;
      //@ts-ignore
      applySxVariantStyleCSSIds.current = sxVariantStyleCSSIds;
      sxComponentPassingProps.current = sxPassingProps;

      const {
        componentBaseStyleFlatternStyleIdObject: a,
        componentVariantFlatternStyleIdObject: b,
        componentCompoundVariantFlatternStyleIdObject: c,
      } = getFlattenStyleObjectFromStyleIds(sxComponentStyleIds.current);

      if (sxDescendantStyleIds.current && containsDescendant) {
        Object.keys(sxDescendantStyleIds.current).forEach(
          (currentDescendant: any) => {
            sxDescendantFlattenStyles[currentDescendant] =
              getFlattenStyleObjectFromStyleIds(
                sxDescendantStyleIds.current[currentDescendant]
              );
          }
        );
      }

      sxBaseStyleFlatternStyleObject = a;
      sxVariantFlatternStyleObject = b;
      sxCompoundVariantFlatternStyleObject = c;
    }

    if (containsSX) {
      function injectAndUpdateSXProps() {
        if (Object.keys(filteredComponentSx).length > 0) {
          orderedComponentSXResolved = injectSx(filteredComponentSx, 'inline');
        }

        if (Object.keys(filteredPassingSx).length > 0) {
          orderedPassingSXResolved = injectSx(filteredPassingSx, 'passing');
        }

        const orderedSXResolved = [
          ...orderedPassingSXResolved,
          ...orderedComponentSXResolved,
          ...BUILD_TIME_ORDERED_RESOLVED,
        ];
        // console.setStartTimeStamp('getStyleIds');
        sxStyleIds = getStyleIds(orderedSXResolved, componentStyleConfig);

        ///
        // Setting variants to sx property for inline variant resolution
        //@ts-ignore
        if (!sxStyleIds.component) {
          sxStyleIds.component = {};
        }
        sxStyleIds.component.variants = componentStyleIds.variants;
        //@ts-ignore
        sxStyleIds.component.compoundVariants =
          componentStyleIds.compoundVariants;
        // console.setStartTimeStamp('setColorModeBaseStyleIds');
        sxComponentStyleIds.current = sxStyleIds?.component;
        sxDescendantStyleIds.current = sxStyleIds.descendant;
        // 315ms
        // SX component style
        //@ts-ignore
        const {
          baseStyleCSSIds: sxBaseStyleCSSIds,
          variantStyleCSSIds: sxVariantStyleCSSIds,
          passingProps: sxPassingProps,
        } = getMergedDefaultCSSIdsAndProps(
          //@ts-ignore
          sxComponentStyleIds.current,
          variantProps,
          theme,
          incomingComponentProps
        );
        //@ts-ignore
        // applySxStyleCSSIds.current = sxStyleCSSIds;
        //@ts-ignore
        applySxBaseStyleCSSIds.current = sxBaseStyleCSSIds;
        //@ts-ignore
        applySxVariantStyleCSSIds.current = sxVariantStyleCSSIds;
        sxComponentPassingProps.current = sxPassingProps;
      }
      injectAndUpdateSXProps();

      //TODO: Refactor for initial passing props .....

      if (
        Object.keys(sxComponentPassingProps.current).length > 0 &&
        !isClient.current
      ) {
        const passingPropsUpdated = {
          ...passingProps,
          ...sxComponentPassingProps.current,
          ...sxStatePassingProps,
          ...applyAncestorPassingProps,
        };

        const {
          sx: filteredPassingSxUpdated,
          rest: filteredPassingRemainingPropsUpdated,
        } = convertUtiltiyToSXFromProps(
          passingPropsUpdated,
          styledSystemProps,
          componentStyleConfig
        );

        filteredPassingSx = filteredPassingSxUpdated;
        injectAndUpdateSXProps();

        Object.assign(
          remainingComponentProps,
          filteredPassingRemainingPropsUpdated
        );
        Object.assign(remainingComponentProps, filteredComponentRemainingProps);

        const { statesUpdated, ...applyComponentInlinePropsUpdated }: any =
          remainingComponentProps;

        states = statesUpdated;
        applyComponentInlineProps = applyComponentInlinePropsUpdated;
      }

      //// refactor end ....

      const {
        componentBaseStyleFlatternStyleIdObject: a,
        componentVariantFlatternStyleIdObject: b,
        componentCompoundVariantFlatternStyleIdObject: c,
      } = getFlattenStyleObjectFromStyleIds(sxComponentStyleIds.current);

      if (sxDescendantStyleIds.current && containsDescendant) {
        Object.keys(sxDescendantStyleIds.current).forEach(
          (currentDescendant: any) => {
            sxDescendantFlattenStyles[currentDescendant] =
              getFlattenStyleObjectFromStyleIds(
                sxDescendantStyleIds.current[currentDescendant]
              );
          }
        );
      }

      sxBaseStyleFlatternStyleObject = a;
      sxVariantFlatternStyleObject = b;
      sxCompoundVariantFlatternStyleObject = c;
      // SX descendants
    }

    if (containsDescendant) {
      //@ts-ignore
      applySxDescendantStyleCSSIdsAndPropsWithKey.current =
        getMergeDescendantsStyleCSSIdsAndPropsWithKey(
          sxDescendantStyleIds.current,
          variantProps,
          theme,
          incomingComponentProps
        );
    }

    let mergedBaseStyleCSSIds: any = [];
    let mergedVariantStyleCSSIds: any = [];
    // let stateProps = [];
    let mergedSXBaseStyleCSSIds: any = [];
    let mergedSXVariantStyleCSSIds: any = [];
    // let mergedSxStateProps: any = [];
    let mergedSxDescendantsStyle: any = {};
    let mergedDescendantsStyle: any = {};

    const applySxStateBaseStyleCSSIds = useRef(mergedSXBaseStyleCSSIds);
    const applySxDescendantStateStyleCSSIdsAndPropsWithKey = useRef(
      mergedSxDescendantsStyle
    );

    if (!isClient.current) {
      isClient.current = true;
      const {
        mergedBaseStyleCSSIds: a,
        mergedVariantStyleCSSIds: b,
        // stateProps: c,
        mergedSXBaseStyleCSSIds: d,
        mergedSXVariantStyleCSSIds: e,
        // mergedSxStateProps: f,
        mergedSxDescendantsStyle: g,
        mergedDescendantsStyle: h,
      } = setStateAndColorModeCssIdsAndProps(
        COLOR_MODE,
        states,
        variantProps,
        theme,
        componentStyleIds,
        sxComponentStyleIds,
        componentBaseStyleFlatternStyleIdObject,
        componentVariantFlatternStyleIdObject,
        componentCompoundVariantFlatternStyleIdObject,
        componentDescendantFlattenStyles,
        sxBaseStyleFlatternStyleObject,
        sxVariantFlatternStyleObject,
        sxCompoundVariantFlatternStyleObject,
        sxDescendantFlattenStyles,
        componentDescendantStyleIds,
        sxDescendantStyleIds
      );

      mergedBaseStyleCSSIds = a;
      mergedVariantStyleCSSIds = b;
      // stateProps = c;
      mergedSXBaseStyleCSSIds = d;
      mergedSXVariantStyleCSSIds = e;
      // mergedSxStateProps = f;
      mergedSxDescendantsStyle = g;
      // setComponentStatePassingProps(stateProps);
      // setSxStatePassingProps(mergedSxStateProps);

      applySxStateBaseStyleCSSIds.current = mergedSXBaseStyleCSSIds;
      applySxDescendantStateStyleCSSIdsAndPropsWithKey.current =
        mergedSxDescendantsStyle;

      mergedDescendantsStyle = h;
    } else {
      if (containsSX) {
        //TODO: start: refactor for sx state + colormode + dynamic variable
        // for sx state props
        let stateColorMode: any = {};
        let currentStateArray: any = [];
        if (COLOR_MODE || states) {
          stateColorMode = {
            ...states,
            [COLOR_MODE]: true,
          };
          currentStateArray = Object.keys(stateColorMode).filter(
            (key) => stateColorMode[key] === true
          );
        }

        // MUST REFACTOR: setStateAndColorModeCssIdsAndProps

        if (
          Object.keys(filteredComponentSx).length > 0 ||
          Object.keys(filteredPassingSx).length > 0
        ) {
          const {
            baseStyleCSSIds: mergedSXBaseStyleCSSIds,
          }: // variantStyleCSSIds: mergedSXVariantStyleCSSIds,
          // passingProps: mergedSxStateProps,
          any = getMergedStateAndColorModeCSSIdsAndProps(
            sxComponentStyleIds.current,
            //@ts-ignore
            sxBaseStyleFlatternStyleObject,
            states,
            variantProps,
            COLOR_MODE,
            theme,
            sxVariantFlatternStyleObject,
            sxCompoundVariantFlatternStyleObject,
            currentStateArray
          );
          applySxStateBaseStyleCSSIds.current = mergedSXBaseStyleCSSIds;

          const mergedSxDescendantsStyle: any = {};
          if (sxDescendantStyleIds.current) {
            Object.keys(sxDescendantStyleIds.current).forEach((key) => {
              const {
                baseStyleCSSIds: sxDescendantBaseStyleCSSIds,
                variantStyleCSSIds: sxDescendantVariantStyleCSSIds,
                passingProps: mergedPassingProps,
              } = getMergedStateAndColorModeCSSIdsAndProps(
                //@ts-ignore
                sxDescendantStyleIds.current,
                sxDescendantFlattenStyles[key]?.[
                  'componentBaseStyleFlatternStyleIdObject'
                ],
                states,
                variantProps,
                COLOR_MODE,
                theme,
                sxDescendantFlattenStyles[key]?.[
                  'componentVariantFlatternStyleIdObject'
                ],
                sxDescendantFlattenStyles[key]?.[
                  'componentCompoundVariantFlatternStyleIdObject'
                ],
                currentStateArray
              );

              mergedSxDescendantsStyle[key] = {
                baseStyleCSSIds: sxDescendantBaseStyleCSSIds,
                variantStyleCSSIds: sxDescendantVariantStyleCSSIds,
                passingProps: mergedPassingProps,
              };
            });

            applySxDescendantStateStyleCSSIdsAndPropsWithKey.current =
              mergedSxDescendantsStyle;
          }
        }
        // MUST REFACTOR END: setStateAndColorModeCssIdsAndProps

        //TODO: end: refactor for sx state + colormode + dynamic variable
      }
    }

    const [
      applyComponentStateBaseStyleIds,
      setApplyComponentStateBaseStyleIds,
    ] = useState(mergedBaseStyleCSSIds);
    const [
      applyComponentStateVariantStyleIds,
      setApplyComponentStateVariantStyleIds,
    ] = useState(mergedVariantStyleCSSIds);

    // const [applySxStateBaseStyleCSSIds, setApplyStateSxBaseStyleCSSIds] =
    //   useState(mergedSXBaseStyleCSSIds);

    // const [applySxStateVariantStyleCSSIds, setApplyStateSxVariantStyleCSSIds] =
    //   useState(mergedSXVariantStyleCSSIds);
    const applySxStateVariantStyleCSSIds = useRef(mergedSXVariantStyleCSSIds);

    const [
      applyDescendantStateStyleCSSIdsAndPropsWithKey,
      setApplyDescendantStateStyleCSSIdsAndPropsWithKey,
    ] = useState(mergedDescendantsStyle);
    // const [
    //   applySxDescendantStateStyleCSSIdsAndPropsWithKey,
    //   setApplySxDescendantStateStyleCSSIdsAndPropsWithKey,
    // ] = useState(mergedSxDescendantsStyle);

    // START: Unable to optimize because of useEffect overhead and stableHash to prevent rerender
    useEffect(() => {
      onChange((colorMode: any) => {
        // setCOLOR_MODE(colorMode);
        const {
          mergedBaseStyleCSSIds,
          mergedVariantStyleCSSIds,
          stateProps,
          mergedSXBaseStyleCSSIds,
          mergedSXVariantStyleCSSIds,
          mergedSxStateProps,
          mergedSxDescendantsStyle,
          mergedDescendantsStyle,
        } = setStateAndColorModeCssIdsAndProps(
          colorMode,
          states,
          variantProps,
          theme,
          componentStyleIds,
          sxComponentStyleIds,
          componentBaseStyleFlatternStyleIdObject,
          componentVariantFlatternStyleIdObject,
          componentCompoundVariantFlatternStyleIdObject,
          componentDescendantFlattenStyles,
          sxBaseStyleFlatternStyleObject,
          sxVariantFlatternStyleObject,
          sxCompoundVariantFlatternStyleObject,
          sxDescendantFlattenStyles,
          componentDescendantStyleIds,
          sxDescendantStyleIds
        );

        setApplyComponentStateBaseStyleIds(mergedBaseStyleCSSIds);
        setApplyComponentStateVariantStyleIds(mergedVariantStyleCSSIds);
        setComponentStatePassingProps(stateProps);
        applySxStateBaseStyleCSSIds.current = mergedSXBaseStyleCSSIds;
        // setApplyStateSxBaseStyleCSSIds();
        applySxStateVariantStyleCSSIds.current = mergedSXVariantStyleCSSIds;
        // setApplyStateSxVariantStyleCSSIds(mergedSXVariantStyleCSSIds);
        setSxStatePassingProps(mergedSxStateProps);
        setApplyDescendantStateStyleCSSIdsAndPropsWithKey(
          mergedDescendantsStyle
        );
        applySxDescendantStateStyleCSSIdsAndPropsWithKey.current =
          mergedSxDescendantsStyle;
        // setApplySxDescendantStateStyleCSSIdsAndPropsWithKey(
        //   mergedSxDescendantsStyle
        // );
      });
      // remove onchage listener on unmount
      () =>
        onChange((colorMode: any) => {
          // setCOLOR_MODE(colorMode);
          setStateAndColorModeCssIdsAndProps(
            colorMode,
            states,
            variantProps,
            theme,
            componentStyleIds,
            sxComponentStyleIds,
            componentBaseStyleFlatternStyleIdObject,
            componentVariantFlatternStyleIdObject,
            componentCompoundVariantFlatternStyleIdObject,
            componentDescendantFlattenStyles,
            sxBaseStyleFlatternStyleObject,
            sxVariantFlatternStyleObject,
            sxCompoundVariantFlatternStyleObject,
            sxDescendantFlattenStyles,
            componentDescendantStyleIds,
            sxDescendantStyleIds
          );
        });
    }, []);

    useEffect(() => {
      if (states) {
        const {
          mergedBaseStyleCSSIds,
          mergedVariantStyleCSSIds,
          stateProps,
          mergedSXBaseStyleCSSIds,
          mergedSXVariantStyleCSSIds,
          mergedSxStateProps,
          mergedSxDescendantsStyle,
          mergedDescendantsStyle,
        } = setStateAndColorModeCssIdsAndProps(
          COLOR_MODE,
          states,
          variantProps,
          theme,
          componentStyleIds,
          sxComponentStyleIds,
          componentBaseStyleFlatternStyleIdObject,
          componentVariantFlatternStyleIdObject,
          componentCompoundVariantFlatternStyleIdObject,
          componentDescendantFlattenStyles,
          sxBaseStyleFlatternStyleObject,
          sxVariantFlatternStyleObject,
          sxCompoundVariantFlatternStyleObject,
          sxDescendantFlattenStyles,
          componentDescendantStyleIds,
          sxDescendantStyleIds
        );
        setApplyComponentStateBaseStyleIds(mergedBaseStyleCSSIds);
        setApplyComponentStateVariantStyleIds(mergedVariantStyleCSSIds);
        setComponentStatePassingProps(stateProps);
        applySxStateBaseStyleCSSIds.current = mergedSXBaseStyleCSSIds;
        // setApplyStateSxBaseStyleCSSIds(mergedSXBaseStyleCSSIds);
        applySxStateVariantStyleCSSIds.current = mergedSXVariantStyleCSSIds;
        // setApplyStateSxVariantStyleCSSIds(mergedSXVariantStyleCSSIds);
        setSxStatePassingProps(mergedSxStateProps);
        setApplyDescendantStateStyleCSSIdsAndPropsWithKey(
          mergedDescendantsStyle
        );
        applySxDescendantStateStyleCSSIdsAndPropsWithKey.current =
          mergedSxDescendantsStyle;
        // setApplySxDescendantStateStyleCSSIdsAndPropsWithKey(
        //   mergedSxDescendantsStyle
        // );
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [states]);

    // 600ms
    const descendantCSSIds = useMemo(() => {
      if (!containsDescendant) {
        return {};
      }
      const ids = (() => {
        if (
          applyDescendantsStyleCSSIdsAndPropsWithKey ||
          applyDescendantStateStyleCSSIdsAndPropsWithKey ||
          applySxDescendantStateStyleCSSIdsAndPropsWithKey.current ||
          applySxDescendantStyleCSSIdsAndPropsWithKey ||
          ancestorStyleContext
        ) {
          return mergeArraysInObjects(
            applyDescendantsStyleCSSIdsAndPropsWithKey,
            applyDescendantStateStyleCSSIdsAndPropsWithKey,
            applySxDescendantStyleCSSIdsAndPropsWithKey.current,
            applySxDescendantStateStyleCSSIdsAndPropsWithKey.current,
            ancestorStyleContext
          );
        } else {
          return {};
        }
      })();
      return ids;
    }, [
      stableHash(applyDescendantsStyleCSSIdsAndPropsWithKey),
      stableHash(applyDescendantStateStyleCSSIdsAndPropsWithKey),
      stableHash(applySxDescendantStateStyleCSSIdsAndPropsWithKey.current),
      ancestorStyleContext,
    ]);

    // 370ms

    // END: Unable to optimize because of useEffect overhead and stableHash to prevent rerender

    const styleCSSIds = [
      ...applyBaseStyleCSSIds,
      ...applyAncestorBaseStyleCSSIds,
      ...applyVariantStyleCSSIds,
      ...applyAncestorVariantStyleCSSIds,
      ...applyComponentStateBaseStyleIds,
      ...applyComponentStateVariantStyleIds,
      ...applySxVariantStyleCSSIds.current,
      ...applySxStateVariantStyleCSSIds.current,
      ...applySxBaseStyleCSSIds.current,
      ...applySxStateBaseStyleCSSIds.current,
    ];
    Object.assign(resolvedInlineProps, applyComponentInlineProps);
    const resolvedStyleProps = generateStylePropsFromCSSIds(
      resolvedInlineProps,
      styleCSSIds,
      CONFIG,
      activeTheme
    );
    const AsComp: any =
      resolvedStyleProps.as || (passingProps.as as any) || undefined;

    let resolvedStyleMemo = [passingProps?.style, ...resolvedStyleProps?.style];
    if (Platform.OS === 'web') {
      resolvedStyleMemo = StyleSheet.flatten(resolvedStyleMemo);
    }

    delete resolvedStyleProps?.as;

    let component;
    if (AsComp) {
      //@ts-ignore
      if (Component.isComposedComponent) {
        component = (
          <Component
            {...resolvedStyleProps}
            style={resolvedStyleMemo}
            as={AsComp}
            ref={ref}
          >
            {children}
          </Component>
        );
      } else {
        component = (
          <AsComp {...resolvedStyleProps} style={resolvedStyleMemo} ref={ref}>
            {children}
          </AsComp>
        );
      }
    } else {
      component = (
        <Component {...resolvedStyleProps} style={resolvedStyleMemo} ref={ref}>
          {children}
        </Component>
      );
    }

    if (containsDescendant) {
      return (
        <AncestorStyleContext.Provider value={descendantCSSIds}>
          {component}
        </AncestorStyleContext.Provider>
      );
    }
    // }

    return component;
  };

  const StyledComp = React.forwardRef(NewComp);

  const displayName = componentStyleConfig?.componentName
    ? componentStyleConfig?.componentName
    : Component?.displayName;

  StyledComp.displayName = displayName
    ? 'Styled' + displayName
    : 'StyledComponent';

  //@ts-ignore

  if (Component.isStyledComponent) {
    //@ts-ignore
    StyledComp.isComposedComponent = true;
  }

  //@ts-ignore
  StyledComp.isStyledComponent = true;

  return StyledComp;
}

export function styled<P, Variants, ComCon>(
  Component: React.ComponentType<P>,
  theme: ITheme<Variants, P>,
  componentStyleConfig?: IComponentStyleConfig<ComCon>,
  ExtendedConfig?: ExtendedConfigType,
  BUILD_TIME_PARAMS?: {
    orderedResolved: OrderedSXResolved;
    verbosedStyleIds: {
      component: StyleIds;
      descendant: StyleIds;
    };
    toBeInjected: any;
    styledIds: Array<string>;
  }
) {
  // const DEBUG_TAG = componentStyleConfig?.DEBUG;
  // const DEBUG =
  //   process.env.NODE_ENV === 'development' && DEBUG_TAG ? false : false;

  const sxConvertedObject = convertStyledToStyledVerbosed(theme);

  const StyledComponent = verboseStyled<P, Variants, ComCon>(
    Component,
    sxConvertedObject,
    componentStyleConfig,
    ExtendedConfig,
    BUILD_TIME_PARAMS
  );

  return StyledComponent;
}
