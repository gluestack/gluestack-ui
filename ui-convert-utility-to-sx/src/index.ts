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
  mediaQueries: any,
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
      const responsivePropIndex = prop.indexOf('-');
      if (
        mediaQueries &&
        mediaQueries[prop.substring(0, responsivePropIndex)]
      ) {
        const breakpointValue = prop.substring(0, responsivePropIndex);

        const utilityProp = prop.substring(responsivePropIndex + 1);
        const path = createSxPropertyPath(styledSystemProps, utilityProp);
        if (path !== utilityProp) {
          const sxResolvedResponsiveProp = setObjectKeyValue(
            {},
            path,
            componentProps[prop]
          );

          if (sxPropsConvertedObj.queries) {
            const existingBeakpointIndex =
              sxPropsConvertedObj?.queries?.findIndex(
                (data: any) => data.condition === `$${breakpointValue}`
              );

            if (existingBeakpointIndex !== -1) {
              setObjectKeyValue(
                sxPropsConvertedObj.queries[existingBeakpointIndex].value,
                path,
                componentProps[prop]
              );
            } else {
              sxPropsConvertedObj?.queries?.push({
                condition: `$${breakpointValue}`,
                value: sxResolvedResponsiveProp,
              });
            }
          } else {
            sxPropsConvertedObj.queries = [];
            sxPropsConvertedObj?.queries?.push({
              condition: `$${breakpointValue}`,
              value: sxResolvedResponsiveProp,
            });
          }
        } else {
          ignoredProps[prop] = componentProps[prop];
        }
      } else {
        const path = createSxPropertyPath(styledSystemProps, prop);
        if (path !== prop) {
          setObjectKeyValue(sxPropsConvertedObj, path, componentProps[prop]);
        } else {
          ignoredProps[prop] = componentProps[prop];
        }
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
