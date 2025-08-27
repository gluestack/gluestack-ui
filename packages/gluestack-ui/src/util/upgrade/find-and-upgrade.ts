import { log, spinner, confirm, isCancel, cancel } from '@clack/prompts';
import fs from 'fs-extra';
import path from 'path';
import simpleGit from 'simple-git';
import {
  cleanAndReinstall,
  installPackages,
  removePackages,
} from './package-upgrades';
import { updateImports } from './update-imports';
import {
  updateTailwindConfig,
  updateRegistryFile,
  updateNextConfig,
} from './update-config-files';

// Utility: Is this an old gluestack package?
function isOldGluestackPackage(pkg: string): boolean {
  return (
    !pkg.includes('nightly') &&
    (pkg.startsWith('@gluestack-ui') ||
      pkg.startsWith('gluestack') ||
      pkg.startsWith('@gluestack'))
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

export async function findAndUpgrade() {
  const oldPackages = await detectOldPackages();
  if (!oldPackages.length) {
    log.info('No old gluestack packages found.');
    return;
  }
  log.info('Found old packages:');
  oldPackages.forEach((pkg: string) => log.info('  - ' + pkg));
  if (await hasUncommittedChanges()) {
    log.warning(
      'You have uncommitted git changes. Please commit before upgrading.'
    );
    const proceed = await confirm({ message: 'Continue anyway?' });
    if (isCancel(proceed) || !proceed) {
      cancel('Upgrade cancelled.');
      process.exit(0);
    }
  }

  await updateTailwindConfig();

  await installPackages();
  await removePackages(oldPackages);
  await cleanAndReinstall();

  await updateRegistryFile();
  await updateNextConfig();
  await updateImports();
}
