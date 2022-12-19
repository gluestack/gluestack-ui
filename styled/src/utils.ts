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

export function traverseThemeAndCreateMapOfPathForKeys(
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
          traverseThemeAndCreateMapOfPathForKeys(
            query.value,
            path + '/' + uniquePath + '/value',
            stylePathMap
          );
        }
      });
    }
    if (typeof theme[parent] === 'object' && !Array.isArray(theme[parent])) {
      traverseThemeAndCreateMapOfPathForKeys(
        theme[parent],
        `${path}/${parent}`,
        stylePathMap
      );
    }
  });

  return stylePathMap;
}

// ---------------------------------------------------------- StyleMapGen ---------------------------------------------------------------

// ---------------------------------------------------------- 2. StyleMapSegregation -------------------------------------------------------

export function segregateStyleMapBasedOnFirstKey(styleMap: any) {
  let segregatedStyleMap = {} as any;
  if (!styleMap) return;
  Object.keys(styleMap).forEach((key) => {
    let firstKey = key.split('/')[1];
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

const reservedKeys = ['state', 'mediaQuery', 'colorMode', 'platform'];

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
  let stylesThatDontContainReservedKeys = {} as any;
  let fallBack = {} as any;

  Object.keys(styleMap).forEach((level) => {
    let style = styleMap[level];
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
  Object.keys(styleMap).forEach((type) => {
    [allStylesWithoutReservedKeys[type], fallBack[type]] =
      getStylesThatDontContainReservedKeys(styleMap[type]);
  });
  return [allStylesWithoutReservedKeys, fallBack];
}

export function getAllStylesWithoutStateKeys(styleMap: any) {
  let allStylesWithoutStateKeys = {} as any;
  let fallBack = {} as any;
  Object.keys(styleMap).forEach((type) => {
    [allStylesWithoutStateKeys[type], fallBack[type]] =
      getStylesThatDontContainStateKeys(styleMap[type]);
  });
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

function bubbleSortBasedOnObjectKeys(object) {
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
  tempRes.forEach((item) => {
    result.push(item.value);
  });

  return result;
}
function parseKey(key, PRECEDENCE) {
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

export function injectStyleInOrder(
  sortedStyleMap: any,
  executionTimeType: string
) {
  let injectedStyleIds = [] as any;
  let injectedMediaQueryStyleIds = [] as any;
  let injectedStateStyleIds = [] as any;
  // console.log(sortedStyleMap, 'sortedStyleMap');

  if (sortedStyleMap) {
    Object.keys(sortedStyleMap).forEach((level) => {
      let styleArray = sortedStyleMap[level];
      styleArray.forEach((style: any) => {
        let key = style['key'];
        let value = style['value'];
        let keyArr = key.split('/');
        let resolvedStyle = resolvedTokenization(value, config);

        function injectResolvedStyle(styleKeys: Array<any>) {
          let toBeInjectedStyle: any = {
            style: resolvedStyle,
          };

          styleKeys.forEach((styleKey) => {
            let styleIndex = keyArr.findIndex((item: any) =>
              item.includes(styleKey)
            );
            let styleValue = keyArr[styleIndex];

            if (styleKey === 'colorMode') {
              styleIndex = styleIndex + 1;
              let styleValue = keyArr[styleIndex];
              toBeInjectedStyle.colorMode = styleValue;
            }

            if (styleKey === 'mediaQuery') {
              let mediaQueryCondition = resolveTokensFromConfig(config, {
                condition: mediaQueries[styleValue],
              });
              toBeInjectedStyle.condition = mediaQueryCondition.condition;
            }
          });

          let { ids, rules } = Cssify.create({
            style: toBeInjectedStyle,
          });
          if (!injectedCssRuleIds[hash(rules.style + executionTimeType)]) {
            if (executionTimeType === 'runtime') {
              toBeInjectedCssRulesRuntime += rules.style;
            } else {
              toBeInjectedCssRulesBoottime += rules.style;
            }
            injectedCssRuleIds[hash(rules.style + executionTimeType)] = true;
          }

          let mediaQueryId = ids.style;
          injectedMediaQueryStyleIds.push({
            key,
            // @ts-ignore
            id: mediaQueryId,
            reference: { style: value, resolvedStyle },
          });

          // return ids;
        }

        // start-refactor

        if (key.includes('colorMode') && !key.includes('mediaQuery')) {
          // get color mode from key value
          injectResolvedStyle(['colorMode'], Cssify);
        } else if (key.includes('mediaQuery') && !key.includes('colorMode')) {
          injectResolvedStyle(['mediaQuery'], Cssify);
        } else if (key.includes('colorMode') && key.includes('mediaQuery')) {
          // Nested media query'
          injectResolvedStyle(['mediaQuery', 'colorMode'], Cssify);
        } else {
          if (key.includes('state')) {
            // console.log(resolvedStyle, 'mediaQuery');

            let { ids, rules } = Cssify.create(
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
            let { ids, rules } = Cssify.create(
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
            injectedStyleIds.push({
              key,
              // @ts-ignore
              id: ids.style,
              reference: { style: value, resolvedStyle },
            });
          }
        }
        // end-refactor
      });
    });
  }

  // console.log(
  //   // toBeInjectedCssRulesRuntime,
  //   `@media screen {${toBeInjectedCssRulesRuntime}}`,
  //   'toBeInjectedCssRules'
  // );
  return {
    style: injectedStyleIds,
    media: injectedMediaQueryStyleIds,
    state: injectedStateStyleIds,
  };
}

// --------------------------------- Traverse through sorted objects and inject style in order --------------------------------------

// ----------------------------------------------------- 5. Get style from ids ------------------------------------------------------

function mergeTwoArrays(arr1: any, arr2: any) {
  let mergedArray = [] as any;
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
      Object.keys(typeObj).forEach((typeKey) => {
        let idArr = typeObj[typeKey];
        if (!mergedMap[key][typeKey]) {
          mergedMap[key][typeKey] = [];
        }
        let mergedArr = mergeTwoArrays(mergedMap[key][typeKey], idArr);
        mergedMap[key][typeKey] = mergedArr;
      });
    });
  });
  return mergedMap;
}

export function getDefaultStyleFromIds(
  idsMap: any
  // variant: string,
  // size: any
) {
  let resultIds = { media: [], style: [], state: [] } as any;
  if (!idsMap) {
    return resultIds;
  }
  let baseStyleIds = idsMap.baseStyle;
  baseStyleIds.media.forEach((item: any) => {
    if (!item.key.includes('state')) {
      resultIds.media.push(item.id);
    }
  });
  baseStyleIds.style.forEach((item: any) => {
    if (!item.key.includes('state')) {
      resultIds.style.push(item.id);
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
  let resultIds = { media: [], style: [], state: [] } as any;
  if (!idsMap) {
    return resultIds;
  }
  let variantIds = idsMap.variants;
  let sizeIds = idsMap.sizes;
  if (variant && variantIds && variantIds.media && variantIds.style) {
    variantIds.media.forEach((item: any) => {
      let keyArr = item.key.split('/');
      let variantKey = keyArr[2];

      if (variantKey === variant) {
        if (!item.key.includes('state')) {
          resultIds.media.push(item.id);
        }
      }
    });
    variantIds.style.forEach((item: any) => {
      let keyArr = item.key.split('/');
      let variantKey = keyArr[2];
      if (variantKey === variant) {
        if (!item.key.includes('state')) {
          resultIds.style.push(item.id);
        }
      }
    });
    // console.log(idsMap, 'mergedIdsRuntimjkjheMap');
  }
  if (size && sizeIds && sizeIds.media && sizeIds.style) {
    sizeIds.media.forEach((item: any) => {
      let keyArr = item.key.split('/');
      let sizeKey = keyArr[2];
      if (sizeKey === size) {
        if (!item.key.includes('state')) {
          resultIds.media.push(item.id);
        }
      }
    });
    sizeIds.style.forEach((item: any) => {
      let keyArr = item.key.split('/');
      let sizeKey = keyArr[2];
      if (sizeKey === size) {
        if (!item.key.includes('state')) {
          resultIds.style.push(item.id);
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
  let resultIds = { media: [], style: [], state: [] } as any;
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
    baseStyleIds.style &&
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
          resultIds.state.push(item.id);
        }
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
          resultIds.media.push(item.id);
        }
      }
    });
    baseStyleIds.style.forEach((item: any) => {
      let keyArr = item.key.split('/');
      if (!item.key.includes('state')) {
        let availableStates = {} as any;
        keyArr.forEach((key: any, ind: number) => {
          if (key === 'state') {
            availableStates[keyArr[ind + 1]] = true;
          }
        });
        if (isSubArray(Object.keys(availableStates), activeStates)) {
          resultIds.style.push(item.id);
        }
      }
    });
  }
  if (
    variant &&
    variantIds &&
    variantIds.media &&
    variantIds.style &&
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
            resultIds.state.push(item.id);
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
            resultIds.media.push(item.id);
          }
        }
      }
    });
    variantIds.style.forEach((item: any) => {
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
            resultIds.style.push(item.id);
          }
        }
      }
    });
  }
  if (size && sizeIds && sizeIds.media && sizeIds.style && sizeIds.state) {
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
            resultIds.state.push(item.id);
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
            resultIds.media.push(item.id);
          }
        }
      }
    });
    sizeIds.style.forEach((item: any) => {
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
            resultIds.style.push(item.id);
          }
        }
      }
    });
  }
  return resultIds;
}

