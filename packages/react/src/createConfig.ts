import type { GlueStackConfig } from './types';

export const createConfig = <
  //@ts-ignore
  T extends GlueStackConfig<T['tokens'], T['aliases'], T['globalStyle']>
>(
  //@ts-ignore
  config: T | GlueStackConfig<T['tokens'], T['aliases'], T['globalStyle']>
): T => {
  return config as any;
};
