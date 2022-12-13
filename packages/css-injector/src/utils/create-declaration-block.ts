// @ts-nocheck
import createReactDOMStyle from 'react-native-web/dist/exports/StyleSheet/compiler/createReactDOMStyle';
import prefixStyles from 'react-native-web/dist/modules/prefixStyles';
import hyphenateStyleName from './hyphenate-style-name';
import { preprocess } from './preprocess';

const createDeclarationBlock: any = (style: any) => {
  const domStyle = prefixStyles(createReactDOMStyle(preprocess(style)));
  // console.log("WEB", domStyle);
  const declarationsString = Object.keys(domStyle)
    .map((property) => {
      const value = domStyle[property];
      const prop = hyphenateStyleName(property);
      if (Array.isArray(value)) {
        return value.map((v) => `${prop}:${v}`).join(';');
      } else {
        return `${prop}:${value} !important`;
      }
    })
    .sort()
    .join(';');
  // console.log(`{${declarationsString};}`);
  return `{${declarationsString};}`;
};

export default createDeclarationBlock;
