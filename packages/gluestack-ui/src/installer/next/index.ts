import { addDependencies } from '../utils';
import { autoSetup } from './utils';
import { log } from '@clack/prompts';

const nextInstaller = async (
  folderName: string,
  packageName: string
): Promise<boolean> => {
  try {
    addDependencies();
    const setupTypeAutomatic = await autoSetup(folderName, packageName);
    return setupTypeAutomatic;
  } catch (err) {
    log.error(`\x1b[31mError: ${(err as Error).message}\x1b[0m`);
    return false;
  }
};

export { nextInstaller };
