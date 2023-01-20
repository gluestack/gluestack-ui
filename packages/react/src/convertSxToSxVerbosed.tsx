const STATE = 'state';
const STYLE = 'style';
const DESCENDANTS = 'descendants';

const reservedKeys = {
  state: {
    ':indeterminate': 'indeterminate',
    ':checked': 'checked',
    ':readOnly': 'readOnly',
    ':required': 'required',
    ':invalid': 'invalid',
    ':focus': 'focus',
    ':focusVisible': 'focusVisible',
    ':hover': 'hover',
    ':pressed': 'pressed',
    ':active': 'active',
    ':loading': 'loading',
    ':disabled': 'disabled',
  },
  colorMode: {
    _light: 'light',
    _dark: 'dark',
  },
  platform: {
    _web: 'web',
    _ios: 'ios',
    _android: 'android',
  },
};

// Helper function
const getObjectParentProperty = (obj: any, key: any, prevKey = ''): any => {
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      if (prop === key) {
        return prevKey;
      }
      if (obj[prop] && typeof obj[prop] === 'object') {
        const result = getObjectParentProperty(obj[prop], key, prop);
        if (result) {
          return result;
        }
      }
    }
  }
  return null;
};

const setObjectKeyValue = (obj: any, keys: any, value: any) => {
  if (!Array.isArray(keys)) {
    keys = [keys];
  }

  let current = obj;
  keys?.forEach((key: any, index: any) => {
    if (index === keys?.length - 1) {
      current[key] = value;
    } else {
      if (!current[key]) {
        current[key] = {};
      }
      current = current[key];
    }
  });
  return obj;
};

const resolveResponsiveProps = (
  sxPropsConvertedObj: any,
  breakpoint: any,
  path: any,
  prop: any,
  responsiveStyle: any
) => {
  const sxResolvedResponsiveProp = setObjectKeyValue(
    {},
    path,
    responsiveStyle[prop]
  );

  if (sxPropsConvertedObj.queries) {
    const existingBeakpointIndex = sxPropsConvertedObj?.queries?.findIndex(
      (data: any) => data.condition === `$${breakpoint}`
    );

    if (existingBeakpointIndex !== -1) {
      setObjectKeyValue(
        sxPropsConvertedObj.queries[existingBeakpointIndex].value,
        path,
        responsiveStyle[prop]
      );
    } else {
      sxPropsConvertedObj?.queries?.push({
        condition: `$${breakpoint}`,
        value: sxResolvedResponsiveProp,
      });
    }
  } else {
    sxPropsConvertedObj.queries = [];
    sxPropsConvertedObj?.queries?.push({
      condition: `$${breakpoint}`,
      value: sxResolvedResponsiveProp,
    });
  }
};

function resolveStyledPropsRecursively(
  theme: any,
  path: any = [],
  sxConvertedObject: any = {},
  breakpoint: any = ''
) {
  const themeKeys = Object.keys(theme);

  themeKeys?.forEach((prop) => {
    if (prop?.startsWith(':')) {
      path.push(STATE, prop.slice(1));
      resolveStyledPropsRecursively(
        theme[prop],
        path,
        sxConvertedObject,
        breakpoint
      );
      path.pop();
      path.pop();
    } else if (prop?.startsWith('_')) {
      const parentProperty = getObjectParentProperty(reservedKeys, prop);

      if (parentProperty) {
        path.push(parentProperty, prop.slice(1));
      } else {
        path.push(DESCENDANTS, prop);
      }

      resolveStyledPropsRecursively(
        theme[prop],
        path,
        sxConvertedObject,
        breakpoint
      );

      path.pop();
      path.pop();
    } else if (prop?.startsWith('@')) {
      resolveStyledPropsRecursively(
        theme[prop],
        path,
        sxConvertedObject,
        prop.slice(1)
      );
    } else {
      const propValue = theme[prop];
      path.push(STYLE, prop);

      if (breakpoint) {
        resolveResponsiveProps(
          sxConvertedObject,
          breakpoint,
          path,
          prop,
          theme
        );
      } else {
        setObjectKeyValue(sxConvertedObject, path, propValue);
      }
      path.pop();
      path.pop();
    }
  });

  return sxConvertedObject;
}

