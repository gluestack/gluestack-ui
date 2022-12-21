import {
  createConfig as gsCreateConfig,
  getConfig as getGsConfig,
} from '@gluestack/config';

export const createConfig = (config: any) => {
  //

  return gsCreateConfig(config);
};

export const getConfig = () => {
  return getGsConfig();
  //
};
