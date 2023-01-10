import type { Config } from './types';

const idCounter = {} as any;

export function uniqueId(prefix = '$lodash$') {
  if (!idCounter[prefix]) {
    idCounter[prefix] = 0;
  }

  const id = ++idCounter[prefix];
  if (prefix === '$lodash$') {
    return `${id}`;
  }

  return `${prefix}${id}`;
}

// --------------------------------- 3. Preparing style map for Css Injection based on precedence --------------------------------------

export const setObjectKeyValue = (obj: any, keys: any, value: any) => {
  let current = obj;
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (i === keys.length - 1) {
      // we've reached the desired key, so update its value
      current[key] = value;
    } else {
      // we're still traversing the object, so create the key if it doesn't exist
      if (!current[key]) {
        current[key] = {};
      }
      current = current[key];
    }
  }
  return obj;
};

export const getObjectProperty = (object: any, keyPath: any) => {
  if (!Array.isArray(keyPath)) {
    keyPath = [keyPath];
  }
  return keyPath.reduce(
    (baseObj: any, key: any) => baseObj && baseObj[key],
    object
  );
};

export function resolveAliasesFromConfig(config: any, props: any) {
  const aliasResolvedProps: any = {};

  Object.keys(props).map((key) => {
    if (config?.aliases?.[key]) {
      aliasResolvedProps[config.aliases?.[key]] = props[key];
    } else {
      aliasResolvedProps[key] = props[key];
    }
  });
  return aliasResolvedProps;
}

function checkKey(obj: any, key: any) {
  return obj && obj.hasOwnProperty(key);
}

export const getTokenFromConfig = (config: any, prop: any, value: any) => {
  if (typeof value === 'string' && value.split('$').length > 2) {
    const tokenValue = getObjectProperty(
      config?.tokens,
      value.split('$').slice(1)
    );

    return tokenValue;
  } else {
    const aliasTokenType = config.propertyTokenMap[prop];

    const tokenScale = config?.tokens?.[aliasTokenType];
    let token;

    if (typeof value === 'string' && value.startsWith('$')) {
      const originalValue = value.slice(1);
      if (config.propertyResolver?.[prop]) {
        let transformer = config.propertyResolver?.[prop];
        token = transformer(
          originalValue,
          (value1: any, scale = aliasTokenType) =>
            config?.tokens?.[scale]?.[value1]
        );
      } else {
        token = checkKey(tokenScale, originalValue)
          ? tokenScale?.[originalValue]
          : value;
      }
      // console.log('hello tokenValue', token);
    } else {
      if (config.propertyResolver?.[prop]) {
        let transformer = config.propertyResolver?.[prop];
        token = transformer(
          value,
          (originalValue: any, scale = aliasTokenType) => {
            if (
              typeof originalValue === 'string' &&
              originalValue.startsWith('$')
            ) {
              originalValue = originalValue.slice(1);
              return config?.tokens?.[scale]?.[originalValue];
            } else {
              return originalValue;
            }
          }
        );
      } else {
        token = value;
      }
    }

    return token;
  }
};

export function getResolvedTokenValueFromConfig(
  config: any,
  _props: any,
  prop: any,
  value: any
) {
  let resolvedTokenValue = getTokenFromConfig(config, prop, value);
  // Special case for token ends with em on mobile
  // This will work for lineHeight and letterSpacing
  // console.log('hello from token ends with em on mobile', resolvedTokenValue);
  // if (
  //   typeof resolvedTokenValue === 'string' &&
  //   resolvedTokenValue.endsWith('em') &&
  //   Platform.OS !== 'web'
  // ) {
  //   const fontSize = getTokenFromConfig(config, 'fontSize', props?.fontSize);
  //   resolvedTokenValue =
  //     parseFloat(resolvedTokenValue) * parseFloat(fontSize ?? BASE_FONT_SIZE);
  // }

  return resolvedTokenValue;
}

export function resolveTokensFromConfig(config: any, props: any) {
  let newProps: any = {};

  Object.keys(props).map((prop: any) => {
    const value = props[prop];
    newProps[prop] = getResolvedTokenValueFromConfig(
      config,
      props,
      prop,
      value
    );
  });
  return newProps;
}

export function resolvedTokenization(props: any, config: any) {
  const aliasedResolvedProps = resolveAliasesFromConfig(config, props);
  const newProps = resolveTokensFromConfig(config, aliasedResolvedProps);
  return newProps;
}
// ----------------------------------------------------- 6. Theme Boot Resolver -----------------------------------------------------
export const deepMerge = (target: any = {}, source: any) => {
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      if (typeof target[key] === 'object' && typeof source[key] === 'object') {
        deepMerge(target[key], source[key]);
      } else {
        target[key] = source[key];
      }
    }
  }
  return target;
};

export const hash = (text: string) => {
  if (!text) {
    return '';
  }
  text = '_' + Math.random().toString(36).substr(2, 9) + '_' + text;

  let hashValue = 5381;
  let index = text.length - 1;

  while (index) {
    hashValue = (hashValue * 33) ^ text.charCodeAt(index);
    index -= 1;
  }

  return (hashValue >>> 0).toString(16);
};

export const BASE_FONT_SIZE = 16;

export const convertAbsoluteToRem = (px: number) => {
  return `${px / BASE_FONT_SIZE}rem`;
};

export const convertRemToAbsolute = (rem: number) => {
  return rem * BASE_FONT_SIZE;
};

export const platformSpecificSpaceUnits = (theme: Config, platform: string) => {
  const scales = [
    'space',
    'sizes',
    'fontSizes',
    'lineHeights',
    'letterSpacings',
  ];

  const newTheme = { ...theme };
  const isWeb = platform === 'web';
  scales.forEach((key) => {
    // const scale = get(theme, key, {});
    //@ts-ignore
    const scale = theme?.tokens?.[key] ?? {};

    const newScale = { ...scale };
    for (const scaleKey in scale) {
      const val = scale[scaleKey];
      if (typeof val !== 'object') {
        const isAbsolute = typeof val === 'number';
        const isPx = !isAbsolute && val.endsWith('px');
        const isRem = !isAbsolute && val.endsWith('rem');
        // const isEm = !isAbsolute && !isRem && val.endsWith('em');

        // console.log(isRem, key, val, isAbsolute, 'scale here');

        // If platform is web, we need to convert absolute unit to rem. e.g. 16 to 1rem
        if (isWeb) {
          if (isAbsolute) {
            newScale[scaleKey] = convertAbsoluteToRem(val);
          }
        }
        // If platform is not web, we need to convert px unit to absolute and rem unit to absolute. e.g. 16px to 16. 1rem to 16.
        else {
          if (isRem) {
            newScale[scaleKey] = convertRemToAbsolute(parseFloat(val));
          } else if (isPx) {
            newScale[scaleKey] = parseFloat(val);
          }
        }
      }
    }
    //@ts-ignore
    newTheme.tokens[key] = newScale;
  });

  return newTheme;
};
