import { Platform } from 'react-native';

export function generateStylePropsFromCSSIds(
  props: any,
  styleCSSIds: any,
  globalStyleMap: any
) {
  // for RN
  const styleObj: any = [];
  let styleCSSIdsString: any = '';

  if (Platform.OS !== 'web') {
    styleCSSIds.forEach((cssId: any) => {
      styleObj.push(globalStyleMap.get(cssId));
    });
  } else {
    styleCSSIdsString = styleCSSIds.join(' ');
  }

  return {
    dataSet: {
      ...props.dataSet,
      style: styleCSSIdsString,
    },
    style: [styleObj, props.style],
  };
}
