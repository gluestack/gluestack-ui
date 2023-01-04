/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-nocheck

import { Cssify } from '@gluestack/cssify';
// import { StyleSheet } from '@gluestack/media-query';
let mediaQueries = {} as any;
export let STYLE_QUERY_KEY_PRECEDENCE = {
  platform: 10,
  colorMode: 20,
  mediaQuery: 50,
  hover: 100,
  focus: 200,
  focusVisible: 300,
  active: 400,
};
const idCounter = {} as any;

function uniqueId(prefix = '$lodash$') {
  if (!idCounter[prefix]) {
    idCounter[prefix] = 0;
  }

  const id = ++idCounter[prefix];
  if (prefix === '$lodash$') {
    return `${id}`;
  }

  return `${prefix}${id}`;
}

// ---------------------------------------------------------- 1. StyleMapGen ---------------------------------------------------------------

export function flattenThemeObject(
  theme: any,
  path: string,
  stylePathMap: any = {}
) {
  if (!theme) return;

  Object.keys(theme).forEach((parent) => {
    if (parent === 'style') {
      stylePathMap[`${path}/style`] = theme[parent];
    }
    if (Array.isArray(theme[parent])) {
      theme[parent].forEach((query: any) => {
        if (parent === 'queries') {
          let uniquePath = uniqueId('mediaQuery');
          mediaQueries[uniquePath] = query.condition;
          flattenThemeObject(
            query.value,
            path + '/' + uniquePath + '/value',
            stylePathMap
          );
        }
      });
    }
    if (typeof theme[parent] === 'object' && !Array.isArray(theme[parent])) {
      flattenThemeObject(theme[parent], `${path}/${parent}`, stylePathMap);
    }
  });

  return stylePathMap;
}

// ---------------------------------------------------------- StyleMapGen ---------------------------------------------------------------

// ---------------------------------------------------------- 2. StyleMapSegregation -------------------------------------------------------

export function segregateStyleMapBasedOnFirstKey(styleMap: any) {
  const segregatedStyleMap = {} as any;
  if (!styleMap) return;
  Object.keys(styleMap).forEach((key) => {
    const firstKey = key.split('/')[1];
    if (!segregatedStyleMap[firstKey]) {
      segregatedStyleMap[firstKey] = {};
    }
    segregatedStyleMap[firstKey][key] = styleMap[key];
  });
  return segregatedStyleMap;
}

export function segregateStyleMapBasedOnLevel(styleMap: any) {
  let levelBasedSegregatedStyleMap = {} as any;
  Object.keys(styleMap).forEach((key) => {
    let level = key.split('/').length;
    if (!levelBasedSegregatedStyleMap[level]) {
      levelBasedSegregatedStyleMap[level] = {};
    }
    levelBasedSegregatedStyleMap[level][key] = styleMap[key];
  });
  return levelBasedSegregatedStyleMap;
}

export function getLevelBasedSegregatedStyleMaps(styleMap: any) {
  let levelBasedSegregatedStyleMaps = {} as any;
  if (!styleMap) return;
  Object.keys(styleMap).forEach((key) => {
    let levelBasedSegregatedStyleMap = segregateStyleMapBasedOnLevel(
      styleMap[key]
    );
    levelBasedSegregatedStyleMaps[key] = levelBasedSegregatedStyleMap;
  });
  return levelBasedSegregatedStyleMaps;
}

// ---------------------------------------------------------- StyleMapSegregation -------------------------------------------------------
// --------------------------------- 3. Preparing style map for Css Injection based on precedence --------------------------------------

function doesArrayItemsExistInString(array: any, string: string) {
  let doesExist = false;
  array.forEach((item: string) => {
    if (string.includes(item)) {
      doesExist = true;
    }
  });
  return doesExist;
}

export function getStylesThatDontContainStateKeys(styleMap: any) {
  let stylesThatDontContainStateKeys = {} as any;
  let fallBack = {} as any;
  Object.keys(styleMap).forEach((level) => {
    let style = styleMap[level];
    if (typeof style === 'object') {
      Object.keys(style).forEach((key) => {
        if (!doesArrayItemsExistInString(['state'], key)) {
          if (!stylesThatDontContainStateKeys[level]) {
            stylesThatDontContainStateKeys[level] = {};
          }
          stylesThatDontContainStateKeys[level][key] = style[key];
        } else {
          if (!fallBack[level]) {
            fallBack[level] = {};
          }
          fallBack[level][key] = style[key];
        }
      });
    }
  });
  return [stylesThatDontContainStateKeys, fallBack];
}

export function getStylesThatDontContainMediaKeys(styleMap: any) {
  let stylesThatDontContainMediaKeys = {} as any;
  let fallBack = {} as any;
  Object.keys(styleMap).forEach((level) => {
    let style = styleMap[level];
    if (typeof style === 'object') {
      Object.keys(style).forEach((key) => {
        if (
          !doesArrayItemsExistInString(['mediaQuery'], key) &&
          !doesArrayItemsExistInString(['colorMode'], key)
        ) {
          if (!stylesThatDontContainMediaKeys[level]) {
            stylesThatDontContainMediaKeys[level] = {};
          }
          stylesThatDontContainMediaKeys[level][key] = style[key];
        } else {
          if (!fallBack[level]) {
            fallBack[level] = {};
          }
          fallBack[level][key] = style[key];
        }
      });
    }
  });
  return [stylesThatDontContainMediaKeys, fallBack];
}

