/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  ForwardRefExoticComponent,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import type {
  OrderedSXResolved,
  StyleIds,
  IVerbosedTheme,
  ITheme,
  ExtendedConfigType,
  IComponentStyleConfig,
  StyledComponentProps,
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
import { resolvePlatformTheme } from './utils';

import {
  convertStyledToStyledVerbosed,
  convertSxToSxVerbosed,
} from './convertSxToSxVerbosed';
import { stableHash } from './stableHash';
import { DeclarationType, GluestackStyleSheet } from './style-sheet';
import {
  CSSPropertiesMap,
  reservedKeys as _reservedKeys,
} from './core/styled-system';
import { updateOrderUnResolvedMap } from './updateOrderUnResolvedMap';
import { resolveComponentTheme } from './createConfig';

// Create a caching object
let sxMemoizationCache: any = {};

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
  componentStyleConfig: IComponentStyleConfig & { uniqueComponentId: string },
  reservedKeys: any = _reservedKeys,
  plugins: any[] = [],
  ignoreKeys: Set<any> = new Set(),
  Component: any = null,
  ExtendedConfig: any = {}
) {
  const { sx: userSX, ...componentRestProps }: any = componentProps;

  const { sxProps: utilityResolvedSX, mergedProps: restProps } =
    convertUtilityPropsToSX(
      styledSystemProps,
      componentStyleConfig?.descendantStyle,
      componentRestProps,
      reservedKeys
    );

  let resolvedSxVerbose = deepMergeObjects(utilityResolvedSX, userSX);

  let sxIgnoreKeys = new Set();

  if (plugins) {
    for (const pluginName in plugins) {
      if (plugins[pluginName]?.inputMiddleWare) {
        // @ts-ignore
        [resolvedSxVerbose, , , , sxIgnoreKeys] = plugins[
          pluginName
        ]?.inputMiddleWare(
          resolvedSxVerbose,
          false,
          false,
          Component,
          componentStyleConfig,
          ExtendedConfig
        );
      }
    }

    sxIgnoreKeys?.forEach((element) => {
      ignoreKeys.add(element);
    });
  }

  const resolvedSXVerbosed = convertSxToSxVerbosed(resolvedSxVerbose);

  return {
    sx: resolvedSXVerbosed,
    nonVerbosedSx: resolvedSxVerbose,
    rest: restProps,
  };
}

