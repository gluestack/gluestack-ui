import { spinner } from '@clack/prompts';
import fs from 'fs-extra';
import path from 'path';
import { spawnSync } from 'child_process';
import {
  getPackageManager,
  PackageManager,
  packageManagerCommands,
} from '../package-managers';
import { v3UpgradeDependencies } from '../../dependencies';
import { installDependencies } from '../install-dependencies';

// Remove old packages
export async function removePackages(packages: string[]): Promise<void> {
  if (!packages.length) return;

  const packageManager = await getPackageManager();

  const s = spinner();
  s.start('Removing old gluestack packages...');

  const cmd = packageManagerCommands[packageManager].remove;

  if (!cmd) throw new Error('Unsupported package manager');
  const result = spawnSync(cmd, packages, {
    cwd: process.cwd(),
    stdio: 'inherit',
    shell: true,
  });
  if (result.error || result.status !== 0)
    throw new Error('Failed to remove packages');
  s.stop('Old packages removed.');
}

// Clean node_modules and reinstall dependencies
export async function cleanAndReinstall(): Promise<void> {
  const packageManager = await getPackageManager();

  const s = spinner();
  s.start('Cleaning node_modules and reinstalling dependencies...');

  const nodeModulesPath = path.join(process.cwd(), 'node_modules');
  const lockFiles: Record<PackageManager, string> = {
    npm: 'package-lock.json',
    yarn: 'yarn.lock',
    pnpm: 'pnpm-lock.yaml',
    bun: 'bun.lockb',
  };

  try {
    // Remove node_modules
    if (fs.existsSync(nodeModulesPath)) {
      fs.removeSync(nodeModulesPath);
    }

    // Remove lock file
    const lockFile = lockFiles[packageManager];
    if (lockFile && fs.existsSync(path.join(process.cwd(), lockFile))) {
      fs.removeSync(path.join(process.cwd(), lockFile));
    }

    // Reinstall all dependencies
    const installCmd = packageManagerCommands[packageManager].install;

    const result = spawnSync(installCmd, [], {
      cwd: process.cwd(),
      stdio: 'inherit',
      shell: true,
    });
    if (result.error || result.status !== 0)
      throw new Error('Failed to reinstall dependencies');

    s.stop('Dependencies reinstalled successfully.');
  } catch (error) {
    s.stop('Failed to clean and reinstall.');
    throw error;
  }
}

// Install new packages
export async function installPackages() {
  const s = spinner();
  s.start('Installing @gluestack-ui/core and @gluestack-ui/utils...');

  await installDependencies([], v3UpgradeDependencies);

  s.stop('New packages installed.');
}