export function getStylesThatDontContainReservedKeys(styleMap: any) {
  const reservedKeys = ['state', 'mediaQuery', 'colorMode', 'platform'];

  const stylesThatDontContainReservedKeys = {} as any;
  const fallBack = {} as any;

  Object.keys(styleMap).forEach((level) => {
    const style = styleMap[level];
    if (typeof style === 'object') {
      Object.keys(style).forEach((key) => {
        if (!doesArrayItemsExistInString(reservedKeys, key)) {
          if (!stylesThatDontContainReservedKeys[level]) {
            stylesThatDontContainReservedKeys[level] = {};
          }
          stylesThatDontContainReservedKeys[level][key] = style[key];
        } else {
          if (!fallBack[level]) {
            fallBack[level] = {};
          }
          fallBack[level][key] = style[key];
        }
      });
    }
  });
  return [stylesThatDontContainReservedKeys, fallBack];
}

export function getAllStylesWithoutReservedKeys(styleMap: any) {
  let allStylesWithoutReservedKeys = {} as any;
  let fallBack = {} as any;
  if (!styleMap) return [allStylesWithoutReservedKeys, fallBack];
  // Object.keys(styleMap).forEach((type) => {
  // console.log('hello here ***', getStylesThatDontContainReservedKeys(styleMap));
  [allStylesWithoutReservedKeys, fallBack] =
    getStylesThatDontContainReservedKeys(styleMap);
  return [allStylesWithoutReservedKeys, fallBack];
}

export function getAllStylesWithoutStateKeys(styleMap: any) {
  let allStylesWithoutStateKeys = {} as any;
  let fallBack = {} as any;
  [allStylesWithoutStateKeys, fallBack] =
    getStylesThatDontContainStateKeys(styleMap);
  return [allStylesWithoutStateKeys, fallBack];
}

export function getAllStylesWithoutMediaKeys(styleMap: any) {
  let allStylesWithoutMediaKeys = {} as any;
  let fallBack = {} as any;
  [allStylesWithoutMediaKeys, fallBack] =
    getStylesThatDontContainMediaKeys(styleMap);
  return [allStylesWithoutMediaKeys, fallBack];
}
function compareStringVersioning(
  versionString1: string,
  versionString2: string
) {
  let version1 = versionString1.split('.');
  let version2 = versionString2.split('.');

  let i = 0;
  let result = true;
  while (i < version1.length) {
    if (parseInt(version1[i]) > parseInt(version2[i])) {
      return true;
    } else if (parseInt(version1[i]) < parseInt(version2[i])) {
      return false;
    }
    i++;
  }
  return result;
}

function bubbleSortBasedOnObjectKeys(object: any) {
  let keys = Object.keys(object);
  let tempRes = [] as any;
  keys.forEach((key) => {
    tempRes.push({ key, value: object[key] });
  });

  let i = 0;
  while (i < tempRes.length) {
    let j = 0;
    while (j < tempRes.length - i - 1) {
      if (compareStringVersioning(tempRes[j].key, tempRes[j + 1].key)) {
        let temp = keys[j];
        keys[j] = keys[j + 1];
        keys[j + 1] = temp;
      }
      j++;
    }
    i++;
  }
  let result = [] as any;
  tempRes.forEach((item: any) => {
    result.push(item.value);
  });

  return result;
}
function parseKey(key: any, PRECEDENCE: any) {
  let parsedKey = 0;

  const keyArr = key.split('/');
  Object.keys(PRECEDENCE).forEach((precedenceKey) => {
    keyArr.forEach((item: any) => {
      if (item.includes(precedenceKey)) {
        parsedKey = parsedKey + PRECEDENCE[precedenceKey];
      }
    });
  });

  // parsedKey = parsedKey.replaceAll('state/', '');
  // parsedKey = parsedKey.replaceAll('/style', '');
  // parsedKey = parsedKey.replaceAll('/', '.');

  return parsedKey;
}
function parseObjectForSorting(
  object: any,
  PRECEDENCE: typeof STYLE_QUERY_KEY_PRECEDENCE
) {
  let parsedObj = {} as any;
  Object.keys(object).forEach((key) => {
    let parsedKey = parseKey(key, PRECEDENCE);

    // parsedKey = parsedKey.split('.').splice(2).join('.');
    if (!parsedObj[parsedKey]) {
      parsedObj[parsedKey] = {};
    }

    // console.log(parsedKey, parsedObj, '^^^ parsed key');
    parsedObj[parsedKey]['key'] = key;
    parsedObj[parsedKey]['value'] = object[key];
  });

  return parsedObj;
}

export function sortObjectKeysBasedOnPrecedence(styleLevel: any) {
  let sortedStyleLevel = {} as any;
  let parsedStyleLevel = {} as any;

  if (!styleLevel) return;
  Object.keys(styleLevel).forEach((key) => {
    let parsedObj = parseObjectForSorting(
      styleLevel[key],
      STYLE_QUERY_KEY_PRECEDENCE
    );

    parsedStyleLevel[key] = parsedObj;
  });

  Object.keys(parsedStyleLevel).forEach((level) => {
    sortedStyleLevel[level] = bubbleSortBasedOnObjectKeys(
      parsedStyleLevel[level]
    );
  });

  // console.log(sortedStyleLevel, styleLevel, 'hello parsed ovject');

  return sortedStyleLevel;
}

