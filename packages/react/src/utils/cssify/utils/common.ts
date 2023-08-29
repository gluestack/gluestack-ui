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
  themeCss: any
) => {
  const dataMediaSelector = `[data-${dataType}~="${stringHash}"]`;
  const stateRulePrefix = hasState ? '.gs' : '';
  const inlineRulePrefix = prefixClassName ? `.${prefixClassName}` : '';
  const colorModeRulePrefix = prefixColorMode
    ? `.${prefixColorMode}${colorMode}`
    : '';

  const inlineAndStatePrefix = `${inlineRulePrefix}${stateRulePrefix}`;
  let rule = '';
  if (isMedia(mediaQuery) && isColorScheme(colorSchemeQuery)) {
    rule = `${mediaQuery} {${inlineAndStatePrefix}${colorModeRulePrefix} ${dataMediaSelector} ${css}}`;
  } else if (isMedia(mediaQuery)) {
    rule = `${mediaQuery} {${inlineAndStatePrefix} ${dataMediaSelector} ${css}}`;
  } else if (isColorScheme(colorSchemeQuery)) {
    console.log(
      '>>><<<',
      colorModeRulePrefix,
      css,
      themeCondition,
      '>>><<<',
      // rule,
      // JSON.stringify(colorModeRulePrefix),
      // inlineAndStatePrefix,
      dataMediaSelector,
      mediaQuery,
      `${inlineAndStatePrefix}${colorModeRulePrefix} ${dataMediaSelector} ${css}`
      // inlineRulePrefix
      // `${colorModeRulePrefix}${inlineAndStatePrefix} [data-theme-id~="${themeName}"] ${dataMediaSelector} ${css}`
    );
    rule = `${inlineAndStatePrefix}${colorModeRulePrefix} ${dataMediaSelector} ${css}`;
  }
  // else if(themeCondition) {

  //   rule = `${inlineAndStatePrefix} ${dataMediaSelector}${mediaQuery} ${css}`;
  // }
  else {
    rule = `${inlineAndStatePrefix}${
      Object.keys(themeCondition).length === 0 ? inlineAndStatePrefix : ''
    } ${dataMediaSelector}${mediaQuery} ${css}`;
  }
  //   //         `[data-theme-id~="${themeName}"] ${dataMediaSelector} ${themeCss[themeName]}
  //   // ${inlineAndStatePrefix} [data-theme-id~="${themeName}"] ${dataMediaSelector} ${themeCss[themeName]}
  //   // .gs-dark ${inlineAndStatePrefix} [data-theme-id~="${themeName}"] ${dataMediaSelector} ${themeCss[themeName]}
  //   // .gs-light ${inlineAndStatePrefix} [data-theme-id~="${themeName}"] ${dataMediaSelector} ${themeCss[themeName]}
  //   // .gs-dark${inlineAndStatePrefix} [data-theme-id~="${themeName}"] ${dataMediaSelector} ${css}
  //   // .gs-light${inlineAndStatePrefix} [data-theme-id~="${themeName}"] ${dataMediaSelector} ${css}
  //   //  `
  // );

  if (themeCondition) {
    // if (themeCondition) {

    const themeConditionString = Object.keys(themeCondition)
      .map((themeName) => {
        // console.log(
        //   '>>><<<',
        //   css,
        //   JSON.stringify(colorModeRulePrefix),
        //   inlineAndStatePrefix
        //   // `${colorModeRulePrefix}${inlineAndStatePrefix} [data-theme-id~="${themeName}"] ${dataMediaSelector} ${themeCss[themeName]}`
        // );
        return `
        [data-theme-id~="${themeName}"] ${dataMediaSelector} ${themeCss[themeName]}
        ${inlineAndStatePrefix} [data-theme-id~="${themeName}"] ${dataMediaSelector} ${themeCss[themeName]}
        ${colorModeRulePrefix}${inlineAndStatePrefix} [data-theme-id~="${themeName}"] ${dataMediaSelector} ${themeCss[themeName]}
        `;
      })
      .join('\n');
    // .gs-dark  [data-theme-id~="${themeName}"] ${dataMediaSelector} ${themeCss[themeName]}
    // .gs-light [data-theme-id~="${themeName}"] ${dataMediaSelector} ${themeCss[themeName]}
    // .gs-dark${inlineAndStatePrefix} [data-theme-id~="${themeName}"] ${dataMediaSelector} ${css}
    // .gs-light${inlineAndStatePrefix} [data-theme-id~="${themeName}"] ${dataMediaSelector} ${css}
    // }
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
