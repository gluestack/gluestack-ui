const STATE = 'state';
const STYLE = 'style';
const DESCENDANTS = 'descendants';

// ------------------------------------------- Reserved keys -------------------------------------------
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

//------------------------------------------- Helper function -------------------------------------------
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

// ------------------------------------------- Responsive props resolution -------------------------------------------
const resolveResponsiveProps = (
  sxVerbosed: any,
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

  if (sxVerbosed.queries) {
    const existingBeakpointIndex = sxVerbosed?.queries?.findIndex(
      (data: any) => data.condition === breakpoint
    );

    if (existingBeakpointIndex !== -1) {
      setObjectKeyValue(
        sxVerbosed.queries[existingBeakpointIndex].value,
        path,
        responsiveStyle[prop]
      );
    } else {
      sxVerbosed?.queries?.push({
        condition: breakpoint,
        value: sxResolvedResponsiveProp,
      });
    }
  } else {
    sxVerbosed.queries = [];
    sxVerbosed?.queries?.push({
      condition: breakpoint,
      value: sxResolvedResponsiveProp,
    });
  }
};

// ------------------------------------------- sx to sx verbosed resolution -------------------------------------------

export function resolveStyledPropsRecursively(
  theme: any = {},
  path: any = [],
  sxVerbosed: any = {},
  breakpoint: any = ''
) {
  const themeKeys = Object.keys(theme);

  themeKeys?.forEach((prop) => {
    if (prop?.startsWith(':')) {
      path.push(STATE, prop.slice(1));
      resolveStyledPropsRecursively(theme[prop], path, sxVerbosed, breakpoint);
      path.pop();
      path.pop();
    } else if (prop?.startsWith('_')) {
      const parentProperty = getObjectParentProperty(reservedKeys, prop);

      if (parentProperty) {
        path.push(parentProperty, prop.slice(1));
      } else {
        path.push(DESCENDANTS, prop);
      }

      resolveStyledPropsRecursively(theme[prop], path, sxVerbosed, breakpoint);

      path.pop();
      path.pop();
    } else if (prop?.startsWith('@')) {
      const breakpointValue = `$${prop.slice(1)}`;
      resolveStyledPropsRecursively(
        theme[prop],
        path,
        sxVerbosed,
        breakpointValue
      );
    } else {
      const propValue = theme[prop];
      path.push(STYLE, prop);

      if (breakpoint) {
        resolveResponsiveProps(sxVerbosed, breakpoint, path, prop, theme);
      } else {
        setObjectKeyValue(sxVerbosed, path, propValue);
      }
      path.pop();
      path.pop();
    }
  });

  return sxVerbosed;
}

// ------------------------------------------- Variant & Size resolution -------------------------------------------

function resolveVariantSize(theme: any) {
  if (!theme) return {};

  const themeKey = Object?.keys(theme);
  const verbosedVariantAndSize = {};

  themeKey?.map((prop) => {
    const sxVerbosedConvertedProps = resolveStyledPropsRecursively(theme[prop]);
    setObjectKeyValue(verbosedVariantAndSize, [prop], sxVerbosedConvertedProps);
  });

  return verbosedVariantAndSize;
}

// ------------------------------------------- sx to verbosed final props -------------------------------------------

export function sxToVerboseSx(theme: any) {
  const { variants = {}, sizes = {}, defaultProps = {}, ...restTheme } = theme;

  const verbosedStyledTheme: any = {};

  const sxConvertedBaseStyle = resolveStyledPropsRecursively(restTheme);
  setObjectKeyValue(verbosedStyledTheme, 'baseStyle', sxConvertedBaseStyle);

  const sxConvertedVariant = resolveVariantSize(variants);
  setObjectKeyValue(verbosedStyledTheme, 'variants', sxConvertedVariant);

  const sxConvertedSizes = resolveVariantSize(sizes);
  setObjectKeyValue(verbosedStyledTheme, 'sizes', sxConvertedSizes);

  verbosedStyledTheme.defaultProps = defaultProps || {};

  return verbosedStyledTheme;
}

export function userSxtoSxVerbose(sx: any) {
  const sxVerboseTheme = resolveStyledPropsRecursively(sx);
  return sxVerboseTheme;
}
