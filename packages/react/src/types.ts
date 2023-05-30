// import { RNStyledProps } from './types';
import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';

import type { propertyTokenMap } from './propertyTokenMap';
import type { CSSProperties } from 'react';

export interface ICustomConfig {}

export interface GSConfig
  extends Omit<CreateGenericConfig, keyof ICustomConfig>,
    ICustomConfig {}

export type RNStyledProps = ViewStyle | ImageStyle | TextStyle;
export type GenericKey = string | number | symbol;

// Tokens
export interface Tokens {
  colors?: { [key: GenericKey]: Record<string, any> & {} };
  sizes?: { [key: GenericKey]: Record<string, any> & {} };
  space?: { [key: GenericKey]: Record<string, any> & {} };
  borderWidths?: { [key: GenericKey]: Record<string, any> & {} };
  radii?: { [key: GenericKey]: Record<string, any> & {} };
  breakpoints?: { [key: GenericKey]: Record<string, any> & {} };
  mediaQueries?: { [key: GenericKey]: Record<string, any> & {} };
  letterSpacings?: { [key: GenericKey]: Record<string, any> & {} };
  lineHeights?: { [key: GenericKey]: any };
  fontWeights?: { [key: GenericKey]: Record<string, any> & {} };
  fonts?: { [key: GenericKey]: Record<string, any> & {} };
  fontSizes?: { [key: GenericKey]: Record<string, any> & {} };
  shadows?: { [key: GenericKey]: any };
}

// Config Types
export type AliasesType<RNStyledProps = string> = {
  [key: string]: RNStyledProps;
};

export type GenericAliases = {};

export type CreateConfig = {
  aliases: AliasesType;
  tokens: CreateGenericConfig['tokens'];
};

// Generic Creator
export type GlueStackConfig<A extends Tokens, C extends GenericAliases = {}> = {
  tokens: A;
  aliases: C;
};

export type CreateGenericConfig = GlueStackConfig<Tokens, GenericAliases>;

// Convert tokens to string with "$" prefix
export type StringifyToken<T> = T extends number | string ? `$${T}` : T;

// All Aliases
export type Aliases = GSConfig['aliases'];

export type PropertyTokenType = typeof propertyTokenMap;

type FilteredKeys<T> = {
  [K in keyof T]: T[K] extends never | undefined ? never : K;
}[keyof T];

type RemoveNever<T> = {
  [K in FilteredKeys<T>]: T[K];
};

// Known issue: Alias props that are not part of react native style prop should be remove from this type
// Mapping tokens with scale value of alaises
export type AliasesProps<X = Aliases> = RemoveNever<{
  [key in keyof Aliases]?: Aliases[key] extends keyof X
    ? PropertyTokenType[Aliases[key]] extends 'sizes'
      ?
          | StringifyToken<
              keyof GSConfig['tokens'][PropertyTokenType[Aliases[key]]]
            >
          | StringifyToken<keyof GSConfig['tokens']['space']>
          | ExtendRNStyle<X, Aliases[key]>
      :
          | StringifyToken<
              keyof GSConfig['tokens'][PropertyTokenType[Aliases[key]]]
            >
          | ExtendRNStyle<X, Aliases[key]>
    : never;
  // : StringifyToken<keyof GSConfig['tokens'][PropertyTokenType[Aliases[key]]]>;
}>;

//TODO: Genrate whole token i.e. $colors$primary or $space$4
// export type GenerateConfigPathType = {
//   [Key in keyof AllTokens]: `$${Key}${AllTokens[Key]}`;
// };