function resolveVariantSize(theme: any) {
  if (!theme) return {};
  const themeKey = Object?.keys(theme);
  let sxConvertedObject = {};

  themeKey?.map((prop) => {
    const sxConvertedProps = resolveStyledPropsRecursively(theme[prop]);
    setObjectKeyValue(sxConvertedObject, [prop], sxConvertedProps);
  });

  return sxConvertedObject;
}

export function sxToVerboseSx(theme: any) {
  const { variants, sizes, defaultProps, ...restTheme } = theme;
  let sxConvertedObject: any = {};
  const sxConvertedBaseStyle = resolveStyledPropsRecursively(restTheme);
  setObjectKeyValue(sxConvertedObject, 'baseStyle', sxConvertedBaseStyle);
  const sxConvertedVariant = resolveVariantSize(variants);
  setObjectKeyValue(sxConvertedObject, 'variants', sxConvertedVariant);
  const sxConvertedSizes = resolveVariantSize(sizes);
  setObjectKeyValue(sxConvertedObject, 'sizes', sxConvertedSizes);

  sxConvertedObject.defaultProps = defaultProps || {};

  return sxConvertedObject;
}

// export function styled(
//   Component: any,
//   theme: any,
//   componentStyleConfig: any,
//   ExtendedConfig?: any,
//   BUILD_TIME_PARAMS?: any
// ) {
//   const sxConvertedObject = sxToVerboseSx(theme);

//   const StyledComponent = verboseStyled(
//     Component,
//     sxConvertedObject,
//     componentStyleConfig,
//     ExtendedConfig,
//     BUILD_TIME_PARAMS
//   );

//   return StyledComponent;
// }

// styled({
//   'bg': '$red500',
//   'color': '$yellow500',
//   'fontSize': '$3',
//   ':hover': {
//     bg: '$amber500',
//     color: '$blue500',
//     fontSize: '$30',
//   },
//   ':focus': {
//     'fontSize': '$333',
//     '_web': {
//       fontSize: '$3333fkdjnv',
//     },
//     ':hover': {
//       fontSize: '$sahiHai',
//     },
//   },
//   '_light': {
//     bg: '$pink500',
//     color: '$cyan500',
//   },
//   '_dark': {
//     bg: '$pink500',
//     color: '$cyan500',
//   },
//   '_text': {
//     color: '$textDark',
//   },
//   '_web': {
//     p: '$5',
//   },
//   'variants': {
//     primary: {
//       'bg': '$red500',
//       'color': '$yellow500',
//       'fontSize': '$3',
//       ':hover': {
//         bg: '$amber500',
//         color: '$blue500',
//         fontSize: '$30',
//       },
//     },
//     secondary: {
//       'bg': '$red500',
//       'color': '$yellow500',
//       'fontSize': '$3',
//       ':hover': {
//         bg: '$amber500',
//         color: '$blue500',
//         fontSize: '$30',
//       },
//     },
//   },
//   'sizes': {
//     sm: {
//       'bg': '$red500',
//       'color': '$yellow500',
//       'fontSize': '$3',
//       ':hover': {
//         bg: '$amber500',
//         color: '$blue500',
//         fontSize: '$30',
//       },
//     },
//     md: {
//       'bg': '$red500',
//       'color': '$yellow500',
//       'fontSize': '$3',
//       ':hover': {
//         bg: '$amber500',
//         color: '$blue500',
//         fontSize: '$30',
//       },
//     },
//   },
//   'defaultProps': {
//     variant: 'primary',
//     size: 'md',
//   },
// });