function getStateStyleCSSFromStyleIdsAndProps(
  flatternStyleIdObject: any,
  currentStateArray: any,
  activeThemes: Array<any> = []
) {
  const stateStyleCSSIds: Array<any> = [];
  let props = {};

  Object.keys(flatternStyleIdObject).forEach((styleId) => {
    const styleIdKeyArray = styleId.split('.');

    const filteredStyleIdKeyArray = styleIdKeyArray.filter(
      (item) =>
        item !== 'state' &&
        item !== 'props' &&
        item !== 'theme' &&
        !activeThemes.includes(item)
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
  properties: any,
  activeThemes = []
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

    activeThemes.forEach((currentTheme: any) => {
      if (componentStyleIds?.baseStyle?.theme?.[currentTheme]) {
        baseStyleCSSIds.push(
          //@ts-ignore
          ...componentStyleIds?.baseStyle?.theme?.[currentTheme]?.ids
        );
        props = deepMergeObjects(
          props,
          componentStyleIds?.baseStyle?.theme?.[currentTheme]?.props
        );
      }
    });
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
      componentStyleIds?.variants[variant]?.[variantName]
    ) {
      if (componentStyleIds?.variants[variant]?.[variantName]?.ids) {
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

      activeThemes.forEach((currentTheme: any) => {
        if (
          componentStyleIds?.variants[variant]?.[variantName]?.theme?.[
            currentTheme
          ]
        ) {
          variantStyleCSSIds.push(
            ...componentStyleIds?.variants[variant]?.[variantName]?.theme?.[
              currentTheme
            ]?.ids
          );
          props = deepMergeObjects(
            props,
            componentStyleIds?.variants[variant]?.[variantName]?.theme?.[
              currentTheme
            ]?.props
          );
        }
      });
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

      activeThemes.forEach((currentTheme) => {
        if (compoundVariant.theme?.[currentTheme]) {
          variantStyleCSSIds.push(
            // @ts-ignore
            ...compoundVariant.theme?.[currentTheme]?.ids
          );
          props = deepMergeObjects(
            props,
            // @ts-ignore
            compoundVariant.theme?.[currentTheme]?.props
          );
        }
      });
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
  properties: any,
  activeTheme: any
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
        properties,
        activeTheme
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

const AncestorStyleContext = React.createContext({
  sx: {},
  component: {},
});
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
  sxDescendantStyleIds: any,
  activeThemes: Array<any>
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
    currentStateArray,
    activeThemes
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
    currentStateArray,
    activeThemes
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
        componentDescendantStyleIds[key],
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
        currentStateArray,
        activeThemes
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
        sxDescendantStyleIds.current[key],
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
        currentStateArray,
        activeThemes
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
  currentStateArray: any,
  activeThemes: Array<any> = []
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
        currentStateArray,
        activeThemes
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

        activeThemes.forEach((currentTheme: any) => {
          if (
            componentVariantFlatternStyleIdObject?.[variantObjectPath]?.theme?.[
              currentTheme
            ]
          ) {
            const {
              cssIds: stateStleCSSFromStyleIds,
              passingProps: stateStyleProps,
            } = getStateStyleCSSFromStyleIdsAndProps(
              componentVariantFlatternStyleIdObject?.[variantObjectPath]
                ?.theme?.[currentTheme],
              currentStateArray
            );

            push_unique(stateVariantStyleCSSIds, stateStleCSSFromStyleIds);

            props = deepMergeObjects(props, stateStyleProps);
          }
        });
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

          activeThemes.forEach((currentTheme: any) => {
            if (compoundVariant.theme?.[currentTheme]) {
              const {
                cssIds: stateStleCSSFromStyleIds,
                passingProps: stateStyleProps,
              } = getStateStyleCSSFromStyleIdsAndProps(
                compoundVariant.theme?.[currentTheme],
                currentStateArray
              );

              push_unique(stateVariantStyleCSSIds, stateStleCSSFromStyleIds);

              props = deepMergeObjects(props, stateStyleProps);
            }
          });
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

export function getVariantProps(
  props: any,
  theme: any,
  shouldDeleteVariants: boolean = true
) {
  const variantTypes = theme?.variants ? Object.keys(theme.variants) : [];
  const variantProps: any = {};
  const restProps = { ...props };

  if (restProps) {
    variantTypes?.forEach((variant) => {
      if (
        props.hasOwnProperty(variant) &&
        theme.variants[variant]?.[props[variant]]
      ) {
        variantProps[variant] = props[variant];

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

function resolveInlineProps(
  componentStyleConfig: any,
  componentExtendedConfig: any,
  props: any,
  CONFIG: any
) {
  let resolvedInlineProps = {};

  if (
    componentStyleConfig.resolveProps &&
    Object.keys(componentExtendedConfig).length > 0
  ) {
    componentStyleConfig.resolveProps.forEach((toBeResovledProp: any) => {
      if (props[toBeResovledProp]) {
        let value = props[toBeResovledProp];
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
                scale,
                Platform.OS !== 'web'
              )
          );

          //@ts-ignore
          resolvedInlineProps[toBeResovledProp] = token;
        } else {
          //@ts-ignore
          resolvedInlineProps[toBeResovledProp] =
            getResolvedTokenValueFromConfig(
              componentExtendedConfig,
              props,
              toBeResovledProp,
              props[toBeResovledProp],
              Platform.OS !== 'web'
            );
        }
        delete props[toBeResovledProp];
      }
    });
  }
  return resolvedInlineProps;
}

const getStyleIdsFromMap = (
  CONFIG: any,
  ExtendedConfig: any,
  styleIds: any
) => {
  let componentExtendedConfig = CONFIG;

  if (ExtendedConfig) {
    componentExtendedConfig = deepMergeObjects(CONFIG, ExtendedConfig);
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

export function verboseStyled<
  P extends React.ComponentType<any>,
  Variants,
  ComCon
>(
  Component: P,
  theme: Partial<IVerbosedTheme<Variants, React.ComponentProps<P>>>,
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
  },
  nonVerbosedTheme?: any
) {
  // const componentName = componentStyleConfig?.componentName;
  const componentHash = stableHash({
    ...theme,
    ...componentStyleConfig,
    ...ExtendedConfig,
  });

  let declarationType: DeclarationType = 'boot';

  if (Component?.displayName === '__AsForwarder__') {
    declarationType = 'forwarded';
  }

  resolvePlatformTheme(theme, Platform.OS);

  // const DEBUG_TAG = componentStyleConfig?.DEBUG;
  // const DEBUG =
  //   process.env.NODE_ENV === 'development' && DEBUG_TAG ? false : false;

  //@ts-ignore
  let styleHashCreated = false;
  let pluginData: any;
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
  //@ts-ignore
  const isStyledComponent = Component?.isStyledComponent;
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

    BUILD_TIME_PARAMS.toBeInjected =
      GluestackStyleSheet.update(orderedResolved);
  } else {
    const { styledIds: g, verbosedStyleIds } = updateOrderUnResolvedMap(
      { ...theme },
      componentHash,
      declarationType,
      componentStyleConfig,
      GluestackStyleSheet,
      Platform.OS,
      isStyledComponent
    );

    orderedCSSIds = g;

    styleIds = verbosedStyleIds;
  }

  if (BUILD_TIME_PARAMS?.verbosedStyleIds) {
    styleIds = BUILD_TIME_PARAMS?.verbosedStyleIds;
  }

  function injectSx(
    sx: any,
    type: any = 'inline',
    inlineStyleMap?: any,
    ignoreKeys: Set<any> = new Set()
  ) {
    const sxHash = stableHash(sx);

    const memoizationKey = sxHash + type;
    // Check if the result is already in the cache
    if (sxMemoizationCache[memoizationKey]) {
      injectComponentAndDescendantStyles(
        sxMemoizationCache[memoizationKey],
        sxHash,
        type,
        GluestackStyleSheet,
        Platform.OS,
        inlineStyleMap,
        ignoreKeys,
        CONFIG
      );

      return sxMemoizationCache[memoizationKey];
    }

    const inlineSxTheme = {
      baseStyle: sx,
    };

    // if (Platform.OS === '')
    // console.log(sxHash, GluestackStyleSheet.getStyleMap(), 'hash here');

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

    // const sxHash = stableHash(sx);

    const orderedSXResolved =
      styledResolvedToOrderedSXResolved(sxStyledResolved);
    INTERNAL_updateCSSStyleInOrderedResolved(
      orderedSXResolved,
      sxHash,
      true,
      'gs'
    );

    injectComponentAndDescendantStyles(
      orderedSXResolved,
      sxHash,
      type,
      GluestackStyleSheet,
      Platform.OS,
      inlineStyleMap,
      ignoreKeys,
      CONFIG
    );

    sxMemoizationCache[memoizationKey] = orderedSXResolved;

    return orderedSXResolved;
  }

  // END BASE COLOR MODE RESOLUTION

  let CONFIG: any = {};
  let plugins: any = [];
  let reservedKeys = { ..._reservedKeys };

  const containsDescendant =
    componentStyleConfig?.descendantStyle &&
    componentStyleConfig?.descendantStyle?.length > 0;

  let uniqueComponentId = '';

  const StyledComponent = (
    {
      //@ts-ignore
      orderedResolved: BUILD_TIME_ORDERED_RESOLVED = [],
      //@ts-ignore
      verbosedStyleIds: BUILD_TIME_VERBOSED_STYLE_IDS = {},
      //@ts-ignore
      states,
      // styledIds: BUILD_TIME_STYLE_IDS = [],
      // sxHash: BUILD_TIME_sxHash = '',
      ...componentProps
    }: any,
    ref: any
  ) => {
    const isClient = React.useRef(false);
    const GluestackComponent = useRef(Component);
    if (uniqueComponentId === '') {
      uniqueComponentId = componentHash;
    }

    let ignoreKeys: Set<any> = new Set();

    //@ts-ignore
    let themeDefaultProps = { ...theme.baseStyle?.props };

    const sxComponentStyleIds = useRef({});
    const sxDescendantStyleIds: any = useRef({});

    const sxComponentPassingProps = useRef({});

    const applySxBaseStyleCSSIds = useRef([]);
    const applySxVariantStyleCSSIds = useRef([]);

    const applySxDescendantStyleCSSIdsAndPropsWithKey = useRef({});

    const styledContext = useStyled();

    const { themes: activeThemes } = useTheme();

    const ancestorStyleContext = useContext(AncestorStyleContext);
    let incomingComponentProps = {};
    let applyComponentInlineProps = {};
    const sxBaseStyleFlatternStyleObject = React.useRef({});
    const sxVariantFlatternStyleObject = React.useRef({});
    const sxCompoundVariantFlatternStyleObject = React.useRef({});
    const sxDescendantFlattenStyles: any = React.useRef({});

    const COLOR_MODE: any = styledContext._experimentalNestedProvider
      ? styledContext.colorMode
      : get();

    if (!styleHashCreated) {
      // eslint-disable-next-line react-hooks/rules-of-hooks

      CONFIG = {
        ...styledContext.config,
        propertyTokenMap,
      };

      const prefixedMediaQueries: any = {};

      if (CONFIG?.tokens?.mediaQueries) {
        Object.keys(CONFIG?.tokens?.mediaQueries).forEach((key: any) => {
          prefixedMediaQueries[key] = {
            key: `@${key}`,
            isMediaQuery: true,
          };
        });
      }

      Object.assign(reservedKeys, { ...prefixedMediaQueries });
      // for extended components

      const EXTENDED_THEME =
        componentStyleConfig.componentName &&
        CONFIG?.components?.[componentStyleConfig.componentName];

      // middleware logic

      let componentExtendedTheme = {};

      nonVerbosedTheme = deepMerge(nonVerbosedTheme, EXTENDED_THEME?.theme);

      if (CONFIG.plugins) {
        plugins.push(...CONFIG.plugins);
      }
      if (ExtendedConfig?.plugins) {
        plugins.push(...ExtendedConfig?.plugins);
      }

      if (plugins) {
        for (const pluginName in plugins) {
          let themeIgnoreKeys = new Set();
          if (plugins[pluginName]?.inputMiddleWare) {
            // @ts-ignore
            [nonVerbosedTheme, , , , themeIgnoreKeys] = plugins[
              pluginName
            ]?.inputMiddleWare<P>(
              nonVerbosedTheme,
              true,
              true,
              componentProps?.as ?? Component,
              { ...componentStyleConfig, uniqueComponentId },
              ExtendedConfig
            );
          }
          themeIgnoreKeys?.forEach((ele) => {
            ignoreKeys.add(ele);
          });
        }
      }

      // Injecting style
      if (EXTENDED_THEME) {
        // RUN Middlewares

        const resolvedComponentExtendedTheme = resolveComponentTheme(
          CONFIG,
          EXTENDED_THEME
        );

        componentExtendedTheme = resolvedComponentExtendedTheme.theme;

        // const resolvedComponentExtendedTheme = EXTENDED_THEME;

        if (Object.keys(EXTENDED_THEME?.BUILD_TIME_PARAMS ?? {}).length > 0) {
          const EXTENDED_THEME_BUILD_TIME_PARAMS =
            EXTENDED_THEME?.BUILD_TIME_PARAMS;
          deepMergeArray(
            styleIds,
            EXTENDED_THEME_BUILD_TIME_PARAMS?.verbosedStyleIds
          );
          GluestackStyleSheet.inject(
            EXTENDED_THEME_BUILD_TIME_PARAMS?.toBeInjected,
            styledContext.inlineStyleMap
          );
        } else {
          // Merge of Extended Config Style ID's with Component Style ID's
          deepMergeArray(
            styleIds,
            resolvedComponentExtendedTheme?.verbosedStyleIds
          );

          const extendedStylesToBeInjected = GluestackStyleSheet.resolve(
            resolvedComponentExtendedTheme?.styledIds,
            CONFIG,
            componentExtendedConfig,
            true,
            'extended',
            ignoreKeys
          );
          GluestackStyleSheet.inject(
            extendedStylesToBeInjected,
            styledContext.inlineStyleMap
          );
        }
      }

      // for extended components end

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
          componentExtendedConfig,
          true,
          'boot',
          ignoreKeys
        );

        if (Platform.OS === 'web') {
          GluestackStyleSheet.inject(
            toBeInjected,
            styledContext.inlineStyleMap
          );
        }
      } else {
        if (Platform.OS === 'web') {
          //@ts-ignore
          GluestackStyleSheet.inject(
            BUILD_TIME_PARAMS.toBeInjected,
            styledContext.inlineStyleMap
          );
        }
      }

      theme = deepMerge(theme, componentExtendedTheme);
      // @ts-ignore
      Object.assign(themeDefaultProps, theme?.baseStyle?.props);

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
    } = getAncestorCSSStyleIds(
      componentStyleConfig,
      ancestorStyleContext.component
    );

    const {
      passingProps: applySxAncestorPassingProps,
      baseStyleCSSIds: applySxAncestorBaseStyleCSSIds,
      variantStyleIds: applySxAncestorVariantStyleCSSIds,
    } = getAncestorCSSStyleIds(componentStyleConfig, ancestorStyleContext.sx);

    Object.assign(incomingComponentProps, applyAncestorPassingProps);
    Object.assign(incomingComponentProps, applySxAncestorPassingProps);
    Object.assign(incomingComponentProps, componentProps);

    const {
      variantProps: defaultVariantProps,
      restProps: defaultThemePropsWithoutVariants,
    } = getVariantProps(themeDefaultProps, theme);

    const {
      variantProps: inlineVariantProps,
      restProps: inlineComponentPropsWithoutVariants,
    } = getVariantProps(incomingComponentProps, theme);

    const variantProps = Object.assign(defaultVariantProps, inlineVariantProps);

    const {
      baseStyleCSSIds: applyBaseStyleCSSIds,
      variantStyleCSSIds: applyVariantStyleCSSIds,
      passingProps: applyComponentPassingProps,
    } = getMergedDefaultCSSIdsAndProps(
      //@ts-ignore
      componentStyleIds,
      variantProps,
      theme,
      incomingComponentProps,
      activeThemes
    );

    let mergedBaseStyleCSSIds: any = [];
    let mergedVariantStyleCSSIds: any = [];
    let stateProps = [];
    let mergedSXBaseStyleCSSIds: any = [];
    let mergedSXVariantStyleCSSIds: any = [];
    let mergedSxStateProps: any = [];
    let mergedSxDescendantsStyle: any = {};
    let mergedDescendantsStyle: any = {};

    let orderedComponentSXResolved: any = [];
    let orderedPassingSXResolved: any = [];
    const sxStyleIds: any = React.useRef(BUILD_TIME_VERBOSED_STYLE_IDS);

    if (BUILD_TIME_ORDERED_RESOLVED.length > 0 && !isClient.current) {
      const toBeInjected = GluestackStyleSheet.update(
        BUILD_TIME_ORDERED_RESOLVED
      );

      if (Platform.OS === 'web') {
        GluestackStyleSheet.inject(toBeInjected, styledContext.inlineStyleMap);
      }
      sxStyleIds.current = BUILD_TIME_VERBOSED_STYLE_IDS;

      if (!sxStyleIds.current.component) {
        sxStyleIds.current.component = {};
      }
      sxStyleIds.current.component.variants = componentStyleIds.variants;
      //@ts-ignore
      sxStyleIds.current.component.compoundVariants =
        componentStyleIds.compoundVariants;
      // console.setStartTimeStamp('setColorModeBaseStyleIds');
      sxComponentStyleIds.current = sxStyleIds.current?.component;
      sxDescendantStyleIds.current = sxStyleIds.current.descendant;
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
        incomingComponentProps,
        activeThemes
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
            sxDescendantFlattenStyles.current[currentDescendant] =
              getFlattenStyleObjectFromStyleIds(
                sxDescendantStyleIds.current[currentDescendant]
              );
          }
        );
      }

      sxBaseStyleFlatternStyleObject.current = a;
      sxVariantFlatternStyleObject.current = b;
      sxCompoundVariantFlatternStyleObject.current = c;
    }

    if (!isClient.current) {
      const {
        mergedBaseStyleCSSIds: a,
        mergedVariantStyleCSSIds: b,
        stateProps: c,
        mergedSXBaseStyleCSSIds: d,
        mergedSXVariantStyleCSSIds: e,
        mergedSxStateProps: f,
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
        sxBaseStyleFlatternStyleObject.current,
        sxVariantFlatternStyleObject.current,
        sxCompoundVariantFlatternStyleObject.current,
        sxDescendantFlattenStyles.current,
        componentDescendantStyleIds,
        sxDescendantStyleIds,
        activeThemes
      );

      mergedBaseStyleCSSIds = a;
      mergedVariantStyleCSSIds = b;
      stateProps = c;
      mergedSXBaseStyleCSSIds = d;
      mergedSXVariantStyleCSSIds = e;
      mergedSxStateProps = f;
      mergedSxDescendantsStyle = g;
      mergedDescendantsStyle = h;
    }

    const applySxStateBaseStyleCSSIds = useRef(mergedSXBaseStyleCSSIds);
    const applySxStatePassingProps = useRef(mergedSxDescendantsStyle);

    const applySxDescendantStateStyleCSSIdsAndPropsWithKey =
      useRef(mergedSxStateProps);
    const [componentStatePassingProps, setComponentStatePassingProps] =
      useState(stateProps);
    // const [sxStatePassingProps, setSxStatePassingProps] =
    //   useState(mergedSxStateProps);

    const [
      applyComponentStateVariantStyleIds,
      setApplyComponentStateVariantStyleIds,
    ] = useState(mergedVariantStyleCSSIds);

    // const [applySxStateBaseStyleCSSIds, setApplyStateSxBaseStyleCSSIds] =
    //   useState(mergedSXBaseStyleCSSIds);

    // const [applySxStateVariantStyleCSSIds, setApplyStateSxVariantStyleCSSIds] =
    //   useState(mergedSXVariantStyleCSSIds);
    const applySxStateVariantStyleCSSIds = useRef(mergedSXVariantStyleCSSIds);

    // const [
    //   applyDescendantStateStyleCSSIdsAndPropsWithKey,
    //   setApplyDescendantStateStyleCSSIdsAndPropsWithKey,
    // ] = useState(mergedDescendantsStyle);
    const applyDescendantStateStyleCSSIdsAndPropsWithKey = useRef(
      mergedDescendantsStyle
    );
    // const [
    //   applySxDescendantStateStyleCSSIdsAndPropsWithKey,
    //   setApplySxDescendantStateStyleCSSIdsAndPropsWithKey,
    // ] = useState(mergedSxDescendantsStyle);

    // passingProps is specific to current component

    // let applyComponentInlineProps: any = componentPropsWithoutVariants;

    // const STABLEHASH_states = stableHash(states);
    // 520ms

    // Inline prop based style resolution TODO: Diagram insertion
    const defaultResolvedInlineProps = resolveInlineProps(
      componentStyleConfig,
      componentExtendedConfig,
      defaultThemePropsWithoutVariants,
      CONFIG
    );

    const inlineResolvedInlineProps = resolveInlineProps(
      componentStyleConfig,
      componentExtendedConfig,
      inlineComponentPropsWithoutVariants,
      CONFIG
    );

    const passingProps = deepMergeObjects(
      applyComponentPassingProps,
      componentStatePassingProps,
      sxComponentPassingProps.current,
      applySxStatePassingProps.current
    );

    let {
      sx: filteredComponentSx,
      nonVerbosedSx,
      rest: filteredComponentRemainingProps,
    } = convertUtiltiyToSXFromProps(
      // Object.assign(
      //   defaultThemePropsWithoutVariants,
      inlineComponentPropsWithoutVariants,
      styledSystemProps,
      { ...componentStyleConfig, uniqueComponentId },
      reservedKeys,
      plugins,
      ignoreKeys,
      inlineComponentPropsWithoutVariants?.as ?? Component,
      ExtendedConfig
    );

    let sxToBePassedIntoPlugin = {
      ...nonVerbosedSx,
    };

    const mergedPassingProps = shallowMerge(
      { ...defaultThemePropsWithoutVariants, ...passingProps },
      applyAncestorPassingProps
    );

    let {
      sx: filteredPassingSx,
      nonVerbosedSx: filteredPassingNonVerbosedSx,
      rest: filteredPassingRemainingProps,
    } = convertUtiltiyToSXFromProps(
      mergedPassingProps,
      styledSystemProps,
      { ...componentStyleConfig, uniqueComponentId },
      reservedKeys,
      plugins,
      ignoreKeys,
      mergedPassingProps?.as ?? Component,
      ExtendedConfig
    );

    sxToBePassedIntoPlugin = deepMergeObjects(
      sxToBePassedIntoPlugin,
      filteredPassingNonVerbosedSx
    );

    let containsSX = false;
    Object.assign(applyComponentInlineProps, filteredPassingRemainingProps);
    Object.assign(applyComponentInlineProps, defaultResolvedInlineProps);

    Object.assign(applyComponentInlineProps, inlineResolvedInlineProps);
    Object.assign(applyComponentInlineProps, filteredComponentRemainingProps);

    if (
      Object.keys(filteredComponentSx).length > 0 ||
      Object.keys(filteredPassingSx).length > 0
    ) {
      containsSX = true;
    }

    let applyDescendantsStyleCSSIdsAndPropsWithKey = {};
    if (containsDescendant) {
      applyDescendantsStyleCSSIdsAndPropsWithKey =
        getMergeDescendantsStyleCSSIdsAndPropsWithKey(
          componentDescendantStyleIds,
          variantProps,
          theme,
          incomingComponentProps,
          activeThemes
        );
    }

    function injectAndUpdateSXProps(filteredPassingSx: any) {
      if (Object.keys(filteredComponentSx).length > 0) {
        orderedComponentSXResolved = injectSx(
          filteredComponentSx,
          'inline',
          styledContext.inlineStyleMap,
          ignoreKeys
        );
      }

      if (Object.keys(filteredPassingSx).length > 0) {
        orderedPassingSXResolved = injectSx(
          filteredPassingSx,
          'passing',
          styledContext.inlineStyleMap,
          ignoreKeys
        );
      }

      const orderedSXResolved = [
        ...orderedPassingSXResolved,
        ...orderedComponentSXResolved,
        ...BUILD_TIME_ORDERED_RESOLVED,
      ];
      // console.setStartTimeStamp('getStyleIds');
      sxStyleIds.current = getStyleIds(orderedSXResolved, componentStyleConfig);

      ///
      // Setting variants to sx property for inline variant resolution
      //@ts-ignore
      if (!sxStyleIds.current.component) {
        sxStyleIds.current.component = {};
      }
      sxStyleIds.current.component.variants = componentStyleIds.variants;
      //@ts-ignore
      sxStyleIds.current.component.compoundVariants =
        componentStyleIds.compoundVariants;
      // console.setStartTimeStamp('setColorModeBaseStyleIds');
      sxComponentStyleIds.current = sxStyleIds.current?.component;
      sxDescendantStyleIds.current = sxStyleIds.current.descendant;
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
        incomingComponentProps,
        activeThemes
      );
      //@ts-ignore
      // applySxStyleCSSIds.current = sxStyleCSSIds;
      //@ts-ignore
      applySxBaseStyleCSSIds.current = sxBaseStyleCSSIds;
      //@ts-ignore
      applySxVariantStyleCSSIds.current = sxVariantStyleCSSIds;
      sxComponentPassingProps.current = sxPassingProps;
    }

    if (containsSX) {
      injectAndUpdateSXProps(filteredPassingSx);

      const {
        componentBaseStyleFlatternStyleIdObject: a,
        componentVariantFlatternStyleIdObject: b,
        componentCompoundVariantFlatternStyleIdObject: c,
      } = getFlattenStyleObjectFromStyleIds(sxComponentStyleIds.current);

      if (sxDescendantStyleIds.current && containsDescendant) {
        Object.keys(sxDescendantStyleIds.current).forEach(
          (currentDescendant: any) => {
            sxDescendantFlattenStyles.current[currentDescendant] =
              getFlattenStyleObjectFromStyleIds(
                sxDescendantStyleIds.current[currentDescendant]
              );
          }
        );
      }

      sxBaseStyleFlatternStyleObject.current = a;
      sxVariantFlatternStyleObject.current = b;
      sxCompoundVariantFlatternStyleObject.current = c;

      //TODO: start: refactor for sx state + colormode + dynamic variable
      // for sx state props
      let stateColorMode: any = {};
      let currentStateArray: any = [];
      if (COLOR_MODE || states) {
        stateColorMode = {
          //@ts-ignore
          ...states,
          [COLOR_MODE]: true,
        };
        currentStateArray = Object.keys(stateColorMode).filter(
          (key) => stateColorMode[key] === true
        );
      }

      // MUST REFACTOR: setStateAndColorModeCssIdsAndProps

      const {
        baseStyleCSSIds: mergedSXBaseStyleCSSIds,
        variantStyleCSSIds: mergedSXVariantStyleCSSIds,
        passingProps: mergedSxStateProps,
      } = getMergedStateAndColorModeCSSIdsAndProps(
        sxComponentStyleIds.current,
        //@ts-ignore
        sxBaseStyleFlatternStyleObject.current,
        states,
        variantProps,
        COLOR_MODE,
        theme,
        sxVariantFlatternStyleObject.current,
        sxCompoundVariantFlatternStyleObject.current,
        currentStateArray
      );

      applySxStateVariantStyleCSSIds.current = mergedSXVariantStyleCSSIds;
      applySxStateBaseStyleCSSIds.current = mergedSXBaseStyleCSSIds;
      applySxStatePassingProps.current = mergedSxStateProps;

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
            sxDescendantFlattenStyles.current[key]?.[
              'componentBaseStyleFlatternStyleIdObject'
            ],
            states,
            variantProps,
            COLOR_MODE,
            theme,
            sxDescendantFlattenStyles.current[key]?.[
              'componentVariantFlatternStyleIdObject'
            ],
            sxDescendantFlattenStyles.current[key]?.[
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

      applySxStateBaseStyleCSSIds.current = mergedSXBaseStyleCSSIds;
      applySxDescendantStateStyleCSSIdsAndPropsWithKey.current =
        mergedSxDescendantsStyle;

      // applySxStatePassingProps.current = mergedSxStateProps;
      // mergedDescendantsStyle = _h;

      //////

      if (
        Object.keys(applySxStatePassingProps.current).length > 0 ||
        Object.keys(sxComponentPassingProps.current).length > 0
      ) {
        const passingPropsUpdated = {
          ...passingProps,
          ...sxComponentPassingProps.current,
          ...applySxStatePassingProps.current,
          ...applyAncestorPassingProps,
        };

        const {
          sx: filteredPassingSxUpdated,
          nonVerbosedSx: filteredPassingNonVerbosedSxUpdated,
          rest: filteredPassingRemainingPropsUpdated,
        } = convertUtiltiyToSXFromProps(
          passingPropsUpdated,
          styledSystemProps,
          { ...componentStyleConfig, uniqueComponentId },
          reservedKeys,
          plugins,
          ignoreKeys,
          passingPropsUpdated?.as ?? Component,
          ExtendedConfig
        );

        sxToBePassedIntoPlugin = deepMergeObjects(
          sxToBePassedIntoPlugin,
          filteredPassingNonVerbosedSxUpdated
        );

        filteredPassingSx = filteredPassingSxUpdated;

        injectAndUpdateSXProps(filteredPassingSx);

        const resolvedPassingRemainingProps = resolveInlineProps(
          componentStyleConfig,
          componentExtendedConfig,
          filteredPassingRemainingPropsUpdated,
          CONFIG
        );

        // if (componentName === 'Switch') {
        //   console.log(
        //     // passingPropsUpdated,
        //     // resolvedPassingRemainingProps,
        //     resolvedInlineProps,
        //     // componentStyleConfig,
        //     '>>>>>>'
        //   );
        // }

        // Object.assign(applyComponentInlineProps, defaultResolvedInlineProps);
        // Object.assign(applyComponentInlineProps, filteredPassingRemainingProps);
        // Object.assign(applyComponentInlineProps, defaultInlineResolvedInlineProps);
        // Object.assign(applyComponentInlineProps, filteredComponentRemainingProps);

        Object.assign(
          applyComponentInlineProps,
          filteredPassingRemainingPropsUpdated
        );

        Object.assign(applyComponentInlineProps, resolvedPassingRemainingProps);

        Object.assign(applyComponentInlineProps, inlineResolvedInlineProps);

        Object.assign(
          applyComponentInlineProps,
          filteredComponentRemainingProps
        );
      }
    }

    if (containsDescendant) {
      //@ts-ignore
      applySxDescendantStyleCSSIdsAndPropsWithKey.current =
        getMergeDescendantsStyleCSSIdsAndPropsWithKey(
          sxDescendantStyleIds.current,
          variantProps,
          theme,
          incomingComponentProps,
          activeThemes
        );
    }

    const [
      applyComponentStateBaseStyleIds,
      setApplyComponentStateBaseStyleIds,
    ] = useState(mergedBaseStyleCSSIds);

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
          sxBaseStyleFlatternStyleObject.current,
          sxVariantFlatternStyleObject,
          sxCompoundVariantFlatternStyleObject,
          sxDescendantFlattenStyles.current,
          componentDescendantStyleIds,
          sxDescendantStyleIds,
          activeThemes
        );

        setApplyComponentStateBaseStyleIds(mergedBaseStyleCSSIds);
        setApplyComponentStateVariantStyleIds(mergedVariantStyleCSSIds);
        setComponentStatePassingProps(stateProps);
        applySxStateBaseStyleCSSIds.current = mergedSXBaseStyleCSSIds;
        // setApplyStateSxBaseStyleCSSIds();
        applySxStateVariantStyleCSSIds.current = mergedSXVariantStyleCSSIds;
        applySxStatePassingProps.current = mergedSxStateProps;
        // setApplyStateSxVariantStyleCSSIds(mergedSXVariantStyleCSSIds);
        // setSxStatePassingProps(mergedSxStateProps);
        // setComponentStatePassingProps(stateProps);
        applyDescendantStateStyleCSSIdsAndPropsWithKey.current =
          mergedDescendantsStyle;
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
            sxBaseStyleFlatternStyleObject.current,
            sxVariantFlatternStyleObject,
            sxCompoundVariantFlatternStyleObject,
            sxDescendantFlattenStyles.current,
            componentDescendantStyleIds,
            sxDescendantStyleIds,
            activeThemes
          );
        });
    }, []);

    useEffect(() => {
      if (states && isClient.current) {
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
          sxBaseStyleFlatternStyleObject.current,
          sxVariantFlatternStyleObject,
          sxCompoundVariantFlatternStyleObject,
          sxDescendantFlattenStyles.current,
          componentDescendantStyleIds,
          sxDescendantStyleIds,
          activeThemes
        );
        setApplyComponentStateBaseStyleIds(mergedBaseStyleCSSIds);
        setApplyComponentStateVariantStyleIds(mergedVariantStyleCSSIds);
        setComponentStatePassingProps(stateProps);
        applySxStateBaseStyleCSSIds.current = mergedSXBaseStyleCSSIds;
        // setApplyStateSxBaseStyleCSSIds(mergedSXBaseStyleCSSIds);
        applySxStateVariantStyleCSSIds.current = mergedSXVariantStyleCSSIds;
        // setApplyStateSxVariantStyleCSSIds(mergedSXVariantStyleCSSIds);
        applySxStatePassingProps.current = mergedSxStateProps;

        // setSxStatePassingProps(mergedSxStateProps);
        // setApplyDescendantStateStyleCSSIdsAndPropsWithKey(
        //   mergedDescendantsStyle
        // );
        applyDescendantStateStyleCSSIdsAndPropsWithKey.current =
          mergedDescendantsStyle;
        applySxDescendantStateStyleCSSIdsAndPropsWithKey.current =
          mergedSxDescendantsStyle;
        // setApplySxDescendantStateStyleCSSIdsAndPropsWithKey(
        //   mergedSxDescendantsStyle
        // );
      }
      if (!isClient.current) {
        isClient.current = true;
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [states]);

    // 600ms
    const descendantCSSIds = useMemo(() => {
      if (!containsDescendant) {
        return {
          component: {},
          sx: {},
        };
      }
      const ids = (() => {
        if (
          applyDescendantsStyleCSSIdsAndPropsWithKey ||
          applyDescendantStateStyleCSSIdsAndPropsWithKey.current ||
          applySxDescendantStateStyleCSSIdsAndPropsWithKey.current ||
          applySxDescendantStyleCSSIdsAndPropsWithKey.current ||
          ancestorStyleContext
        ) {
          const sxDescendantCSSIds = mergeArraysInObjects(
            ancestorStyleContext.sx,
            applySxDescendantStyleCSSIdsAndPropsWithKey.current,
            applySxDescendantStateStyleCSSIdsAndPropsWithKey.current
          );
          const componentDescendantCSSIds = mergeArraysInObjects(
            ancestorStyleContext.component,
            applyDescendantsStyleCSSIdsAndPropsWithKey,
            applyDescendantStateStyleCSSIdsAndPropsWithKey.current
          );

          return {
            component: componentDescendantCSSIds,
            sx: sxDescendantCSSIds,
          };
        } else {
          return {
            component: {},
            sx: {},
          };
        }
      })();
      return ids;
    }, [
      stableHash(applyDescendantsStyleCSSIdsAndPropsWithKey),
      stableHash(applyDescendantStateStyleCSSIdsAndPropsWithKey.current),
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

      ...applySxAncestorBaseStyleCSSIds,
      ...applySxAncestorVariantStyleCSSIds,

      // ...applySxAncestorBaseStyleCSSIds,
      ...applySxVariantStyleCSSIds.current,
      ...applySxStateVariantStyleCSSIds.current,
      ...applySxBaseStyleCSSIds.current,
      ...applySxStateBaseStyleCSSIds.current,
    ];

    // Object.assign(resolvedInlineProps, applyComponentInlineProps);

    const componentConfig = {
      componentName: componentStyleConfig?.componentName,
      colorMode: styledContext.colorMode,
      ...variantProps,
      states,
    };

    //@ts-ignore
    if (applyComponentInlineProps?.as || passingProps?.as?.displayName) {
      componentConfig.componentName =
        //@ts-ignore
        applyComponentInlineProps?.as?.displayName ??
        passingProps?.as?.displayName;
      componentConfig.as =
        //@ts-ignore
        applyComponentInlineProps?.as?.displayName ??
        passingProps?.as?.displayName;
    }

    const resolvedStyleProps = generateStylePropsFromCSSIds(
      applyComponentInlineProps,
      styleCSSIds,
      CONFIG,
      activeThemes,
      componentConfig
    );

    // let AsComp: any = React.useRef(
    //   resolvedStyleProps.as || (passingProps.as as any) || undefined
    // ).current;

    let AsComp: any = React.useMemo(() => {
      return resolvedStyleProps.as || (passingProps.as as any) || undefined;
    }, [resolvedStyleProps.as]);

    let resolvedStyleMemo = [passingProps?.style, ...resolvedStyleProps?.style];
    if (Platform.OS === 'web') {
      resolvedStyleMemo = StyleSheet.flatten(resolvedStyleMemo);
    }

    delete resolvedStyleProps?.as;

    // }

    const ComponentWithPlugin: any = React.useMemo(() => {
      if (plugins.length > 0) {
        //@ts-ignore
        if (AsComp && !Component?.isStyledComponent) {
          for (const pluginName in plugins) {
            // @ts-ignore
            if (plugins[pluginName]?.componentMiddleWare) {
              // @ts-ignore
              AsComp = plugins[pluginName]?.componentMiddleWare({
                Component: AsComp,
                theme,
                componentStyleConfig: {
                  ...componentStyleConfig,
                  uniqueComponentId,
                },
                ExtendedConfig,
                styleCSSIds,
                GluestackStyleSheet,
              });
              //@ts-ignore
              pluginData = { ...pluginData, ...AsComp?.styled };
            }
          }
        } else {
          for (const pluginName in plugins) {
            // @ts-ignore
            if (plugins[pluginName]?.componentMiddleWare) {
              // @ts-ignore
              GluestackComponent.current = plugins[
                pluginName
              ]?.componentMiddleWare({
                Component: GluestackComponent.current,
                theme,
                componentStyleConfig: {
                  ...componentStyleConfig,
                  uniqueComponentId,
                },
                ExtendedConfig,
                styleCSSIds,
                GluestackStyleSheet,
              });

              pluginData = {
                ...pluginData,
                //@ts-ignore
                ...GluestackComponent?.current?.styled,
              };
            }
          }
        }
      }
      return {
        Component: GluestackComponent.current,
        AsComp: AsComp,
      };
    }, [AsComp]);
    let component;

    const propsToBePassedInToPlugin =
      plugins?.length > 0
        ? {
            ...variantProps,
            states: states,
            sx: sxToBePassedIntoPlugin,
          }
        : {};

    if (AsComp) {
      //@ts-ignore
      if (ComponentWithPlugin?.Component?.isStyledComponent) {
        component = (
          <ComponentWithPlugin.Component
            {...resolvedStyleProps}
            {...variantProps}
            {...propsToBePassedInToPlugin}
            states={states}
            style={resolvedStyleMemo}
            as={AsComp}
            ref={ref}
          />
        );
      } else {
        component = (
          <ComponentWithPlugin.AsComp
            {...resolvedStyleProps}
            style={resolvedStyleMemo}
            ref={ref}
          />
        );
      }
    } else {
      //@ts-ignores
      component = ComponentWithPlugin?.Component?.isStyledComponent ? (
        <ComponentWithPlugin.Component
          {...resolvedStyleProps}
          {...propsToBePassedInToPlugin}
          {...variantProps}
          states={states}
          style={resolvedStyleMemo}
          ref={ref}
        />
      ) : (
        <ComponentWithPlugin.Component
          {...resolvedStyleProps}
          {...propsToBePassedInToPlugin}
          style={resolvedStyleMemo}
          ref={ref}
        />
      );
    }
    if (containsDescendant) {
      return (
        <AncestorStyleContext.Provider value={descendantCSSIds}>
          {component}
        </AncestorStyleContext.Provider>
      );
    }

    return component;
  };

  const StyledComp = React.forwardRef(StyledComponent);

  //@ts-ignore
  StyledComp.getStyledData = () => pluginData;

  const displayName = componentStyleConfig?.componentName
    ? componentStyleConfig?.componentName
    : Component?.displayName;

  StyledComp.displayName = displayName
    ? 'Styled' + displayName
    : 'StyledComponent';

  //@ts-ignore
  StyledComp.isStyledComponent = true;

  return StyledComp as ForwardRefExoticComponent<
    StyledComponentProps<
      React.ComponentProps<P>['style'],
      Variants,
      React.ComponentProps<P>,
      ComCon,
      P
    >
  >;
}

