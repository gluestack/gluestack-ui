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
    } else if (prop.startsWith('_') || descendants.includes(prop)) {
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

export const checkAndReturnUtilityProp = (
  prop: string,
  propValue: any,
  styledSystemProps: any,
  descendants: any,
  reservedKeys: Record<string, reservedKeyType>
) => {
  if (styledSystemProps[prop]) {
    return { propPath: [prop], value: propValue };
  } else {
    if (prop.startsWith('$')) {
      const reservedKey = prop.slice(1);
      if (reservedKeys[reservedKey]) {
        return {
          propPath: [reservedKeys[reservedKey].key],
          value: propValue,
        };
      } else if (descendants.includes(reservedKey)) {
        return {
          propPath: [reservedKey],
          value: propValue,
        };
      } else {
        // resolve ${{states/colormode/media}}-***
        const { propsPath: sxPropPath, isInvalidPropString } =
          getSxPropsPathFromProp(reservedKey, reservedKeys, descendants);

        if (!isInvalidPropString) {
          return {
            propPath: sxPropPath,
            value: propValue,
          };
        }
      }
    }
  }

  return {
    prop: prop,
    value: propValue,
  };
};

export const convertUtilityPropsToSX = (
  styledSystemProps: any,
  descendants: any,
  componentProps: any,
  reservedKeys: Record<string, reservedKeyType> = _reservedKeys
) => {
  const sxPropsConvertedUtilityProps: any = {};
  const ignoredProps: any = {};

  if (Object.keys(componentProps).length === 0)
    return { sxProps: {}, mergedProps: {} };

  Object.keys(componentProps).forEach((prop) => {
    const {
      prop: propString,
      propPath,
      value: propValue,
    } = checkAndReturnUtilityProp(
      prop,
      componentProps[prop],
      styledSystemProps,
      descendants,
      reservedKeys
    );

    if (propString) {
      ignoredProps[prop] = propValue;
    } else {
      if (propPath && propPath.length > 0) {
        setObjectKeyValue(sxPropsConvertedUtilityProps, propPath, propValue);
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
