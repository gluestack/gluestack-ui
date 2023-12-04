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

export type RNStyledProps = ViewStyle | ImageStyle | TextStyle;
export type RNProps = ViewProps | TextProps | ImageProps;
export type GenericKey = string | number | symbol;
export type PropertyTokenType = typeof propertyTokenMap;
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
export type StyledValue = { [key: string]: any }; // This contains aliases and tokens
export type CSSObject = { [key: string]: any };
export type PLATFORMS = 'ios' | 'android' | 'web';
export type COLORMODES = 'dark' | 'light';

/*************************** CORE TYPES *************************************************/

export interface IStyledPlugin {
  config?: IStyled;
  register(styledUtils: IStyled): void;
  inputMiddleWare(styledObj: any): void;
  componentMiddleWare?(props: any): void;
}
export interface IAnimationDriverPlugin {
  config?: IStyled;
  register(styledUtils: IStyled): void;
  engine: any;
}

export class IAnimationResolver {
  aliases?: any;
  tokens?: any;
  ref?: any;
}
export class IStyled {
  aliases?: any;
  tokens?: any;
  ref?: any;
}

export interface Tokens {
  colors?: { [key: GenericKey]: Record<string, any> & {} };
  sizes?: { [key: GenericKey]: Record<string, any> & {} };
  space?: { [key: GenericKey]: Record<string, any> & {} };
  borderWidths?: { [key: GenericKey]: Record<string, any> & {} };
  radii?: { [key: GenericKey]: Record<string, any> & {} };
  breakpoints?: { [key: GenericKey]: Record<string, any> & {} };
  mediaQueries?: { [key: GenericKey]: Record<string, any> & {} };
  letterSpacings?: { [key: GenericKey]: Record<string, any> & {} };
  opacity?: { [key: GenericKey]: Record<string, any> & {} };
  lineHeights?: { [key: GenericKey]: any };
  fontWeights?: { [key: GenericKey]: any };
  fonts?: { [key: GenericKey]: any };
  fontSizes?: { [key: GenericKey]: any };
}

// Config Types
export type AliasesType = {
  [key: string]: keyof RNStyledProps;
};

export type GlobalPluginType = unknown;
export type GenericAliases = {};
export type GenericGlobalStyle = {
  // variants: {};
};
export type CreateConfig = {
  aliases: AliasesType;
  tokens: CreateGenericConfig['tokens'];
  globalStyle?: CreateGenericConfig['globalStyle'];
};

export type ThemeStyles<IToken> = Partial<{
  [key: string]: {
    [key in keyof IToken]?: {
      // @ts-ignore
      [k in `$${keyof IToken[key]}`]?:  // @ts-ignore
        | `$${key}$${keyof IToken[key]}`
        | (String & {});
    };
  };
}>;

// Generic Creator
export type GlueStackConfig<
  IToken extends Tokens,
  IGlobalAliases,
  IGlobalStyle,
  PluginType = []
> = {
  tokens: IToken;
  aliases: IGlobalAliases;
  globalStyle?: GlobalStyles<IGlobalAliases, IToken, IGlobalStyle>;
  plugins?: PluginType;
  themes?: ThemeStyles<IToken>;
};

export type ComponentsThemeType<IGlobalAliases, IToken, IComponents> = {
  [key: string]: {
    theme: GlobalStyles<IGlobalAliases, IToken, IComponents>;
  };
};

export type InferConfig<Conf> = Conf extends GlueStackConfig<
  infer A,
  infer C,
  infer D,
  infer B
>
  ? GlueStackConfig<A, C, D, B>
  : any;

export type CreateGenericConfig = GlueStackConfig<
  Tokens,
  GenericAliases,
  GenericGlobalStyle,
  GlobalPluginType
>;

export type CreateGenericComponents = GlueStackConfig<
  Tokens,
  GenericAliases,
  GenericGlobalStyle
>;

// All Aliases
export type Aliases = GSConfig['aliases'];
export type Plugins = GSConfig['plugins'];
export type Components = GSConfig['components'];
export type IMediaQueries = keyof GSConfig['tokens']['mediaQueries'];

export type SxStyleProps<
  GenericComponentStyles,
  Variants,
  GenericComponentProps,
  PluginType
> = {
  sx?: Partial<
    SxProps<
      GenericComponentStyles,
      Variants,
      GenericComponentProps,
      '',
      '',
      PluginType
    > & {
      [Key in `@${IMediaQueries}`]?: SxProps<
        GenericComponentStyles,
        Variants,
        GenericComponentProps,
        '',
        Key,
        PluginType
      >;
    }
  >;
};

