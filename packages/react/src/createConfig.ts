type myType<Aliases, Tokens> = {
  [key in keyof Aliases]?: keyof Tokens;
};

import type { ViewProps } from 'react-native';
import type {
  StringifyToken,
  PropertyTokenType,
  RemoveNever,
  ExtendRNStyle,
  RNStyledProps,
  COLORMODES,
  IState,
  PLATFORMS,
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

export type StyledThemePropsNew<Variants, Aliases, Tokens> = AliasesProps<
  Aliases,
  Tokens
> &
  RNStyledProps &
  AliasesProps<Aliases, Tokens> & {
    variants?: VariantTypeNew<Variants, Aliases, Tokens>;
    compoundVariants?: Array<CompoundVariant<Variants, Aliases, Tokens>>;
  };

export type VariantTypeNew<Variants, Aliases, Tokens> =
  | {
      [Key1 in keyof Variants]: {
        [Key in keyof Variants[Key1] | (string & {})]?: Partial<
          SxPropsNew<Aliases, Tokens, Variants> & {
            [K in `@${keyof Tokens['mediaQueries']}`]?: SxPropsNew<
              Aliases,
              Tokens,
              Variants
            >;
          }
        >;
      };
    };

export const createConfig = <Aliases, Tokens, Variants>(
  aliases: Aliases,
  tokens: Tokens,
  globalStyle: Partial<StyledThemePropsNew<Variants, Aliases, Tokens>> // AliasesProps<Aliases, Tokens>
) => {
  return {
    aliases,
    tokens,
    globalStyle,
  };
};

export type AliasesProps<Aliases, Token> = RemoveNever<{
  [key in keyof Aliases]?: Aliases[key] extends keyof RNStyledProps
    ? //@ts-ignore
      | StringifyToken<keyof Token[PropertyTokenType[Aliases[key]]]>
        | ExtendRNStyle<RNStyledProps, Aliases[key]>
    : never;
}>;

const config = createConfig(
  {
    bg: 'backgroundColor',
    backgroundColor: 'backgroundColor',
    bgColor: 'backgroundColor',
    color: 'color',
    borderColor: 'borderColor',
    borderWidth: 'borderWidth',
    shadowColor: 'shadowColor',
    shadowOffset: 'shadowOffset',
    shadowOpacity: 'shadowOpacity',
    shadowRadius: 'shadowRadius',
    elevation: 'elevation',
    w: 'width',
    h: 'height',
  } as const,
  {
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
      pink50: '#fdf2f8',
      pink100: '#fce7f3',
      pink200: '#fbcfe8',
      pink300: '#f9a8d4',
      pink400: '#f472b6',
      pink500: '#ec4899',
      pink600: '#db2777',
      pink700: '#be185d',
      pink800: '#9d174d',
      pink900: '#831843',
    },
    space: {
      'px': '1px',
      '0': 0,
      '0.5': 2,
      '1': 4,
      '1.5': 6,
      '2': 8,
      '2.5': 10,
      '3': 12,
      '3.5': 14,
      '4': 16,
      '5': 20,
      '6': 24,
      '7': 28,
      '8': 32,
      '9': 36,
      '10': 40,
      '12': 48,
      '16': 64,
      '20': 80,
      '24': 96,
      '32': 128,
      '40': 160,
      '48': 192,
      '56': 224,
      '64': 256,
      '72': 288,
      '80': 320,
      '96': 384,
      '1/2': '50%',
      '1/3': '33.333%',
      '2/3': '66.666%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666%',
      '2/6': '33.333%',
      '3/6': '50%',
      '4/6': '66.666%',
      '5/6': '83.333%',
      'full': '100%',
    },
    borderWidths: {
      '0': 0,
      '1': '1px',
      '2': '2px',
      '4': '4px',
      '8': '8px',
    },
    radii: {
      'none': 0,
      'xs': 2,
      'sm': 4,
      'md': 6,
      'lg': 8,
      'xl': 12,
      '2xl': 16,
      '3xl': 24,
      'full': 9999,
    },
    breakpoints: {
      base: 0,
      sm: 480,
      md: 768,
      lg: 992,
      xl: 1280,
    },
    mediaQueries: {
      base: '@media screen and (min-width: 0)',
      sm: '@media screen and (min-width: 480px)',
      md: '@media screen and (min-width: 768px)',
      lg: '@media screen and (min-width: 992px)',
      xl: '@media screen and (min-width: 1280px)',
    },
    letterSpacings: {
      'xs': '-0.8px',
      'sm': '-0.4px',
      'md': 0,
      'lg': '0.4px',
      'xl': '0.8px',
      '2xl': '1.6px',
    },
    lineHeights: {
      '2xs': '16px',
      'xs': '18px',
      'sm': '20px',
      'md': '22px',
      'lg': '24px',
      'xl': '28px',
      '2xl': '32px',
      '3xl': '40px',
      '4xl': '48px',
      '5xl': '64px',
    },
    fontWeights: {
      hairline: '100',
      thin: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
      extraBlack: '950',
    },
    fonts: {
      heading: undefined,
      body: undefined,
      mono: undefined,
    },
    fontSizes: {
      '2xs': 10,
      'xs': 12,
      'sm': 14,
      'md': 16,
      'lg': 18,
      'xl': 20,
      '2xl': 24,
      '3xl': 30,
      '4xl': 36,
      '5xl': 48,
      '6xl': 60,
      '7xl': 72,
      '8xl': 96,
      '9xl': 128,
    },
    opacity: {
      0: 0,
      5: 0.05,
      10: 0.1,
      20: 0.2,
      25: 0.25,
      30: 0.3,
      40: 0.4,
      50: 0.5,
      60: 0.6,
      70: 0.7,
      75: 0.75,
      80: 0.8,
      90: 0.9,
      95: 0.95,
      100: 1,
    },
  } as const,
  {
    variants: {
      variant: {
        primary: {
          '@sm': {
            bg: '$pink100',
          },
        },
      },
      size: {
        sm: {},
      },
    },
    compoundVariants: [
      {
        variant: 'primary',
        value: {
          bg: '$pink100',
          bgColor: '$pink100',
        },
      },
    ],
  }
);
