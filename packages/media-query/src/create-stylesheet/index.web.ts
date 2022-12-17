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
    const query = createQuery(stylesObject[key]?.condition);
    const css = createDeclarationBlock(stylesObject[key].style);
    const stringHash = `cssinjected-${hash(`${key}${css}`)}`;
    const rule = createCssRule(query, stringHash, css);
    console.log('Injector : query stylesheet', query, 'css stylesheet', rule);
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
