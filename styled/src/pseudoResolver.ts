/* eslint-disable @typescript-eslint/no-unused-vars */
//@ts-nocheck
import React from 'react';
import { config } from './nativebase.config';
import { StyleSheet as RNStyleSheet } from 'react-native';
import { StyleSheet } from '@gluestack/css-injector';
import type {
  ConfigType,
  IStates,
  state,
  StylePropsConfig,
  SxProps,
  ThemeType,
} from './types';

function createCombinationsOfObjectofBooleans(obj: any) {
  let keys = Object.keys(obj);
  let combinations = [] as any;
  let numberOfCombinations = Math.pow(2, keys.length);
  for (let i = 0; i < numberOfCombinations; i++) {
    let combination = {} as any;
    for (let j = 0; j < keys.length; j++) {
      let key = keys[j];
      let value = !!(i & Math.pow(2, j));
      combination[key] = value;
    }
    combinations.push(combination);
  }
  return combinations;
}

function resolveAliasesFromConfig(config: any, props: any) {
  let aliasResolvedProps: any = {};
  Object.keys(props).map((key) => {
    if (config.aliases[key]) {
      aliasResolvedProps[config.aliases[key]] = props[key];
    } else {
      aliasResolvedProps[key] = props[key];
    }
  });
  return aliasResolvedProps;
}

function resolveTokensFromConfig(config: any, props: any) {
  const newProps: any = {};
  Object.keys(props).map((prop: any) => {
    let value = props[prop];

    if (typeof value === 'string' && value.startsWith('$')) {
      const tempValue = value.substring(1);
      if (tempValue.includes('.')) {
        const [token, variant] = tempValue.split('.');
        newProps[prop] = config[token]?.[variant];
      } else {
        newProps[prop] = config[tempValue];
      }
    } else {
      // TODO: Add support for prop value that are not string/number.. From NB core uSSPR
      // newProps[prop] = typeof value === "number" ? value : parseInt(value);
      newProps[prop] = value;
    }
  });

  return newProps;
}

function applyStylesBasedOnSpecificty(
  specificityMap: any,
  stylesheetObj: any,
  resolvedCompThemeStyle: any
) {
  return specificityMap.map((key: any) => {
    return [resolvedCompThemeStyle[key], stylesheetObj[key]];
  });
}

function resolvedTokenization(props: any, config: any) {
  let aliasedResolvedProps = resolveAliasesFromConfig(config, props);
  let newProps = resolveTokensFromConfig(config, aliasedResolvedProps);
  return newProps;
}

export function pseudoResolveSx(
  { variant, size, colorMode, states }: any,
  compTheme: any,
  config: any
) {
  let styleSheetsObj = [] as any;
  let styleSheetsIdsObj = {} as any;
  let resolvedDecendantStyles = {} as any;
  let resolvedCompThemeStyle = [] as any;
  pseudoResolveSxRecursive(
    compTheme.baseStyle,
    config,
    states,
    colorMode,
    resolvedCompThemeStyle,
    resolvedDecendantStyles
  );

  // Resolve variants:
  if (variant) {
    pseudoResolveSxRecursive(
      compTheme.variants[variant],
      config,
      states,
      colorMode,
      styleSheetsObj,
      resolvedDecendantStyles
    );
  }
  // Resolve size:
  if (size) {
    pseudoResolveSxRecursive(
      compTheme.sizes[size],
      config,
      states,
      colorMode,
      styleSheetsObj,
      resolvedDecendantStyles
    );
  }
  let mergedDecendantStylesBasedOnSpecificity = {} as any;

  Object.keys(resolvedDecendantStyles).forEach((descendant) => {
    mergedDecendantStylesBasedOnSpecificity[descendant] = {};
    mergedDecendantStylesBasedOnSpecificity[descendant] =
      applyStylesBasedOnSpecificty(
        ['style', 'colorMode', 'platform', 'state'],
        resolvedDecendantStyles[descendant],
        {}
      );
  });
  return {
    styleSheetsObj: applyStylesBasedOnSpecificty(
      ['style', 'colorMode', 'platform', 'state'],
      styleSheetsObj,
      resolvedCompThemeStyle
    ),
    styleSheetsIdsObj,
    resolveContextChildrenStyle: mergedDecendantStylesBasedOnSpecificity,
  };
}
const pseudoResolveSxRecursive = (
  sx: SxProps = {},
  config: StylePropsConfig,
  states: IStates,
  colorMode: string,
  styleSheetsObj: any,
  resolveDecendantStyles: any,
  parent: any = ''
) => {
  Object.keys(sx).forEach((key) => {
    if (key === 'style') {
      let resolvedStyle =
        typeof sx.style === 'string'
          ? sx.style
          : resolvedTokenization(sx?.style, config);
      if (parent && parent != 'style') {
        if (styleSheetsObj[parent]) {
          styleSheetsObj[parent].push(resolvedStyle);
        } else {
          styleSheetsObj[parent] = [resolvedStyle];
        }
      } else {
        if (styleSheetsObj?.style) {
          styleSheetsObj.style.push(resolvedStyle);
        } else {
          styleSheetsObj.style = [resolvedStyle];
        }
      }
    } else {
      if (key === 'state') {
        if (states) {
          const stateObject: any = Object.keys(states);

          stateObject.forEach((state: state) => {
            //@ts-ignore
            // console.log(state, sx[key][state], "IState");

            //@ts-ignore
            if (states[state] && sx[key][state]) {
              pseudoResolveSxRecursive(
                //@ts-ignore
                sx[key][state],
                config,
                states,
                colorMode,
                styleSheetsObj,
                resolveDecendantStyles,
                key
              );
            }
          });
        }
      } else if (key === 'platform') {
        const platformKey = 'web';
        //@ts-ignore
        if (sx[key][platformKey]) {
          pseudoResolveSxRecursive(
            //@ts-ignore
            sx[key][platformKey],
            config,
            states,
            colorMode,
            styleSheetsObj,
            resolveDecendantStyles,
            key
          );
        }
      } else if (key === 'colorMode') {
        //@ts-ignore
        if (sx[key][colorMode]) {
          pseudoResolveSxRecursive(
            //@ts-ignore
            sx[key][colorMode],
            config,
            states,
            colorMode,
            styleSheetsObj,
            resolveDecendantStyles,
            key
          );
        }
      } else if (key === 'descendants') {
        //@ts-ignore
        const descendantsArray: any = Object.keys(sx[key]);
        //@ts-ignore
        Object.keys(sx[key]).forEach((descKey) => {
          let decendantStyle = [] as any;
          pseudoResolveSxRecursive(
            //@ts-ignore
            sx[key][descKey],
            config,
            states,
            colorMode,
            decendantStyle,
            resolveDecendantStyles,
            parent
          );
          if (!resolveDecendantStyles[descKey]) {
            resolveDecendantStyles[descKey] = {};
          }
          if (resolveDecendantStyles[descKey]) {
            if (parent && parent != 'style') {
              if (resolveDecendantStyles[descKey][parent]) {
                resolveDecendantStyles[descKey][parent].push(
                  decendantStyle[parent]
                );
              } else {
                resolveDecendantStyles[descKey][parent] = [
                  decendantStyle[parent],
                ];
              }
            } else {
              if (resolveDecendantStyles[descKey]?.style) {
                resolveDecendantStyles[descKey].style.push(
                  decendantStyle.style
                );
              } else {
                resolveDecendantStyles[descKey].style = [decendantStyle.style];
              }
            }
          }
        });
      }
    }
  });
  return styleSheetsObj;
};
