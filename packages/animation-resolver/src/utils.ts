export const deepClone = (obj: any) => JSON.parse(JSON.stringify(obj));

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

export function deepMergeObjects(...objects: any) {
  const isObject = (obj: any) => obj && typeof obj === 'object';

  return objects.reduce((prev: any, obj: any) => {
    if (isObject(prev) && isObject(obj)) {
      Object.keys(obj).forEach((key) => {
        if (isObject(obj[key])) {
          if (!prev[key] || !isObject(prev[key])) {
            prev[key] = {};
          }
          prev[key] = deepMerge(prev[key], obj[key]);
        } else {
          prev[key] = obj[key];
        }
      });
    }
    return prev;
  }, {});
}

export function resolvedTokenization(props: any, config: any) {
  const aliasedResolvedProps = resolveAliasesFromConfig(config, props);
  const newProps = resolveTokensFromConfig(config, aliasedResolvedProps);
  return newProps;
}

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
  // console.log('&&&&&', newProps);

  return newProps;
}

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

function isNumeric(str: string) {
  return typeof str === 'number' ? true : false;
  // return /^[-+]?[0-9]*\.?[0-9]+$/.test(str);
}
export function resolveStringToken(
  string: string,
  config: any,
  tokenScaleMap: any,
  propName: any,
  scale?: any
) {
  let typeofResult = 'string';
  const token_scale = scale ?? tokenScaleMap[propName];

  const splitTokenBySpace = string.split(' ');

  const result: any = splitTokenBySpace.map((currentToken) => {
    let splitCurrentToken = currentToken.split('$');

    if (currentToken.startsWith('$')) {
      splitCurrentToken = splitCurrentToken.slice(1);
    }

    if (splitCurrentToken.length > 1) {
      const tokenValue = getObjectProperty(config.tokens, splitCurrentToken);
      typeofResult = typeof tokenValue;
      return tokenValue;
    } else {
      if (tokenScaleMap[propName]) {
        if (!config || !config.tokens) {
          throw new Error(
            'You cannot use tokens without wrapping the component with StyledProvider. Please wrap the component with a StyledProvider and pass theme config.'
          );
        }
        if (
          config?.tokens[token_scale] &&
          config?.tokens[token_scale].hasOwnProperty(splitCurrentToken[0])
        ) {
          const tokenValue = config?.tokens[token_scale][splitCurrentToken[0]];
          typeofResult = typeof tokenValue;

          if (typeof tokenValue !== 'undefined' && tokenValue !== null) {
            return tokenValue;
          } else {
            return '';
          }
        }
      }
      return splitCurrentToken[splitCurrentToken.length - 1];
    }
  });

  let finalResult = result;

  if (finalResult === '') {
    return undefined;
  } else {
    finalResult = result.join(' ');

    if (isNumeric(finalResult) || typeofResult === 'number') {
      return parseFloat(finalResult);
    } else {
      return finalResult;
    }
  }
}

export const getObjectProperty = (object: any, keyPath: any) => {
  if (!Array.isArray(keyPath)) {
    keyPath = [keyPath];
  }
  return keyPath.reduce(
    (baseObj: any, key: any) => baseObj && baseObj[key],
    object
  );
};
