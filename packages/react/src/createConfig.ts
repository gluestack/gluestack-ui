import type { GlueStackConfig } from './types';

export const createConfig = <
  //@ts-ignore
  T extends GlueStackConfig<T['tokens'], T['aliases'], T['globalStyle']>
>(
  config: T
): T => {
  return config as any;
};
