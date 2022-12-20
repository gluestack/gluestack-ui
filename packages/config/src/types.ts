import type { TextStyle, ViewStyle } from 'react-native';

export type VariableVal = number | string | Variable;
export type VariableColorVal = string | Variable;
type GenericKey = string | number | symbol;
export interface CreateTokens<T extends VariableVal = VariableVal> {
  colors: { [key: GenericKey]: T };
  space: { [key: GenericKey]: T };
}

type GenericTokens = CreateTokens;

type RNStyledProps = keyof ViewStyle | keyof TextStyle;

export type CreateAliases = {
  [key: string]: {
    property: RNStyledProps;
    scale: 'colors' | 'space' | 'fontSizes' | 'fontWeights' | 'lineHeights';
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
  [key in keyof Aliases]: Aliases[key]['scale'] extends 'colors'
    ? ColorTokens
    : Aliases[key]['scale'] extends 'space'
    ? SpaceTokens
    : key;
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
