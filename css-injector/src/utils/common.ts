const isMedia = (query: string) => query.indexOf('@media') === 0;
const isPseudo = (query: string) => query.indexOf(':') === 0;
const isMediaOrPseudo = (query: string) => isMedia(query) || isPseudo(query);

const deepClone = (obj: Object) => JSON.parse(JSON.stringify(obj));

const createCssRule = (stringHash: string, css: any, dataSetKey: any) => {
  let rule;
  const dataMediaSelector = `[data-${dataSetKey}~="${stringHash}"]`;
  rule = `${dataMediaSelector} ${css}`;
  return rule;
};

export { isMedia, isPseudo, isMediaOrPseudo, deepClone, createCssRule };