//@ts-ignore
type GlobalVariants = GSConfig['globalStyle']['variants'];

export type IComponentStyleConfig<ComCon = any> = Partial<{
  descendantStyle: any;
  ancestorStyle: any;
  resolveProps: any;
  componentName: ComCon;
}>;

export type Config = {
  alias: { [K: string]: any };
  tokens: {
    colors: { [K: string]: any };
    mediaQueries: { [K: string]: any };
  };
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
  plugins?: Array<any>;
};

/*********************** GLOBAL STYLE TYPES ****************************************/

export type GlobalVariantAliasesProps<Aliases, Tokens> =
  | AliasesProps<RNStyledProps, Aliases, Tokens>
  | RNStyledProps;

export type GlobalVariantSx<Aliases, Tokens, Variants, PLATFORM = ''> = Partial<
  GlobalVariantAliasesProps<Aliases, Tokens>
> & {
  props?: RNProps &
    RNStyledProps &
    GlobalVariantAliasesProps<Aliases, Tokens> & {
      [k in keyof Variants]?: keyof Variants[k];
    } & {
      as?: any;
    } & Partial<{ [Key: string]: any }>;
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
  compoundVariants?: readonly GlobalCompoundVariant<
    'variants' extends keyof Variants ? Variants['variants'] : unknown,
    AliasTypes,
    TokenTypes
  >[];
};

/*********************** USER THEME / SX TYPES ****************************************/

export type ITheme<Variants, P> = Partial<
  StyledThemeProps<
    Variants,
    'style' extends keyof P ? P['style'] : {},
    P,
    'animationComponentGluestack' extends keyof P
      ? P['animationComponentGluestack'] extends true
        ? Plugins
        : []
      : []
  >
>;

export type StyledThemeProps<
  Variants,
  GenericComponentStyles,
  GenericComponentProps,
  PluginTypes
> = SxProps<
  GenericComponentStyles,
  Variants & GlobalVariants,
  GenericComponentProps,
  '',
  '',
  PluginTypes
> & {
  [Key in `@${IMediaQueries}`]: SxProps<
    GenericComponentStyles,
    Variants,
    GenericComponentProps,
    '',
    Key,
    PluginTypes
  >;
} & {
  variants: VariantType<
    Variants,
    GenericComponentStyles,
    GenericComponentProps,
    PluginTypes
  >;
  // sizes?: SizeTypeNew<Sizes, X>;
  compoundVariants?: Array<
    CompoundVariant<Variants, GenericComponentStyles, GenericComponentProps>
  >;
  defaultProps?: {
    [Key in keyof MergeNested<
      VariantType<
        Variants,
        GenericComponentStyles,
        GenericComponentProps,
        PluginTypes
      >,
      GlobalVariants
    >]?: keyof MergeNested<
      VariantType<
        Variants,
        GenericComponentStyles,
        GenericComponentProps,
        PluginTypes
      >,
      GlobalVariants
    >[Key];
  } & { [key: string]: any };
};

type StylePropsType<GenericComponentStyles = AliasesProps, PLATFORM = ''> =
  | (RNStyles<GenericComponentStyles> &
      AliasesProps<RNStyles<GenericComponentStyles>>)
  | (PLATFORM extends '_web' ? TokenizedRNStyleProps<CSSProperties> : {});

type PassingPropsType<
  GenericComponentStyles,
  Variants,
  GenericComponentProps,
  MediaQuery,
  PluginType
> = MediaQuery extends ''
  ? {
      props?: Partial<
        GenericComponentProps &
          RNStyles<GenericComponentStyles> &
          AliasesProps<RNStyles<GenericComponentStyles>> & {
            as?: any;
          } & {
            [Key in keyof MergeNested<
              VariantType<
                Variants,
                GenericComponentStyles,
                GenericComponentProps,
                PluginType
              >,
              GlobalVariants
            >]?:
              | keyof MergeNested<
                  VariantType<
                    Variants,
                    GenericComponentStyles,
                    GenericComponentProps,
                    PluginType
                  >,
                  GlobalVariants
                >[Key];
          } & { [Key: string]: any }
      >;
    }
  : {};

