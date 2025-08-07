import { Command } from 'commander';
import { z } from 'zod';
import os from 'os';
import { join } from 'path';
import { handleError } from '../util/handle-error';
import { log } from '@clack/prompts';
import { componentAdder } from '../util/add';
import { config } from '../config';
import {
  checkWritablePath,
  cloneRepositoryAtRoot,
  getPackageMangerFlag,
  isValidPath,
  projectRootPath,
} from '../util';
import { checkIfInitialized, getComponentsPath } from '../util/config';

const _homeDir = os.homedir();

const addOptionsSchema = z.object({
  components: z.array(z.string()),
  all: z.boolean(),
  useNpm: z.boolean(),
  useYarn: z.boolean(),
  usePnpm: z.boolean(),
  useBun: z.boolean(),
  path: z.string().optional(),
  templateOnly: z.boolean(),
});

export const add = new Command()
  .name('add')
  .description('add a component to your project')
  .argument('[...components]', 'the components to add')
  .option('--all, --all', 'add all available components', false)
  .option('--use-npm ,useNpm', 'use npm to install dependencies', false)
  .option('--use-yarn, useYarn', 'use yarn to install dependencies', false)
  .option('--use-pnpm, usePnpm', 'use pnpm to install dependencies', false)
  .option('--use-bun, useBun', 'use bun to install dependencies', false)
  .option('--path <path>', 'path to the components directory')
  .option(
    '--template-only templateOnly',
    'Only install the template without installing dependencies',
    false
  )
  .action(async (components, opts, command) => {
    try {
      const options = addOptionsSchema.parse({
        components: command.args.length > 0 ? command.args : [],
        ...opts,
      });

      const isTemplate = options.templateOnly;
      !isTemplate && log.info('\n\x1b[1mWelcome to gluestack-ui!\x1b[0m\n');

      if (
        (!options.all && options.components?.length === 0) ||
        (options.all && options.components?.length > 0)
      ) {
        log.error(
          '\x1b[31mInvalid arguement, please provide the component/hook name you want to add or --all.\x1b[0m'
        );
        process.exit(0);
      }
      const initialized = await checkIfInitialized(projectRootPath);
      if (!initialized) {
        log.warning(
          `\x1b[33mgluestack is not initialized in the project. use 'npx gluestack-ui init' or 'help' to continue.\x1b[0m`
        );
        process.exit(1);
      }
      //if multiple package managers are used
      if (
        (options.useNpm && options.useYarn) ||
        (options.useNpm && options.usePnpm) ||
        (options.useYarn && options.usePnpm)
      ) {
        log.error(
          `\x1b[31mMultiple package managers selected. Please select only one package manager.\x1b[0m`
        );
        process.exit(1);
      }
      //define package manager
      getPackageMangerFlag(options);
      //function to get current path where GUIProvider is located
      const currWritablePath = await getComponentsPath(projectRootPath);
      if (currWritablePath) {
        config.writableComponentsPath = currWritablePath;
      }
      if (options.path && !isValidPath(options.path)) {
        log.error(
          `\x1b[31mInvalid path "${options.path}". Please provide a valid path for installing components.\x1b[0m`
        );
        process.exit(1);
      }
      if (options.path && options.path !== config.writableComponentsPath) {
        await checkWritablePath(options.path);
        config.writableComponentsPath = options.path;
      }
      !isTemplate &&
        (await cloneRepositoryAtRoot(join(_homeDir, config.gluestackDir)));
      // define args based on --all or components
      const args = options.all
        ? { addAll: true }
        : { componentArgs: options.components.map((c) => c.toLowerCase()) };

      try {
        await componentAdder(args);
      } catch (err) {
        log.error(`\x1b[31mError: ${(err as Error).message}\x1b[0m`);
      }
    } catch (err) {
      handleError(err);
    }
  });
