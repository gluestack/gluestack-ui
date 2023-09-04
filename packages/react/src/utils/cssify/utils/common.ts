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

const createCssRule = (
  mediaQuery: string,
  colorSchemeQuery: string,
  colorMode: string,
  stringHash: string,
  css: string,
  dataType: string,
  prefixClassName: string,
  prefixColorMode: string,
  hasState: boolean,
  themeCondition: any,
  themeCssObj: any
) => {
  const dataMediaSelector = `[data-${dataType}~="${stringHash}"]`;
  const stateRulePrefix = hasState ? '.gs' : '';
  const inlineRulePrefix = prefixClassName ? `.${prefixClassName}` : '';
  const colorModeRulePrefix =
    prefixColorMode && colorMode ? `.${prefixColorMode}${colorMode}` : '';
  const mediaQueryPrefix = `.gs`;

  const inlineAndStatePrefix = `${inlineRulePrefix}${stateRulePrefix}`;
  let rule = ``;
  if (isMedia(mediaQuery) && isColorScheme(colorSchemeQuery)) {
    rule = `${mediaQuery} {${mediaQueryPrefix}${inlineAndStatePrefix}${colorModeRulePrefix} ${dataMediaSelector} ${css}}`;
  } else if (isMedia(mediaQuery)) {
    rule = `${mediaQuery} {${mediaQueryPrefix}${inlineAndStatePrefix} ${dataMediaSelector} ${css}}`;
  } else if (isColorScheme(colorSchemeQuery)) {
    rule = `${inlineAndStatePrefix}${colorModeRulePrefix} ${dataMediaSelector} ${css}`;
  } else {
    rule = `${inlineAndStatePrefix} ${dataMediaSelector}${mediaQuery} ${css}`;
  }

  if (themeCondition) {
    const themeConditionString = Object.keys(themeCondition)
      .map((themeName) => {
        return `
        [data-theme-id~="${themeName}"] ${dataMediaSelector} ${themeCssObj[themeName]}
        ${inlineAndStatePrefix} [data-theme-id~="${themeName}"] ${dataMediaSelector} ${themeCssObj[themeName]}
        ${colorModeRulePrefix}${inlineAndStatePrefix} [data-theme-id~="${themeName}"] ${dataMediaSelector} ${themeCssObj[themeName]}
        `;
      })
      .join('\n');
    // themeCondition is of higher specificity than the rest of the rules
    rule = ` \n${themeConditionString}\n ${rule} `;
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
  const { minWidth, maxWidth, colorMode } = condition;

  if (minWidth && maxWidth) {
    return `@media screen and (min-width: ${minWidth}px) and (max-width: ${maxWidth}px)`;
  }

  if (minWidth) {
    return `@media screen and (min-width: ${minWidth}px)`;
  }

  if (maxWidth) {
    return `@media screen and (max-width: ${maxWidth}px)`;
  }
  if (colorMode) {
    return `@media (prefers-color-scheme: ${colorMode})`;
  }

  return '';
}

export { deepClone, createCssRule, createQuery };
