import { addCss } from '../utils/inject';
import createDeclarationBlock from '../../cssify/utils/create-declaration-block';
import hash from '../hash';
import { deepClone, createCssRule } from '../utils/common';

const createStyleSheet = (stylesObject: any, dataSetKey: string = 'media') => {
  if (!stylesObject) return { ids: {}, styles: {}, fullStyles: {} };

  let ids = {} as any;
  const cleanStyles = deepClone(stylesObject);

  Object.keys(stylesObject).map((key) => {
    if (!stylesObject?.[key]) return;
    const css = createDeclarationBlock(stylesObject[key]);
    const stringHash = `cssinjected-${hash(`${key}${css}`)}`;
    const rule = createCssRule(stringHash, css, dataSetKey);

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