// --------------------------------- Preparing style map for Css Injection based on precedence --------------------------------------

// -------------------------------- 4. Traverse through sorted objects and inject style in order ------------------------------------

// const setObjectProperty = (object: any, keyPath: any, value: any) => {
//   if (!Array.isArray(keyPath)) {
//     keyPath = [keyPath];
//   }
//   return keyPath.reduceRight((baseObj: any, key: any, index: number) => {
//     if (index === keyPath.length - 1) {
//       return Object.assign({}, baseObj, { [key]: value });
//     }
//     return { [key]: baseObj };
//   }, object);
// };

export const setObjectKeyValue = (obj: any, keys: any, value: any) => {
  let current = obj;
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (i === keys.length - 1) {
      // we've reached the desired key, so update its value
      current[key] = value;
    } else {
      // we're still traversing the object, so create the key if it doesn't exist
      if (!current[key]) {
        current[key] = {};
      }
      current = current[key];
    }
  }
  return obj;
};

export const getObjectProperty = (object: any, keyPath: any) => {
  if (!Array.isArray(keyPath)) {
    keyPath = [keyPath];
  }
  return keyPath.reduce(
    (baseObj: any, key: any) => baseObj && baseObj[key],
    object
  );
};

export function resolveAliasesFromConfig(config: any, props: any) {
  const aliasResolvedProps: any = {};

  Object.keys(props).map((key) => {
    if (config?.aliases?.[key]) {
      aliasResolvedProps[config.aliases?.[key]] = props[key];
    } else {
      aliasResolvedProps[key] = props[key];
    }
  });
  return aliasResolvedProps;
}

function checkKey(obj, key) {
  return obj.hasOwnProperty(key);
}

export const getTokenFromConfig = (config: any, prop: any, value: any) => {
  if (typeof value === 'string' && value.split('$').length > 2) {
    const tokenValue = getObjectProperty(
      config?.tokens,
      value.split('$').slice(1)
    );

    return tokenValue;
  } else {
    const aliasTokenType = config.propertyTokenMap[prop];

    const tokenScale = config?.tokens?.[aliasTokenType];
    let token;

    if (typeof value === 'string' && value.startsWith('$')) {
      const originalValue = value.slice(1);
      if (config.propertyResolver?.[prop]) {
        let transformer = config.propertyResolver?.[prop];
        token = transformer(
          originalValue,
          (value, scale = aliasTokenType) => config?.tokens?.[scale]?.[value]
        );
      } else {
        // console.log(value, tokenScale, 'transform');
        token = checkKey(tokenScale, originalValue)
          ? tokenScale?.[originalValue]
          : value;
      }
      // console.log('hello tokenValue', token);
    } else {
      if (config.propertyResolver?.[prop]) {
        let transformer = config.propertyResolver?.[prop];
        token = transformer(value, (originalValue, scale = aliasTokenType) => {
          if (
            typeof originalValue === 'string' &&
            originalValue.startsWith('$')
          ) {
            originalValue = originalValue.slice(1);
            return config?.tokens?.[scale]?.[originalValue];
          } else {
            return originalValue;
          }
        });
      } else {
        token = value;
      }
    }

    return token;
  }
};

export function resolveTokensFromConfig(config: any, props: any) {
  let newProps: any = {};

  Object.keys(props).map((prop: any) => {
    const value = props[prop];
    newProps[prop] = getTokenFromConfig(config, prop, value);
  });
  // console.log(newProps, '>hello from resolve tokens from config');
  return newProps;
}

export function resolvedTokenization(props: any, config: any) {
  const aliasedResolvedProps = resolveAliasesFromConfig(config, props);
  const newProps = resolveTokensFromConfig(config, aliasedResolvedProps);
  return newProps;
}

export let toBeInjectedCssRulesRuntime = '' as any;
export let toBeInjectedCssRulesBoottime = '' as any;
let injectedCssRuleIds = {} as any;

// function injectResolvedStyle(
//   styleKeys: Array<any>,
//   resolvedStyle: any,
//   key: any
// ) {
//   const toBeInjectedStyle: any = {
//     style: resolvedStyle,
//   };

//   const keyArr = key.split('/');
//   // console.log(styleKeys, 'sortedStyleMap ***');

//   styleKeys.forEach((styleKey) => {
//     let styleIndex = keyArr.findIndex((item: any) => item.includes(styleKey));
//     const styleValue = keyArr[styleIndex];

//     if (styleKey === 'colorMode') {
//       styleIndex = styleIndex + 1;
//       const styleValue = keyArr[styleIndex];
//       toBeInjectedStyle.colorMode = styleValue;
//     }

//     if (styleKey === 'mediaQuery') {
//       const mediaQueryCondition = resolveTokensFromConfig(config, {
//         condition: mediaQueries[styleValue],
//       });
//       toBeInjectedStyle.condition = mediaQueryCondition.condition;
//     }

//     if (styleKey === 'state') {
//       // console.log(resolvedStyle, 'mediaQuery');

