import { addCss } from '../utils/inject';
import createDeclarationBlock from '../utils/create-declaration-block';
import hash from '../hash';
import { deepClone, createCssRule, createQuery } from '../utils/common';

const createStyleSheet = (stylesObject: any) => {
  if (!stylesObject) return { ids: {}, styles: {}, fullStyles: {} };

  let ids = {} as any;
  const cleanStyles = deepClone(stylesObject);

  Object.keys(stylesObject).map((key) => {
    if (!stylesObject?.[key]) return;
    const mediaQuery = createQuery(stylesObject[key]?.condition);
    let colorMode =
      typeof stylesObject[key]?.colorMode === 'string'
        ? stylesObject[key]?.colorMode
        : stylesObject[key]?.condition?.colorMode;
    const colorSchemeQuery = createQuery(stylesObject[key]?.colorMode);
    console.log('colorSchemeQuery', colorSchemeQuery);

    const css = createDeclarationBlock(stylesObject[key].style);
    const stringHash = `cssinjected-${hash(`${key}${css}`)}`;
    const rule = createCssRule(
      mediaQuery,
      colorSchemeQuery,
      colorMode,
      stringHash,
      css
    );
    console.log('Injected rule =>', rule);

    addCss(`${stringHash}`, rule);
    delete cleanStyles[key];

    ids = {
      ...ids,
      [key]: `${ids?.[key] ? ids[key] + ' ' : ''}${stringHash}`,
    };
  });

  return { ids, styles: cleanStyles, fullStyles: stylesObject };
};

export default createStyleSheet;
