import type { GlueStackConfig, InferConfig } from './types';
import type {
  StringifyToken,
  PropertyTokenType,
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

type CompoundVariant<Variants, Aliases, Tokens> = {
  [Key in keyof Variants]?: keyof Variants[Key];
} & {
  value?: SxPropsNew<Aliases, Tokens, Variants>;
};

export type VariantTypeNew<Variants, Aliases, Tokens> =
  | {
      [Key1 in keyof Variants]: {
        [Key in keyof Variants[Key1] | (string & {})]?: Partial<
          SxPropsNew<Aliases, Tokens, Variants> & {
            // @ts-ignore
            [K in `@${keyof Tokens['mediaQueries']}`]?: SxPropsNew<
              Aliases,
              Tokens,
              Variants
            >;
          }
        >;
      };
    };

export type AliasesProps<Aliases, Tokens> = {
  [Key in keyof Aliases]?: Aliases[Key] extends keyof PropertyTokenType
    ? PropertyTokenType[Aliases[Key]] extends keyof Tokens
      ? StringifyToken<keyof Tokens[PropertyTokenType[Aliases[Key]]]>
      : any
    : any;
};

export type StyledThemePropsNew<Aliases, Tokens, Variants> = SxPropsNew<
  Aliases,
  Tokens,
  'variants' extends keyof Variants ? Variants['variants'] : unknown
> &
  Partial<{
    variants?: VariantTypeNew<
      'variants' extends keyof Variants ? Variants['variants'] : unknown,
      Aliases,
      Tokens
    >;
    compundVariants?: readonly CompoundVariant<
      'variants' extends keyof Variants ? Variants['variants'] : unknown,
      Aliases,
      Tokens
    >[];
  }>;

export const createConfig = <
  //@ts-ignore
  T extends GlueStackConfig<T['tokens'], T['aliases'], T['globalStyle']>
>(
  config: T
): InferConfig<T> => {
  return config as any;
};
