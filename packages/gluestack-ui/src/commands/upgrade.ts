import { Command } from 'commander';
import { log } from '@clack/prompts';
import z from 'zod';
import { savePackageManagerFromOptions } from '../util/package-managers';
import { findAndUpgrade } from '../util/upgrade/find-and-upgrade';

const upgradeOptionsSchema = z.object({
  useNpm: z.boolean(),
  useYarn: z.boolean(),
  usePnpm: z.boolean(),
  useBun: z.boolean(),
});

export const upgrade = new Command()
  .name('upgrade')
  .description('Upgrade from old gluestack packages to gluestack-ui')
  .option('--use-npm ,useNpm', 'use npm to install dependencies', false)
  .option('--use-yarn, useYarn', 'use yarn to install dependencies', false)
  .option('--use-pnpm, usePnpm', 'use pnpm to install dependencies', false)
  .option('--use-bun, useBun', 'use bun to install dependencies', false)
  .action(async (_, opts) => {
    try {
      log.info('\n\x1b[1mGluestack UI Upgrade\x1b[0m');
      const options = upgradeOptionsSchema.parse(opts);

      // If a package manager was set in options, save it to the config.
      savePackageManagerFromOptions(options);

      await findAndUpgrade();

      log.success('\x1b[32mUpgrade complete!\x1b[0m');
      log.info('All imports have been updated to use @gluestack-ui/*');
    } catch (err: any) {
      log.error((err && err.message) || String(err));
      process.exit(1);
    }
  });