type AnimatedPropsType = {
  opacity: number | string;
  x: number | string | {};
  y: number | string | {};
  scale: any;
  scaleX: any;
  scaleY: any;
  skewX: any;
  skewY: any;
  perspective: any;
  rotate: number;
  rotateY: number;
  rotateZ: number;
  matrix: any;
};
// componentDriver
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type PluginPropsType<
  PluginType,
  GenericComponentProps,
  GenericComponentStyles,
  PLATFORM
> = {
  [key in keyof UnionToIntersection<
    // @ts-ignore
    ReturnType<PluginType[number]['inputMiddleWare']>
  >]: Partial<AnimatedPropsType> &
    Partial<StylePropsType<GenericComponentStyles, PLATFORM>> &
    Partial<GenericComponentProps>;
};

export type SxProps<
  GenericComponentStyles = AliasesProps,
  Variants = unknown,
  GenericComponentProps = unknown,
  PLATFORM = '',
  MediaQuery = '',
  PluginType = []
> =
  | Partial<
      StylePropsType<GenericComponentStyles, PLATFORM> &
        PassingPropsType<
          GenericComponentStyles,
          Variants,
          GenericComponentProps,
          MediaQuery,
          PluginType
        >
    >
  | (Partial<
      PluginPropsType<
        PluginType,
        GenericComponentProps,
        GenericComponentStyles,
        PLATFORM
      >
    > & {
      [Key in `_${COLORMODES}`]?: SxProps<
        GenericComponentStyles,
        Variants,
        GenericComponentProps,
        PLATFORM,
        MediaQuery,
        PluginType
      >;
    } & {
      [Key in `:${IState}`]?: SxProps<
        GenericComponentStyles,
        Variants,
        GenericComponentProps,
        PLATFORM,
        MediaQuery,
        PluginType
      >;
    } & {
      [Key in `_${PLATFORMS}`]?: SxProps<
        GenericComponentStyles,
        Variants,
        GenericComponentProps,
        Key,
        MediaQuery,
        PluginType
      > &
        PassingPropsType<
          GenericComponentStyles,
          Variants,
          GenericComponentProps,
          MediaQuery,
          PluginType
        > &
        Partial<{
          [key: string]: any;
        }>;
    } & {
      [Key in `_${string}`]?: SxProps<
        RNStyledProps,
        {},
        GenericComponentProps,
        PLATFORM,
        MediaQuery,
        PluginType
      > &
        PassingPropsType<
          GenericComponentStyles,
          {},
          GenericComponentProps,
          MediaQuery,
          PluginType
        > &
        Partial<{
          [key: string]: any;
        }>;
    });

export type VariantType<
  Variants,
  GenericComponentStyles,
  GenericComponentProps,
  PluginTypes
> =
  | {
      [Key1 in keyof Variants]: {
        [Key in keyof Variants[Key1]]: Partial<
          SxProps<
            GenericComponentStyles,
            Variants,
            GenericComponentProps,
            '',
            '',
            PluginTypes
          > & {
            [K in `@${IMediaQueries}`]?: SxProps<
              GenericComponentStyles,
              Variants,
              GenericComponentProps,
              '',
              K,
              PluginTypes
            >;
          }
        >;
      };
    };

type CompoundVariant<Variants, GenericComponentStyles, GenericComponentProps> =
  {
    [Key in keyof Variants]?: keyof Variants[Key] extends 'true' | 'false'
      ? boolean
      : keyof Variants[Key];
  } & {
    value?: SxProps<GenericComponentStyles, Variants, GenericComponentProps>;
  };

/*********************** VERBOSED THEME / SX TYPES ****************************************/

export type VerbosedSxProps<
  GenericComponentStyles = AliasesProps,
  PLATFORM = ''
> = {
  style?: (GenericComponentStyles | AliasesProps) &
    (PLATFORM extends 'web' ? { [key: string]: any } : { [key: string]: any });
  state?: {
    [key: string]: VerbosedSxProps<GenericComponentStyles, PLATFORM>;
  };
  colorMode?: {
    [key: string]: VerbosedSxProps<GenericComponentStyles, PLATFORM>;
  };
  platform?: {
    [K in PLATFORMS]?: VerbosedSxProps<GenericComponentStyles, K>;
  };
  descendants?: Record<string, VerbosedSxProps<RNStyledProps, PLATFORM>>;
};

export type StyledVerbosedThemeProps<Variants, GenericComponentStyles> = {
  baseStyle: VerbosedSxProps<GenericComponentStyles> & {
    queries?: Array<MediaQuery<GenericComponentStyles>>;
  };
  variants: VerbosedVariantType<Variants, GenericComponentStyles>;
  defaultProps?: {
    [Key in keyof Variants]?: keyof Variants[Key];
  };
};

