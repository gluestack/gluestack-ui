export const flattenTokens = (token: any) => {
  const flattenToken = {};
  Object.keys(token).forEach((key) => {
    const tokenObj = token[key];
    if (typeof tokenObj === 'object') {
      Object.keys(tokenObj).forEach((tokenKey) => {
        //@ts-ignore
        flattenToken[`${key}.${tokenKey}`] = tokenObj[tokenKey];
      });
    }
  });

  return flattenToken;
};
export const convertTheme = (theme: any = {}) => {
  const gluestackTheme: any = {
    tokens: {},
    aliases: {},
    components: {},
  };
  Object.keys(theme ?? {}).forEach((key) => {
    if (key === 'components') {
      gluestackTheme.components = theme[key];
    } else if (key === 'config') {
    } else {
      gluestackTheme.tokens[key] = flattenTokens(theme[key]);
    }
  });

  // console.log(gluestackTheme, 'gluestack theme');
  return gluestackTheme;
};

export function extendTheme(theme: any) {
  return theme;
}
