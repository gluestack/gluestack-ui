import type {
  CreateGenericConfig,
  GlueStackConfig,
  InferConfig,
} from './types';
import type {
  StringifyToken,
  PropertyTokenType,
  RemoveNever,
  ExtendRNStyle,
  RNStyledProps,
  COLORMODES,
  IState,
  PLATFORMS,
  ExtendedConfigType,
} from './types';

export type SxPropsNew<Aliases, Tokens, Variants, PLATFORM = ''> = Partial<
  RNStyledProps & AliasesProps<Aliases, Tokens>
> & {
  [Key in `_${COLORMODES}`]?: SxPropsNew<Aliases, Tokens, Variants, PLATFORM>;
} & {
  [Key in `:${IState}`]?: SxPropsNew<Aliases, Tokens, Variants, PLATFORM>;
} & {
  [Key in `_${PLATFORMS}`]?: SxPropsNew<Aliases, Tokens, Variants, Key>;
} & {
  [Key in `_${string & {}}`]?:
    | SxPropsNew<Aliases, Tokens, Variants, PLATFORM>
    | {
        [key in string]?: any;
      };
};

type CompoundVariant<Variants, Aliases, Tokens> = Partial<
  {
    [Key in keyof Variants]?: keyof Variants[Key];
  } & {
    value?: SxPropsNew<Aliases, Tokens, Variants>;
  }
>;

// & {
//   variants?: VariantTypeNew<Variants, Aliases, Tokens>;
//   compoundVariants?: Array<CompoundVariant<Variants, Aliases, Tokens>>;
// };

export type VariantTypeNew<Variants, Aliases, Tokens> =
  | {
      [Key1 in keyof Variants]: {
        [Key in keyof Variants[Key1] | (string & {})]?: Partial<
          SxPropsNew<Aliases, Tokens, Variants> & {
            // @ts-ignore
            [K in `@${keyof Tokens['mediaQueries']}`]?: SxPropsNew<
              Aliases,
              Tokens,
              Variants
            >;
          }
        >;
      };
    };

// export const createConfig = <T>(config: T): T => {
//   return {
//     aliases: config.aliases,
//     tokens: config.tokens,
//     globalStyle: config.globalStyle,
//   } as T;
// };

export type AliasesProps<Aliases> = {
  [key in keyof Pick<Aliases, keyof Aliases>]?: 'Hello world';
};
// Aliases[key] extends keyof RNStyledProps
//   ? //@ts-ignore
//     | StringifyToken<keyof Token[PropertyTokenType[Aliases[key]]]>
//       | ExtendRNStyle<RNStyledProps, Aliases[key]>
//   : never;

export type StyledThemePropsNew<Aliases, Tokens> = AliasesProps<
  Pick<Aliases, keyof Aliases>
>;
// type ConfigType = number;
// type ConfigType<T extends CreateGenericConfig> = {
//   aliases?: T['aliases'];
//   tokens?: T['tokens'];
//   globalStyle?: Partial<
//     StyledThemePropsNew<T['globalStyle'], T['aliases'], T['tokens']>
//   >;
//   propertyResolver?: ExtendedConfigType;
// };

const configNew = {
  aliases: {
    bg: 'backgroundColor',
    backgroundColor: 'backgroundColor',
    bgColor: 'backgroundColor',
    color: 'color',
    borderColor: 'borderColor',
  } as const,
  tokens: {
    colors: {
      rose50: '#fff1f2',
      rose100: '#ffe4e6',
      rose200: '#fecdd3',
      rose300: '#fda4af',
      rose400: '#fb7185',
      rose500: '#f43f5e',
      rose600: '#e11d48',
      rose700: '#be123c',
      rose800: '#9f1239',
      rose900: '#881337',
    },
  } as const,
} as const;

const createConfigNew = <
  T extends GlueStackConfig<T['tokens'], T['aliases'], T['globalStyle']>
>(
  config: T
): InferConfig<T> => {
  return config as any;
};

const configNew2 = createConfigNew({
  aliases: {
    bg: 'backgroundColor',
    h: 'height',
  },
  tokens: {
    colors: {
      red100: '#fff1f2',
    },
  },
  globalStyle: '',
  // globalStyle: {},
  // aliases: {
  //   bg: 'backgroundColor',
  // },
  // tokens: {
  //   colors: {
  //     rose50: '#fff1f2',
  //     rose100: '#ffe4e6',
  //   },
  // },
  // globalStyle: {
  //   variants: {
  //     variants: {
  //       primary: {},
  //     },
  //   },
  // },
} as const);

type ConfigTypeNew = typeof configNew2;
type IConfig = typeof configNew;
