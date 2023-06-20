import type { GlueStackConfig, InferConfig } from './types';

export const createConfig = <Tokens, Aliases, GlobalStyle>(
  //@ts-ignore
  config: GlueStackConfig<Tokens, Aliases, GlobalStyle>
  //@ts-ignore
): InferConfig<GlueStackConfig<Tokens, Aliases, GlobalStyle>> => {
  return config as any;
};