//       let { ids, rules }: any = Cssify.create(
//         {
//           style: { style: resolvedStyle },
//         },
//         // @ts-ignore
//         'state'
//       );
//       if (!injectedCssRuleIds[hash(rules.style + executionTimeType)]) {
//         if (executionTimeType === 'runtime') {
//           toBeInjectedCssRulesRuntime += rules.style;
//         } else {
//           toBeInjectedCssRulesBoottime += rules.style;
//         }
//         injectedCssRuleIds[hash(rules.style + executionTimeType)] = true;
//       }
//       injectedStateStyleIds.push({
//         key,
//         // @ts-ignore
//         id: ids.style,
//         reference: { style: value, resolvedStyle },
//       });
//     } else {
//       let { ids, rules }: any = Cssify.create(
//         {
//           style: { style: resolvedStyle },
//         },
//         // @ts-ignore
//         'style'
//       );
//       // console.log(ids.style, 'mnbjhasbjhbs');

//       if (!injectedCssRuleIds[hash(rules.style + executionTimeType)]) {
//         if (executionTimeType === 'runtime') {
//           toBeInjectedCssRulesRuntime += rules.style;
//         } else {
//           toBeInjectedCssRulesBoottime += rules.style;
//         }
//         injectedCssRuleIds[hash(rules.style + executionTimeType)] = true;
//       }
//       injectedBasicStyleIds.push({
//         key,
//         // @ts-ignore
//         id: ids.style,
//         reference: { style: value, resolvedStyle },
//       });
//     }
//   });

//   console.log('hello here 333 ', toBeInjectedStyle, styleKeys);

//   // const { ids, rules } = Cssify.create({
//   //   style: toBeInjectedStyle,
//   // });
//   // if (!injectedCssRuleIds[hash(rules.style + executionTimeType)]) {
//   //   if (executionTimeType === 'runtime') {
//   //     toBeInjectedCssRulesRuntime += rules.style;
//   //   } else {
//   //     toBeInjectedCssRulesBoottime += rules.style;
//   //   }
//   //   injectedCssRuleIds[hash(rules.style + executionTimeType)] = true;
//   // }

//   // const mediaQueryId: any = ids?.style;
//   // injectedMediaQueryStyleIds.push({
//   //   key,
//   //   // @ts-ignore
//   //   id: mediaQueryId,
//   //   reference: { style: value, resolvedStyle },
//   // });

//   // return ids;
// }

function inject(styleMap: any, executionTimeType: any) {
  // styleMap.forEach((style: any) => {
  // });

  Object.keys(styleMap).forEach((key) => {
    const styleArray = styleMap[key];

    for (const i in styleArray) {
      const styleValue = styleArray[i];

      if (
        !injectedCssRuleIds[hash(styleValue.value.cssRule + executionTimeType)]
      ) {
        if (executionTimeType === 'runtime') {
          toBeInjectedCssRulesRuntime += styleValue.value.cssRule;
        } else {
          toBeInjectedCssRulesBoottime += styleValue.value.cssRule;
        }
        injectedCssRuleIds[hash(styleValue.value.cssRule + executionTimeType)] =
          true;
      }

      // injectedStateStyleIds.push({
      //   key,
      //   // @ts-ignore
      //   id: ids.style,
      //   reference: { style: value, resolvedStyle },
      // });
    }
  });
}
function injectStyleInOrder(sortedStyleMap: any, executionTimeType: any) {
  //

  const injectionOrder = ['basic', 'state', 'media'];
  // console.log(sortedStyleMap, 'style value here');

  // console.log(sortedStyleMap.baseStyle, 'hello d222');
  inject(sortedStyleMap.baseStyle.basic, executionTimeType);
  inject(sortedStyleMap.baseStyle.media, executionTimeType);

  inject(sortedStyleMap.baseStyle.state, executionTimeType);
  // inject(sortedStyleMap.baseStyle.mediaState, executionTimeType);

  // console.log(
  //   sortedStyleMap.baseStyle.media,
  //   sortedStyleMap.baseStyle.basic,
  //   'hello injected style'
  // );
  // inject(sortedStyleMap.baseStyle.basic, executionTimeType);

  // inject(sortedStyleMap.baseStyle.basic, executionTimeType);

  // inject(sortedStyleMap.baseStyle.state, executionTimeType);

  // console.log(sortedStyleMap, 'sorted stylemap');
  // injectionOrder.forEach((orderKey) => {
  //   Object.keys(sortedStyleMap).forEach((styleMapKey) => {
  //     const orderedStyle = sortedStyleMap[styleMapKey][orderKey];
  //     // console.log(sortedStyleMap[styleMapKey][orderKey], 'hello here 444');

  //     Object.keys(orderedStyle).forEach((key) => {
  //       const value = orderedStyle[key];
  //       for (const i in value) {
  //         if (
  //           !injectedCssRuleIds[
  //             hash(value[i].value.cssRule + executionTimeType)
  //           ]
  //         ) {
  //           if (executionTimeType === 'runtime') {
  //             toBeInjectedCssRulesRuntime += value[i].value.cssRule;
  //           } else {
  //             toBeInjectedCssRulesBoottime += value[i].value.cssRule;
  //           }
  //           injectedCssRuleIds[
  //             hash(value[i].value.cssRule + executionTimeType)
  //           ] = true;
  //         }
  //         // injectedStateStyleIds.push({
  //         //   key,
  //         //   // @ts-ignore
  //         //   id: ids.style,
  //         //   reference: { style: value, resolvedStyle },
  //         // });
  //       }
  //     });
  //   });
  // });
  //
  // toBeInjectedCssRulesRuntime;
}
// export function injectStyleInOrderOld(
//   sortedStyleMap: any,
//   executionTimeType: string
// ) {
//   const injectedBasicStyleIds = [] as any;
//   const injectedMediaQueryStyleIds = [] as any;
//   const injectedStateStyleIds = [] as any;

