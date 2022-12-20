import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';

export type VariableVal = number | string | Variable;
export type VariableColorVal = string | Variable;
type GenericKey = string | number | symbol;
export interface CreateTokens<T extends VariableVal = VariableVal> {
  colors: { [key: GenericKey]: T };
  space: { [key: GenericKey]: T };
  borderWidths: { [key: GenericKey]: T };
  radii: { [key: GenericKey]: T };
  letterSpacings: { [key: GenericKey]: T };
  lineHeights: { [key: GenericKey]: T };
  fontWeights: { [key: GenericKey]: T };
  fonts: { [key: GenericKey]: any };
  fontSizes: { [key: GenericKey]: T };
}

type GenericTokens = CreateTokens;

type RNStyledProps = keyof ViewStyle | keyof TextStyle | keyof ImageStyle;

export type CreateAliases = {
  [key: string]: {
    property: RNStyledProps;
    scale: keyof CreateTokens;
  };
};

export type GenericAliases = {};

export interface GlobalCustomConfig {}

export interface GSConfig
  extends Omit<GenericGSConfig, keyof GlobalCustomConfig>,
    GlobalCustomConfig {}

export type GlueStackConfigCreator<
  A extends GenericTokens,
  C extends GenericAliases = GenericAliases
> = {
  tokens: A;
  aliases: C;
  mediaQueries?: any;
};

type ConfProps<
  A extends GenericTokens,
  C extends GenericAliases = GenericAliases
> = {
  tokens: A;
  aliases: C;
  mediaQueries?: any;
};

export type InferGSConfig<Conf> = Conf extends ConfProps<infer A, infer C>
  ? GSInternalConfig<A, C>
  : unknown;

// for use in creation functions so it doesnt get overwrtitten
export type GenericGSConfig = GlueStackConfigCreator<
  GenericTokens,
  GenericAliases
>;

export type Tokens = GSConfig['tokens'];

export type Aliases = GSConfig['aliases'];

export type AliasesProps = {
  [key in keyof Aliases]: AllTokens[Aliases[key]['scale']];
};

export type CreateGSProps = {
  aliases: CreateAliases;
  tokens: GenericGSConfig['tokens'];
  mediaQueries?: any;
};

export type GSInternalConfig<
  A extends GenericTokens = GenericTokens,
  C extends GenericAliases = GenericAliases
> = Omit<CreateGSProps, keyof GenericGSConfig> & GlueStackConfigCreator<A, C>;

const IS_VAR = 'isVar';

type VariableIn<A = any> = {
  val: A;
  name: string;
  key: string;
};

export type Variable<A = any> = VariableIn<A> & {
  [IS_VAR]?: true;
  variable?: string;
};

type GetTokenString<A> = A extends string | number ? `$${A}` : `$${string}`;

export type SpaceTokens =
  | GetTokenString<keyof Tokens['space']>
  | number
  | boolean;
export type ColorTokens = GetTokenString<keyof Tokens['colors']>;
export type BorderWidths = GetTokenString<keyof Tokens['borderWidths']>;
export type Radii = GetTokenString<keyof Tokens['radii']>;
export type LetterSpacings = GetTokenString<keyof Tokens['letterSpacings']>;
export type LineHeights = GetTokenString<keyof Tokens['lineHeights']>;
export type FontWeights = GetTokenString<keyof Tokens['fontWeights']>;
export type Fonts = GetTokenString<keyof Tokens['fonts']>;
export type FontSizes = GetTokenString<keyof Tokens['fontSizes']>;

export type AllTokens = {
  colors: ColorTokens;
  space: SpaceTokens;
  borderWidths: BorderWidths;
  radii: Radii;
  letterSpacings: LetterSpacings;
  lineHeights: LineHeights;
  fontWeights: FontWeights;
  fonts: Fonts;
  fontSizes: FontSizes;
};
