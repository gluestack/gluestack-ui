import { getConfig } from '@gluestack-style/build-config';
import { extractGluestackConfig } from '@gluestack-style/extract-styles';
import fs from 'fs';
import path from 'path';

export const withGluestackStyle = (config: any, options: any) => {
  const defaultOptions = {
    output: 'gluestack.css',
    disableExtraction: false,
    configThemePath: [],
  };

  const configPath = options?.configPath;
  const output = options?.output ?? defaultOptions.output;
  const configThemePath =
    options?.configThemePath ?? defaultOptions.configThemePath;

  const cssFilePath = path.join(process.cwd(), output);

  const gluestackConfig = getConfig(configPath)?.config;

  let actualGluestackConfig = gluestackConfig;

  if (configThemePath.length > 0) {
    configThemePath.forEach((currentPath: string) => {
      actualGluestackConfig = actualGluestackConfig?.[currentPath];
    });
  }

  const cssVariablesConovertedTokens = extractGluestackConfig(
    actualGluestackConfig
  );

  fs.writeFileSync(cssFilePath, cssVariablesConovertedTokens);

  const ogTransformPath = config?.transformerPath;

  config.transformerPath = require.resolve('./transform');

  config.transformer = {
    ...config.transformer,
    ogTransformPath,
    options: {
      ...defaultOptions,
      ...options,
      config: actualGluestackConfig,
    },
  };

  return config;
};