//   if (sortedStyleMap) {
//     Object.keys(sortedStyleMap).forEach((level) => {
//       const styleArray = sortedStyleMap[level];

//       styleArray.forEach((style: any) => {
//         const key = style['key'];
//         const value = style['value'];

//         // const keyArr = key.split('/');
//         const resolvedStyle = resolvedTokenization(value, config);

//         // start-refactor

//         // injectResolvedStyle(['colorMode'], resolvedStyle);

//         if (key.includes('colorMode') && !key.includes('mediaQuery')) {
//           // get color mode from key value
//           injectResolvedStyle(['colorMode'], resolvedStyle);
//         } else if (key.includes('mediaQuery') && !key.includes('colorMode')) {
//           injectResolvedStyle(['mediaQuery'], resolvedStyle);
//         } else if (key.includes('colorMode') && key.includes('mediaQuery')) {
//           // Nested media query'
//           injectResolvedStyle(['mediaQuery', 'colorMode'], resolvedStyle);
//         } else {
//           if (key.includes('state')) {
//             // console.log(resolvedStyle, 'mediaQuery');

//             let { ids, rules }: any = Cssify.create(
//               {
//                 style: { style: resolvedStyle },
//               },
//               // @ts-ignore
//               'state'
//             );
//             if (!injectedCssRuleIds[hash(rules.style + executionTimeType)]) {
//               if (executionTimeType === 'runtime') {
//                 toBeInjectedCssRulesRuntime += rules.style;
//               } else {
//                 toBeInjectedCssRulesBoottime += rules.style;
//               }
//               injectedCssRuleIds[hash(rules.style + executionTimeType)] = true;
//             }
//             injectedStateStyleIds.push({
//               key,
//               // @ts-ignore
//               id: ids.style,
//               reference: { style: value, resolvedStyle },
//             });
//           } else {
//             let { ids, rules }: any = Cssify.create(
//               {
//                 style: { style: resolvedStyle },
//               },
//               // @ts-ignore
//               'style'
//             );
//             // console.log(ids.style, 'mnbjhasbjhbs');

//             if (!injectedCssRuleIds[hash(rules.style + executionTimeType)]) {
//               if (executionTimeType === 'runtime') {
//                 toBeInjectedCssRulesRuntime += rules.style;
//               } else {
//                 toBeInjectedCssRulesBoottime += rules.style;
//               }
//               injectedCssRuleIds[hash(rules.style + executionTimeType)] = true;
//             }
//             injectedBasicStyleIds.push({
//               key,
//               // @ts-ignore
//               id: ids.style,
//               reference: { style: value, resolvedStyle },
//             });
//           }
//         }
//         // end-refactor
//       });
//     });
//   }

//   return {
//     basic: injectedBasicStyleIds,
//     media: injectedMediaQueryStyleIds,
//     state: injectedStateStyleIds,
//   };
// }

// --------------------------------- Traverse through sorted objects and inject style in order --------------------------------------

// ----------------------------------------------------- 5. Get style from ids ------------------------------------------------------

function mergeTwoArrays(arr1: any, arr2: any) {
  const mergedArray = [] as any;
  arr1.forEach((item: any) => {
    mergedArray.push(item);
  });
  arr2.forEach((item: any) => {
    mergedArray.push(item);
  });
  return mergedArray;
}

export function mergeIdStyleMaps(idsMap: any) {
  let mergedMap = { baseStyle: {}, sizes: {}, variants: {} } as any;
  Object.keys(idsMap).forEach((key) => {
    let classObj = idsMap[key];
    Object.keys(classObj).forEach((classKey) => {
      let typeObj = classObj[classKey];
      // console.log(typeObj, 'type obj');
      Object.keys(typeObj).forEach((typeKey) => {
        let idArr = typeObj[typeKey];
        if (!mergedMap[key][classKey]) {
          mergedMap[key][classKey] = [];
        }
        let mergedArr = mergeTwoArrays(mergedMap[key][classKey], idArr);

        // console.log(
        //   // mergedMap[key],
        //   key,
        //   classKey,
        //   typeKey,
        //   idsMap,
        //   // typeKey,
        //   // mergedArr,
        //   // mergedArr,
        //   'merged type obj 111'
        // );

        mergedMap[key][classKey] = mergedArr;
      });
    });
  });

  // console.log(mergedMap, 'merged type obj');
  return mergedMap;
}

export function getDefaultStyleFromIds(
  idsMap: any
  // variant: string,
  // size: any
) {
  // console.log(idsMap, 'm mmmm');
  let resultIds = { media: [], basic: [], state: [] } as any;
  if (!idsMap) {
    return resultIds;
  }

  let baseStyleIds = idsMap.baseStyle;

  baseStyleIds?.media?.forEach((item: any) => {
    if (!item.key.includes('state')) {
      // console.log('hello here 111', item);
      resultIds.media.push(item.value.id);
    }
  });
  baseStyleIds?.basic?.forEach((item: any) => {
    if (!item.key.includes('state')) {
      resultIds.basic.push(item.value.id);
    }
  });

  // resultIds.media = resultIds.media.join(' ');
  // resultIds.style = resultIds.style.join(' ');
  // resultIds.state = resultIds.state.join(' ');
  return resultIds;
}

