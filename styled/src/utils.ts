// import { StyleSheet } from '@gluestack/media-query';
import { Cssify } from '@gluestack/cssify';
import { config } from './nativebase.config';
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
  let parsedKey = key;
  Object.keys(PRECEDENCE).forEach((precedenceKey) => {
    if (key.includes(precedenceKey)) {
      parsedKey = parsedKey.replaceAll(
        precedenceKey,
        PRECEDENCE[precedenceKey]
      );
    }
  });
  parsedKey = parsedKey.replaceAll('state/', '');
  parsedKey = parsedKey.replaceAll('/style', '');
  parsedKey = parsedKey.replaceAll('/', '.');

  return parsedKey;
}
function parseObjectForSorting(
  object: any,
  PRECEDENCE: typeof STYLE_QUERY_KEY_PRECEDENCE
) {
  let parsedObj = {} as any;
  Object.keys(object).forEach((key) => {
    let parsedKey = parseKey(key, PRECEDENCE);
    parsedKey = parsedKey.split('.').splice(2).join('.');
    if (!parsedObj[parsedKey]) {
      parsedObj[parsedKey] = {};
    }
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
    if (config?.aliases?.[key]?.property) {
      aliasResolvedProps[config.aliases?.[key].property] = props[key];
    } else {
      aliasResolvedProps[key] = props[key];
    }
  });
  return aliasResolvedProps;
}

export function resolveTokensFromConfig(config: any, props: any) {
  const newProps: any = {};

  Object.keys(props).map((prop: any) => {
    const value = props[prop];
    if (typeof value === 'string' && value.split('$').length > 2) {
      const tokenValue = getObjectProperty(
        config?.tokens,
        value.split('$').slice(1)
      );

      newProps[prop] = tokenValue;
    } else {
      const configAlias = config?.aliases?.[prop]?.scale;
      const tokenPath = config?.tokens?.[configAlias];
      let token;

      if (typeof value === 'string' && value.startsWith('$')) {
        const originalValue = value.slice(1);

        token = tokenPath?.[originalValue] ?? value;
      } else {
        token = value;
      }

      newProps[prop] = token;
    }
  });

  return newProps;
}

function resolvedTokenization(props: any, config: any) {
  const newProps = resolveTokensFromConfig(config, props);
  const aliasedResolvedProps = resolveAliasesFromConfig(config, newProps);
  return aliasedResolvedProps;
}
function hash(text: string) {
  if (!text) {
    return '';
  }

  let hashValue = 5381;
  let index = text.length - 1;

  while (index) {
    hashValue = (hashValue * 33) ^ text.charCodeAt(index);
    index -= 1;
  }

  return (hashValue >>> 0).toString(16);
}

export let toBeInjectedCssRulesRuntime = '' as any;
export let toBeInjectedCssRulesBoottime = '' as any;
let injectedCssRuleIds = {} as any;

