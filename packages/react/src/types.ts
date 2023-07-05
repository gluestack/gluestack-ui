import type {
  ImageProps,
  ImageStyle,
  TextProps,
  TextStyle,
  ViewProps,
  ViewStyle,
} from 'react-native';
import type { propertyTokenMap } from './propertyTokenMap';
import type { CSSProperties } from 'react';

export interface ICustomConfig {}

export interface GSConfig
  extends Omit<CreateGenericConfig, keyof ICustomConfig>,
    ICustomConfig {}

export type RNStyledProps = ViewStyle | ImageStyle | TextStyle;
export type RNProps = ViewProps | TextProps | ImageProps;
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
  fontWeights?: { [key: GenericKey]: any };
  fonts?: { [key: GenericKey]: any };
  fontSizes?: { [key: GenericKey]: any };
  shadows?: { [key: GenericKey]: any };
}

// Config Types
export type AliasesType = {
  [key: string]: keyof RNStyledProps;
};

export type GenericAliases = {};
export type GenericGlobalStyle = {
  // variants: {};
};
export type CreateConfig = {
  aliases: AliasesType;
  tokens: CreateGenericConfig['tokens'];
  globalStyle?: CreateGenericConfig['globalStyle'];
};

// Generic Creator
export type GlueStackConfig<
  IToken extends Tokens,
  IGlobalAliases,
  IGlobalStyle
> = {
  tokens: IToken;
  aliases: IGlobalAliases;
  globalStyle?: GlobalStyles<IGlobalAliases, IToken, IGlobalStyle>;
};

export type InferConfig<Conf> = Conf extends GlueStackConfig<
  infer A,
  infer C,
  infer D
>
  ? GlueStackConfig<A, C, D>
  : any;

export type CreateGenericConfig = GlueStackConfig<
  Tokens,
  GenericAliases,
  GenericGlobalStyle
>;

// Convert tokens to string with "$" prefix
export type StringifyToken<T> = T extends number | string ? `$${T}` : T;

// All Aliases
export type Aliases = GSConfig['aliases'];

export type PropertyTokenType = typeof propertyTokenMap;

type FilteredKeys<T> = {
  [K in keyof T]: T[K] extends never | undefined ? never : K;
}[keyof T];

export type RemoveNever<T> = {
  [K in FilteredKeys<T>]: T[K];
};

// Known issue: Alias props that are not part of react native style prop should be remove from this type
// Mapping tokens with scale value of alaises
export type AliasesProps<GenericComponentStyles = Aliases> = RemoveNever<{
  [key in keyof Aliases]?: Aliases[key] extends keyof GenericComponentStyles
    ? PropertyTokenType[Aliases[key]] extends 'sizes'
      ?
          | StringifyToken<
              keyof GSConfig['tokens'][PropertyTokenType[Aliases[key]]]
            >
          | StringifyToken<keyof GSConfig['tokens']['space']>
          | ExtendRNStyle<GenericComponentStyles, Aliases[key]>
      :
          | StringifyToken<
              keyof GSConfig['tokens'][PropertyTokenType[Aliases[key]]]
            >
          | ExtendRNStyle<GenericComponentStyles, Aliases[key]>
    : never;
  // : StringifyToken<keyof GSConfig['tokens'][PropertyTokenType[Aliases[key]]]>;
}>;

//TODO: Genrate whole token i.e. $colors$primary or $space$4
// export type GenerateConfigPathType = {
//   [Key in keyof AllTokens]: `$${Key}${AllTokens[Key]}`;
// };