export function getVariantDefaultStylesFromIds(
  idsMap: any,
  variant: string,
  size: any
) {
  let resultIds = { media: [], basic: [], state: [] } as any;
  if (!idsMap) {
    return resultIds;
  }
  let variantIds = idsMap.variants;
  let sizeIds = idsMap.sizes;
  if (variant && variantIds && variantIds.media && variantIds.basic) {
    variantIds.media.forEach((item: any) => {
      let keyArr = item.key.split('/');
      let variantKey = keyArr[2];

      if (variantKey === variant) {
        if (!item.key.includes('state')) {
          resultIds.media.push(item.value.id);
        }
      }
    });
    variantIds.basic.forEach((item: any) => {
      let keyArr = item.key.split('/');
      let variantKey = keyArr[2];
      if (variantKey === variant) {
        if (!item.key.includes('state')) {
          resultIds.basic.push(item.value.id);
        }
      }
    });
    // console.log(idsMap, 'mergedIdsRuntimjkjheMap');
  }
  if (size && sizeIds && sizeIds.media && sizeIds.basic) {
    sizeIds.media.forEach((item: any) => {
      let keyArr = item.key.split('/');
      let sizeKey = keyArr[2];
      if (sizeKey === size) {
        if (!item.key.includes('state')) {
          resultIds.media.push(item.value.id);
        }
      }
    });
    sizeIds.basic.forEach((item: any) => {
      let keyArr = item.key.split('/');
      let sizeKey = keyArr[2];
      if (sizeKey === size) {
        if (!item.key.includes('state')) {
          resultIds.basic.push(item.value.id);
        }
      }
    });
  }
  return resultIds;
}

function isSubArray(subArray: any, array: any) {
  return subArray.every((val: any) => array.includes(val));
}
// export function getDecendantStyleFromIds(idsMap: any,
//   variant: string,
//   size: any,
//   states: any){

// }

function getVariantSizeResultIds(
  styleArray: any,
  activeStates: any,
  value: any
): any {
  const resultIds: any = [];
  styleArray?.forEach((item: any) => {
    let keyArr = item.key.split('/');
    let key = keyArr[2];
    if (key === value) {
      if (item.key.includes('state')) {
        let availableStates = {} as any;
        keyArr.forEach((key: any, ind: number) => {
          if (key === 'state') {
            availableStates[keyArr[ind + 1]] = true;
          }
        });
        if (isSubArray(Object.keys(availableStates), activeStates)) {
          resultIds.push(item.value.id);
        }
      }
    }
  });

  return resultIds;
}

function getBaseResultIds(styleArray: any, activeStates: any) {
  const resultIds: any = [];
  styleArray?.forEach((item: any) => {
    let keyArr = item.key.split('/');
    if (item.key.includes('state')) {
      let availableStates = {} as any;
      keyArr.forEach((key: any, ind: number) => {
        if (key === 'state') {
          availableStates[keyArr[ind + 1]] = true;
        }
      });
      if (isSubArray(Object.keys(availableStates), activeStates)) {
        resultIds.push(item.value.id);
      }
      // console.log(item, 'item here');
    }
  });

  return resultIds;
}
export function getStateStylesFromIds(
  idsMap: any,
  variant: string,
  size: any,
  states: any
) {
  if (!idsMap) {
    return resultIds;
  }
  let activeStates = Object.keys(states).filter((key) => states[key]);
  let baseStyleIds = idsMap.baseStyle;
  let variantIds = idsMap.variants;
  let sizeIds = idsMap.sizes;

  // console.log(baseStyleIds, 'hello result ids 22');

  // if (
  //   baseStyleIds &&
  //   baseStyleIds.media &&
  //   baseStyleIds.basic &&
  //   baseStyleIds.state
  // ) {
  const baseState = getBaseResultIds(baseStyleIds?.state, activeStates);
  const baseMedia = getBaseResultIds(baseStyleIds?.media, activeStates);
  const baseBasic = getBaseResultIds(baseStyleIds?.basic, activeStates);

  const variantState = getVariantSizeResultIds(
    variantIds?.state,
    activeStates,
    variant
  );

  const variantMedia = getVariantSizeResultIds(
    variantIds?.media,
    activeStates,
    variant
  );

  const variantBasic = getVariantSizeResultIds(
    variantIds?.basic,
    activeStates,
    variant
  );

  const sizeState = getVariantSizeResultIds(sizeIds?.state, activeStates, size);

  const sizeMedia = getVariantSizeResultIds(sizeIds?.media, activeStates, size);

  const sizeBasic = getVariantSizeResultIds(sizeIds?.basic, activeStates, size);
  let resultIds = {
    media: [...baseMedia, ...variantMedia, ...sizeMedia],
    basic: [...baseBasic, ...variantBasic, ...sizeBasic],
    state: [...baseState, ...variantState, ...sizeState],
  } as any;

  return resultIds;
}

