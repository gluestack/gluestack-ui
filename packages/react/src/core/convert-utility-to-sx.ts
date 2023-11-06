import { setObjectKeyValue } from './../core/utils';
import { convertSxToSxVerbosed } from '../convertSxToSxVerbosed';
import { reservedKeys as _reservedKeys } from './styled-system';
import type { reservedKeyType } from './styled-system';

const getSxPropsPathFromProp = (
  propString: string,
  reservedKeys: Record<string, reservedKeyType>,
  descendants: any = []
) => {
  const propsPath = propString.split('-');
  let responsiveProp = '';
  let isInvalidPropString = false;

  const propToBeApplied = propsPath.pop();

  const gsConvertedPropsPath: Array<any> = [];

  propsPath.forEach((prop: string) => {
    if (reservedKeys[prop]) {
      const isMediaQuery = reservedKeys[prop]?.isMediaQuery;
      if (isMediaQuery) {
        if (!responsiveProp) {
          responsiveProp = reservedKeys[prop].key;
        } else {
          isInvalidPropString = true;
          console.warn(`${propString} is invalid property.`);
          return;
        }
      } else {
        gsConvertedPropsPath.push(reservedKeys[prop].key);
      }
    } else if (descendants.includes(prop)) {
      gsConvertedPropsPath.push(prop);
    } else {
      console.warn(`${propString} is invalid property.`);
      isInvalidPropString = true;
    }
  });

  if (!isInvalidPropString) {
    if (responsiveProp) {
      gsConvertedPropsPath.unshift(responsiveProp);
    }
    gsConvertedPropsPath.push(propToBeApplied);
  }

  return { propsPath: gsConvertedPropsPath, isInvalidPropString };
};

export const convertUtilityPropsToSX = (
  styledSystemProps: any,
  _descendants: any,
  componentProps: any,
  reservedKeys: Record<string, reservedKeyType> = _reservedKeys,
  descendants: any = []
) => {
  const sxPropsConvertedUtilityProps: any = {};
  const ignoredProps: any = {};

  if (Object.keys(componentProps).length === 0)
    return { sxProps: {}, mergedProps: {} };

  Object.keys(componentProps).forEach((prop) => {
    if (styledSystemProps[prop]) {
      sxPropsConvertedUtilityProps[prop] = componentProps[prop];
    } else {
      const componentPropValue = componentProps[prop];
      if (prop.startsWith('$')) {
        const reservedKey = prop.slice(1);
        if (reservedKeys[reservedKey]) {
          setObjectKeyValue(
            sxPropsConvertedUtilityProps,
            [reservedKeys[reservedKey].key],
            componentPropValue
          );
        } else if (descendants.includes(reservedKey)) {
          setObjectKeyValue(
            sxPropsConvertedUtilityProps,
            [reservedKey],
            componentPropValue
          );
        } else {
          // resolve ${{states/colormode/media}}-***
          const { propsPath: sxPropPath, isInvalidPropString } =
            getSxPropsPathFromProp(reservedKey, reservedKeys, descendants);

          if (!isInvalidPropString) {
            setObjectKeyValue(
              sxPropsConvertedUtilityProps,
              sxPropPath,
              componentPropValue
            );
          } else {
            ignoredProps[prop] = componentPropValue;
          }
        }
      } else {
        ignoredProps[prop] = componentPropValue;
      }
    }
  });

  const sxPropsConvertedUtilityPropsToVerboseSx = convertSxToSxVerbosed(
    sxPropsConvertedUtilityProps
  );

  return {
    sxProps: sxPropsConvertedUtilityPropsToVerboseSx,
    mergedProps: ignoredProps,
  };
};
