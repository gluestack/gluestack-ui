import createDeclarationBlock from '../utils/create-declaration-block';
import { deepClone, createCssRule, createQuery } from '../utils/common';

const createStyleSheet = (
  stylesObject: any,
  dataHash: string = 'media',
  prefixClassName: string = '',
  hasState: boolean = false,
  prefixTheme: string = 'gs-'
) => {
  if (!stylesObject) return { ids: {}, styles: {}, fullStyles: {} };

  let ids = {} as any;
  let rules = {} as any;
  const cleanStyles = deepClone(stylesObject);

  Object.keys(stylesObject).map((key) => {
    if (!stylesObject?.[key]) return;

    let { condition, theme, style, themeCondition, activeThemeData } =
      stylesObject[key];

    const mediaQuery = createQuery(condition);
    let finalTheme = typeof theme === 'string' ? theme : condition?.theme;
    const colorSchemeQuery = createQuery(finalTheme);

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
      finalTheme,
      dataHash,
      css,
      'style',
      prefixClassName,
      prefixTheme,
      hasState,
      themeCondition,
      themeCssObj,
      activeThemeData
    );

    delete cleanStyles[key];

    ids = {
      ...ids,
      [key]: `${ids?.[key] ? ids[key] + ' ' : ''}${dataHash}`,
    };
    if (rule !== '') {
      rules = {
        ...rules,
        [key]: rule,
      };
    }
  });
  // console.log(rules, 'ids here');

  return { ids, rules, styles: cleanStyles, fullStyles: stylesObject };
};

export default createStyleSheet;