export type MediaQuery<GenericComponentStyles> = {
  condition: `$${keyof GSConfig['tokens']['mediaQueries']}`;
  value: VerbosedSxProps<GenericComponentStyles>;
};

export type VerbosedVariantType<Variants, GenericComponentStyles> =
  | {
      [Key1 in keyof Variants]: {
        [Key in keyof Variants[Key1] | (string & {})]?: Partial<
          VerbosedSxProps<GenericComponentStyles>
        >;
      };
    }
  | { [Key: string & {}]: any };

export type SxPropsTemp = {
  style?: any;
  state?: { [key: string]: VerbosedSxProps };
  platform?: {
    [key: string]: VerbosedSxProps;
  };
  descendants?: {
    [key: string]: VerbosedSxProps;
  };
  colorMode?: {
    [key: string]: VerbosedSxProps;
  };
};

export type Sx = {
  sx: VerbosedSxProps;
  variant: any;
  size: any;
  states?: {
    hover?: VerbosedSxProps;
    active?: VerbosedSxProps;
    focus?: VerbosedSxProps;
  };
  ancestorStyle: {
    [key: string]: VerbosedSxProps;
  };
  children?: React.ReactNode | { (resolveContextChildrenStyle: any): void };
  colorMode?: string;
};

export type Path = Array<string | number>;

export type QueryType = {
  condition: string;
  value: VerbosedSX;
};

export type QueryTypeResolved = {
  original: QueryType;
  resolved: QueryType;
};

export type VerbosedSX = {
  style?: StyledValue;
  queries?: Array<QueryType>;
  platform?: { [K in PLATFORMS]?: VerbosedSX };
  colorMode?: { [K in COLORMODES]?: VerbosedSX };
  state?: { [K in IState]?: VerbosedSX };
  descendants?: { [key: string]: VerbosedSX };
};

export type VerbosedSxResolved = {
  styledValueResolvedWithMeta: StyledValueResolvedWithMeta;
  queriesResolved: Array<QueryTypeResolved>;
  platform?: { [K in PLATFORMS]?: VerbosedSX };
  colorMode?: { [key: string]: VerbosedSxResolved };
  state?: { [key: string]: VerbosedSxResolved };
  descendants?: { [key: string]: VerbosedSxResolved };
};

export type Styled = {
  baseStyle?: VerbosedSX;
  variants?: { [key: string]: VerbosedSX };
  sizes?: { [key: string]: VerbosedSX };
  defaultProps?: { [key: string]: any };
};

