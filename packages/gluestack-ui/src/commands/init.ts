import { Command } from 'commander';
import { z } from 'zod';
import { handleError } from '../util/handle-error';
import { log } from '@clack/prompts';
import { InitializeGlueStack } from '../util/init';
import { config, setStylingEngine } from '../config';
import { generateMonoRepoConfig } from '../util/config';
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
  monorepo: z.boolean().optional().default(false),
  projectType: z.string(),
  yes: z.boolean().optional().default(false),
  nativewind: z.boolean().optional().default(false),
  nativewindV5: z.boolean().optional().default(false),
  uniwind: z.boolean().optional().default(false),
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
  .option('--monorepo', 'Generate monorepo configuration (gluestack-ui.config.json)', false)
  .option(
    '--projectType <projectType>',
    'Type of project to initialize',
    'library'
  )
  .option(
    '-y, --yes',
    'Answer yes to all prompts (for non-interactive environments)',
    false
  )
  .option(
    '--nativewind',
    'Use NativeWind v4 (Tailwind v3) styling engine',
    false
  )
  .option(
    '--nativewind-v5',
    'Use NativeWind v5 (Tailwind v4) styling engine',
    false
  )
  .option('--uniwind', 'Use UniWind (Tailwind v4) styling engine', false)
  .action(async (opts) => {
    try {
      // Set yesToAll first (from --yes or -y) so all prompts are skipped in non-interactive environments
      if (opts.yes === true || (opts as { y?: boolean }).y === true) {
        config.yesToAll = true;
      }
      const options = initOptionsSchema.parse({ ...opts });

      // Validate conflicting flags
      const selectedFlags = [
        options.nativewind,
        options.nativewindV5,
        options.uniwind,
      ].filter(Boolean).length;
      if (selectedFlags > 1) {
        log.error(
          'Cannot specify multiple styling engine flags. Please choose one.'
        );
        process.exit(1);
      }

      // Set styling engine based on flags
      if (options.nativewindV5) {
        setStylingEngine('nativewind-v5');
      } else if (options.uniwind) {
        setStylingEngine('uniwind');
      } else if (options.nativewind) {
        setStylingEngine('nativewind');
      }
      // else: keep default (nativewind) for backward compatibility

      const isTemplate = options.templateOnly;
      console.log('\n\x1b[1mWelcome to gluestack-ui v5 alpha!\x1b[0m\n');
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

      // Determine project type; for monorepo force 'library' and prompt for components path
      let projectType = isTemplate ? options.projectType : await detectProjectType(cwd);

      if (options.monorepo) {
        projectType = 'library';
        const { select, text, isCancel, cancel } = await import('@clack/prompts');

        const candidates = ['components/ui', 'components', 'packages/ui', 'packages', 'apps'];
        let chosenPath = options.path;

        if (!chosenPath && !config.yesToAll) {
          try {
            const selection = await select({
              message: 'Select components path for monorepo or choose "Other" to enter manually',
              options: [
                ...candidates.map((p) => ({ value: p, label: p })),
                { value: 'other', label: 'Other (enter manually)' },
              ],
            });

            if (isCancel(selection)) {
              cancel('Operation cancelled.');
              process.exit(0);
            }

            if (selection === 'other') {
              const typed = await text({ message: 'Enter relative path to components (e.g. packages/ui/src/components)' });
              if (isCancel(typed)) {
                cancel('Operation cancelled.');
                process.exit(0);
              }
              chosenPath = typed as string;
            } else {
              chosenPath = selection as string;
            }
          } catch (e) {
            // ignore and fallback
          }
        }

        if (chosenPath) {
          if (!isValidPath(chosenPath)) {
            log.error(`\x1b[31mInvalid path "${chosenPath}". Please provide a valid path for installing components.\x1b[0m`);
            process.exit(1);
          }
          await checkWritablePath(chosenPath);
          config.writableComponentsPath = chosenPath;
        }
      }

      await InitializeGlueStack({ projectType, isTemplate });

      if (options.monorepo) {
        await generateMonoRepoConfig();
      }
    } catch (err) {
      handleError(err);
    }
  });