// ----------------------------------------------------- 5. Get style from ids ------------------------------------------------------

// ----------------------------------------------------- 6. Theme Boot Resolver -----------------------------------------------------

export function resolveThemeAndIdGenerator(theme: any, executionTimeType: any) {
  if (!theme) {
    return;
  }
  let stylePathMap = {} as any;

  stylePathMap = traverseThemeAndCreateMapOfPathForKeys(
    theme,
    '',
    stylePathMap
  );
  // console.log(stylePathMap, 'stylePathMap');

  let segregatedStyleMap = segregateStyleMapBasedOnFirstKey(stylePathMap);

  let levelBasedSegregatedStyleMaps =
    getLevelBasedSegregatedStyleMaps(segregatedStyleMap);

  let [allStylesWithoutReservedKeys, remainingStylesWithReservedKeys] =
    getAllStylesWithoutReservedKeys(levelBasedSegregatedStyleMaps);

  let [allStylesWithoutStateKeys, stylesWithStateKeys] =
    getAllStylesWithoutStateKeys(remainingStylesWithReservedKeys);

  // Sorting in order of precedence for baseStyle, variants and sizes of styles that no reserved keys like media query and color modes,states

  let sortedBasicStyleLevelForBaseStyle = sortObjectKeysBasedOnPrecedence(
    allStylesWithoutReservedKeys.baseStyle
  );

  let sortedBasicStyleLevelForVariants = sortObjectKeysBasedOnPrecedence(
    allStylesWithoutReservedKeys.variants
  );

  let sortedBasicStyleLevelForSizes = sortObjectKeysBasedOnPrecedence(
    allStylesWithoutReservedKeys.sizes
  );

  // Sorting in order of precedence for baseStyle, variants and sizes of styles that contains media query and color modes only

  let sortedMQCMStyleLevelForBaseStyle = sortObjectKeysBasedOnPrecedence(
    allStylesWithoutStateKeys.baseStyle
  );

  let sortedMQCMStyleLevelForVariants = sortObjectKeysBasedOnPrecedence(
    allStylesWithoutStateKeys.variants
  );

  let sortedMQCMStyleLevelForSizes = sortObjectKeysBasedOnPrecedence(
    allStylesWithoutStateKeys.sizes
  );

  // Sorting in order of precedence for baseStyle, variants and sizes of styles that contains states

  let sortedStateStyleLevelForBaseStyle = sortObjectKeysBasedOnPrecedence(
    stylesWithStateKeys.baseStyle
  );

  let sortedStateStyleLevelForVariants = sortObjectKeysBasedOnPrecedence(
    stylesWithStateKeys.variants
  );

  let sortedStateStyleLevelForSizes = sortObjectKeysBasedOnPrecedence(
    stylesWithStateKeys.sizes
  );
  // Injecting styles in order of precedence

  // Basic Style
  let sortedBasicStyleLevelForBaseStyleInjectedIds = injectStyleInOrder(
    sortedBasicStyleLevelForBaseStyle,
    executionTimeType
  );
  let sortedBasicStyleLevelForVariantsInjectedIds = injectStyleInOrder(
    sortedBasicStyleLevelForVariants,
    executionTimeType
  );
  let sortedBasicStyleLevelForSizesInjectedIds = injectStyleInOrder(
    sortedBasicStyleLevelForSizes,
    executionTimeType
  );

  // Media Query ColorMode
  let sortedMQCMStyleLevelForBaseStyleInjectedIds = injectStyleInOrder(
    sortedMQCMStyleLevelForBaseStyle,
    executionTimeType
  );
  let sortedMQCMStyleLevelForVariantsInjectedIds = injectStyleInOrder(
    sortedMQCMStyleLevelForVariants,
    executionTimeType
  );
  let sortedMQCMStyleLevelForSizesInjectedIds = injectStyleInOrder(
    sortedMQCMStyleLevelForSizes,
    executionTimeType
  );

  // States
  let sortedStateStyleLevelForBaseStyleInjectedIds = injectStyleInOrder(
    sortedStateStyleLevelForBaseStyle,
    executionTimeType
  );
  let sortedStateStyleLevelForVariantsInjectedIds = injectStyleInOrder(
    sortedStateStyleLevelForVariants,
    executionTimeType
  );
  let sortedStateStyleLevelForSizesInjectedIds = injectStyleInOrder(
    sortedStateStyleLevelForSizes,
    executionTimeType
  );

  // ______All styles injected_______________________________________

  let idsMap = {
    baseStyle: {
      basic: sortedBasicStyleLevelForBaseStyleInjectedIds,
      mqcm: sortedMQCMStyleLevelForBaseStyleInjectedIds,
      state: sortedStateStyleLevelForBaseStyleInjectedIds,
    },
    variants: {
      basic: sortedBasicStyleLevelForVariantsInjectedIds,
      mqcm: sortedMQCMStyleLevelForVariantsInjectedIds,
      state: sortedStateStyleLevelForVariantsInjectedIds,
    },
    sizes: {
      basic: sortedBasicStyleLevelForSizesInjectedIds,
      mqcm: sortedMQCMStyleLevelForSizesInjectedIds,
      state: sortedStateStyleLevelForSizesInjectedIds,
    },
  };

  let mergedIdsMap = mergeIdStyleMaps(idsMap);

  return mergedIdsMap;
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
