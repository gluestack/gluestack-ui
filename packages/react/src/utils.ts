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

// function checkKey(obj: any, key: any) {
//   return obj && obj.hasOwnProperty(key);
// }
function isNumeric(str: string) {
  // return typeof str === 'number' ? true : false;
  return /^[-+]?[0-9]*\.?[0-9]+$/.test(str);
}
function resolveStringToken(
  string: string,
  config: any,
  tokenScaleMap: any,
  propName: any,
  scale?: any
) {
  let typeofResult = 'string';
  let result = string.replace(/\$(\w+(?:\$\w+)*)/g, (match) => {
    let nested_tokens = match.split('$').filter(Boolean);
    if (nested_tokens.length > 1) {
      let current_config = config.tokens;
      for (let i = 0; i < nested_tokens.length; i++) {
        if (current_config[nested_tokens[i]]) {
          current_config = current_config[nested_tokens[i]];
        } else {
          typeofResult = typeof match;
          return match;
        }
      }
      typeofResult = typeof current_config;
      return current_config;
    } else {
      if (tokenScaleMap[propName]) {
        let token_scale = scale ?? tokenScaleMap[propName];
        if (
          config.tokens[token_scale] &&
          config.tokens[token_scale][nested_tokens[0]]
        ) {
          typeofResult = typeof config.tokens[token_scale][nested_tokens[0]];

          return config.tokens[token_scale][nested_tokens[0]];
        } else {
          typeofResult = typeof match;
          return match;
        }
      } else if (config.tokens[nested_tokens[0]]) {
        typeofResult = typeof config.tokens[nested_tokens[0]];
        return config.tokens[nested_tokens[0]];
      } else {
        typeofResult = typeof match;
        return match;
      }
    }
  });

  let finalResult;

  if (isNumeric(result) && typeofResult === 'number') {
    finalResult = parseFloat(result);
  } else {
    // console.log(parseFloat(result), typeof parseFloat(result), 'parseFloat');
    finalResult = result;
  }

  return finalResult;
}

export const getTokenFromConfig = (config: any, prop: any, value: any) => {
  const aliasTokenType = config.propertyTokenMap[prop];
  // const tokenScale = config?.tokens?.[aliasTokenType];
  let token;
  // resolveStringToken(value, config, config.propertyTokenMap);
  if (typeof value === 'string' && value.includes('$')) {
    if (config.propertyResolver?.[prop]) {
      let transformer = config.propertyResolver?.[prop];
      token = transformer(value, (value1: any, scale = aliasTokenType) =>
        resolveStringToken(value1, config, config.propertyTokenMap, prop, scale)
      );
    } else {
      token = resolveStringToken(value, config, config.propertyTokenMap, prop);
      // console.log(
      //   xyz,
      //   value,
      //   typeof xyz,
      //   // prop,
      //   // config?.tokens?.space,
      //   'else****** ********'
      // );
    }
  } else {
    if (config.propertyResolver?.[prop]) {
      let transformer = config.propertyResolver?.[prop];
      token = transformer(value, (value: any, scale = aliasTokenType) => {
        if (typeof value === 'string' && value.includes('$')) {
          return resolveStringToken(
            value,
            config,
            config.propertyTokenMap,
            prop,
            scale
          );
        } else {
          return value;
        }
      });
    } else {
      token = value;
    }
    // console.log(token, typeof token, prop, '******');
  }

  return token;
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

export const deepMergeArray = (target: any = {}, source: any) => {
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      if (Array.isArray(target[key]) && Array.isArray(source[key])) {
        target[key] = [...target[key], ...source[key]];
      } else if (
        typeof target[key] === 'object' &&
        typeof source[key] === 'object'
      ) {
        deepMergeArray(target[key], source[key]);
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
    // 'lineHeights',
    // 'letterSpacings',
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
    if (newTheme.tokens) {
      //@ts-ignore
      newTheme.tokens[key] = newScale;
    } else {
      console.warn(
        'No tokens found in config! Please pass config in Provider to resolve styles!'
      );
    }
  });
  return newTheme;
};
