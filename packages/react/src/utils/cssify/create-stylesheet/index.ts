import createDeclarationBlock from '../utils/create-declaration-block';
import { deepClone, createCssRule, createQuery } from '../utils/common';

const createStyleSheet = (
  stylesObject: any,
  dataHash: string = 'media',
  prefixClassName: string = '',
  hasState: boolean = false,
  prefixColorMode: string = 'gs-'
) => {
  if (!stylesObject) return { ids: {}, styles: {}, fullStyles: {} };

  let ids = {} as any;
  let rules = {} as any;
  const cleanStyles = deepClone(stylesObject);

  Object.keys(stylesObject).map((key) => {
    if (!stylesObject?.[key]) return;

    let { condition, colorMode, style, themeCondition } = stylesObject[key];

    const mediaQuery = createQuery(condition);

    let finalColorMode =
      typeof colorMode === 'string' ? colorMode : condition?.colorMode;
    const colorSchemeQuery = createQuery(finalColorMode);

    const css = createDeclarationBlock(style);

    const themeCssObj = {} as any;
    if (themeCondition) {
      Object.keys(themeCondition).forEach((themeName) => {
        const themeConditionValue = themeCondition[themeName];
        themeCssObj[themeName] = createDeclarationBlock(themeConditionValue);
      });
    }
    // console.log(css, style, 'css', mediaQuery, 'mediaQuery', colorSchemeQuery);

    // const stringHash = `cssinjected-${hash(`${key}${css}`)}`;

    const rule = createCssRule(
      mediaQuery,
      colorSchemeQuery,
      finalColorMode,
      dataHash,
      css,
      'style',
      prefixClassName,
      prefixColorMode,
      hasState,
      themeCondition,
      themeCssObj
    );

    delete cleanStyles[key];

    ids = {
      ...ids,
      [key]: `${ids?.[key] ? ids[key] + ' ' : ''}${dataHash}`,
    };
    rules = {
      ...rules,
      [key]: rule,
    };
  });
  // console.log(rules, 'ids here');

  return { ids, rules, styles: cleanStyles, fullStyles: stylesObject };
};

export default createStyleSheet;