export type MediaQuery<X> = {
  condition: `$${keyof GSConfig['tokens']['mediaQueries']}`;
  value: SxProps<X>;
};
// PLATFORM extends 'web'
//     ? { outlineWidth?: string }
//     : {}
export type SxProps<X = AliasesProps, PLATFORM = ''> = {
  //TODO: Add CSS Properties here
  style?: (X | AliasesProps) &
    (PLATFORM extends 'web' ? { [key: string]: any } : { [key: string]: any });
  state?: {
    [key: string]: SxProps<X, PLATFORM>;
  };
  colorMode?: {
    [key: string]: SxProps<X, PLATFORM>;
  };
  // platform?: Record<PLATFORMS, SxProps<X, K>>;
  platform?: {
    [K in PLATFORMS]?: SxProps<X, K>;
  };
  descendants?: Record<string, SxProps<RNStyledProps, PLATFORM>>;
};

export type IState =
  | 'indeterminate'
  | 'checked'
  | 'readOnly'
  | 'required'
  | 'invalid'
  | 'focus'
  | 'focusVisible'
  | 'hover'
  | 'pressed'
  | 'active'
  | 'loading'
  | 'disabled';

export type IMediaQueries = keyof GSConfig['tokens']['mediaQueries'];

export type SxStyleProps<X, Variants> = {
  sx?: SxPropsNew<X, Variants> & {
    [Key in `@${IMediaQueries}`]?: SxPropsNew<X, Variants>;
  };
};

//Utility props combinations
// type Permutations<T extends string, U extends string | ''> = T extends any
//   ? U extends ''
//     ? T
//     : `${T}-${Permutations<Exclude<U, T>, ''>}`
//   : never;

// export type PropsCombinations10 = Permutations<IState, ''>;
// export type PropsCombinations11 = Permutations<PLATFORMS, ''>;
// export type PropsCombinations12 = Permutations<IMediaQueries, ''>;

// export type PropsCombinations21 = Permutations<PLATFORMS, IState>;
// export type PropsCombinations22 = Permutations<PLATFORMS, IMediaQueries>;
// export type PropsCombinations23 = Permutations<IMediaQueries, IState>;

// export type PropsCombinations30 = Permutations<PLATFORMS, PropsCombinations23>;

// export type PropsCombinations =
//   | PropsCombinations10
//   | PropsCombinations11
//   | PropsCombinations12
//   | PropsCombinations21
//   | PropsCombinations22
//   | PropsCombinations23
//   | PropsCombinations30;

// export type PropsCombinations = Permutations<IState, Platforms>;

// type CustomString = (string & {}) | (number & {});

// export type UtilityProps1 = {
//   [key in keyof Aliases as `${PropsCombinations}-${key}`]?:
//     | //@ts-ignore
//     StringifyToken<keyof GSConfig['tokens'][PropertyTokenType[Aliases[key]]]>
//     | (string & {})
//     | (number & {});
// };

export type UtilityProps<X> = TokenizedRNStyleProps<GetRNStyles<X>> &
  AliasesProps<RNStyles<X>>;

// export type UtilityPropsOld = AliasesProps;

// export type VariantType<Variants, X> = Record<keyof Variants, SxProps<X>>;
export type VariantType<Variants, X> =
  | {
      [Key1 in keyof Variants]: {
        [Key in keyof Variants[Key1] | (string & {})]?: Partial<SxProps<X>>;
      };
    }
  | { [Key: string & {}]: any };

export type SizeType<Sizes, X> = Record<keyof Sizes, SxProps<X>>;

export type StyledThemeProps<Variants, Sizes, X> = {
  baseStyle: SxProps<X> & {
    queries?: Array<MediaQuery<X>>;
  };
  variants: VariantType<Variants, X>;
  sizes?: SizeType<Sizes, X>;
  defaultProps?: {
    [Key in keyof Variants]?: keyof Variants[Key];
  };
};

export type ComponentProps<X, Variants, P> =
  | (SxStyleProps<X, Variants> & {
      states?: {
        [K in IState]?: boolean;
      };
    }) & {
      [Key in keyof Variants]?: Key extends keyof P
        ? P[Key] | keyof Variants[Key]
        : keyof Variants;
    };

// //Config typings
export interface IConfigProps {
  descendantStyle: Array<string>;
  ancestorStyle: Array<string>;
  resolveProps: Array<string>;
  DEBUG?: string;
}