// ----------------------------------------------------- 5. Get style from ids ------------------------------------------------------

// ----------------------------------------------------- 6. Theme Boot Resolver -----------------------------------------------------

// function getSortedStyle(styleMap: any) {
//   return {
//     baseStyle: sortObjectKeysBasedOnPrecedence(styleMap.baseStyle),
//     variants: sortObjectKeysBasedOnPrecedence(styleMap.variants),
//     sizes: sortObjectKeysBasedOnPrecedence(styleMap.sizes),
//   };
// }
function getSortedStyle(styleMap: any) {
  const [allStylesWithoutReservedKeys, remainingStylesWithReservedKeys] =
    getAllStylesWithoutReservedKeys(styleMap);

  const [allStylesWithoutStateKeys, stylesWithStateKeys] =
    getAllStylesWithoutStateKeys(remainingStylesWithReservedKeys);

  // const [allStylesWithoutMediaKeys, stylesWithMediaKeys] =
  //   getAllStylesWithoutMediaKeys(remainingStylesWithReservedKeys);

  // console.log(
  //   // styleMap,
  //   // {
  //   //   basic: sortObjectKeysBasedOnPrecedence(allStylesWithoutReservedKeys),
  //   //   state: sortObjectKeysBasedOnPrecedence(stylesWithStateKeys),
  //   //   media: sortObjectKeysBasedOnPrecedence(allStylesWithoutStateKeys),
  //   // },
  //   allStylesWithoutStateKeys,
  //   'hello here 111111'
  // );

  // console.log(
  //   sortObjectKeysBasedOnPrecedence(stylesWithStateKeys),
  //   'style keys here'
  // );
  // return {
  //   basic: sortObjectKeysBasedOnPrecedence(allStylesWithoutReservedKeys),
  //   state: sortObjectKeysBasedOnPrecedence(stylesWithStateKeys),
  //   media: sortObjectKeysBasedOnPrecedence(allStylesWithoutStateKeys),
  // };

  // return {
  //   baseStyle: sortObjectKeysBasedOnPrecedence(styleMap.baseStyle),
  //   variants: sortObjectKeysBasedOnPrecedence(styleMap.variants),
  //   sizes: sortObjectKeysBasedOnPrecedence(styleMap.sizes),
  // };
}
function getSortStyleBasedOnPrecedence(styleMap: any) {
  // const sortedStyleMap = {
  //   // Sorting in order of precedence for baseStyle, variants and sizes of styles that no reserved keys like media query and color modes,states
  //   basic: getSortedStyleBasedOnType(allStylesWithoutReservedKeys),
  //   // Sorting in order of precedence for baseStyle, variants and sizes of styles that contains media query and color modes only
  //   media: getSortedStyleBasedOnType(allStylesWithoutStateKeys),
  //   // Sorting in order of precedence for baseStyle, variants and sizes of styles that contains states
  //   state: getSortedStyleBasedOnType(stylesWithStateKeys),
  // };

  // console.log(
  //   allStylesWithoutReservedKeys,
  //   allStylesWithoutStateKeys,
  //   stylesWithStateKeys,
  //   'hello'
  // );
  const sortedStyleMap1 = {
    // Sorting in order of precedence for baseStyle, variants and sizes of styles that no reserved keys like media query and color modes,states
    baseStyle: getSortedStyle(styleMap.baseStyle),
    // Sorting in order of precedence for baseStyle, variants and sizes of styles that contains media query and color modes only
    variants: getSortedStyle(styleMap.variants),
    // Sorting in order of precedence for baseStyle, variants and sizes of styles that contains states
    sizes: getSortedStyle(styleMap.sizes),
  };
  // console.log(sortedStyleMap, sortedStyleMap1, 'hello here 21222');

  // const sortedStyleMap = {
  //   // Sorting in order of precedence for baseStyle, variants and sizes of styles that no reserved keys like media query and color modes,states
  //   basic: getSortedStyle(allStylesWithoutReservedKeys),
  //   // Sorting in order of precedence for baseStyle, variants and sizes of styles that contains media query and color modes only
  //   media: getSortedStyle(allStylesWithoutStateKeys),
  //   // Sorting in order of precedence for baseStyle, variants and sizes of styles that contains states
  //   state: getSortedStyle(stylesWithStateKeys),
  // };
  // console.log(
  //   sortedBasicStyleLevelForBaseStyle,
  //   sortedBasicStyleLevelForVariants,
  //   sortedBasicStyleLevelForSizes,
  //   'style here ******'
  // );

  // sortedStyleMap.media.baseStyle = sortObjectKeysBasedOnPrecedence(
  //   allStylesWithoutStateKeys.baseStyle
  // );

  // sortedStyleMap.media.variants = sortObjectKeysBasedOnPrecedence(
  //   allStylesWithoutStateKeys.variants
  // );

  // sortedStyleMap.media.sizes = sortObjectKeysBasedOnPrecedence(
  //   allStylesWithoutStateKeys.sizes
  // );

  return sortedStyleMap1;
}

