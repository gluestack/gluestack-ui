import type { GlueStackConfig, InferConfig } from './types';

export const createConfig = <
  //@ts-ignore
  T extends GlueStackConfig<T['tokens'], T['aliases'], T['globalStyle']>
>(
  config: T
): InferConfig<T> => {
  return config as any;
};
