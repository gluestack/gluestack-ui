import fs from 'fs-extra';
import path, { join } from 'path';
import os from 'os';
import { warn } from 'console';
import { log } from '@clack/prompts';

const homeDir = os.homedir();

const currDir = process.cwd();
const sourcePath = path.join(
  homeDir,
  '.gluestack',
  'cache',
  'gluestack-ui',
  'example',
  'storybook',
  'src',
  'ui-components'
);
export async function addGluestackConfig() {
  if (!fs.existsSync(join(currDir, 'gluestack-ui.config.ts'))) {
    warn('Adding config file in current directory.');
    await addConfig(sourcePath, currDir);
  }
}

const addConfig = async (sourcePath: string, configTargetPath: string) => {
  try {
    // Copy Gluestack UI config to root
    const gluestackConfig = await fs.readFile(
      path.resolve(sourcePath, '../', 'gluestack-ui.config.ts'),
      'utf8'
    );

    await fs.writeFile(
      path.join(configTargetPath, 'gluestack-ui.config.ts'),
      gluestackConfig
    );
  } catch (err) {
    log.error(JSON.stringify(err));
  }
};
