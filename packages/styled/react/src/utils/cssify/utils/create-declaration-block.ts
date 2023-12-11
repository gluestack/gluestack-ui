// @ts-nocheck
import createReactDOMStyle from './react-native-web/createReactDOMStyle';
import prefixStyles from './react-native-web/prefixStyles';
import hyphenateStyleName from './react-native-web/hyphenate-style-name';
import { preprocess } from './react-native-web/preprocess';

function orderStyleObjectBySpecificity(obj) {
  //TODO: add specificity for border
  const SPREAD_PROP_SPECIFICITY_ORDER = [
    'padding',
    'paddingHorizontal',
    'paddingVertical',
    'paddingTop',
    'paddingBottom',
    'paddingLeft',
    'paddingRight',
    'margin',
    'marginHorizontal',
    'marginVertical',
    'marginTop',
    'marginBottom',
    'marginLeft',
    'marginRight',
    'borderWidth',
    'borderBottomWidth',
    'borderLeftWidth',
    'borderRightWidth',
    'borderTopWidth',
    'borderRadius',
    'borderTopLeftRadius',
    'borderTopRightRadius',
    'borderBottomLeftRadius',
    'borderBottomRightRadius',
  ];

  const orderedArr = [];
  SPREAD_PROP_SPECIFICITY_ORDER.forEach((key) => {
    if (obj.hasOwnProperty(key)) {
      orderedArr.push([key, obj[key]]);
      delete obj[key];
    }
  });

  const remainingKeys = Object.keys(obj);
  remainingKeys.forEach((key) => {
    orderedArr.push([key, obj[key]]);
  });

  return orderedArr;
}

const createDeclarationBlock: any = (style: any) => {
  const domStyle = prefixStyles(createReactDOMStyle(preprocess(style)));
  const orderedDomStyle = orderStyleObjectBySpecificity(domStyle);

  const declarationsString = orderedDomStyle
    .map((property) => {
      const value = property[1];
      const prop = hyphenateStyleName(property[0]);
      if (Array.isArray(value)) {
        return value.map((v) => `${prop}:${v}`).join(';');
      } else {
        return `${prop}:${value}`;
      }
    })
    .join(';');
  return `{${declarationsString};}`;
};

export default createDeclarationBlock;