export function styled<P extends React.ComponentType<any>, Variants, ComCon>(
  Component: P,
  theme: ITheme<Variants, React.ComponentProps<P>> = {},
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
  const nonVerbosedTheme = theme;
  // const DEBUG_TAG = componentStyleConfig?.DEBUG;
  // const DEBUG =
  //   process.env.NODE_ENV === 'development' && DEBUG_TAG ? false : false;

  // const componentName = componentStyleConfig?.componentName;
  // const componentExtendedTheme = extendedThemeConfig?.theme;
  // const componentExtended_build_time_params =
  //   extendedThemeConfig?.BUILD_TIME_PARAMS;
  // let mergedBuildTimeParams: any;

  if (BUILD_TIME_PARAMS) {
    // mergedBuildTimeParams = Array(
    //   { ...BUILD_TIME_PARAMS },
    //   { ...componentExtended_build_time_params }
    // );
  }

  // let styledObj = { ...theme };
  // if (componentExtendedTheme) {
  //   styledObj = deepMerge({ ...theme }, { ...componentExtendedTheme });
  // }

  // // move inside stylehash created
  // let plugins = [...getInstalledPlugins()];

  // if (ExtendedConfig?.plugins) {
  //   // @ts-ignore
  //   plugins = [...plugins, ...ExtendedConfig?.plugins];
  // }

  // for (const pluginName in plugins) {
  //   // @ts-ignore
  //   [styledObj, , , Component] = plugins[pluginName]?.inputMiddleWare<P>(
  //     styledObj,
  //     true,
  //     true,
  //     Component
  //   );
  // }

  // theme = styledObj;

  // move inside stylehash created

  const sxConvertedObject = convertStyledToStyledVerbosed(theme);

  let StyledComponent = verboseStyled<P, Variants, ComCon>(
    Component,
    sxConvertedObject,
    componentStyleConfig,
    ExtendedConfig,
    BUILD_TIME_PARAMS,
    nonVerbosedTheme
  );

  // @ts-ignore
  StyledComponent.isAnimatedComponent = Component?.isAnimatedComponent;

  // move before returning component from verboseStyled

  // @ts-ignore
  // plugins?.reverse();
  // for (const pluginName in plugins) {
  //   // @ts-ignore
  //   if (plugins[pluginName]?.componentMiddleWare) {
  //     // @ts-ignore
  //     StyledComponent = plugins[pluginName]?.componentMiddleWare({
  //       Component: StyledComponent,
  //       theme,
  //       componentStyleConfig,
  //       ExtendedConfig,
  //     });
  //   }
  // }
  // move before returning component from verboseStyled

  // for (const pluginName in plugins) {
  //   const compWrapper =
  //     // @ts-ignore
  //     typeof plugins[pluginName].wrapperComponentMiddleWare === 'function'
  //       ? // @ts-ignore
  //         plugins[pluginName].wrapperComponentMiddleWare()
  //       : null;

  //   if (compWrapper) {
  //     for (const key of Object.keys(compWrapper)) {
  //       // @ts-ignore
  //       StyledComponent[key] = compWrapper[key];
  //     }
  //   }
  // }

  return StyledComponent;
}
