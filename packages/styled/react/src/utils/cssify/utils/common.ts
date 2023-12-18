// const isMedia = (query: string) => query.indexOf('@media') === 0;
// const isColorScheme = (query: string) => query.includes('color-scheme');

// const deepClone = (obj: any) => JSON.parse(JSON.stringify(obj));

// const createCssRule = (
//   mediaQuery: string,
//   colorSchemeQuery: string,
//   colorMode: string,
//   stringHash: string,
//   css: string,
//   dataType: string,
//   prefixClassName: string,
//   prefixColorMode: string,
//   hasState: boolean,
//   // themeCondition: any,
//   // themeCssObj: any
// ) => {
//   const dataMediaSelector = `[data-${dataType}~="${stringHash}"]`;
//   const stateRulePrefix = hasState ? '.gs' : '';
//   const inlineRulePrefix = prefixClassName ? `.${prefixClassName}` : '';
//   const colorModeRulePrefix = prefixColorMode
//     ? `.${prefixColorMode}${colorMode}`
//     : '';

//   const inlineAndStatePrefix = `${inlineRulePrefix}${stateRulePrefix}`;
//   let rule = '';
//   if (isMedia(mediaQuery) && isColorScheme(colorSchemeQuery)) {
//     rule = `${mediaQuery} {${inlineAndStatePrefix}${colorModeRulePrefix} ${dataMediaSelector} ${css}}`;
//   } else if (isMedia(mediaQuery)) {
//     rule = `${mediaQuery} {${inlineAndStatePrefix} ${dataMediaSelector} ${css}}`;
//   } else if (isColorScheme(colorSchemeQuery)) {
//     rule = `${inlineAndStatePrefix}${colorModeRulePrefix} ${dataMediaSelector} ${css}`;
//   } else {
//     rule = `${inlineAndStatePrefix}${
//       themeCondition && Object.keys(themeCondition).length === 0
//         ? inlineAndStatePrefix
//         : ''
//     } ${dataMediaSelector}${mediaQuery} ${css}`;
//   }

//   if (themeCondition) {
//     const themeConditionString = Object.keys(themeCondition)
//       .map((themeName) => {
//         return `
//         [data-theme-id~="${themeName}"] ${dataMediaSelector} ${themeCssObj[themeName]}
//         ${inlineAndStatePrefix} [data-theme-id~="${themeName}"] ${dataMediaSelector} ${themeCssObj[themeName]}
//         ${colorModeRulePrefix}${inlineAndStatePrefix} [data-theme-id~="${themeName}"] ${dataMediaSelector} ${themeCssObj[themeName]}
//         `;
//       })
//       .join('\n');
//     // themeCondition is of higher specificity than the rest of the rules
//     rule = ` \n${themeConditionString}\n ${rule} `;
//   }

//   return rule;
// };

// function createQuery(condition: any) {
//   if (!condition) return '';
//   if (typeof condition === 'string' && isMedia(condition)) {
//     return condition;
//   }

//   if (typeof condition === 'string') {
//     return `@media (prefers-color-scheme: ${condition})`;
//   }
//   const { minWidth, maxWidth, colorMode } = condition;

//   if (minWidth && maxWidth) {
//     return `@media screen and (min-width: ${minWidth}px) and (max-width: ${maxWidth}px)`;
//   }

//   if (minWidth) {
//     return `@media screen and (min-width: ${minWidth}px)`;
//   }

//   if (maxWidth) {
//     return `@media screen and (max-width: ${maxWidth}px)`;
//   }
//   if (colorMode) {
//     return `@media (prefers-color-scheme: ${colorMode})`;
//   }

//   return '';
// }

// export { deepClone, createCssRule, createQuery };

// Reverting to non theme support

const isMedia = (query: string) => query.indexOf('@media') === 0;
const isColorScheme = (query: string) => query.includes('color-scheme');

const deepClone = (obj: any) => JSON.parse(JSON.stringify(obj));
// function isThemeActiveCondition(
//   activeTheme: string | string[],
//   themeCondition: any
// ) {
//   let output = false;
//   Object.keys(themeCondition ?? {}).forEach((theme) => {
//     if (activeTheme.includes(theme)) {
//       output = true;
//     }
//   });
//   // console.log('output =====>>>>>> ', output);
//   return output;
// }
// function areArraysSimilar(arr1: string[], arr2: string[]) {
//   // Check if arrays have the same length
//   if (!arr1 || !arr2) {
//     return false;
//   }
//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   // Compare each element
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }

//   // Arrays are similar
//   return true;
// }
// function generateSubarrays(arr: string[]): string[][] {
//   const result: string[][] = [];

//   for (let i = 0; i < 1 << arr.length; i++) {
//     const subarray: string[] = [];

//     for (let j = 0; j < arr.length; j++) {
//       if ((i & (1 << j)) !== 0) {
//         subarray.push(arr[j]);
//       }
//     }

//     result.push(subarray);
//   }

