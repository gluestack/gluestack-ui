// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { inject } from '@gluestack/css-injector';
import type { ConfigType, ThemeType } from './types';

import {
  resolveThemeAndIdGenerator,
  getDefaultStyleFromIds,
  getVariantDefaultStylesFromIds,
  getStateStylesFromIds,
  toBeInjectedCssRulesRuntime,
  toBeInjectedCssRulesBoottime,
} from './utils';

export function styled<P>(
  Component: React.ComponentType<P>,
  theme: ThemeType,
  compConfig: ConfigType
) {
  const styleDictionary = resolveThemeAndIdGenerator(theme, 'boottime');
  console.log(styleDictionary, theme, 'hello here 111');

  const defaultIds = getDefaultStyleFromIds(styleDictionary);
  inject(`@media screen {${toBeInjectedCssRulesBoottime}}`, 'boottime');

  // console.log(mergedIdsBootTimeMap, defaultIds, 'mergedIdsBootTimeMap');

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
    useEffect(() => {
      const localMergedIdsRuntimeMap = resolveThemeAndIdGenerator(
        { baseStyle: sx },
        'runtime'
      );
      setMergedIdsRuntimeMap(localMergedIdsRuntimeMap);
      const localDefaultRuntimeIds = getDefaultStyleFromIds(
        localMergedIdsRuntimeMap
      );
      setDefaultRuntimeIds(localDefaultRuntimeIds);
      const localVariantAndSizeBasedDefaultStyleRuntime =
        getVariantDefaultStylesFromIds(localMergedIdsRuntimeMap, variant, size);
      // setVariantAndSizeBasedDefaultStyleRuntime(
      //   localVariantAndSizeBasedDefaultStyleRuntime
      // );
      const localVariantAndSizeBasedDefaultStyle =
        getVariantDefaultStylesFromIds(styleDictionary, variant, size);
      setVariantAndSizeBasedDefaultStyle(localVariantAndSizeBasedDefaultStyle);
      // console.log(localVariantAndSizeBasedDefaultStyle, 'style < > media');

      inject(`@media screen {${toBeInjectedCssRulesRuntime}}`, 'runtime');

      setDataSetFinalIds({
        style: [
          // decandant styles will be injected in the order of the array
          ...defaultIds?.style,
          ...localDefaultRuntimeIds?.style,
          ...localVariantAndSizeBasedDefaultStyle?.style,
          ...localVariantAndSizeBasedDefaultStyleRuntime?.style,
          // ...stateBaseStyles?.style,
          // ...stateBaseStylesRuntime?.style,
        ].join(' '),
        media: [
          ...defaultIds?.media,
          ...localDefaultRuntimeIds?.media,
          ...localVariantAndSizeBasedDefaultStyle?.media,
          ...localVariantAndSizeBasedDefaultStyleRuntime?.media,
          // ...stateBaseStyles?.media,
          // ...stateBaseStylesRuntime?.media,
        ].join(' '),
        state: [
          ...defaultIds?.state,
          ...localDefaultRuntimeIds?.state,
          ...localVariantAndSizeBasedDefaultStyle?.state,
          ...localVariantAndSizeBasedDefaultStyleRuntime?.state,
          // ...stateBaseStyles?.state,
          // ...stateBaseStylesRuntime?.state,
        ].join(' '),
      });
    }, []);

    // getting runtime ids
    useEffect(() => {
      const localStateBaseStylesRuntime = getStateStylesFromIds(
        mergedIdsRuntimeMap,
        variant,
        size,
        states
      );
      // setStateBaseStylesRuntime(localStateBaseStylesRuntime);
      const localStateBaseStyles = getStateStylesFromIds(
        styleDictionary,
        variant,
        size,
        states
      );
      // setStateBaseStyles(localStateBaseStyles);
      // console.log(
      //   defaultIds,
      //   defaultRuntimeIds,
      //   variantAndSizeBasedDefaultStyle,
      //   'useEffect'
      // );
      if (
        Object.keys(defaultRuntimeIds).length === 3 &&
        Object.keys(variantAndSizeBasedDefaultStyle).length === 3
      ) {
        setDataSetFinalIds({
          style: [
            ...defaultIds?.style,
            ...defaultRuntimeIds?.style,
            ...variantAndSizeBasedDefaultStyle?.style,
            ...localStateBaseStyles?.style,
            ...localStateBaseStylesRuntime?.style,
          ].join(' '),
          media: [
            ...defaultIds?.media,
            ...defaultRuntimeIds?.media,
            ...variantAndSizeBasedDefaultStyle?.media,
            ...localStateBaseStyles?.media,
            ...localStateBaseStylesRuntime?.media,
          ].join(' '),
          state: [
            ...defaultIds?.state,
            ...defaultRuntimeIds?.state,
            ...variantAndSizeBasedDefaultStyle?.state,
            ...localStateBaseStyles?.state,
            ...localStateBaseStylesRuntime?.state,
          ].join(' '),
        });
      }
      // console.log(
      //   // mergedIdsRuntimeMap,
      //   defaultIds,
      //   'defaultIds',
      //   variantAndSizeBasedDefaultStyle,
      //   'variantAndSizeBasedDefaultStyle',
      //   defaultRuntimeIds,
      //   'defaultRuntimeIds',
      //   [
      //     // ...defaultIds?.style,
      //     // // ...variantAndSizeBasedDefaultStyle?.style,
      //     // ...stateBaseStyles?.style,
      //     // ...stateBaseStylesRuntime?.style,
      //   ],
      //   'style < > media',
      //   // [
      //   //   ...defaultIds?.media,
      //   //   ...variantAndSizeBasedDefaultStyle?.media,
      //   //   ...stateBaseStyles?.media,
      //   //   ...stateBaseStylesRuntime?.media,
      //   // ],
      //   // [
      //   //   ...defaultIds?.state,
      //   //   ...variantAndSizeBasedDefaultStyle?.state,
      //   //   ...stateBaseStyles?.state,
      //   //   ...stateBaseStylesRuntime?.state,
      //   // ],
      //   '< >',
      //   'mergedIdsRuntimjkjheMap'
      // );
    }, [
      states,
      variantAndSizeBasedDefaultStyle,
      defaultRuntimeIds,
      mergedIdsRuntimeMap,
      variant,
      size,
    ]);

    // getting boot time ids

    // const newStyle = resolveSx(
    //   {
    //     sx,
    //     variant,
    //     states,
    //     colorMode: colorMode ?? 'light',
    //     size,
    //   },
    //   resolvedTheme
    // );
    // console.log(newStyle, "newStyle");

    // const xyz = applyIdsBasedOnProps(
    //   { variant, states, colorMode: colorMode ?? "light", size },
    //   newStyle.styleSheetsIdsObj
    // );
    // const styleSheetObj = RNStyleSheet.create(newStyle.styleSheetsObj);
    // console.log("sjhgj ", StyleSheet.create(newStyle.styleSheetsObj));
    // console.log(
    //   '>>>><<<<<<kk',
    //   { baseStyleNewMap, variantStyleNewMap, sizesStyleNewMap },
    //   // newStyle,variant,
    //   variant,
    //   size,

    //   baseStyleStateNewMap
    //   // getIdsFromMap(getArrayOfIdsFromMapBasedOnState(newMap, states)).join(' ')
    // );
    // let resolvedStyleIdsOfStates = getResolvedStyleOfStates(
    //   { baseStyleStateNewMap, sizesStateNewMap, variantStateNewMap },
    //   states,
    //   variant,
    //   size
    // );
    // let decendantStyleIds = getDecendantStyleIds(
    //   {
    //     baseStyleMap: baseStyleNewMap,
    //     variantsMap: variantStyleNewMap,
    //     sizesMap: sizesStyleNewMap,
    //   },
    //   states,
    //   variant,
    //   size
    // );
    // let resolvedDefaultSizeIds = getDefaultStyleIdsFromMap(
    //   {
    //     baseStyleMap: baseStyleNewMap,
    //     variantsMap: variantStyleNewMap,
    //     sizesMap: sizesStyleNewMap,
    //   },
    //   variant,
    //   size
    // );

    // let resolvedStyleIdsOfStates = getResolvedStyleOfStates(
    //   { baseStyleStateNewMap, sizesStateNewMap, variantStateNewMap },
    //   states,
    //   variant,
    //   size
    // );

    // console.log(
    //   '>>>><<<<<< result',
    //   resolvedDefaultSizeIds,
    //   resolvedStyleIdsOfStates
    //   // flattenStyle(newStyle.styleSheetsObj)
    //   // resolvedStyleIds,
    //   // states
    // );

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
        dataSet={dataSetFinalIds} // style
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
