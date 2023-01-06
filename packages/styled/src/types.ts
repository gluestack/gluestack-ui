// import { RNStyledProps } from './types';
// import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';

export interface ICustomConfig {}

export interface GSConfig
  extends Omit<CreateGenericConfig, keyof ICustomConfig>,
    ICustomConfig {}

// export type RNStyledProps = ViewStyle | ImageStyle | TextStyle;
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
  lineHeights?: { [key: GenericKey]: any };
  fontWeights?: { [key: GenericKey]: Record<string, any> & {} };
  fonts?: { [key: GenericKey]: Record<string, any> & {} };
  fontSizes?: { [key: GenericKey]: Record<string, any> & {} };
}

// Config Types
export type AliasesType<RNStyledProps = string> = {
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

export type TokenizedAliasesProps<T> = {
  [key in keyof T]?:
    | StringifyToken<keyof GSConfig['tokens']['colors']>
    | (string & number & {});
};

export type SxProps<X = AliasesProps> = {
  style?: TokenizedAliasesProps<X> | AliasesProps;
  state?: {
    [key: string]: SxProps<X>;
  };
  colorMode?: {
    [key: string]: SxProps<X>;
  };
  platform?: {
    [key: string]: SxProps<X>;
  };
  descendants?: Record<string, SxProps>;
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

export type SxStyleProps<X> = {
  sx?: SxProps<X>;
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

export type VariantType<Variants, X> = Record<
  keyof Variants | (string & {}),
  SxProps<X>
>;
export type SizeType<Sizes, X> = Record<
  keyof Sizes | (string & {}),
  SxProps<X>
>;

export type StyledThemeProps<Variants, Sizes, X> = {
  baseStyle: SxProps<X>;
  variants: VariantType<Variants, X>;
  sizes?: SizeType<Sizes, X>;
  defaultProps?: {
    variant: keyof Variants;
    size: keyof Sizes;
  };
};

export type ComponentProps<X> = SxStyleProps<X> & {
  children?: any;
  states?: IState;
  colorMode?: any;
  ancestorStyle?: any;
};
