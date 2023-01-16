import createDeclarationBlock from '../utils/create-declaration-block';
import hash from '../hash';
import { deepClone, createCssRule, createQuery } from '../utils/common';

const createStyleSheet = (
  stylesObject: any,
  dataType: string = 'media',
  prefixColorMode: string = 'gs-'
) => {
  if (!stylesObject) return { ids: {}, styles: {}, fullStyles: {} };

  let ids = {} as any;
  let rules = {} as any;
  const cleanStyles = deepClone(stylesObject);

  Object.keys(stylesObject).map((key) => {
    if (!stylesObject?.[key]) return;

    let { condition, colorMode, style } = stylesObject[key];

    const mediaQuery = createQuery(condition);

    let finalColorMode =
      typeof colorMode === 'string' ? colorMode : condition?.colorMode;
    const colorSchemeQuery = createQuery(finalColorMode);

    const css = createDeclarationBlock(style);
    // console.log(css, style, 'css', mediaQuery, 'mediaQuery', colorSchemeQuery);

    const stringHash = `cssinjected-${hash(`${key}${css}`)}`;
    const rule = createCssRule(
      mediaQuery,
      colorSchemeQuery,
      finalColorMode,
      stringHash,
      css,
      dataType,
      prefixColorMode
    );

    // console.log('hello css object', colorSchemeQuery, css, rule);

    delete cleanStyles[key];

    ids = {
      ...ids,
      [key]: `${ids?.[key] ? ids[key] + ' ' : ''}${stringHash}`,
    };
    rules = {
      ...rules,
      [key]: rule,
    };
  });

  return { ids, rules, styles: cleanStyles, fullStyles: stylesObject };
};

export default createStyleSheet;
