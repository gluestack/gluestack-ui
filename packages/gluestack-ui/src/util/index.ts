import os from 'os';
import fs, { stat } from 'fs-extra';
import simpleGit from 'simple-git';
import { config } from '../config';
import { execSync, spawnSync } from 'child_process';
import finder from 'find-package-json';
import { join, dirname, extname, relative, basename } from 'path';
import {
  log,
  spinner,
  confirm,
  isCancel,
  cancel,
  select,
} from '@clack/prompts';
import {
  ComponentConfig,
  Dependency,
  getComponentDependencies,
} from '../dependencies';

const homeDir = os.homedir();
const currDir = process.cwd();

const getPackageJsonPath = (): string => {
  var f = finder(currDir);
  return f.next().filename || '';
};

const rootPackageJsonPath = getPackageJsonPath();
const projectRootPath: string = dirname(rootPackageJsonPath);

const getAllComponents = async (): Promise<string[]> => {
  const componentList = fs
    .readdirSync(
      join(homeDir, config.gluestackDir, config.componentsResourcePath)
    )
    .filter(
      (file) =>
        !['.tsx', '.ts', '.jsx', '.js', '.json'].includes(
          extname(file).toLowerCase()
        ) &&
        file !== config.providerComponent &&
        !config.ignoreComponents.includes(file)
    );
  return componentList;
};

interface AdditionalDependencies {
  components: string[];
}

async function checkComponentDependencies(
  components: string[]
): Promise<AdditionalDependencies> {
  const additionalDependencies: AdditionalDependencies = {
    components: [],
  };

  const processedComponents = new Set<string>();

  const processComponent = async (component: string) => {
    if (processedComponents.has(component)) {
      return;
    }

    processedComponents.add(component);
    const dependencyConfig = await getComponentDependencies(component);

    // Add additional components
    if (dependencyConfig.additionalComponents) {
      for (const additionalComponent of dependencyConfig.additionalComponents) {
        if (!additionalDependencies.components.includes(additionalComponent)) {
          additionalDependencies.components.push(additionalComponent);
          // Recursively process dependencies of this component
          await processComponent(additionalComponent);
        }
      }
    }
  };

  // Process all requested components
  for (const component of components) {
    await processComponent(component);
  }

  return additionalDependencies;
}

const cloneRepositoryAtRoot = async (rootPath: string) => {
  try {
    const clonedRepoExists = await checkIfFolderExists(rootPath);
    if (clonedRepoExists) {
      const git = simpleGit(rootPath);
      const currBranch = await git.branchLocal();
      if (currBranch.current !== config.branchName) {
        fs.removeSync(rootPath);
        await cloneComponentRepo(rootPath, config.repoUrl);
      }

      if (currBranch.current === config.branchName) {
        log.step('Repository already cloned.');
        await pullComponentRepo(join(homeDir, config.gluestackDir));
      }
    } else {
      await cloneComponentRepo(rootPath, config.repoUrl);
    }
  } catch (err) {
    log.error(`\x1b[31m Cloning failed.\x1b[0m`);
    throw new Error((err as Error).message);
  }
};

const cloneComponentRepo = async (
  targetPath: string,
  gitURL: string
): Promise<void> => {
  const git = simpleGit();
  const s = spinner();
  s.start('⏳ Cloning repository...');
  try {
    await git.clone(gitURL, targetPath, [
      '--depth=1',
      '--branch',
      config.branchName,
    ]);
    s.stop('\x1b[32m' + 'Cloning successful.' + '\x1b[0m');
  } catch (err) {
    s.stop('\x1b[31m' + 'Cloning failed' + '\x1b[0m');
    throw new Error((err as Error).message);
  }
};

const pullComponentRepo = async (targetpath: string): Promise<void> => {
  const s = spinner();
  s.start('⏳ Pulling latest changes...');
  let retry = 0;
  let success = false;
  while (!success && retry < 3) {
    try {
      await wait(1000);
      await tryGitPull(targetpath);
      success = true;
    } catch (err) {
      log.error(`\x1b[31mError: ${(err as Error).message}\x1b[0m`);
      log.error(
        `\x1b[31mPulling failed - retrying... (Attempt ${retry + 1})\x1b[0m`
      );
      retry++;
    }
  }
  if (!success) {
    s.stop('\x1b[31m' + 'Pulling failed!' + '\x1b[0m');
    throw new Error('Error pulling remote branch!');
  } else s.stop('Git pull successful.');
};

