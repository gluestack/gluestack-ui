import { convertSxToSxVerbosed } from '../convertSxToSxVerbosed';
import { reservedKeys as _reservedKeys } from './styled-system';
import { deepMerge, getObjectParentProperty } from './utils';
import { setObjectKeyValue } from './utils';

// const resolveResponsiveProps = (
//   sxPropsConvertedObj: any,
//   responsiveProp: any,
//   path: any,
//   prop: any,
//   componentProps: any
// ) => {
//   const sxResolvedResponsiveProp = setObjectKeyValue(
//     {},
//     path,
//     componentProps[prop]
//   );

//   if (sxPropsConvertedObj.queries) {
//     const existingBeakpointIndex = sxPropsConvertedObj?.queries?.findIndex(
//       (data: any) => data.condition === `$${responsiveProp}`
//     );

//     if (existingBeakpointIndex !== -1) {
//       setObjectKeyValue(
//         sxPropsConvertedObj.queries[existingBeakpointIndex].value,
//         path,
//         componentProps[prop]
//       );
//     } else {
//       sxPropsConvertedObj?.queries?.push({
//         condition: `$${responsiveProp}`,
//         value: sxResolvedResponsiveProp,
//       });
//     }
//   } else {
//     sxPropsConvertedObj.queries = [];
//     sxPropsConvertedObj?.queries?.push({
//       condition: `$${responsiveProp}`,
//       value: sxResolvedResponsiveProp,
//     });
//   }
// };

// const createSxPropertyPath = (
//   styledSystemProps: any,
//   propsString: any,
//   mediaQueries: any,
//   descendants: any
// ) => {
//   let responsiveProp = '';
//   const sxPropPath = propsString.split('-');
//   const genratedPath: any = [];
//   let isInvalidProperty = false;
//   const sxProperties: any = {};

//   if (sxPropPath) {
//     sxPropPath.forEach((prop: any) => {
//       if (isInvalidProperty) return;

//       if (prop.startsWith('_') && descendants?.includes(prop)) {
//         genratedPath.push('descendants', prop);
//       } else if (styledSystemProps[prop]) {
//         genratedPath.push('style', prop);
//       } else {
//         if (mediaQueries[prop]) {
//           if (!responsiveProp) {
//             responsiveProp = prop;
//           } else {
//             isInvalidProperty = true;
//             return;
//           }
//         } else {
//           const parentProperty = getObjectParentProperty(reservedKeys, prop);

//           if (parentProperty && sxProperties[parentProperty]) {
//             isInvalidProperty = true;
//             return;
//           }

//           sxProperties[parentProperty] = true;
//           // Check if the property is a valid styled system prop
//           if (!parentProperty) {
//             if (styledSystemProps[prop]) {
//               genratedPath.push('style', prop);
//             } else {
//               isInvalidProperty = true;
//               return;
//             }
//           } else {
//             genratedPath.push(parentProperty, prop);
//           }
//         }
//       }
//     });

//     // if (isInvalidProperty) return propsString;
//   }
//   return {
//     path: isInvalidProperty ? propsString : genratedPath,
//     responsiveProp,
//   };
// };
export const convertUtilityPropsToSX = (
  styledSystemProps: any,
  _descendants: any,
  propsWithUtility: any,
  reservedKeys: any = _reservedKeys
) => {
  const sxPropsConvertedUtilityProps: any = {};
  const ignoredProps: any = {};

  if (Object.keys(propsWithUtility).length === 0)
    return { sxProps: {}, mergedProps: {} };
  const { sx, ...componentProps } = propsWithUtility;

  Object.keys(componentProps).forEach((prop) => {
    if (styledSystemProps[prop]) {
      sxPropsConvertedUtilityProps[prop] = componentProps[prop];
    } else {
      if (reservedKeys[prop]) {
        sxPropsConvertedUtilityProps[reservedKeys[prop]] = componentProps[prop];
      } else {
        ignoredProps[prop] = componentProps[prop];
      }
    }
  });

  const sxPropsConvertedUtilityPropsToVerboseSx = convertSxToSxVerbosed(
    sxPropsConvertedUtilityProps
  );

  // console.setEndTimeStamp('convertUtilityPropsToSX');
  return {
    sxProps: deepMerge(sxPropsConvertedUtilityPropsToVerboseSx, sx),
    mergedProps: ignoredProps,
  };
};
