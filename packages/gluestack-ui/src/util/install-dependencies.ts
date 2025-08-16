import { execSync, spawnSync } from 'child_process';
import { log, spinner } from '@clack/prompts';
import {
  ComponentConfig,
  Dependency,
  getComponentDependencies,
} from '../dependencies';
import { getAllComponents } from './get-components';
import {
  getPackageManager,
  PackageManager,
  packageManagerCommands,
} from './package-managers';

const currDir = process.cwd();

async function ensureLegacyPeerDeps(
  packageManager: PackageManager | null
): Promise<void> {
  const commands: { [key: string]: string } = {
    npm: 'npm config --location=project set legacy-peer-deps=true',
    yarn: 'yarn config set legacy-peer-deps true',
    pnpm: 'pnpm config set legacy-peer-deps true',
  };

  const command = packageManager && commands[packageManager];
  if (command) execSync(command);
}

async function gatherDependencies(
  input: string[] | string,
  additionalDependencies: ComponentConfig | undefined
): Promise<{
  dependencies: Dependency;
  devDependencies: Dependency;
}> {
  // This will be the result of the function. We start it with the values from the additionalDependencies parameter.
  const dependenciesToInstall: {
    dependencies: Dependency;
    devDependencies: Dependency;
  } = { dependencies: {}, devDependencies: {}, ...additionalDependencies };

  // get input-based dependencies and add them to the result object.
  const components = input === '--all' ? await getAllComponents() : input;
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
}

//generate install command
const generateInstallCommand = (
  command: string,
  deps: { [key: string]: string }
): string =>
  command +
  ' ' +
  Object.entries(deps)
    .map(([pkg, version]) => {
      // If version is empty or undefined, use 'latest'
      const packageVersion =
        version && version.trim() !== '' ? version : 'latest';
      return `${pkg}@${packageVersion}`;
    })
    .join(' ');

export const installDependencies = async (
  input: string[] | string,
  additionalDependencies?: ComponentConfig | undefined
): Promise<void> => {
  try {
    const versionManager: PackageManager = await getPackageManager();

    await ensureLegacyPeerDeps(versionManager);

    const dependenciesToInstall = await gatherDependencies(
      input,
      additionalDependencies
    );

    const install = packageManagerCommands[versionManager].add;
    const devInstall = packageManagerCommands[versionManager].addDev;

    const installCommand = generateInstallCommand(
      install,
      dependenciesToInstall.dependencies
    );
    const devInstallCommand = generateInstallCommand(
      devInstall,
      dependenciesToInstall.devDependencies
    );

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
