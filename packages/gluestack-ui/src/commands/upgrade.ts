import { Command } from 'commander';
import { log, spinner, confirm, isCancel, cancel } from '@clack/prompts';
import fs from 'fs-extra';
import path from 'path';
import { spawnSync } from 'child_process';
import simpleGit from 'simple-git';

// Utility: Is this an old gluestack package?
function isOldGluestackPackage(pkg: string): boolean {
  return (
    !pkg.includes('nightly') &&
    (pkg.startsWith('@gluestack-ui') || pkg.startsWith('gluestack') || pkg.startsWith('@gluestack'))
  );
}

// Detect old gluestack packages in package.json
async function detectOldPackages(): Promise<string[]> {
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  if (!fs.existsSync(packageJsonPath)) throw new Error('No package.json found');
  const pkgJson = await fs.readJSON(packageJsonPath);
  const allDeps = { ...pkgJson.dependencies, ...pkgJson.devDependencies };
  return Object.keys(allDeps).filter(isOldGluestackPackage);
}

// Check for uncommitted git changes
async function hasUncommittedChanges(): Promise<boolean> {
  try {
    const git = simpleGit(process.cwd());
    const status = await git.status();
    return status.files.length > 0;
  } catch {
    return false;
  }
}

// Remove old packages
function removePackages(packages: string[], packageManager: string): void {
  if (!packages.length) return;
  const s = spinner();
  s.start('Removing old gluestack packages...');
  const cmds: { [key: string]: string } = { npm: 'npm uninstall', yarn: 'yarn remove', pnpm: 'pnpm remove', bun: 'bun remove' };
  const cmd = cmds[packageManager];
  if (!cmd) throw new Error('Unsupported package manager');
  const result = spawnSync(cmd, packages, { cwd: process.cwd(), stdio: 'inherit', shell: true });
  if (result.error || result.status !== 0) throw new Error('Failed to remove packages');
  s.stop('Old packages removed.');
}

// Install new packages
function installPackages(packageManager: string): void {
  const s = spinner();
  s.start('Installing @gluestack-ui-nightly/core and @gluestack-ui-nightly/utils...');
  const cmds: { [key: string]: string } = { npm: 'npm install', yarn: 'yarn add', pnpm: 'pnpm i', bun: 'bun add' };
  const cmd = cmds[packageManager];
  if (!cmd) throw new Error('Unsupported package manager');
  const pkgs = ['@gluestack-ui-nightly/core@*', '@gluestack-ui-nightly/utils@*'];
  const result = spawnSync(cmd, pkgs, { cwd: process.cwd(), stdio: 'inherit', shell: true });
  if (result.error || result.status !== 0) throw new Error('Failed to install new packages');
  s.stop('New packages installed.');
}

export const upgrade = new Command()
  .name('upgrade')
  .description('Upgrade from old gluestack packages to gluestack-ui-nightly')
  .action(async () => {
    try {
      log.info('\n\x1b[1mGluestack UI Upgrade\x1b[0m');
      const oldPackages = await detectOldPackages();
      if (!oldPackages.length) {
        log.info('No old gluestack packages found.');
        return;
      }
      log.info('Found old packages:');
      oldPackages.forEach((pkg: string) => log.info('  - ' + pkg));
      if (await hasUncommittedChanges()) {
        log.warning('You have uncommitted git changes. Please commit before upgrading.');
        const proceed = await confirm({ message: 'Continue anyway?' });
        if (isCancel(proceed) || !proceed) {
          cancel('Upgrade cancelled.');
          process.exit(0);
        }
      }
      // Detect package manager
      let packageManager: string = 'npm';
      if (fs.existsSync('yarn.lock')) packageManager = 'yarn';
      else if (fs.existsSync('pnpm-lock.yaml')) packageManager = 'pnpm';
      else if (fs.existsSync('bun.lockb')) packageManager = 'bun';
      removePackages(oldPackages, packageManager);
      installPackages(packageManager);
      log.success('\x1b[32mUpgrade complete!\x1b[0m');
      log.info('Update your imports to use @gluestack-ui-nightly/*');
    } catch (err: any) {
      log.error((err && err.message) || String(err));
      process.exit(1);
    }
  }); 