export type ConfigType = Partial<IConfigProps>;

export type SxPropsTemp = {
  // style?: Partial<AliasesProps>;
  style?: any;
  state?: { [key: string]: SxProps };
  platform?: {
    [key: string]: SxProps;
  };
  descendants?: {
    [key: string]: SxProps;
  };
  colorMode?: {
    [key: string]: SxProps;
  };
};

export type Sx = {
  sx: SxProps;
  variant: any;
  size: any;
  states?: {
    hover?: SxProps;
    active?: SxProps;
    focus?: SxProps;
  };
  ancestorStyle: {
    [key: string]: SxProps;
  };
  children?: React.ReactNode | { (resolveContextChildrenStyle: any): void };
  colorMode?: string;
};

export type StyledValue = { [key: string]: any }; // This contains aliases and tokens
export type CSSObject = { [key: string]: any };
export type PLATFORMS = 'ios' | 'android' | 'web' | 'native';
export type COLORMODES = 'dark' | 'light';
export type STATES =
  | 'indeterminate'
  | 'checked'
  | 'readOnly'
  | 'required'
  | 'invalid'
  | 'focus'
  | 'focusVisible'
  | 'hover'
  | 'pressed'
  | 'active'
  | 'loading'
  | 'disabled';

export type Path = Array<string | number>;
export type QueryType = {
  condition: string;
  value: SX;
};

export type QueryTypeResolved = {
  original: QueryType;
  resolved: QueryType;
};
export type SX = {
  style?: StyledValue;
  queries?: Array<QueryType>;
  platform?: { [K in PLATFORMS]?: SX };
  colorMode?: { [K in COLORMODES]?: SX };
  state?: { [K in STATES]?: SX };
  descendants?: { [key: string]: SX };
};
export type SXResolved = {
  styledValueResolvedWithMeta: StyledValueResolvedWithMeta;
  queriesResolved: Array<QueryTypeResolved>;
  platform?: { [K in PLATFORMS]?: SX };
  colorMode?: { [key: string]: SXResolved };
  state?: { [key: string]: SXResolved };
  descendants?: { [key: string]: SXResolved };
};
export type Styled = {
  baseStyle?: SX;
  variants?: { [key: string]: SX };
  sizes?: { [key: string]: SX };
  defaultProps?: { [key: string]: any };
};
export type StyledResolved = {
  baseStyle: SXResolved | undefined;
  variants: { [key: string]: SXResolved } | undefined;
  compoundVariants?: Array<SXResolved> | undefined;
};
export type StyledValueResolvedWithMeta = {
  original?: StyledValue;
  resolved?: CSSObject;
  meta: {
    path?: Path;
    weight?: number;
    cssId: string;
    cssRuleset: string;
    colorMode?: string;
    queryCondition?: string;
    condition?: any;
  };
};
export type OrderedSXResolved = Array<StyledValueResolvedWithMeta>;
//@ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type Config = {
  alias: { [K: string]: any };
  tokens: {
    colors: { [K: string]: any };
    mediaQueries: { [K: string]: any };
  };
};

export type StateIds = {
  [key in STATES | COLORMODES]?: {
    ids: Array<string>;
  };
};

export type DefaultAndState = {
  default: Array<string>;
  state: StateIds;
};

// export type StyleIds = {
//   defaultAndState: DefaultAndState;
//   variants: {
//     [key: string]: DefaultAndState;
//   };
//   sizes: {
//     [key: string]: DefaultAndState;
//   };
// };

export type IdsStateColorMode = {
  ids?: Array<string>;
  state?: { [key: string]: IdsStateColorMode };
  colorMode?: { [key: string]: IdsStateColorMode };
  props?: any;
};

export type StyleIds = {
  baseStyle: IdsStateColorMode;
  variants: { [key: string]: { [key: string]: IdsStateColorMode } };
  compoundVariants: Array<{
    [key: string]: IdsStateColorMode;
    condition: { [key: string]: any };
  }>;
};

