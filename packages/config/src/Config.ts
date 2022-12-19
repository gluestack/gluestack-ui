import type { CreateGSProps, GSInternalConfig, InferGSConfig } from './types';

let glueStackConfig: GSInternalConfig;

export function createGSInternalConfig<Conf extends CreateGSProps>(
  configIn: Conf
): InferGSConfig<Conf> {
  const aliases = configIn.aliases || {};

  const config: GSInternalConfig = {
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

export function initConfig<Conf extends CreateGSProps>(config: Conf) {
  if (glueStackConfig) {
    throw new Error(
      'GlueStack config is already initialized. You can not initialize config multiple times.'
    );
  }

  const configIn: GSInternalConfig = createGSInternalConfig(config);
  glueStackConfig = configIn;
}
