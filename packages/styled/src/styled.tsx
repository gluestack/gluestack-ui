import React, {
  // Component,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import type {
  ConfigType,
  OrderedSXResolved,
  // Styled,
  StyleIds,
  // DefaultAndState,
  ComponentProps,
  UtilityProps,
  IdsStateColorMode,
  ITheme,
} from './types';

import { deepMerge, getResolvedTokenValueFromConfig } from './utils';
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
import {
  styledResolvedToOrderedSXResolved,
  styledToStyledResolved,
} from './resolver';
set('light');

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
    // if (Platform.OS === 'web' && !item.meta.path.includes('state')) {
    //   if (!ret.ids) {
    //     ret.ids = [];
    //   }
    //   ret.ids.push(item.meta.cssId);
    // } else
    if (
      !item.meta.path.includes('state') &&
      !item.meta.path.includes('colorMode')
    ) {
      if (!ret.ids) {
        ret.ids = [];
      }
      ret.ids.push(item.meta.cssId);

      // ret.default.push(item.meta.cssId);
    } else if (
      item.meta.path.includes('state') ||
      item.meta.path.includes('colorMode')
    ) {
      const allStates = getIndexes(item.meta.path, 'state');
      const allColorModes = getIndexes(item.meta.path, 'colorMode');

      // const allStatesAndColorMode = [...allStates, ...allColorModes];

      const mergeAllStateKey: any = [];

      allStates.forEach((statePath: any) => {
        const state = item.meta.path[statePath + 1];
        mergeAllStateKey.push('state');
        mergeAllStateKey.push(state);
      });
      allColorModes.forEach((colorModePath: any) => {
        const colorMode = item.meta.path[colorModePath + 1];
        mergeAllStateKey.push('colorMode');
        mergeAllStateKey.push(colorMode);
      });

      const stateObject = createNestedObject(mergeAllStateKey);
      setNestedObjectValue(stateObject, mergeAllStateKey, {
        ids: [item.meta.cssId],
      });
      deepMerge(ret, stateObject);
      // console.log(ret, stateObject, 'states here');
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

function getComponentStyleIds(arr: OrderedSXResolved): StyleIds {
  // const ret: StyleIds = {
  //   defaultAndState: {
  //     default: [],
  //     state: {},
  //   },
  //   variants: {},
  //   sizes: {},
  // };

  const ret: StyleIds = {
    baseStyle: {},
    variants: {},
    sizes: {},
  };

  for (let i in arr) {
    const item = arr[i];
    checkAndPush(item, ret.baseStyle, 'baseStyle');

    let variantName: string | number = '';

    if (item?.meta?.path?.includes('variants')) {
      variantName = item.meta.path[item.meta.path.indexOf('variants') + 1];

      if (!ret.variants[variantName]) ret.variants[variantName] = { ids: [] };

      checkAndPush(item, ret.variants[variantName], 'variants');
    }

    if (item?.meta?.path?.includes('sizes')) {
      variantName = item.meta.path[item.meta.path.indexOf('sizes') + 1];

      if (!ret.sizes[variantName]) ret.sizes[variantName] = { ids: [] };

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
  styleIdObject: IdsStateColorMode,
  states: any,
  colorMode: any
) {
  const stateStyleCSSIds: Array<any> = [];

  if (states || colorMode) {
    function isSubset(subset: any, set: any) {
      return subset.every((item: any) => set.includes(item));
    }

    function flattenObject(obj: any) {
      const flat: any = {};

      // Recursive function to flatten the object
      function flatten(obj: any, path: any = []) {
        // Iterate over the object's keys
        for (const key of Object.keys(obj)) {
          // console.log(
          //   key,
          //   [...path, key],
          //   typeof obj[key],
          //   // flatten(obj[key], [...path, key]),
          //   'key here 111'
          // );
          // If the value is an object, recurse
          if (key === 'ids' && path.length > 0) {
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

    const flatternStyleIdObject = flattenObject(styleIdObject);

    Object.keys(flatternStyleIdObject).forEach((styleId) => {
      const styleIdKeyArray = styleId.split('.');
      const filteredStyleIdKeyArray = styleIdKeyArray.filter(
        (item) => item !== 'colorMode' && item !== 'state'
      );
      const stateColorMode = {
        ...states,
        [colorMode]: true,
      };

      const currentStateArray = Object.keys(stateColorMode).filter(
        (key) => stateColorMode[key] === true
      );

      if (isSubset(filteredStyleIdKeyArray, currentStateArray)) {
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
  const defaultStyleCSSIds: Array<string> = [];

  if (
    componentStyleIds &&
    componentStyleIds?.baseStyle &&
    componentStyleIds?.baseStyle?.ids
  ) {
    defaultStyleCSSIds.push(...componentStyleIds?.baseStyle?.ids);
  }
  if (
    variant &&
    componentStyleIds?.variants &&
    componentStyleIds?.variants[variant] &&
    componentStyleIds?.variants[variant]?.ids
  ) {
    //@ts-ignore
    defaultStyleCSSIds.push(...componentStyleIds?.variants[variant]?.ids);
  }
  if (
    size &&
    componentStyleIds?.sizes &&
    componentStyleIds?.sizes[size] &&
    componentStyleIds?.sizes[size]?.ids
  ) {
    defaultStyleCSSIds.push(...componentStyleIds?.sizes[size]?.ids);
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

function getMergedStateAndColorModeCSSIds(
  componentStyleIds: StyleIds,
  states: any,
  variant: string,
  size: string,
  COLOR_MODE: 'light' | 'dark'
) {
  const stateStyleCSSIds = [];

  // console.log(componentStyleIds, states, 'component style id');
  if (componentStyleIds.baseStyle) {
    stateStyleCSSIds.push(
      ...getStateStyleCSSFromStyleIds(
        componentStyleIds.baseStyle,
        states,
        COLOR_MODE
      )
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
        states,
        COLOR_MODE
      )
    );
  }

  if (size && componentStyleIds.sizes && componentStyleIds.sizes[size]) {
    stateStyleCSSIds.push(
      ...getStateStyleCSSFromStyleIds(
        componentStyleIds.sizes[size],
        states,
        COLOR_MODE
      )
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
  if (typeof theme === 'object') {
    Object.keys(theme).forEach((themeKey) => {
      if (themeKey !== 'style' && themeKey !== 'defaultProps') {
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
}

// type ArrayElement<ArrayType> = ArrayType extends (infer ElementType)[]
//   ? ElementType
//   : string;

export function styled<P, Variants, Sizes>(
  Component: React.ComponentType<P>,
  theme: ITheme<Variants, Sizes, P>,
  componentStyleConfig: ConfigType,
  ExtendedConfig?: any,
  BUILD_TIME_PARAMS?: {
    orderedResolved: OrderedSXResolved;
  }
) {
  //@ts-ignore
  type X = P['style'];
  let styleHashCreated = false;

  let orderedResolved: OrderedSXResolved;
  let componentStyleIds: any = {};
  let componentDescendantStyleIds: StyleIds; // StyleIds = {};
  let componentExtendedConfig: any = {};

  if (BUILD_TIME_PARAMS?.orderedResolved) {
    orderedResolved = BUILD_TIME_PARAMS?.orderedResolved;
  }
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

  const NewComp = (
    properties: P &
      ComponentProps<X> &
      UtilityProps & {
        variant?: keyof Variants;
        size?: keyof Sizes;
        states?: any;
        colorMode?: 'light' | 'dark';
        ancestorStyle?: any;
        children?: any;
      },
    ref: any
  ) => {
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

      if (!orderedResolved) {
        const styledResolved = styledToStyledResolved(
          theme,
          [],
          componentExtendedConfig
        );
        orderedResolved = styledResolvedToOrderedSXResolved(styledResolved);
      }

      /* Boot time */
      updateCSSStyleInOrderedResolved(orderedResolved);

      // inject css in styleSheet
      const componentOrderResolved = orderedResolved.filter(
        (item: any) => !item.meta.path?.includes('descendants')
      );
      const descendantOrderResolved = orderedResolved.filter((item: any) =>
        item.meta.path?.includes('descendants')
      );

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

    const mergedWithUtilitProps = {
      ...theme?.defaultProps,
      ...properties,
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { children, variant, size, states, colorMode, ...props }: any =
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

      const mergedStateIds: any = getMergedStateAndColorModeCSSIds(
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
      const mergedSxStateIds: any = getMergedStateAndColorModeCSSIds(
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
        const mergedStyle = getMergedStateAndColorModeCSSIds(
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
        const mergedStyle = getMergedStateAndColorModeCSSIds(
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
  StyledComp.displayName = 'Styled' + Component.displayName;
  // @ts-ignore
  // StyledComp.config = componentStyleConfig;
  return StyledComp;
}
