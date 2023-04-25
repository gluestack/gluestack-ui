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
  prefixColorMode: string
) => {
  let rule;
  const dataMediaSelector = `[data-${dataType}~="${stringHash}"]`;

  if (isMedia(mediaQuery) && isColorScheme(colorSchemeQuery)) {
    // rule = `${mediaQuery} {${colorSchemeQuery} {${dataMediaSelector} ${css}} .${prefixColorMode}${colorMode} ${dataMediaSelector} ${css}}`;
    rule = prefixClassName
      ? `${mediaQuery} {.${prefixClassName}.${prefixColorMode}${colorMode} ${dataMediaSelector} ${css}}`
      : `${mediaQuery} {.${prefixColorMode}${colorMode} ${dataMediaSelector} ${css}}`;
  } else if (isMedia(mediaQuery)) {
    rule = prefixClassName
      ? `${mediaQuery} {.${prefixClassName} ${dataMediaSelector} ${css}}`
      : `${mediaQuery} {${dataMediaSelector} ${css}}`;
  } else if (isColorScheme(colorSchemeQuery)) {
    // rule = `${colorSchemeQuery} {${dataMediaSelector} ${css}} .${prefixColorMode}${colorMode} ${dataMediaSelector} ${css}`;
    rule = prefixClassName
      ? `.${prefixClassName}.${prefixColorMode}${colorMode} ${dataMediaSelector} ${css}`
      : `.${prefixColorMode}${colorMode} ${dataMediaSelector} ${css}`;
  } else {
    rule = prefixClassName
      ? `.${prefixClassName} ${dataMediaSelector}${mediaQuery} ${css}`
      : `${dataMediaSelector}${mediaQuery} ${css}`;
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
