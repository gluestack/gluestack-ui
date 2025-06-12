import fs from 'fs-extra';
import path from 'path';
import finder from 'find-package-json';
import { spawnSync } from 'child_process';
import {
  isCancel,
  cancel,
  confirm,
  select,
  spinner,
  log,
} from '@clack/prompts';

const currDir = process.cwd();

const getPackageJsonPath = (): string => {
  var f = finder(currDir);
  return f.next().filename || '';
};

const rootPackageJsonPath = getPackageJsonPath();
const projectRootPath: string = path.dirname(rootPackageJsonPath);

const detectLockFile = (): string | null => {
  const packageLockPath = path.join(projectRootPath, 'package-lock.json');
  const yarnLockPath = path.join(projectRootPath, 'yarn.lock');
  const pnpmLockPath = path.join(projectRootPath, 'pnpm-lock.yaml');

  if (fs.existsSync(packageLockPath)) {
    return 'npm';
  } else if (fs.existsSync(yarnLockPath)) {
    return 'yarn';
  } else if (fs.existsSync(pnpmLockPath)) {
    return 'pnpm';
  } else {
    return null;
  }
};

const promptVersionManager = async (): Promise<any> => {
  const packageManager = await select({
    message:
      'No lockfile detected. Please select a package manager to install dependencies:',
    options: [
      { value: 'npm', label: 'npm', hint: 'recommended' },
      { value: 'yarn', label: 'yarn' },
      { value: 'pnpm', label: 'pnpm' },
    ],
  });
  if (isCancel(packageManager)) {
    cancel('Operation cancelled.');
    process.exit(0);
  }
  return packageManager;
};

const installDependencies = async (
  installationMethod: string | undefined
): Promise<void> => {
  let command;
  if (!installationMethod) {
    let versionManager: string | null = detectLockFile();
    if (!versionManager) {
      versionManager = await promptVersionManager();
    } else {
      const shouldContinue = await confirm({
        message: `Lockfile detected for ${versionManager}. Continue with ${versionManager} install?`,
      });
      if (!shouldContinue) {
        versionManager = await promptVersionManager();
      }
    }
    switch (versionManager) {
      case 'npm':
        command = 'npm install --legacy-peer-deps';
        break;
      case 'yarn':
        command = 'yarn';
        break;
      case 'pnpm':
        command = 'pnpm i --lockfile-only';
        break;
      default:
        throw new Error('Invalid package manager selected');
    }
  } else {
    command = installationMethod;
  }

  const s = spinner();
  s.start('⏳ Installing dependencies...');

  try {
    spawnSync(command, {
      cwd: projectRootPath,
      stdio: 'inherit',
      shell: true,
    });
    s.stop(`\x1b[32mDependencies have been installed successfully.\x1b[0m`);
  } catch (err) {
    log.error(`\x1b[31mError: ${(err as Error).message}\x1b[0m`);
    log.error('\x1b[31mError installing dependencies:\x1b[0m');
    log.warning(` - Run \x1b[33m'${command}'\x1b[0m manually!`);
    throw new Error('Error installing dependencies.');
  }
};

const getConfigComponentPath = () => {
  const configFile = fs.readFileSync(
    path.join(currDir, 'gluestack-ui.config.ts'),
    'utf-8'
  );
  const match = configFile.match(/componentPath:\s+(['"])(.*?)\1/);

  const componentPath = (match && match[2]) ?? '';

  return componentPath;
};

const addIndexFile = (componentsDirectory: string, level = 0) => {
  try {
    const files = fs.readdirSync(componentsDirectory);

    const exports = files
      .filter(
        (file) =>
          file !== 'index.js' && file !== 'index.tsx' && file !== 'index.ts'
      )
      .map((file) => {
        const stats = fs.statSync(`${componentsDirectory}/${file}`);
        if (stats.isDirectory()) {
          if (level === 0) {
            addIndexFile(`${componentsDirectory}/${file}`, level + 1);
          }
          return `export * from './${file.split('.')[0]}';`;
        } else {
          return '';
        }
      })
      .join('\n');
    fs.writeFileSync(path.join(componentsDirectory, 'index.ts'), exports);
  } catch (err) {
    log.error(`\x1b[31mError: ${(err as Error).message}\x1b[0m`);
  }
};

const pascalToDash = (str: string): string => {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};

const dashToPascal = (str: string): string => {
  return str
    .toLowerCase()
    .replace(/-(.)/g, (_, group1) => group1.toUpperCase())
    .replace(/(^|-)([a-z])/g, (_, _group1, group2) => group2.toUpperCase());
};

export {
  getConfigComponentPath,
  installDependencies,
  addIndexFile,
  pascalToDash,
  dashToPascal,
  getPackageJsonPath,
};