let debug;
function resolveTheme(flattenTheme: any, executionTimeType: any = 'buildtime') {
  const resolvedTheme: any = {};
  Object.keys(flattenTheme).forEach((key) => {
    const resolvedStyle = resolvedTokenization(flattenTheme[key], config);

    const toBeInjectedStyle: any = { style: resolvedStyle };

    let dataType: any = 'media';

    const keyArr = key.split('/');
    const styleIndexMediaQuery = keyArr.findIndex((item) =>
      item.includes('mediaQuery')
    );
    const styleIndexColorMode = keyArr.findIndex((item) =>
      item.includes('colorMode')
    );

    if (
      // key.includes('colorMode') &&
      key.includes('mediaQuery') &&
      key.includes('state')
    ) {
      const mediaQueryCondition = resolveTokensFromConfig(config, {
        condition: mediaQueries[keyArr[styleIndexMediaQuery]],
      });
      // toBeInjectedStyle.colorMode = keyArr[styleIndexColorMode + 1];
      toBeInjectedStyle.condition = mediaQueryCondition.condition;
      dataType = 'state';
    } else if (key.includes('colorMode') && key.includes('mediaQuery')) {
      // toBeInjectedStyle.colorMode = keyArr[styleIndexColorMode + 1];

      const mediaQueryCondition = resolveTokensFromConfig(config, {
        condition: mediaQueries[keyArr[styleIndexMediaQuery]],
      });
      toBeInjectedStyle.colorMode = keyArr[styleIndexColorMode + 1];
      toBeInjectedStyle.condition = mediaQueryCondition.condition;
    } else if (key.includes('colorMode') && key.includes('mediaQuery')) {
      // toBeInjectedStyle.colorMode = keyArr[styleIndexColorMode + 1];

      const mediaQueryCondition = resolveTokensFromConfig(config, {
        condition: mediaQueries[keyArr[styleIndexMediaQuery]],
      });
      toBeInjectedStyle.colorMode = keyArr[styleIndexColorMode + 1];
      toBeInjectedStyle.condition = mediaQueryCondition.condition;
    } else if (key.includes('mediaQuery') && !key.includes('colorMode')) {
      // let keyArr = key.split('/');
      // let styleIndex = keyArr.findIndex((item) => item.includes('mediaQuery'));
      // let styleValue = keyArr[styleIndexColorMode + 1];

      let mediaQueryCondition = resolveTokensFromConfig(config, {
        condition: mediaQueries[keyArr[styleIndexMediaQuery]],
      });
      toBeInjectedStyle.condition = mediaQueryCondition.condition;
    } else if (key.includes('colorMode')) {
      // toBeInjectedStyle.colorMode = keyArr[styleIndexColorMode + 1];
      toBeInjectedStyle.condition = keyArr[styleIndexColorMode + 1];

      debug = true;
    } else {
      if (key.includes('state')) {
        dataType = 'state';
      } else {
        dataType = 'style';
      }
    }

    let { ids, rules }: any = Cssify.create(
      {
        style: toBeInjectedStyle,
      },
      // @ts-ignore
      dataType
    );

    //

    resolvedTheme[key] = {
      style: resolvedStyle,
      id: ids.style,
      cssRule: rules.style,
    };
  });

  return resolvedTheme;
}

function groupKeys(obj: any): {
  state: any[];
  mediaQuery: any[];
  basic: any[];
} {
  const result = { state: [], mediaQuery: [], basic: [] };
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      obj[key].key = key;

      if (key.includes('state')) {
        result.state.push(obj[key]);
      } else if (key.includes('mediaQuery')) {
        result.mediaQuery.push(obj[key]);
      } else {
        result.basic.push(obj[key]);
      }
    }
  }

  return result;
}

export function resolveThemeAndIdGenerator(theme: any, executionTimeType: any) {
  if (!theme) {
    return;
  }
  const flattenTheme = flattenThemeObject(theme, '', {});

  const resolvedTheme = resolveTheme(flattenTheme, executionTimeType);
  // console.log(groupKeys(resolvedTheme), resolvedTheme, 'hello resolved theme');

  const segregatedStyleMap = segregateStyleMapBasedOnFirstKey(resolvedTheme);

  const levelBasedSegregatedStyleMaps =
    getLevelBasedSegregatedStyleMaps(segregatedStyleMap);

  const sortedStyleMap = getSortStyleBasedOnPrecedence(
    levelBasedSegregatedStyleMaps
  );

  // console.log(sortedStyleMap, '((()))');

  injectStyleInOrder(sortedStyleMap, executionTimeType);

  const styleDictionary = mergeIdStyleMaps(sortedStyleMap);
  return styleDictionary;
  // const resolveSortedStyleMap = getResolvedStyleMap(sortedStyleMap);

  // Injecting styles in order of precedence
  // console.log(sortedStyleMap, 'hello sorted here');

  // return styleDictionary;
}

// ----------------------------------------------------- 6. Theme Boot Resolver -----------------------------------------------------
export const deepMerge = (target: any = {}, source: any) => {
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      if (typeof target[key] === 'object' && typeof source[key] === 'object') {
        deepMerge(target[key], source[key]);
      } else {
        target[key] = source[key];
      }
    }
  }
  return target;
};

export const hash = (text: string) => {
  if (!text) {
    return '';
  }
  text = '_' + Math.random().toString(36).substr(2, 9) + '_' + text;

  let hashValue = 5381;
  let index = text.length - 1;

  while (index) {
    hashValue = (hashValue * 33) ^ text.charCodeAt(index);
    index -= 1;
  }

  return (hashValue >>> 0).toString(16);
};
