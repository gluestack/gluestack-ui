// https://github.com/necolas/react-native-web/blob/master/packages/react-native-web/src/exports/StyleSheet/flattenStyle.js
function flattenStyle(style: any) {
  if (!style) {
    return undefined;
  }

  if (!Array.isArray(style)) {
    return style;
  }

  const result = {} as any;
  for (let i = 0, styleLength = style.length; i < styleLength; ++i) {
    const computedStyle = flattenStyle(style[i]);
    if (computedStyle) {
      for (const key in computedStyle) {
        const value = computedStyle[key];
        result[key] = value;
      }
    }
  }
  return result;
}

export default flattenStyle;
