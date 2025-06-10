import {addDependencies}  from '../utils';
import { log } from '@clack/prompts';

const expoInstaller = async () => {
  try {
    addDependencies();
  } catch (err) {
    log.error(`\x1b[31mError: ${(err as Error).message}\x1b[0m`);
  }
};

export { expoInstaller };
