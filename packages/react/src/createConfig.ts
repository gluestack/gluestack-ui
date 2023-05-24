import type {
  StringifyToken,
  PropertyTokenType,
  RemoveNever,
  ExtendRNStyle,
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

type CompoundVariant<Variants, Aliases, Tokens> = Partial<
  {
    [Key in keyof Variants]?: keyof Variants[Key];
  } & {
    value?: SxPropsNew<Aliases, Tokens, Variants>;
  }
>;

export type StyledThemePropsNew<Variants, Aliases, Tokens> = AliasesProps<
  Aliases,
  Tokens
> &
  RNStyledProps &
  AliasesProps<Aliases, Tokens> & {
    variants?: VariantTypeNew<Variants, Aliases, Tokens>;
    compoundVariants?: Array<CompoundVariant<Variants, Aliases, Tokens>>;
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

export const createConfig = <Aliases, Tokens, Variants>(
  aliases: Aliases,
  tokens: Tokens,
  globalStyle: Partial<StyledThemePropsNew<Variants, Aliases, Tokens>>
) => {
  return {
    aliases,
    tokens,
    globalStyle,
  };
};

export type AliasesProps<Aliases, Token> = RemoveNever<{
  [key in keyof Aliases]?: Aliases[key] extends keyof RNStyledProps
    ? //@ts-ignore
      | StringifyToken<keyof Token[PropertyTokenType[Aliases[key]]]>
        | ExtendRNStyle<RNStyledProps, Aliases[key]>
    : never;
}>;