// variants: {
//   variant: {
//     redbox: {
//       ids: ['styleis1', 'sdsds'],
//     }
//   }
// }
// compoundVariants: [
//   ids: ['styleis1', 'sdsds'],
//   condition : {
//     variant: 'solid',
//     size: 'sm',
//     color: 'red'
//   }
// ]

export type ITheme<Variants, Sizes, P> = Partial<
  //@ts-ignore
  StyledThemeProps<Variants, Sizes, P['style']>
>;

export type VariantTypeNew<Variants, X> =
  | {
      [Key1 in keyof Variants]: {
        [Key in keyof Variants[Key1] | (string & {})]: Partial<
          SxPropsNew<X, Variants> & {
            [K in `@${IMediaQueries}`]?: SxPropsNew<X, Variants>;
          }
        >;
      };
    };
export type SizeTypeNew<Sizes, X> = {
  [Key in keyof Sizes]: SxPropsNew<X> & {
    [K in `@${IMediaQueries}`]: SxPropsNew<X>;
  };
};

type CompoundVariant<Variants, X> = {
  [Key in keyof VariantTypeNew<Variants, X>]?: keyof Variants[Key];
} & {
  value?: SxPropsNew<X, Variants>;
};

export type StyledThemePropsNew<Variants, X> = SxPropsNew<X, Variants> & {
  [Key in `@${IMediaQueries}`]: SxPropsNew<X, Variants>;
} & {
  variants: VariantTypeNew<Variants, X>;
  // sizes?: SizeTypeNew<Sizes, X>;
  compoundVariants?: Array<CompoundVariant<Variants, X>>;
  defaultProps?: {
    [Key in keyof VariantTypeNew<Variants, X>]?: keyof Variants[Key];
  } & { [key: string]: any };
};

export type IThemeNew<Variants, P> = Partial<
  //@ts-ignore
  StyledThemePropsNew<Variants, P['style']>
>;

type StylePropsType<X = AliasesProps, PLATFORM = ''> =
  | (RNStyles<X> & AliasesProps<RNStyles<X>>)
  | (PLATFORM extends '_web' ? CSSProperties : {});

export type SxPropsNew<
  X = AliasesProps,
  Variants = unknown,
  PLATFORM = ''
> = Partial<
  | StylePropsType<X, PLATFORM>
  | {
      props?: {
        [Key in keyof VariantTypeNew<Variants, X>]?: keyof Variants[Key];
      } & Partial<StylePropsType<X, PLATFORM>>;
    }
> & {
  [Key in `_${COLORMODES}`]?: SxPropsNew<X, Variants, PLATFORM>;
} & {
  [Key in `:${IState}`]?: SxPropsNew<X, Variants, PLATFORM>;
} & {
  [Key in `_${PLATFORMS}`]?: SxPropsNew<X, Variants, Key>;
} & {
  [Key in `_${string & {}}`]?:
    | SxPropsNew<X, Variants, PLATFORM>
    | {
        [key in string]?: any;
      };
};

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never;

export type RNStyles<X> = TokenizedRNStyleProps<
  UnionToIntersection<
    Partial<Exclude<X, undefined | null | false | string | number>>
  >
>;

export type GetRNStyles<X> = UnionToIntersection<
  Partial<Exclude<X, undefined | null | false | string | number>>
>;

//@ts-ignore
type ExtendRNStyle<X, key> = X[key] extends
  | string
  | undefined
  | (symbol & { __TYPE__: 'Color' })
  ? string & {}
  : //@ts-ignore
  X[key] extends string | undefined
  ? string & {}
  : //@ts-ignore
  X[key] extends number | undefined
  ? number & {}
  : //@ts-ignore
    (number & {}) | (string & {});

export type TokenizedRNStyleProps<X> = {
  [key in keyof X]?: key extends keyof PropertyTokenType
    ? //@ts-ignore
      | StringifyToken<keyof GSConfig['tokens'][PropertyTokenType[key]]>
        | ExtendRNStyle<X, key>
    : X[key];
};
