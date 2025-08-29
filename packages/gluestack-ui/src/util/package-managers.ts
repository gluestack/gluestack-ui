import fs from 'fs-extra';
import { config } from '../config';
import { join, dirname } from 'path';
import { isCancel, cancel, select, log } from '@clack/prompts';

const currDir = process.cwd();

/** The supported package managers */
export enum PackageManager {
  npm = 'npm',
  yarn = 'yarn',
  pnpm = 'pnpm',
  bun = 'bun',
}

export enum PackageCommand {
  /**
   * Install all defined dependencies
   */
  install = 'install',
  /**
   * Add a new dependency
   */
  add = 'add',
  /**
   * Add a new dependency to the devDependencies
   */
  addDev = 'addDev',
  /**
   * Remove a dependency
   */
  remove = 'remove',
}

/** A mapping for the CLI command to perform a specific action in a specific package manager */
export const packageManagerCommands: Record<
  PackageManager,
  Record<PackageCommand, string>
> = {
  [PackageManager.npm]: {
    [PackageCommand.add]: 'npm install',
    [PackageCommand.addDev]: 'npm install --save-dev',
    [PackageCommand.remove]: 'npm uninstall',
    [PackageCommand.install]: 'npm install',
  },

  [PackageManager.yarn]: {
    [PackageCommand.add]: 'yarn add',
    [PackageCommand.addDev]: 'yarn add --dev',
    [PackageCommand.remove]: 'yarn remove',
    [PackageCommand.install]: 'yarn install',
  },

  [PackageManager.pnpm]: {
    [PackageCommand.add]: 'pnpm i',
    [PackageCommand.addDev]: 'pnpm i -D',
    [PackageCommand.remove]: 'pnpm remove',
    [PackageCommand.install]: 'pnpm install',
  },

  [PackageManager.bun]: {
    [PackageCommand.add]: 'bun add',
    [PackageCommand.addDev]: 'bun add --dev',
    [PackageCommand.remove]: 'bun remove',
    [PackageCommand.install]: 'bun install',
  },
};

export interface PackageManagerOptions {
  useBun?: boolean;
  usePnpm?: boolean;
  useYarn?: boolean;
  useNpm?: boolean;
}

//checking from cwd
function findLockFileType(): PackageManager | null {
  const lockFiles: { [key: string]: PackageManager } = {
    'package-lock.json': PackageManager.npm,
    'yarn.lock': PackageManager.yarn,
    'pnpm-lock.yaml': PackageManager.pnpm,
    'bun.lockb': PackageManager.bun,
  };

  let dir = currDir;
  while (dir !== dirname(dir)) {
    for (const [file, manager] of Object.entries(lockFiles)) {
      if (fs.existsSync(join(dir, file))) return manager;
    }
    dir = dirname(dir);
  }
  return null;
}

const promptVersionManager = async (): Promise<PackageManager> => {
  const packageManager = await select({
    message:
      'No lockfile detected. Please select a package manager to install dependencies:',
    options: [
      { value: PackageManager.npm, label: 'npm', hint: 'recommended' },
      { value: PackageManager.yarn, label: 'yarn' },
      { value: PackageManager.pnpm, label: 'pnpm' },
      { value: PackageManager.bun, label: 'bun' },
    ],
  });
  if (isCancel(packageManager)) {
    cancel('Operation cancelled.');
    process.exit(0);
  }
  return packageManager as PackageManager;
};

/**
 * Save the package manager to the config from the options.
 * @param options - The `options` from Commander for the operation.
 */
export function savePackageManagerFromOptions(options: PackageManagerOptions) {
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

  if (options.useBun) {
    config.packageManager = PackageManager.bun;
  }
  if (options.usePnpm) {
    config.packageManager = PackageManager.pnpm;
  }
  if (options.useYarn) {
    config.packageManager = PackageManager.yarn;
  }
  if (options.useNpm) {
    config.packageManager = PackageManager.npm;
  }
}

/**
 * Get the package manager to use for the project.
 * NOTE: This will use the cached package manager from the config if it exists.
 * This means if you call `savePackageManagerFromOptions` during initialization,
 * this will use the option requested by the user.
 * @returns The package manager to use for the project
 */
export const getPackageManager = async (): Promise<PackageManager> => {
  let result =
    (config.packageManager as PackageManager | null) ||
    findLockFileType() ||
    (await promptVersionManager());

  config.packageManager = result;

  return result;
};