export type MediaQuery<GenericComponentStyles> = {
  condition: `$${keyof GSConfig['tokens']['mediaQueries']}`;
  value: SxProps<GenericComponentStyles>;
};
// PLATFORM extends 'web'
//     ? { outlineWidth?: string }
//     : {}
export type SxProps<GenericComponentStyles = AliasesProps, PLATFORM = ''> = {
  //TODO: Add CSS Properties here
  style?: (GenericComponentStyles | AliasesProps) &
    (PLATFORM extends 'web' ? { [key: string]: any } : { [key: string]: any });
  state?: {
    [key: string]: SxProps<GenericComponentStyles, PLATFORM>;
  };
  colorMode?: {
    [key: string]: SxProps<GenericComponentStyles, PLATFORM>;
  };
  // platform?: Record<PLATFORMS, SxProps<X, K>>;
  platform?: {
    [K in PLATFORMS]?: SxProps<GenericComponentStyles, K>;
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

export type SxStyleProps<GenericComponentStyles, Variants> = {
  sx?: SxPropsNew<GenericComponentStyles, Variants> & {
    [Key in `@${IMediaQueries}`]?: SxPropsNew<GenericComponentStyles, Variants>;
  };
};

export type UtilityProps<GenericComponentStyles> = TokenizedRNStyleProps<
  GetRNStyles<GenericComponentStyles>
> &
  AliasesProps<RNStyles<GenericComponentStyles>>;

export type VariantType<Variants, GenericComponentStyles> =
  | {
      [Key1 in keyof Variants]: {
        [Key in keyof Variants[Key1] | (string & {})]?: Partial<
          SxProps<GenericComponentStyles>
        >;
      };
    }
  | { [Key: string & {}]: any };

// export type SizeType<Sizes, X> = Record<keyof Sizes, SxProps<X>>;

export type StyledThemeProps<Variants, GenericComponentStyles> = {
  baseStyle: SxProps<GenericComponentStyles> & {
    queries?: Array<MediaQuery<GenericComponentStyles>>;
  };
  variants: VariantType<Variants, GenericComponentStyles>;
  // sizes?: SizeType<Sizes, X>;
  defaultProps?: {
    [Key in keyof Variants]?: keyof Variants[Key];
  };
};

// type GlobalStyle = GSConfig['globalStyle'];
//@ts-ignore
type GlobalVariants = GSConfig['globalStyle']['variants'];

type MergeNested<T, U> = T extends object
  ? U extends object
    ? {
        [K in keyof (T & U)]: K extends keyof T
          ? K extends keyof U
            ? MergeNested<T[K], U[K]>
            : T[K]
          : //@ts-ignore
            U[K];
      }
    : T
  : U;

export type ComponentProps<GenericComponentStyles, Variants, P> = SxStyleProps<
  GenericComponentStyles,
  Variants
> & {
  states?: {
    [K in IState]?: boolean;
  };
} & (GSConfig['globalStyle'] extends object
    ? {
        [Key in keyof MergeNested<
          GlobalVariants,
          Variants
        >]?: keyof MergeNested<GlobalVariants, Variants>[Key];
      } & Omit<P, keyof Variants>
    : {
        [Key in keyof Variants]?: keyof Variants[Key];
      });

// export type ComponentProps<GenericComponentStyles, Variants, P> = SxStyleProps<
//   GenericComponentStyles,
//   Variants
// > & {
//   states?: {
//     [K in IState]?: boolean;
//   };
// } & GSConfig['globalStyle']['variants'] extends object ? { ab_true: string } : { ab_false: string };

// export type ComponentProps<X, Variants, P> =
// | (SxStyleProps<X, Variants> & {
//     states?: {
//       [K in IState]?: boolean;
//     };
//   }) &
//     (
//       | {
//           [Key in keyof Variants]?: Key extends keyof P
//             ? P[Key] | keyof Variants[Key]
//             : keyof Variants[Key];
//         }
//       | {
//           [Key in keyof GlobalVariants]?: keyof GlobalVariants[Key];
//         }
//     );

// //Config typings
export interface IConfigProps {
  descendantStyle: Array<string>;
  ancestorStyle: Array<string>;
  resolveProps: Array<string>;
}

export type ConfigType = Partial<IConfigProps> & { [key: string]: any };

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

export type ITheme<Variants, P> = Partial<
  //@ts-ignore
  StyledThemeProps<Variants & GlobalVariants, P['style']>
>;

export type VariantTypeNew<
  Variants,
  GenericComponentStyles,
  GenericComponentProps
> =
  | {
      [Key1 in keyof Variants]: {
        [Key in keyof Variants[Key1] | (string & {})]: Partial<
          SxPropsNew<GenericComponentStyles, Variants> & {
            [K in `@${IMediaQueries}`]?: SxPropsNew<
              GenericComponentStyles,
              Variants,
              GenericComponentProps
            >;
          }
        >;
      };
    };
// export type SizeTypeNew<Sizes, X> = {
//   [Key in keyof Sizes]: SxPropsNew<X> & {
//     [K in `@${IMediaQueries}`]: SxPropsNew<X>;
//   };
// };

type CompoundVariant<Variants, GenericComponentStyles, GenericComponentProps> =
  {
    [Key in keyof Variants]?: keyof Variants[Key];
  } & {
    value?: SxPropsNew<GenericComponentStyles, Variants, GenericComponentProps>;
  };

export type StyledThemePropsNew<
  Variants,
  GenericComponentStyles,
  GenericComponentProps
> = SxPropsNew<
  GenericComponentStyles,
  Variants & GlobalVariants,
  GenericComponentProps
> & {
  [Key in `@${IMediaQueries}`]: SxPropsNew<
    GenericComponentStyles,
    Variants,
    GenericComponentProps
  >;
} & {
  variants: VariantTypeNew<
    Variants,
    GenericComponentStyles,
    GenericComponentProps
  >;
  // sizes?: SizeTypeNew<Sizes, X>;
  compoundVariants?: Array<
    CompoundVariant<Variants, GenericComponentStyles, GenericComponentProps>
  >;
  defaultProps?: {
    [Key in keyof MergeNested<
      VariantTypeNew<Variants, GenericComponentStyles, GenericComponentProps>,
      GlobalVariants
    >]?: keyof MergeNested<
      VariantTypeNew<Variants, GenericComponentStyles, GenericComponentProps>,
      GlobalVariants
    >[Key];
  } & { [key: string]: any };
};

export type IThemeNew<Variants, P> = Partial<
  //@ts-ignore
  StyledThemePropsNew<Variants, P['style'], P>
>;

type StylePropsType<GenericComponentStyles = AliasesProps, PLATFORM = ''> =
  | (RNStyles<GenericComponentStyles> &
      AliasesProps<RNStyles<GenericComponentStyles>>)
  | (PLATFORM extends '_web' ? TokenizedRNStyleProps<CSSProperties> : {});

export type SxPropsNew<
  GenericComponentStyles = AliasesProps,
  Variants = unknown,
  GenericComponentProps = unknown,
  PLATFORM = ''
> = Partial<
  | StylePropsType<GenericComponentStyles, PLATFORM>
  | {
      props?: GenericComponentProps & {
        [Key in keyof Variants]?: keyof Variants[Key];
      } & Partial<StylePropsType<GenericComponentStyles, PLATFORM>> & {
          as?: any;
        };
    }
> & {
  [Key in `_${COLORMODES}`]?: SxPropsNew<
    GenericComponentStyles,
    Variants,
    GenericComponentProps,
    PLATFORM
  >;
} & {
  [Key in `:${IState}`]?: SxPropsNew<
    GenericComponentStyles,
    Variants,
    GenericComponentProps,
    PLATFORM
  >;
} & {
  [Key in `_${PLATFORMS}`]?: SxPropsNew<
    GenericComponentStyles,
    Variants,
    GenericComponentProps,
    Key
  >;
} & {
  [Key in `_${string}`]?: SxPropsNew<
    RNStyledProps,
    Variants,
    GenericComponentProps,
    PLATFORM
  > & {
    props?: RNProps &
      RNStyledProps & {
        as?: any;
      };
  } & Partial<{
      [key: string]: any;
    }>;
};

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never;

export type RNStyles<GenericComponentStyles> = TokenizedRNStyleProps<
  UnionToIntersection<
    Partial<
      Exclude<
        GenericComponentStyles,
        undefined | null | false | string | number
      >
    >
  >
>;

export type GetRNStyles<GenericComponentStyles> = UnionToIntersection<
  Partial<
    Exclude<GenericComponentStyles, undefined | null | false | string | number>
  >
>;

export type ExtendRNStyle<GenericComponentStyles, key> =
  //@ts-ignore
  GenericComponentStyles[key] extends
    | string
    | undefined
    | (symbol & { __TYPE__: 'Color' })
    ? string & {}
    : //@ts-ignore
    GenericComponentStyles[key] extends string | undefined
    ? string & {}
    : //@ts-ignore
    GenericComponentStyles[key] extends number | undefined
    ? number & {}
    : //@ts-ignore
    GenericComponentStyles[key] extends number | string | undefined
    ? (number & {}) | (string & {})
    : //@ts-ignore
      GenericComponentStyles[key];

export type TokenizedRNStyleProps<GenericComponentStyles> = {
  [key in keyof GenericComponentStyles]?: key extends keyof PropertyTokenType
    ? PropertyTokenType[key] extends 'sizes'
      ?
          | StringifyToken<keyof GSConfig['tokens']['space']>
          | StringifyToken<keyof GSConfig['tokens'][PropertyTokenType[key]]>
          | ExtendRNStyle<GenericComponentStyles, key>
      : //@ts-ignore
        | StringifyToken<keyof GSConfig['tokens'][PropertyTokenType[key]]>
          | ExtendRNStyle<GenericComponentStyles, key>
    : GenericComponentStyles[key];
};

type PropertyTokenMapType = {
  [key: string]: keyof Tokens;
};
type ResolverType = { [key: string]: (rawValue: any, resolver: any) => any };
type PropsResolveType = {
  props?: Partial<ResolverType>;
};
type PropertyResolverType = PropsResolveType & ResolverType;
export type ExtendedConfigType = {
  propertyTokenMap?: PropertyTokenMapType;
  propertyResolver?: PropertyResolverType;
};

export type GlobalVariantAliasesProps<Aliases, Tokens> =
  | RemoveNever<{
      [key in keyof Aliases]?: Aliases[key] extends keyof RNStyledProps
        ? Aliases[key] extends keyof PropertyTokenType
          ? PropertyTokenType[Aliases[key]] extends keyof Tokens
            ?
                | StringifyToken<keyof Tokens[PropertyTokenType[Aliases[key]]]>
                | ExtendRNStyle<RNStyledProps, Aliases[key]>
            : never
          : any
        : any;
    }>
  | RNStyledProps;

// export type GlobalVariantAliasesProps = {
//   hello:
// }
export type GlobalVariantSx<Aliases, Tokens, Variants, PLATFORM = ''> = Partial<
  GlobalVariantAliasesProps<Aliases, Tokens>
> & {
  props?: RNProps &
    RNStyledProps &
    GlobalVariantAliasesProps<Aliases, Tokens> & {
      [k in keyof Variants]?: keyof Variants[k];
    };
} & {
  [Key in `_${COLORMODES}`]?: GlobalVariantSx<
    Aliases,
    Tokens,
    Variants,
    PLATFORM
  >;
} & {
  [Key in `:${IState}`]?: GlobalVariantSx<Aliases, Tokens, Variants, PLATFORM>;
} & {
  [Key in `_${PLATFORMS}`]?: GlobalVariantSx<Aliases, Tokens, Variants, Key>;
} & {
  [Key in `_${string & {}}`]?:
    | GlobalVariantSx<Aliases, Tokens, Variants, PLATFORM>
    | {
        [key in string]?: any;
      };
};

type GlobalCompoundVariant<Variants, AliasTypes, TokenTypes> = {
  [Key in keyof Variants]?: keyof Variants[Key];
} & {
  value?: GlobalVariantSx<AliasTypes, TokenTypes, Variants>;
};

// GlobalVariantSx<
//       AliasTypes,
//       TokenTypes,
//       'variants' extends keyof Variants ? Variants['variants'] : unknown
//     >

type GlobalVariantType<Variants, AliasTypes, TokenTypes> = {
  [Key: string & {}]: {
    [Key in keyof Variants | (string & {})]?: Partial<
      GlobalVariantSx<AliasTypes, TokenTypes, Variants> & {
        // @ts-ignore
        [K in `@${keyof TokenTypes['mediaQueries']}`]?: GlobalVariantSx<
          AliasTypes,
          TokenTypes,
          Variants
        >;
      }
    >;
  };
};

export type GlobalStyles<AliasTypes, TokenTypes, Variants> = GlobalVariantSx<
  AliasTypes,
  TokenTypes,
  'variants' extends keyof Variants ? Variants['variants'] : unknown
> & {
  // @ts-ignore
  [K in `@${keyof TokenTypes['mediaQueries']}`]?: GlobalVariantSx<
    AliasTypes,
    TokenTypes,
    Variants
  >;
} & {
  variants: GlobalVariantType<
    'variants' extends keyof Variants ? Variants['variants'] : unknown,
    AliasTypes,
    TokenTypes
  >;
  compundVariants?: readonly GlobalCompoundVariant<
    'variants' extends keyof Variants ? Variants['variants'] : unknown,
    AliasTypes,
    TokenTypes
  >[];
};

// GlobalVariantSx<
// AliasTypes,
// TokenTypes,
// 'variants' extends keyof Variants ? Variants['variants'] : unknown
// > &
// Partial<{
//   variants?: GlobalVariantType<
//     'variants' extends keyof Variants ? Variants['variants'] : unknown,
//     AliasTypes,
//     TokenTypes
//   >;
//   compundVariants?: readonly GlobalCompoundVariant<
//     'variants' extends keyof Variants ? Variants['variants'] : unknown,
//     AliasTypes,
//     TokenTypes
//   >[];
// }>;
