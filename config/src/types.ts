// import type { TextStyle, ViewStyle } from 'react-native';

export type VariableVal = number | string;
export type VariableColorVal = string;
type GenericKey = string | number | symbol;

export interface CreateTokens<Val extends VariableVal = VariableVal> {
  color?: { [key: GenericKey]: Val };
  space?: { [key: GenericKey]: Val };
  size?: { [key: GenericKey]: Val };
  radius?: { [key: GenericKey]: Val };
}

type GenericTokens = CreateTokens;

// type AllStyleKeys = keyof ViewStyle | keyof TextStyle;

export type CreateAliases = {
  [key: string]: {
    property: string;
    scale: string;
  };
};

export type GenericAliases = {};

export interface GSCustomConfig {}

export interface GSConfig
  extends Omit<GenericGSConfig, keyof GSCustomConfig>,
    GSCustomConfig {}

export type CreateGSConfig<
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
  tokens?: A;
  aliases?: C;
  mediaQueries?: any;
};

export type InferGSConfig<Conf> = Conf extends ConfProps<infer A, infer C>
  ? GSInternalConfig<A, C>
  : unknown;

// for use in creation functions so it doesnt get overwrtitten
export type GenericGSConfig = CreateGSConfig<GenericTokens, GenericAliases>;

// since GSConfig will be re-declared, these will all be typed globally
export type Tokens = GSConfig['tokens'];
export type Aliases = GSConfig['aliases'];

export type CreateGSProps = {
  aliases?: CreateAliases;
  tokens: GenericGSConfig['tokens'];
  mediaQueries?: any;
};

// this is the config generated via createGS()
export type GSInternalConfig<
  A extends GenericTokens = GenericTokens,
  C extends GenericAliases = GenericAliases
> = Omit<CreateGSProps, keyof GenericGSConfig> &
  CreateGSConfig<A, C> & {
    // tokensParsed: CreateTokens<VariableVal>;
    // inverseAliases: Record<string, string>;
  };
