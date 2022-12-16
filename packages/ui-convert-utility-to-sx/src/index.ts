import { CSSPropertiesMap, reservedKeys } from './styled-system';
import { getObjectParentProperty, setObjectKeyValue } from './utils';

const createSxPropertyPath = (styledSystemProps: any, propsString: any) => {
  const sxPropPath = propsString.split('-');
  const genratedPath: any = [];
  let isInvalidProperty = false;

  if (sxPropPath) {
    sxPropPath.forEach((prop: any) => {
      if (isInvalidProperty) return;
      if (prop.startsWith('_') && styledSystemProps[prop]) {
        genratedPath.push('descendants', prop);
      } else if (styledSystemProps[prop]) {
        genratedPath.push('style', prop);
      } else {
        const parentProperty = getObjectParentProperty(reservedKeys, prop);
        // Check if the property is a valid styled system prop
        if (!parentProperty) {
          if (styledSystemProps[prop]) {
            genratedPath.push('style', prop);
          } else {
            isInvalidProperty = true;
            return;
          }
        } else {
          genratedPath.push(parentProperty, prop);
        }
      }
    });

    if (isInvalidProperty) return propsString;
    return genratedPath;
  }
};

export const convertUtilityPropsToSX = (
  aliases: any,
  descendants: any,
  componentProps: any
) => {
  const sxPropsConvertedObj: any = {};
  const ignoredProps: any = {};

  const styledSystemProps = {
    ...CSSPropertiesMap,
    ...aliases,
    ...descendants,
  };

  Object.keys(componentProps).forEach((prop) => {
    if (prop.includes('-')) {
      const path = createSxPropertyPath(styledSystemProps, prop);
      if (path !== prop) {
        setObjectKeyValue(sxPropsConvertedObj, path, componentProps[prop]);
      } else {
        ignoredProps[prop] = componentProps[prop];
      }
    } else if (styledSystemProps[prop]) {
      setObjectKeyValue(
        sxPropsConvertedObj,
        ['style', prop],
        componentProps[prop]
      );
    } else {
      ignoredProps[prop] = componentProps[prop];
    }
  });
  return { sxProps: sxPropsConvertedObj, ignoredProps: ignoredProps };
};