const tryGitPull = async (targetPath: string): Promise<void> => {
  const git = simpleGit(targetPath);
  if (fs.existsSync(targetPath)) {
    await git.pull('origin', config.branchName);
  } else log.error('\x1b[31m' + 'Target path does not exist' + '\x1b[0m');
};

const wait = (msec: number): Promise<void> =>
  new Promise<void>((resolve, _) => {
    setTimeout(resolve, msec);
  });

//checking from cwd
export function findLockFileType(): string | null {
  const lockFiles: { [key: string]: string } = {
    'package-lock.json': 'npm',
    'yarn.lock': 'yarn',
    'pnpm-lock.yaml': 'pnpm',
    'bun.lockb': 'bun',
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

function getPackageMangerFlag(options: any) {
  if (options.useBun) {
    config.packageManager = 'bun';
    return 'bun';
  }
  if (options.usePnpm) {
    config.packageManager = 'pnpm';
    return 'pnpm';
  }
  if (options.useYarn) {
    config.packageManager = 'yarn';
    return 'yarn';
  }
  if (options.useNpm) {
    config.packageManager = 'npm';
    return 'npm';
  }
}

export const promptVersionManager = async (): Promise<any> => {
  const packageManager = await select({
    message:
      'No lockfile detected. Please select a package manager to install dependencies:',
    options: [
      { value: 'npm', label: 'npm', hint: 'recommended' },
      { value: 'yarn', label: 'yarn' },
      { value: 'pnpm', label: 'pnpm' },
      { value: 'bun', label: 'bun' },
    ],
  });
  if (isCancel(packageManager)) {
    cancel('Operation cancelled.');
    process.exit(0);
  }
  return packageManager;
};

async function ensureLegacyPeerDeps(): Promise<void> {
  const commands: { [key: string]: string } = {
    npm: 'npm config --location=project set legacy-peer-deps=true',
    yarn: 'yarn config set legacy-peer-deps true',
    pnpm: 'pnpm config set legacy-peer-deps true',
  };

  const command = config.packageManager && commands[config.packageManager];
  if (command) execSync(command);
}

const installDependencies = async (
  input: string[] | string,
  versionManager: string | null,
  additionalDependencies?: ComponentConfig | undefined
): Promise<void> => {
  try {
    let versionManager =
      config.packageManager ||
      findLockFileType() ||
      (await promptVersionManager());
    config.packageManager = versionManager;
    await ensureLegacyPeerDeps();

    const dependenciesToInstall: {
      dependencies: Dependency;
      devDependencies: Dependency;
    } = { dependencies: {}, devDependencies: {} };

    //add additional dependencies if any
    if (additionalDependencies) {
      Object.assign(
        dependenciesToInstall.dependencies,
        additionalDependencies.dependencies
      );
      additionalDependencies?.devDependencies &&
        Object.assign(
          dependenciesToInstall.devDependencies,
          additionalDependencies?.devDependencies
        );
    }

    //get dependencies from config
    const gatherDependencies = async (
      components: string[]
    ): Promise<{
      dependencies: Dependency;
      devDependencies: Dependency;
    }> => {
      for (const component of components) {
        const config = await getComponentDependencies(component);
        // Add dependencies
        Object.assign(dependenciesToInstall.dependencies, config.dependencies);
        // Add devDependencies
        Object.assign(
          dependenciesToInstall?.devDependencies,
          config?.devDependencies
        );
      }
      return dependenciesToInstall;
    };
    //get input based dependencies
    if (input === '--all') await gatherDependencies(await getAllComponents());
    else if (Array.isArray(input)) await gatherDependencies(input);

    //generate install command
    const generateInstallCommand = (
      deps: { [key: string]: string },
      flag: string
    ): string =>
      Object.entries(deps)
        .map(([pkg, version]) => {
          // If version is empty or undefined, use 'latest'
          const packageVersion =
            version && version.trim() !== '' ? version : 'latest';
          return `${pkg}@${packageVersion}`;
        })
        .join(' ') + flag;

    const commands: { [key: string]: { install: string; devFlag: string } } = {
      npm: { install: 'npm install', devFlag: ' --save-dev' },
      yarn: { install: 'yarn add', devFlag: ' --dev' },
      pnpm: { install: 'pnpm i', devFlag: ' -D' },
      bun: { install: 'bun add', devFlag: ' --dev' },
    };
    const { install, devFlag } = commands[versionManager];

    const installCommand = `${install} ${generateInstallCommand(
      dependenciesToInstall.dependencies,
      ''
    )}`;
    const devInstallCommand = `${install} ${generateInstallCommand(
      dependenciesToInstall.devDependencies,
      devFlag
    )}`;

    const s = spinner();
    s.start(
      '⏳ Installing dependencies. This might take a couple of minutes...'
    );

    try {
      if (Object.keys(dependenciesToInstall.dependencies).length > 0) {
        const installArgs = installCommand.split(' ');
        const cmd = installArgs.shift();
        const result = spawnSync(cmd!, installArgs, {
          cwd: currDir,
          stdio: 'inherit',
          shell: true,
        });
        if (result.error) {
          throw new Error(
            `Failed to install dependencies: ${result.error.message}`
          );
        }
        if (result.status !== 0) {
          throw new Error(
            `Install command failed with exit code ${result.status}`
          );
        }
      }
      if (Object.keys(dependenciesToInstall.devDependencies).length > 0) {
        const devInstallArgs = devInstallCommand.split(' ');
        const devCmd = devInstallArgs.shift();
        const devResult = spawnSync(devCmd!, devInstallArgs, {
          cwd: currDir,
          stdio: 'inherit',
          shell: true,
        });
        if (devResult.error) {
          throw new Error(
            `Failed to install dev dependencies: ${devResult.error.message}`
          );
        }
        if (devResult.status !== 0) {
          throw new Error(
            `Dev install command failed with exit code ${devResult.status}`
          );
        }
      }

      s.stop(`Dependencies have been installed successfully.`);
    } catch (err) {
      s.stop(`\x1b[31mFailed to install dependencies.\x1b[0m`);
      log.error(
        `\x1b[31mError installing dependencies: ${
          (err as Error).message
        }\x1b[0m`
      );
      log.warning(`\x1b[33mPlease run the following commands manually:\x1b[0m`);
      if (Object.keys(dependenciesToInstall.dependencies).length > 0) {
        log.warning(`\x1b[33m${installCommand}\x1b[0m`);
      }
      if (Object.keys(dependenciesToInstall.devDependencies).length > 0) {
        log.warning(`\x1b[33m${devInstallCommand}\x1b[0m`);
      }
      throw new Error(
        `Error installing dependencies: ${(err as Error).message}`
      );
    }
  } catch (err) {
    throw new Error((err as Error).message);
  }
};

//function to detect type of project
async function detectProjectType(directoryPath: string): Promise<string> {
  try {
    const fileChecks: { [key: string]: string[] } = {
      nextjs: ['next.config.js', 'next.config.mjs', 'next.config.ts'],
      expo: ['app.json', 'app.config.js', 'app.config.ts'],
      reactNative: ['ios', 'android'],
    };

    const checkFiles = async (files: string[]): Promise<boolean> =>
      (
        await Promise.all(
          files.map((file) => fs.pathExists(`${directoryPath}/${file}`))
        )
      ).some(Boolean);

    const isNextJs = await checkFiles(fileChecks.nextjs);
    const isExpo = await checkFiles(fileChecks.expo);
    const isReactNative = await checkFiles(fileChecks.reactNative);

    if (fs.existsSync(rootPackageJsonPath)) {
      const packageJson = await fs.readJSON(rootPackageJsonPath);
      const { dependencies } = packageJson;

      if (isNextJs && dependencies?.next) {
        return (await getConfirmation('Detected a Next JS project, continue?'))
          ? config.nextJsProject
          : await getFrameworkInput();
      } else if (
        isExpo &&
        dependencies?.expo &&
        dependencies['react-native'] &&
        !dependencies.next &&
        !isNextJs &&
        !isReactNative
      ) {
        return (await getConfirmation('Detected an Expo project, continue?'))
          ? config.expoProject
          : await getFrameworkInput();
      } else if (
        isReactNative &&
        dependencies['react-native'] &&
        !dependencies.expo
      ) {
        return (await getConfirmation(
          'Detected a React Native CLI project, continue?'
        ))
          ? config.reactNativeCLIProject
          : await getFrameworkInput();
      }
    }
    const frameworkInput = await getFrameworkInput();
    return frameworkInput;
  } catch (err) {
    log.error(`\x1b[31m${err as Error}\x1b[0m`);
    process.exit(1);
  }
}

async function getConfirmation(message: string): Promise<boolean> {
  const confirmInput = await confirm({
    message: message,
  });
  if (isCancel(confirmInput)) {
    cancel('Operation cancelled.');
    process.exit(1);
  }
  return confirmInput;
}

async function getFrameworkInput(): Promise<string> {
  const frameworkInput = await select({
    message: 'Please select the framework you are using:',
    options: [
      {
        value: config.nextJsProject,
        label: 'Next Js',
      },
      { value: config.expoProject, label: 'Expo' },
      {
        value: config.reactNativeCLIProject,
        label: 'React Native CLI',
      },
      {
        value: 'library',
        label: 'library',
      },
    ],
  });
  if (isCancel(frameworkInput)) {
    cancel('Operation cancelled.');
    process.exit(1);
  }
  return frameworkInput as string;
}

//regex check for --path input
function isValidPath(path: string): boolean {
  const pathRegex = /^(?!\/{2})[a-zA-Z/.]{1,2}.*/;
  return pathRegex.test(path);
}

const checkWritablePath = async (path: string): Promise<boolean> => {
  const confirmPath = await getConfirmation(
    `\x1b[33mContinue writing components in the above path? :\x1b[0m [If the path is incorrect, please provide the path from the root of the project]
     \n\x1b[34m${join(projectRootPath, path)}
    \x1b[0m`
  );
  if (!confirmPath) process.exit(1);
  return true;
};

const checkIfFolderExists = async (path: string): Promise<boolean> => {
  try {
    const stats = await stat(path);
    return stats.isDirectory();
  } catch (error) {
    return false;
  }
};

function removeHyphen(str: string): string {
  return str.replace(/-/g, '');
}

// Define a callback type
type Callback = (error: Error | null, output: string | null) => void;

function getRelativePath({
  sourcePath,
  targetPath,
}: {
  sourcePath: string;
  targetPath: string;
}) {
  const sourceDir = dirname(sourcePath);
  const targetDir = dirname(targetPath);

  let relativePath = relative(sourceDir, targetDir);
  return relativePath === '.' || relativePath === ''
    ? './' + basename(targetPath)
    : join(relativePath, basename(targetPath));
}

async function ensureFilesPromise(filePaths: string[]): Promise<boolean> {
  try {
    // Filter out empty strings, null, and undefined values
    const validPaths = filePaths.filter(
      (path) => path && typeof path === 'string' && path.trim() !== ''
    );
    // Use Promise.all to run all ensureFile operations concurrently
    await Promise.all(
      validPaths.map(async (filePath) => {
        // Normalize the path and ensure the file
        const normalizedPath = filePath.normalize();
        await fs.ensureFile(normalizedPath); // Ensure the file exists asynchronously
      })
    );
    return true; // All operations successful
  } catch (error) {
    console.error('Error ensuring files:', error);
    return false; // At least one operation failed
  }
}

export {
  cloneRepositoryAtRoot,
  getAllComponents,
  detectProjectType,
  isValidPath,
  checkWritablePath,
  projectRootPath,
  installDependencies,
  removeHyphen,
  getRelativePath,
  ensureFilesPromise,
  getPackageMangerFlag,
  checkComponentDependencies,
};