function injectResolvedStyle(
  styleKeys: Array<any>,
  resolvedStyle: any,
  key: any
) {
  const toBeInjectedStyle: any = {
    style: resolvedStyle,
  };

  const keyArr = key.split('/');
  // console.log(styleKeys, 'sortedStyleMap ***');

  styleKeys.forEach((styleKey) => {
    let styleIndex = keyArr.findIndex((item: any) => item.includes(styleKey));
    const styleValue = keyArr[styleIndex];

    if (styleKey === 'colorMode') {
      styleIndex = styleIndex + 1;
      const styleValue = keyArr[styleIndex];
      toBeInjectedStyle.colorMode = styleValue;
    }

    if (styleKey === 'mediaQuery') {
      const mediaQueryCondition = resolveTokensFromConfig(config, {
        condition: mediaQueries[styleValue],
      });
      toBeInjectedStyle.condition = mediaQueryCondition.condition;
    }

    if (styleKey === 'state') {
      // console.log(resolvedStyle, 'mediaQuery');

      let { ids, rules }: any = Cssify.create(
        {
          style: { style: resolvedStyle },
        },
        // @ts-ignore
        'state'
      );
      if (!injectedCssRuleIds[hash(rules.style + executionTimeType)]) {
        if (executionTimeType === 'runtime') {
          toBeInjectedCssRulesRuntime += rules.style;
        } else {
          toBeInjectedCssRulesBoottime += rules.style;
        }
        injectedCssRuleIds[hash(rules.style + executionTimeType)] = true;
      }
      injectedStateStyleIds.push({
        key,
        // @ts-ignore
        id: ids.style,
        reference: { style: value, resolvedStyle },
      });
    } else {
      let { ids, rules }: any = Cssify.create(
        {
          style: { style: resolvedStyle },
        },
        // @ts-ignore
        'style'
      );
      // console.log(ids.style, 'mnbjhasbjhbs');

      if (!injectedCssRuleIds[hash(rules.style + executionTimeType)]) {
        if (executionTimeType === 'runtime') {
          toBeInjectedCssRulesRuntime += rules.style;
        } else {
          toBeInjectedCssRulesBoottime += rules.style;
        }
        injectedCssRuleIds[hash(rules.style + executionTimeType)] = true;
      }
      injectedBasicStyleIds.push({
        key,
        // @ts-ignore
        id: ids.style,
        reference: { style: value, resolvedStyle },
      });
    }
  });

  console.log('hello here 333 ', toBeInjectedStyle, styleKeys);

  // const { ids, rules } = Cssify.create({
  //   style: toBeInjectedStyle,
  // });
  // if (!injectedCssRuleIds[hash(rules.style + executionTimeType)]) {
  //   if (executionTimeType === 'runtime') {
  //     toBeInjectedCssRulesRuntime += rules.style;
  //   } else {
  //     toBeInjectedCssRulesBoottime += rules.style;
  //   }
  //   injectedCssRuleIds[hash(rules.style + executionTimeType)] = true;
  // }

  // const mediaQueryId: any = ids?.style;
  // injectedMediaQueryStyleIds.push({
  //   key,
  //   // @ts-ignore
  //   id: mediaQueryId,
  //   reference: { style: value, resolvedStyle },
  // });

  // return ids;
}
function injectStyleInOrder(sortedStyleMap: any, executionTimeType: any) {
  //

  const injectionOrder = ['basic', 'media', 'state'];

  injectionOrder.forEach((orderKey) => {
    Object.keys(sortedStyleMap).forEach((styleMapKey) => {
      const orderedStyle = sortedStyleMap[styleMapKey][orderKey];
      // console.log(sortedStyleMap[styleMapKey][orderKey], 'hello here 444');

      Object.keys(orderedStyle).forEach((key) => {
        const value = orderedStyle[key];
        for (const i in value) {
          if (
            !injectedCssRuleIds[
              hash(value[i].value.cssRule + executionTimeType)
            ]
          ) {
            if (executionTimeType === 'runtime') {
              toBeInjectedCssRulesRuntime += value[i].value.cssRule;
            } else {
              toBeInjectedCssRulesBoottime += value[i].value.cssRule;
            }
            injectedCssRuleIds[
              hash(value[i].value.cssRule + executionTimeType)
            ] = true;
          }
          // injectedStateStyleIds.push({
          //   key,
          //   // @ts-ignore
          //   id: ids.style,
          //   reference: { style: value, resolvedStyle },
          // });
        }
      });
    });
  });
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
export function getStateStylesFromIds(
  idsMap: any,
  variant: string,
  size: any,
  states: any
) {
  let resultIds = { media: [], basic: [], state: [] } as any;
  if (!idsMap) {
    return resultIds;
  }
  let activeStates = Object.keys(states).filter((key) => states[key]);
  let baseStyleIds = idsMap.baseStyle;
  let variantIds = idsMap.variants;
  let sizeIds = idsMap.sizes;

  if (
    baseStyleIds &&
    baseStyleIds.media &&
    baseStyleIds.basic &&
    baseStyleIds.state
  ) {
    baseStyleIds.state.forEach((item: any) => {
      let keyArr = item.key.split('/');
      if (item.key.includes('state')) {
        let availableStates = {} as any;
        keyArr.forEach((key: any, ind: number) => {
          if (key === 'state') {
            availableStates[keyArr[ind + 1]] = true;
          }
        });
        if (isSubArray(Object.keys(availableStates), activeStates)) {
          resultIds.state.push(item.value.id);
        }
        // console.log(item, 'item here');
      }
    });
    baseStyleIds.media.forEach((item: any) => {
      let keyArr = item.key.split('/');
      if (item.key.includes('state')) {
        let availableStates = {} as any;
        keyArr.forEach((key: any, ind: number) => {
          if (key === 'state') {
            availableStates[keyArr[ind + 1]] = true;
          }
        });
        if (isSubArray(Object.keys(availableStates), activeStates)) {
          resultIds.media.push(item.value.id);
        }
      }
    });
    baseStyleIds.basic.forEach((item: any) => {
      let keyArr = item.key.split('/');
      if (!item.key.includes('state')) {
        let availableStates = {} as any;
        keyArr.forEach((key: any, ind: number) => {
          if (key === 'state') {
            availableStates[keyArr[ind + 1]] = true;
          }
        });
        if (isSubArray(Object.keys(availableStates), activeStates)) {
          resultIds.basic.push(item.value.id);
        }
      }
    });
  }
  if (
    variant &&
    variantIds &&
    variantIds.media &&
    variantIds.basic &&
    variantIds.state
  ) {
    variantIds.state.forEach((item: any) => {
      let keyArr = item.key.split('/');
      let variantKey = keyArr[2];
      if (variantKey === variant) {
        if (item.key.includes('state')) {
          let availableStates = {} as any;
          keyArr.forEach((key: any, ind: number) => {
            if (key === 'state') {
              availableStates[keyArr[ind + 1]] = true;
            }
          });
          if (isSubArray(Object.keys(availableStates), activeStates)) {
            resultIds.state.push(item.value.id);
          }
        }
      }
    });
    variantIds.media.forEach((item: any) => {
      let keyArr = item.key.split('/');
      let variantKey = keyArr[2];
      if (variantKey === variant) {
        if (item.key.includes('state')) {
          let availableStates = {} as any;
          keyArr.forEach((key: any, ind: number) => {
            if (key === 'state') {
              availableStates[keyArr[ind + 1]] = true;
            }
          });
          if (isSubArray(Object.keys(availableStates), activeStates)) {
            resultIds.media.push(item.value.id);
          }
        }
      }
    });
    variantIds.basic.forEach((item: any) => {
      let keyArr = item.key.split('/');
      let variantKey = keyArr[2];
      if (variantKey === variant) {
        if (!item.key.includes('state')) {
          let availableStates = {} as any;
          keyArr.forEach((key: any, ind: number) => {
            if (key === 'state') {
              availableStates[keyArr[ind + 1]] = true;
            }
          });
          if (isSubArray(Object.keys(availableStates), activeStates)) {
            resultIds.basic.push(item.value.id);
          }
        }
      }
    });
  }
  if (size && sizeIds && sizeIds.media && sizeIds.basic && sizeIds.state) {
    sizeIds.state.forEach((item: any) => {
      let keyArr = item.key.split('/');
      let variantKey = keyArr[2];
      if (variantKey === variant) {
        if (item.key.includes('state')) {
          let availableStates = {} as any;
          keyArr.forEach((key: any, ind: number) => {
            if (key === 'state') {
              availableStates[keyArr[ind + 1]] = true;
            }
          });
          if (isSubArray(Object.keys(availableStates), activeStates)) {
            resultIds.state.push(item.value.id);
          }
        }
      }
    });
    sizeIds.media.forEach((item: any) => {
      let keyArr = item.key.split('/');
      let sizeKey = keyArr[2];
      if (sizeKey === size) {
        if (item.key.includes('state')) {
          let availableStates = {} as any;
          keyArr.forEach((key: any, ind: number) => {
            if (key === 'state') {
              availableStates[keyArr[ind + 1]] = true;
            }
          });
          if (isSubArray(Object.keys(availableStates), activeStates)) {
            resultIds.media.push(item.value.id);
          }
        }
      }
    });
    sizeIds.basic.forEach((item: any) => {
      let keyArr = item.key.split('/');
      let sizeKey = keyArr[2];
      if (sizeKey === size) {
        if (item.key.includes('state')) {
          let availableStates = {} as any;
          keyArr.forEach((key: any, ind: number) => {
            if (key === 'state') {
              availableStates[keyArr[ind + 1]] = true;
            }
          });
          if (isSubArray(Object.keys(availableStates), activeStates)) {
            resultIds.basic.push(item.value.id);
          }
        }
      }
    });
  }
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

  console.log(
    styleMap,
    // {
    //   basic: sortObjectKeysBasedOnPrecedence(allStylesWithoutReservedKeys),
    //   state: sortObjectKeysBasedOnPrecedence(stylesWithStateKeys),
    //   media: sortObjectKeysBasedOnPrecedence(allStylesWithoutStateKeys),
    // },
    allStylesWithoutStateKeys,
    'hello here 111111'
  );
  return {
    basic: sortObjectKeysBasedOnPrecedence(allStylesWithoutReservedKeys),
    state: sortObjectKeysBasedOnPrecedence(stylesWithStateKeys),
    media: sortObjectKeysBasedOnPrecedence(allStylesWithoutStateKeys),
  };

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

    let toBeInjectedStyle: any = { style: resolvedStyle };

    let dataType: any = 'media';

    // console.log(s);

    // if (styleKey === 'colorMode') {
    //   styleIndex = styleIndex + 1;
    //   let styleValue = keyArr[styleIndex];
    //   toBeInjectedStyle.colorMode = styleValue;
    // }
    const keyArr = key.split('/');
    const styleIndexMediaQuery = keyArr.findIndex((item) =>
      item.includes('mediaQuery')
    );
    const styleIndexColorMode = keyArr.findIndex((item) =>
      item.includes('colorMode')
    );

    if (key.includes('colorMode') && key.includes('mediaQuery')) {
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

      // console.log(mediaQueries, 'condition here');

      // let { ids, rules } = Cssify.create({
      //   style: toBeInjectedStyle,
      // });
    } else if (key.includes('colorMode')) {
      toBeInjectedStyle.colorMode = keyArr[styleIndexColorMode + 1];
      toBeInjectedStyle.condition = keyArr[styleIndexColorMode + 1];

      // toBeInjectedStyle = {

      //   style: resolvedStyle,
      //   colorMode: keyArr[styleIndexColorMode + 1],
      //   // condition: mediaQueryCondition.condition,
      // };
      // console.log(toBeInjectedStyle.colorMode, 'condition here 111');
      debug = true;
    } else {
      if (key.includes('state')) {
        dataType = 'state';
        // let { ids, rules } = Cssify.create(
        //   {
        //     style: { style: resolvedStyle },
        //   },
        //   // @ts-ignore
        //   'state'
        // );
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

    // if (dataType === 'media' && toBeInjectedStyle.colorMode) {
    console.log(
      // toBeInjectedStyle,
      // dataType,
      key,
      rules.style,
      'hello style to be injected'
    );
    // }

    //

    // if (debug) {
    //   console.log(toBeInjectedStyle, dataType, rules, 'debug here');
    // }
    if (!injectedCssRuleIds[hash(rules.style + executionTimeType)]) {
      if (executionTimeType === 'runtime') {
        toBeInjectedCssRulesRuntime += rules.style;
      } else {
        toBeInjectedCssRulesBoottime += rules.style;
      }
      injectedCssRuleIds[hash(rules.style + executionTimeType)] = true;
    }

    resolvedTheme[key] = {
      style: resolvedStyle,
      id: ids.style,
      cssRule: rules.style,
    };

    // resolvedTheme[key]['id'] = ids.style;
    // resolvedTheme[key]['rules'] = rules.style;
  });

  return resolvedTheme;
}
function generateStyleHashInOrder(sortedStyleMap: any, executionTimeType: any) {
  // Basic Style

  const injectionOrder = ['basic', 'media', 'state'];
  const styleHashMap: any = {
    baseStyle: {},
    variants: {},
    sizes: {},
  };

  injectionOrder.forEach((orderKey) => {
    Object.keys(sortedStyleMap).forEach((styleMapKey) => {
      styleHashMap[styleMapKey][orderKey] = resolveStyle(
        sortedStyleMap[styleMapKey][orderKey],
        executionTimeType
      );
    });
  });

  return styleHashMap;
}

export function resolveThemeAndIdGenerator(theme: any, executionTimeType: any) {
  if (!theme) {
    return;
  }
  const flattenTheme = flattenThemeObject(theme, '', {});

  const resolvedTheme = resolveTheme(flattenTheme, executionTimeType);

  const segregatedStyleMap = segregateStyleMapBasedOnFirstKey(resolvedTheme);

  const levelBasedSegregatedStyleMaps =
    getLevelBasedSegregatedStyleMaps(segregatedStyleMap);

  const sortedStyleMap = getSortStyleBasedOnPrecedence(
    levelBasedSegregatedStyleMaps
  );

  injectStyleInOrder(sortedStyleMap, executionTimeType);
  const styleDictionary = mergeIdStyleMaps(sortedStyleMap);
  console.log(styleDictionary, 'hello heee');
  return styleDictionary;
  // const resolveSortedStyleMap = getResolvedStyleMap(sortedStyleMap);

  // Injecting styles in order of precedence
  // console.log(sortedStyleMap, 'hello sorted here');

  // return styleDictionary;
}

// ----------------------------------------------------- 6. Theme Boot Resolver -----------------------------------------------------
export const deepMerge = (target: any, source: any) => {
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
