import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';

export interface ICustomConfig {}

export interface GSConfig
  extends Omit<CreateGenericConfig, keyof ICustomConfig>,
    ICustomConfig {}

export type RNStyledProps = ViewStyle | ImageStyle | TextStyle;
export type GenericKey = string | number | symbol;

// Tokens
export interface Tokens {
  colors?: { [key: GenericKey]: Record<string, any> & {} };
  space?: { [key: GenericKey]: Record<string, any> & {} };
  borderWidths?: { [key: GenericKey]: Record<string, any> & {} };
  radii?: { [key: GenericKey]: Record<string, any> & {} };
  breakpoints?: { [key: GenericKey]: Record<string, any> & {} };
  mediaQueries?: { [key: GenericKey]: Record<string, any> & {} };
  letterSpacings?: { [key: GenericKey]: Record<string, any> & {} };
  lineHeights?: { [key: GenericKey]: Record<string, any> & {} };
  fontWeights?: { [key: GenericKey]: Record<string, any> & {} };
  fonts?: { [key: GenericKey]: Record<string, any> & {} };
  fontSizes?: { [key: GenericKey]: Record<string, any> & {} };
}

// Config Types
export type AliasesType = {
  [key: string]: {
    property: RNStyledProps;
    scale: keyof Tokens;
  };
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
  mediaQueries?: any;
};

export type CreateGenericConfig = GlueStackConfig<Tokens, GenericAliases>;

// Convert tokens to string with "$" prefix
export type StringifyToken<T> = T extends number | string ? `$${T}` : T;

// All tokens concatenated with "$" prefix;
// export type AllTokens = {
//   colors: StringifyToken<keyof GSConfig['tokens']['colors']>;
//   space: StringifyToken<keyof GSConfig['tokens']['space']>;
//   borderWidths: StringifyToken<keyof GSConfig['tokens']['borderWidths']>;
//   radii: StringifyToken<keyof GSConfig['tokens']['radii']>;
//   breakpoints: StringifyToken<keyof GSConfig['tokens']['breakpoints']>;
//   mediaQueries: StringifyToken<keyof GSConfig['tokens']['mediaQueries']>;
//   letterSpacings: StringifyToken<keyof GSConfig['tokens']['letterSpacings']>;
//   lineHeights: StringifyToken<keyof GSConfig['tokens']['lineHeights']>;
//   fontWeights: StringifyToken<keyof GSConfig['tokens']['fontWeights']>;
//   fonts: StringifyToken<keyof GSConfig['tokens']['fonts']>;
//   fontSizes: StringifyToken<keyof GSConfig['tokens']['fontSizes']>;
// };

// All Aliases
export type Aliases = GSConfig['aliases'];

// Mapping tokens with scale value of alaises
export type AliasesProps = {
  [key in keyof Aliases]?:
    | StringifyToken<keyof GSConfig['tokens'][Aliases[key]['scale']]>
    | (string & number & {});
};

//TODO: Genrate whole token i.e. $colors$primary or $space$4
// export type GenerateConfigPathType = {
//   [Key in keyof AllTokens]: `$${Key}${AllTokens[Key]}`;
// };

export type Descendants = {
  _text: string;
};

type GetElementType<T extends any[] = any> = T extends (infer U)[] ? U : never;

export type SxProps = {
  style?: AliasesProps;
  state?: {
    [key: string]: SxProps;
  };
  colorMode?: {
    [key: string]: SxProps;
  };
  platform?: {
    [key: string]: SxProps;
  };
  descendants?: Record<keyof GetElementType, SxProps>;
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

export type Platforms = 'web' | 'android' | 'ios';

export type SxStyleProps = {
  sx?: SxProps;
};

type Permutations<T extends string, U extends string = T> = T extends any
  ? T | `${T}-${Permutations<Exclude<U, T>>}`
  : never;

export type LiteralUnion<T extends U, U = string> = T | U;

export type PropsCombinations = Permutations<IState, Platforms>;
// export type PropsCombinations = Permutations<IState, Platforms>;

export type UtilityProps = AliasesProps & {
  [key in keyof Aliases as `${PropsCombinations}-${key}`]?:
    | StringifyToken<keyof GSConfig['tokens'][Aliases[key]['scale']]>
    | (string & {});
};

export type VariantType<Variants> = Record<keyof Variants, SxProps>;
export type SizeType<Sizes> = Record<keyof Sizes, SxProps>;

export type StyledThemeProps<Variants, Sizes> = {
  baseStyle: SxProps;
  variants: VariantType<Variants>;
  sizes?: SizeType<Sizes>;
  defaultProps?: {
    variant: keyof Variants;
    size: keyof Sizes;
  };
};

export type ComponentProps = SxStyleProps & {
  children?: any;
  states?: IState;
  colorMode?: any;
  ancestorStyle?: any;
};
