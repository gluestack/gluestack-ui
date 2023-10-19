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

function convertNBColorsToGluestackColors(colors: any) {
  const gluestackColors: any = {};
  Object.keys(colors).map((key) => {
    if (typeof colors[key] === 'object') {
      Object.keys(colors[key]).map((token) => {
        gluestackColors[`${key}.${token}`] = colors[key][token];
      });
    }
  });
  return gluestackColors;
}

type GenericTheme<A, B, C, D> = {
  components: A;
  aliases: B;
  tokens: C;
  plugins: D;
};

type GSNativeBaseExtendedTheme<Conf> = Conf extends GenericTheme<
  infer A,
  infer C,
  infer D,
  infer E
>
  ? GenericTheme<A, C, D, E>
  : any;

type Head<T> = T extends [infer I, ...infer _Rest] ? I : never;
type Tail<T> = T extends [infer _I, ...infer Rest] ? Rest : never;

type Zip_DeepMergeTwoTypes<T, U> = T extends []
  ? U
  : U extends []
  ? T
  : [
      DeepMergeTwoTypes<Head<T>, Head<U>>,
      ...Zip_DeepMergeTwoTypes<Tail<T>, Tail<U>>
    ];

/**
 * Take two objects T and U and create the new one with uniq keys for T a U objectI
 * helper generic for `DeepMergeTwoTypes`
 */
type GetObjDifferentKeys<
  T,
  U,
  T0 = Omit<T, keyof U> & Omit<U, keyof T>,
  T1 = { [K in keyof T0]: T0[K] }
> = T1;
/**
 * Take two objects T and U and create the new one with the same objects keys
 * helper generic for `DeepMergeTwoTypes`
 */
type GetObjSameKeys<T, U> = Omit<T | U, keyof GetObjDifferentKeys<T, U>>;

type MergeTwoObjects<
  T,
  U,
  // non shared keys are optional
  T0 = Partial<GetObjDifferentKeys<T, U>> & {
    // shared keys are recursively resolved by `DeepMergeTwoTypes<...>`
    [K in keyof GetObjSameKeys<T, U>]: DeepMergeTwoTypes<T[K], U[K]>;
  },
  T1 = { [K in keyof T0]: T0[K] }
> = T1;

// it merge 2 static types and try to avoid of unnecessary options (`'`)
export type DeepMergeTwoTypes<T, U> =
  // ----- 2 added lines ------
  [T, U] extends [any[], any[]]
    ? Zip_DeepMergeTwoTypes<T, U>
    : // check if generic types are objects
    [T, U] extends [{ [key: string]: unknown }, { [key: string]: unknown }]
    ? MergeTwoObjects<T, U>
    : T | U;

type GSConvertedConfig<Theme> = {
  tokens: Omit<Theme, 'components' | 'config'>;
};

export function extendTheme<Theme>(tempTheme: Theme) {
  const theme = tempTheme as any;
  if (Object.keys(theme).length === 0) {
    return;
  }
  let finalTheme: any = {};
  let gluestackStyles: any = theme;

  if (theme.components) {
    const componentTheme = theme.components;
    delete gluestackStyles['components'];
    let componentsTheme: any = {};
    Object.keys(componentTheme).map((component) => {
      componentsTheme[component] = { theme: {} };
      componentsTheme[component].theme = {
        ...transformTheme(componentTheme[component]),
      };
    });
    finalTheme['components'] = componentsTheme;
  }

  if (theme.config) {
    finalTheme['config'] = theme.config;
    delete gluestackStyles['config'];
  }

  if (gluestackStyles.colors) {
    Object.keys(gluestackStyles.colors).map((color: Object | string) => {
      if (typeof color === 'object') {
        gluestackStyles.colors = convertNBColorsToGluestackColors(
          gluestackStyles.colors
        );
      }
    });
  }
  const clonedConfig: typeof config = JSON.parse(
    JSON.stringify(config)
  ) as typeof config;

  const mergedTheme = deepMerge(
    deepMerge(clonedConfig.theme, convertTheme(finalTheme)),
    { tokens: gluestackStyles }
  );

  return mergedTheme as 'components' extends keyof Theme
    ? MergeTwoObjects<typeof clonedConfig.theme, GSConvertedConfig<Theme>> & {
        components: {
          [Key in keyof Theme['components']]: {
            theme: 'variants' extends keyof Theme['components'][Key]
              ? 'sizes' extends keyof Theme['components'][Key]
                ? Omit<
                    Theme['components'][Key],
                    | keyof Theme['components'][Key]['variants']
                    | keyof Theme['components'][Key]['sizes']
                  > & {
                    variants: {
                      variant: Theme['components'][Key]['variants'];
                      size: Theme['components'][Key]['sizes'];
                    };
                  }
                : Omit<
                    Theme['components'][Key],
                    keyof Theme['components'][Key]['variants']
                  > & {
                    variants: {
                      variant: Theme['components'][Key]['variants'];
                    };
                  }
              : 'sizes' extends keyof Theme['components'][Key]
              ? Omit<
                  Theme['components'][Key],
                  keyof Theme['components'][Key]['sizes']
                > & {
                  variants: {
                    sizes: Theme['components'][Key]['sizes'];
                  };
                }
              : Theme['components'][Key];
          };
        };
      }
    : {};
}
