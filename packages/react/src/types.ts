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
  components?: {
    [key: string]: {
      theme: Partial<GlobalStyles<IGlobalAliases, IToken, IGlobalStyle>>;
      componentConfig?: IConfigProps;
    };
  };
};

export type ComponentsThemeType<IGlobalAliases, IToken, IComponents> = {
  [key: string]: {
    theme: GlobalStyles<IGlobalAliases, IToken, IComponents>;
  };
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

// All Aliases
export type Aliases = GSConfig['aliases'];
export type Components = GSConfig['components'];
export type IMediaQueries = keyof GSConfig['tokens']['mediaQueries'];

export type SxStyleProps<
  GenericComponentStyles,
  Variants,
  GenericComponentProps
> = {
  sx?: SxProps<GenericComponentStyles, Variants, GenericComponentProps> & {
    [Key in `@${IMediaQueries}`]?: SxProps<
      GenericComponentStyles,
      Variants,
      GenericComponentProps,
      '',
      Key
    >;
  };
};

//@ts-ignore
type GlobalVariants = GSConfig['globalStyle']['variants'];

export interface IConfigProps {
  descendantStyle: Array<string>;
  ancestorStyle: Array<string>;
  resolveProps: Array<string>;
  componentName: string;
}

export type IComponentStyleConfig<ComCon = unknown> = Partial<
  {
    descendantStyle: any;
    ancestorStyle: any;
    resolveProps: any;
    componentName: ComCon;
  } & { [key: string]: any }
>;
export type ConfigType = Partial<IConfigProps> & { [key: string]: any };

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
};

/*********************** GLOBAL STYLE TYPES ****************************************/

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

/*********************** USER THEME / SX TYPES ****************************************/

export type ITheme<Variants, P> = Partial<
  //@ts-ignore
  StyledThemeProps<Variants, P['style'], P>
>;

export type StyledThemeProps<
  Variants,
  GenericComponentStyles,
  GenericComponentProps
> = SxProps<
  GenericComponentStyles,
  Variants & GlobalVariants,
  GenericComponentProps
> & {
  [Key in `@${IMediaQueries}`]: SxProps<
    GenericComponentStyles,
    Variants,
    GenericComponentProps,
    '',
    Key
  >;
} & {
  variants: VariantType<
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
      VariantType<Variants, GenericComponentStyles, GenericComponentProps>,
      GlobalVariants
    >]?: keyof MergeNested<
      VariantType<Variants, GenericComponentStyles, GenericComponentProps>,
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
  MediaQuery
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
                GenericComponentProps
              >,
              GlobalVariants
            >]?: keyof MergeNested<
              VariantType<
                Variants,
                GenericComponentStyles,
                GenericComponentProps
              >,
              GlobalVariants
            >[Key];
          }
      >;
    }
  : {};

export type SxProps<
  GenericComponentStyles = AliasesProps,
  Variants = unknown,
  GenericComponentProps = unknown,
  PLATFORM = '',
  MediaQuery = ''
> = Partial<
  StylePropsType<GenericComponentStyles, PLATFORM> &
    PassingPropsType<
      GenericComponentStyles,
      Variants,
      GenericComponentProps,
      MediaQuery
    >
> & {
  [Key in `_${COLORMODES}`]?: SxProps<
    GenericComponentStyles,
    Variants,
    GenericComponentProps,
    PLATFORM,
    MediaQuery
  >;
} & {
  [Key in `:${IState}`]?: SxProps<
    GenericComponentStyles,
    Variants,
    GenericComponentProps,
    PLATFORM,
    MediaQuery
  >;
} & {
  [Key in `_${PLATFORMS}`]?: SxProps<
    GenericComponentStyles,
    Variants,
    GenericComponentProps,
    Key,
    MediaQuery
  > &
    PassingPropsType<
      GenericComponentStyles,
      Variants,
      GenericComponentProps,
      MediaQuery
    > &
    Partial<{
      [key: string]: any;
    }>;
} & {
  [Key in `_${string}`]?: SxProps<
    RNStyledProps,
    Variants,
    GenericComponentProps,
    PLATFORM,
    MediaQuery
  > &
    PassingPropsType<
      GenericComponentStyles,
      Variants,
      GenericComponentProps,
      MediaQuery
    > &
    Partial<{
      [key: string]: any;
    }>;
};

export type VariantType<
  Variants,
  GenericComponentStyles,
  GenericComponentProps
> =
  | {
      [Key1 in keyof Variants]: {
        [Key in keyof Variants[Key1]]: Partial<
          SxProps<GenericComponentStyles, Variants> & {
            [K in `@${IMediaQueries}`]?: SxProps<
              GenericComponentStyles,
              Variants,
              GenericComponentProps,
              '',
              K
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

export interface GSConfig
  extends Omit<CreateGenericConfig, keyof ICustomConfig>,
    ICustomConfig {}

/********************* COMPONENT PROPS TYPE *****************************************/

export type ComponentProps<GenericComponentStyles, Variants, P, ComCon> =
  SxStyleProps<GenericComponentStyles, Variants, P> & {
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

export type UtilityProps<GenericComponentStyles> = TokenizedRNStyleProps<
  GetRNStyles<GenericComponentStyles>
> &
  AliasesProps<RNStyles<GenericComponentStyles>>;

/********************* UTILITY TYPE *****************************************/

export type StringifyToken<T> = T extends number | string ? `$${T}` : T;

type FilteredKeys<T> = {
  [K in keyof T]: T[K] extends never | undefined ? never : K;
}[keyof T];

export type RemoveNever<T> = {
  [K in FilteredKeys<T>]: T[K];
};

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

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never;

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
  | 'inline-descendant-base';

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
