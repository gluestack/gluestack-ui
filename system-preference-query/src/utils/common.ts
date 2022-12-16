const isMedia = (query: string) => query.indexOf('@media') === 0;
const isColorScheme = (query: string) => query.includes('color-scheme');
const isPseudo = (query: string) => query.indexOf(':') === 0;
const isMediaOrPseudo = (query: string) => isMedia(query) || isPseudo(query);

const deepClone = (obj: any) => JSON.parse(JSON.stringify(obj));

const createCssRule = (
  mediaQuery: string,
  colorSchemeQuery: string,
  colorMode: string,
  stringHash: string,
  css: string
) => {
  let rule;
  const dataMediaSelector = `[data-media~="${stringHash}"]`;
  if (isMedia(mediaQuery)) {
    if (isColorScheme(colorSchemeQuery)) {
      rule = `${mediaQuery} {${colorSchemeQuery} {${dataMediaSelector} ${css}} .${colorMode} ${dataMediaSelector} ${css}}`;
    }
  } else {
    rule = `${dataMediaSelector}${mediaQuery} ${css}`;
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

export {
  isMedia,
  isPseudo,
  isMediaOrPseudo,
  deepClone,
  createCssRule,
  createQuery,
};
