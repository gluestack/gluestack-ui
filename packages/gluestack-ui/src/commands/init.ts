import { Command } from 'commander';
import { z } from 'zod';
import { handleError } from '../util/handle-error';
import { log } from '@clack/prompts';
import { InitializeGlueStack } from '../util/init';
import { config } from '../config';
import {
  checkWritablePath,
  detectProjectType,
  getPackageMangerFlag,
  isValidPath,
} from '../util';
import path from 'path';
import fs from 'fs';

const initOptionsSchema = z.object({
  useNpm: z.boolean(),
  useYarn: z.boolean(),
  usePnpm: z.boolean(),
  useBun: z.boolean(),
  path: z.string().optional(),
  templateOnly: z.boolean(),
  projectType: z.string(),
});

export const init = new Command()
  .name('init')
  .description('Initialize gluestack into your project')
  .option('--use-npm ,useNpm', 'use npm to install dependencies', false)
  .option('--use-yarn, useYarn', 'use yarn to install dependencies', false)
  .option('--use-pnpm, usePnpm', 'use pnpm to install dependencies', false)
  .option('--use-bun, useBun', 'use bun to install dependencies', false)
  .option(
    '--path <path>',
    'path to the components directory. defaults to components/ui'
  )
  .option(
    '--template-only templateOnly',
    'Only install the template without installing dependencies',
    false
  )
  .option(
    '--projectType <projectType>',
    'Type of project to initialize',
    'library'
  )
  .action(async (opts) => {
    try {
      const options = initOptionsSchema.parse({ ...opts });
      const isTemplate = options.templateOnly;
      console.log('\n\x1b[1mWelcome to gluestack-ui!\x1b[0m\n');
      const cwd = process.cwd();

      if (!fs.existsSync(path.join(cwd, 'package.json'))) {
        log.error(
          `\x1b[31mNo package.json found in the current directory. Please run this command in a directory with a package.json file.\x1b[0m`
        );
        process.exit(1);
      }

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

      getPackageMangerFlag(options);

      if (options.path) {
        if (!isValidPath(options.path)) {
          log.error(
            `\x1b[31mInvalid path "${options.path}". Please provide a valid path for installing components.\x1b[0m`
          );
          process.exit(1);
        }
        if (options.path !== config.writableComponentsPath) {
          await checkWritablePath(options.path);
          config.writableComponentsPath = options.path;
        }
      }

      const projectType = isTemplate
        ? options.projectType
        : await detectProjectType(cwd);

      InitializeGlueStack({ projectType, isTemplate });
    } catch (err) {
      handleError(err);
    }
  });