export type StyledResolved = {
  baseStyle: VerbosedSxResolved | undefined;
  variants: { [key: string]: VerbosedSxResolved } | undefined;
  compoundVariants?: Array<VerbosedSxResolved> | undefined;
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

export type IVerbosedTheme<Variants, P> = Partial<
  //@ts-ignore
  StyledVerbosedThemeProps<Variants & GlobalVariants, P['style']>
>;

export type StateIds = {
  [key in IState | COLORMODES]?: {
    ids: Array<string>;
  };
};

export type DefaultAndState = {
  default: Array<string>;
  state: StateIds;
};

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

/********************* CONFIG FROM DECLARE MODULE *****************************************/

export interface ICustomConfig {}

export interface ICustomComponents {}

export interface GSConfig
  extends Omit<CreateGenericConfig, keyof ICustomConfig>,
    ICustomConfig,
    GenericComponents {
  components: ICustomComponents;
}

interface GenericComponents {
  components: {};
}

/********************* COMPONENT PROPS TYPE *****************************************/

export type ComponentProps<GenericComponentStyles, Variants, P, ComCon> =
  SxStyleProps<
    GenericComponentStyles,
    Variants,
    P,
    'animationComponentGluestack' extends keyof P
      ? P['animationComponentGluestack'] extends true
        ? Plugins
        : []
      : []
  > & {
    states?: {
      [K in IState]?: boolean;
    };
  } & (GSConfig['globalStyle'] extends object
      ? {
          [Key in keyof MergeNestedThree<
            GlobalVariants,
            Variants,
            // @ts-ignore
            Components[`${ComCon}`]['theme']['variants']
          >]?: keyof MergeNestedThree<
            GlobalVariants,
            Variants,
            // @ts-ignore
            Components[`${ComCon}`]['theme']['variants']
          >[Key] extends 'true' | 'false'
            ? boolean
            : keyof MergeNestedThree<
                GlobalVariants,
                Variants,
                // @ts-ignore
                Components[`${ComCon}`]['theme']['variants']
              >[Key];
        } & Omit<P, keyof Variants>
      : {
          [Key in keyof MergeNested<
            Variants,
            // @ts-ignore
            Components[`${ComCon}`]['theme']['variants']
          >]?: keyof MergeNested<
            Variants, // @ts-ignore
            Components[`${ComCon}`]['theme']['variants']
          >[Key] extends 'true' | 'false'
            ? boolean
            : keyof MergeNested<
                Variants,
                // @ts-ignore
                Components[`${ComCon}`]['theme']['variants']
              >[Key];
        });

export type VerbosedUtilityProps<
  GenericComponentStyles,
  VariantProps,
  GenericComponentProps
> = {
  [key in `$${IState}`]: SxProps<
    GenericComponentStyles,
    VariantProps,
    GenericComponentProps
  >;
} & {
  [key in `$${PLATFORMS}`]?: SxProps<
    GenericComponentStyles,
    VariantProps,
    GenericComponentProps
  >;
} & {
  [key in `$${IMediaQueries}`]?: SxProps<
    GenericComponentStyles,
    VariantProps,
    GenericComponentProps
  >;
} & {
  [key in `$_${string}`]?: SxProps<
    RNStyledProps,
    VariantProps,
    GenericComponentProps
  >;
};

type Permutations<T extends string, U extends string | ''> = T extends any
  ? U extends ''
    ? T
    : `$${T}-${Permutations<Exclude<U, T>, ''>}`
  : never;

type StatePropsCombination = Permutations<IState, keyof Aliases>;
type PlatformPropsCombination = Permutations<PLATFORMS, keyof Aliases>;
type MediaQueryCombination = Permutations<IMediaQueries, keyof Aliases>;
type ColorModeCombination = Permutations<COLORMODES, keyof Aliases>;

type LastPart<T extends string> = T extends `${string}-${infer Rest}`
  ? LastPart<Rest>
  : T;

export type PropsCombinations =
  | StatePropsCombination
  | PlatformPropsCombination
  | MediaQueryCombination
  | ColorModeCombination;

export type UtilityProps<
  GenericComponentStyles,
  Variants,
  GenericComponentProps
> = Omit<
  TokenizedRNStyleProps<GetRNStyles<GenericComponentStyles>>,
  keyof GenericComponentProps
> &
  Omit<
    AliasesProps<GetRNStyles<GenericComponentStyles>>,
    keyof GenericComponentProps
  > &
  Partial<{
    [key in PropsCombinations]?: LastPart<key> extends keyof Aliases
      ? Aliases[LastPart<key>] extends keyof GetRNStyles<GenericComponentStyles>
        ? PropertyTokenType[Aliases[LastPart<key>]] extends 'sizes'
          ?
              | WithSizeNegativeValue<GSConfig['tokens']>
              | ExtendRNStyle<GenericComponentStyles, Aliases[LastPart<key>]>
          : PropertyTokenType[Aliases[LastPart<key>]] extends 'space'
          ?
              | WithNegativeValue<
                  StringifyToken<
                    keyof GSConfig['tokens'][PropertyTokenType[Aliases[LastPart<key>]]]
                  >
                >
              | ExtendRNStyle<
                  GetRNStyles<GenericComponentStyles>,
                  Aliases[LastPart<key>]
                >
          :
              | StringifyToken<
                  keyof GSConfig['tokens'][PropertyTokenType[Aliases[LastPart<key>]]]
                >
              | ExtendRNStyle<
                  GetRNStyles<GenericComponentStyles>,
                  Aliases[LastPart<key>]
                >
        : never
      : any;
  }> &
  Partial<
    VerbosedUtilityProps<
      GenericComponentStyles,
      Variants,
      GenericComponentProps
    >
  >;
// &
// Partial<{
//   [key in `$${IState | PLATFORMS | IMediaQueries}-${string}`]?: any;
// }>;

/********************* UTILITY TYPE *****************************************/

export type StringifyToken<T> = T extends number | string ? `$${T}` : T;

type FilteredKeys<T> = {
  [K in keyof T]: T[K] extends never | undefined ? never : K;
}[keyof T];

export type RemoveNever<T> = {
  [K in FilteredKeys<T>]: T[K];
};

type WithNegativeValue<T> = T extends string | number ? T | `-${T}` : T;
// Mapping tokens with scale value of alaises
export type AliasesProps<
  GenericComponentStyles = RNStyledProps,
  Aliases = GSConfig['aliases'],
  Tokens = GSConfig['tokens']
> = RemoveNever<{
  [key in keyof Aliases]?: Aliases[key] extends keyof GenericComponentStyles
    ? //@ts-expect-error
      PropertyTokenType[Aliases[key]] extends 'sizes'
      ?
          | WithSizeNegativeValue<Tokens>
          | ExtendRNStyle<GenericComponentStyles, Aliases[key]>
      : //@ts-expect-error
      PropertyTokenType[Aliases[key]] extends 'space'
      ?
          | WithNegativeValue<
              //@ts-expect-error
              StringifyToken<keyof Tokens[PropertyTokenType[Aliases[key]]]>
            >
          | ExtendRNStyle<GenericComponentStyles, Aliases[key]>
      : //@ts-expect-error
        | StringifyToken<keyof Tokens[PropertyTokenType[Aliases[key]]]>
          | ExtendRNStyle<GenericComponentStyles, Aliases[key]>
    : never;
}>;

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

type MergeNestedThree<T, U, W> = MergeNested<MergeNested<T, U>, W>;

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

export type UnionToIntersection<U> = (
  U extends any ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never;

export type GetRNStyles<GenericComponentStyles> = UnionToIntersection<
  Partial<
    Exclude<
      GenericComponentStyles,
      undefined | null | false | string | number | any[]
    >
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

type WithSizeNegativeValue<Tokens> = keyof Tokens extends 'sizes'
  ? //@ts-expect-error
    | StringifyToken<keyof Tokens['sizes']>
      //@ts-expect-error
      | StringifyToken<keyof Tokens['space']>
  : //@ts-expect-error
    StringifyToken<keyof Tokens['space']>;

export type TokenizedRNStyleProps<
  GenericComponentStyles,
  Tokens = GSConfig['tokens']
> = {
  [key in keyof GenericComponentStyles]?: key extends keyof PropertyTokenType
    ? PropertyTokenType[key] extends 'sizes'
      ?
          | WithSizeNegativeValue<Tokens>
          | ExtendRNStyle<GenericComponentStyles, key>
      : PropertyTokenType[key] extends 'space'
      ?
          | WithNegativeValue<
              //@ts-expect-error
              StringifyToken<keyof Tokens[PropertyTokenType[key]]>
            >
          | ExtendRNStyle<GenericComponentStyles, key>
      : //@ts-ignore
        | StringifyToken<keyof Tokens[PropertyTokenType[key]]>
          | ExtendRNStyle<GenericComponentStyles, key>
    : GenericComponentStyles[key];
};

export type IWrapperType =
  | 'global'
  | 'forwarded-base'
  | 'forwarded-descendant-base'
  | 'forwarded-variant'
  | 'forwarded-descendant-variant'
  | 'boot-base'
  | 'boot-base-state'
  | 'boot-descendant-base'
  | 'boot-descendant-base-state'
  | 'boot-variant'
  | 'boot-variant-state'
  | 'boot-descendant-variant'
  | 'boot-descendant-variant-state'
  | 'extended-base'
  | 'extended-base-state'
  | 'extended-descendant-base'
  | 'extended-descendant-base-state'
  | 'extended-variant'
  | 'extended-variant-state'
  | 'extended-descendant-variant'
  | 'extended-descendant-variant-state'
  | 'passing-base'
  | 'inline-base'
  | 'inline-variant'
  | 'inline-descendant-base'
  | 'inline-base-state';

export type GlobalStyleMap = Map<
  IWrapperType,
  Array<{
    [key: string]: Array<{
      [key: string]: {
        meta?: {
          queryCondition?: string;
          original?: Object;
          propertyTokenMap?: Object;
          extendedConfig?: Object;
        };
        value?: Object | string;
      };
    }>;
  }>
>;

export type ExtendedTheme<Variants> = ITheme<
  Variants,
  ViewProps | ImageProps | TextProps
>;

// export type CreateStyle<Component> = {
//   theme: Component &
//     ITheme<Component['variants'], ViewProps | ImageProps | TextProps>;
//   componentConfig?: Omit<IComponentStyleConfig, 'componentName'>;
// };

export type CreateComponents<T> = {
  [key in keyof T]: T[key];
};

export type StyledConfig = any;
