import os from 'os';
import fs from 'fs-extra';
import { config } from '../config';
import { join, extname } from 'path';

const homeDir = os.homedir();

export const getAllComponents = async (): Promise<string[]> => {
  const componentList = fs
    .readdirSync(
      join(homeDir, config.gluestackDir, config.componentsResourcePath)
    )
    .filter(
      (file) =>
        !['.tsx', '.ts', '.jsx', '.js', '.json'].includes(
          extname(file).toLowerCase()
        ) &&
        file !== config.providerComponent &&
        !config.ignoreComponents.includes(file)
    );
  return componentList;
};