//   return result;
// }
// function isThemeActiveValid(
//   activeTheme: string = '',
//   themeConditionPath: string[]
// ) {
//   let activeThemeArray = activeTheme.split('.');
//   // console.log(
//   //   'generateSubarrays',
//   //   generateSubarrays(activeThemeArray),
//   //   themeConditionPath,
//   //   generateSubarrays(activeThemeArray).filter((subArr) => {
//   //     return areArraysSimilar(subArr, themeConditionPath);
//   //   })
//   // );
//   if (
//     generateSubarrays(activeThemeArray).filter((subArr) => {
//       return areArraysSimilar(subArr, themeConditionPath);
//     }).length
//   ) {
//     return true;
//   }
//   return false;
//   // for(let i=0;i<activeThemeArray.length;i++){
//   //   for(let j=0;j<themeConditionPath.length;j++){
//   //     if(activeThemeArray[i] === themeConditionPath[j]){
//   //       return true;
//   //     }
//   //   }
//   // }
//   // if (
//   //   !themeConditionPath ||
//   //   activeThemeArray.length < themeConditionPath.length
//   // ) {
//   //   return false;
//   // }
//   // themeConditionPath.forEach((theme, index) => {
//   //   if (activeThemeArray[index] !== theme) {
//   //     output = false;
//   //   }
//   // });
//   // return output;
// }
// function getInlineAndStatePrefixAccordingToTheme(
//   prefix: string,
//   activeThemePath: string
// ) {
//   if (!activeThemePath) {
//     return prefix;
//   }
//   return activeThemePath
//     .split('.')
//     .map((_themeName: string) => prefix)
//     .join('');
// }
const createCssRule = (
  mediaQuery: string,
  colorSchemeQuery: string,
  theme: string,
  stringHash: string,
  css: string,
  dataType: string,
  prefixClassName: string,
  prefixtheme: string,
  hasState: boolean,
  themeCondition: any,
  themeCssObj: any,
  _activeThemeData?: any
) => {
  if (css == '{;}') {
    return '';
  }
  const finalNestedTheme = theme?.split('.');
  const dataMediaSelector = `[data-${dataType}~="${stringHash}"]`;
  const stateRulePrefix = hasState ? '.gs' : '';
  const inlineRulePrefix = prefixClassName ? `.${prefixClassName}` : '';
  const themeRulePrefix =
    prefixtheme && finalNestedTheme
      ? finalNestedTheme
          .map((themeName) => `[data-theme-id~="${themeName}"]`)
          .pop()
      : '';
  const mediaQueryPrefix = `.gs`;

  const inlineAndStatePrefix = `${inlineRulePrefix}${stateRulePrefix}`;
  let rule = ``;
  if (
    isMedia(mediaQuery) &&
    isColorScheme(colorSchemeQuery)
    // &&
    // !(themeCondition && Object.keys(themeCondition).length)
  ) {
    rule = `${mediaQuery} {${mediaQueryPrefix}${inlineAndStatePrefix}${themeRulePrefix} ${dataMediaSelector} ${css}}\n\n${mediaQuery} {${mediaQueryPrefix}${inlineAndStatePrefix} ${themeRulePrefix} ${dataMediaSelector} ${css}}`;
  } else if (
    isMedia(mediaQuery)
    // &&
    // !(themeCondition && Object.keys(themeCondition).length)
  ) {
    rule = `${mediaQuery} {${mediaQueryPrefix}${inlineAndStatePrefix}${themeRulePrefix} ${dataMediaSelector} ${css}}\n\n${mediaQuery} {${mediaQueryPrefix}${inlineAndStatePrefix} ${themeRulePrefix} ${dataMediaSelector} ${css}}`;
  } else if (isColorScheme(colorSchemeQuery)) {
    rule = ` ${inlineAndStatePrefix} ${themeRulePrefix} ${dataMediaSelector} ${css}`;
  } else {
    rule = `${inlineAndStatePrefix} ${dataMediaSelector}${mediaQuery} ${css}`;
  }

  if (themeCondition && Object.keys(themeCondition).length) {
    let themeConditionDataString = finalNestedTheme
      ?.map((themeName) => `[data-theme-id~="${themeName}"]`)
      .pop();
    const themeConditionString = Object.keys(themeCondition)
      ?.map((themeName) => {
        return `
        ${themeConditionDataString ?? ''} ${dataMediaSelector} ${
          themeCssObj[themeName] ?? {}
        }
        
        ${inlineAndStatePrefix} ${
          themeConditionDataString ?? ''
        } ${dataMediaSelector} ${themeCssObj[themeName] ?? {}}

        ${themeRulePrefix}${inlineAndStatePrefix} ${dataMediaSelector} ${
          themeCssObj[themeName] ?? {}
        }
        `;
      })
      .join('\n');
    // themeCondition is of higher specificity than the rest of the rules
    rule = ` \n${rule}\n 
      ${themeConditionString ?? ''}\n 
      `;

    if (isMedia(mediaQuery)) {
      rule = `\n\n${mediaQuery} {${rule}}\n`;
    }
  }
  return rule;
};

function createQuery(condition: any) {
  if (!condition) return '';
  if (typeof condition === 'string' && isMedia(condition)) {
    return condition;
  }

  if (typeof condition === 'string') {
    return `@media (prefers-color-scheme: ${condition})`;
  }
  const { minWidth, maxWidth, theme } = condition;

  if (minWidth && maxWidth) {
    return `@media screen and (min-width: ${minWidth}px) and (max-width: ${maxWidth}px)`;
  }

  if (minWidth) {
    return `@media screen and (min-width: ${minWidth}px)`;
  }

  if (maxWidth) {
    return `@media screen and (max-width: ${maxWidth}px)`;
  }
  if (theme) {
    return `@media (prefers-color-scheme: ${theme})`;
  }

  return '';
}

export { deepClone, createCssRule, createQuery };
