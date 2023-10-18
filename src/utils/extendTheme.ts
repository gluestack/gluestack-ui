import { deepMerge } from './index';
import { config } from '../components/gluestack-ui.config';
import {
  addDollarSignsToProps,
  convertToSXForStateColorModeMediaQuery,
} from './index';

export const flattenTokens = (token: any) => {
  const flattenToken = {};
  Object.keys(token).forEach((key) => {
    const tokenObj = token[key];
    if (typeof tokenObj === 'object') {
      Object.keys(tokenObj).forEach((tokenKey) => {
        //@ts-ignore
        flattenToken[`${key}.${tokenKey}`] = tokenObj[tokenKey];
      });
    }
  });

  return flattenToken;
};
export const convertTheme = (theme: any = {}) => {
  const gluestackTheme: any = {
    tokens: {},
    aliases: {},
    components: {},
  };
  Object.keys(theme ?? {}).forEach((key) => {
    if (key === 'components') {
      gluestackTheme.components = theme[key];
    } else if (key === 'config') {
    } else {
      gluestackTheme.tokens[key] = flattenTokens(theme[key]);
    }
  });

  // console.log(gluestackTheme, 'gluestack theme');
  return gluestackTheme;
};

const transformTheme = (componentTheme: any) => {
  const { baseStyle, variants, sizes, defaultProps, ...rest } = componentTheme;
  let sxProps = addDollarSignsToProps(rest, config.theme);

  let transformedTheme: any = {
    variants: {
      variant: {},
      size: {},
    },
    defaultProps: {},
    ...sxProps,
  };

  if (baseStyle) {
    const propsWithDollarSigns = addDollarSignsToProps(baseStyle, config.theme);
    sxProps = convertToSXForStateColorModeMediaQuery(
      propsWithDollarSigns,
      config
    );
  }
  // const baseStylePropsWithDollarSigns = addDollarSignsToProps(
  //   propsWithDollarSigns,
  //   config
  // );

  // Transforms NativeBase Properties to Gluestack

  // transformedTheme = { ...transformedTheme, ...sxProps };

  // Mapping variants
  if (componentTheme.variants) {
    Object.keys(variants).forEach((variant) => {
      const propsWithDollarSigns = addDollarSignsToProps(
        variants[variant],
        config.theme
      );
      const sxProps = convertToSXForStateColorModeMediaQuery(
        propsWithDollarSigns,
        config.theme
      );
      transformedTheme.variants.variant[variant] = sxProps;
    });
  }

  // Mapping Sizes
  if (componentTheme.sizes) {
    Object.keys(sizes).forEach((size) => {
      const propsWithDollarSigns = addDollarSignsToProps(
        sizes[size],
        config.theme
      );
      const sxProps = convertToSXForStateColorModeMediaQuery(
        propsWithDollarSigns,
        config.theme
      );
      transformedTheme.variants.size[size] = sxProps;
    });
  }

  // Mapping Default Props
  if (componentTheme.defaultProps) {
    const propsWithDollarSigns = addDollarSignsToProps(
      defaultProps,
      config.theme
    );
    const sxProps = convertToSXForStateColorModeMediaQuery(
      propsWithDollarSigns,
      config.theme
    );
    transformedTheme.defaultProps = sxProps;
  }
  return transformedTheme;
};

export function extendTheme(theme: any) {
  if (Object.keys(theme).length === 0) {
    return;
  }
  const componentTheme = theme.components;
  let finalTheme = {};
  let componentsTheme: any = {};
  Object.keys(componentTheme).map((component) => {
    componentsTheme[component] = { theme: {} };
    componentsTheme[component].theme = {
      ...transformTheme(componentTheme[component], component),
    };
  });
  const mergedTheme = deepMerge(
    deepMerge(config.theme, convertTheme(finalTheme)),
    {
      components: componentsTheme,
    }
  );

  return mergedTheme;
}
