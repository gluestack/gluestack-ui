// import type {} from // CreateGSProps,
// //  GSInternalConfig, InferGSConfig
// './types';

import { config } from './nb.config';
let glueStackConfig: any = config;

export function createGSInternalConfig(configIn: any): any {
  const aliases = configIn.aliases || {};

  const config: any = {
    ...configIn,
    aliases: { ...aliases },
  };

  return config as any;
}

export const getConfig = () => {
  if (!glueStackConfig) {
    throw new Error(
      'GlueStack config not initialized. Please call initConfig() to initialize config.'
    );
  }

  return glueStackConfig;
};

export function createConfig(config: any): any {
  if (glueStackConfig) {
    throw new Error(
      'GlueStack config is already initialized. You can not initialize config multiple times.'
    );
  }

  const configIn: any = createGSInternalConfig(config);
  glueStackConfig = configIn;
  return glueStackConfig as any;
}
