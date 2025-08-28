import fs from 'fs-extra';
import chalk from 'chalk';
import os from 'os';
import { join } from 'path';
import { log, confirm } from '@clack/prompts';
import { config } from '../../config';
import {
  checkComponentDependencies,
  getAllComponents,
  installDependencies,
  projectRootPath,
  findLockFileType,
  promptVersionManager,
} from '..';

const _homeDir = os.homedir();
let existingComponentsChecked: boolean = false;

const componentAdder = async ({
  addAll = false,
  componentArgs = [],
}: {
  addAll?: boolean;
  componentArgs?: Array<string>;
}) => {
  try {
    let componentsToAdd = componentArgs;

    if (componentsToAdd.length > 0 || addAll) {
      if (
        !addAll &&
        componentsToAdd?.length &&
        !(await checkIfComponentIsValid(componentsToAdd))
      ) {
        log.error(
          chalk.red(
            `Invalid names entered. Kindly check and choose a valid component name.`
          )
        );
        return;
      }
      console.log(`\n\x1b[1mAdding new component...\x1b[0m\n`);
      let requestedComponents = addAll
        ? await getAllComponents()
        : componentsToAdd;
      const { components: additionalComponents } =
        await checkComponentDependencies(requestedComponents);

      const allComponentsToInstall = [
        ...new Set([...requestedComponents, ...additionalComponents]),
      ];

      const updatedComponents =
        !existingComponentsChecked && allComponentsToInstall.length
          ? await isComponentInProject(allComponentsToInstall)
          : allComponentsToInstall;
      const count = updatedComponents.length;
      if (count === 0) {
        log.step(`No new components to add.`);
        return;
      }

      log.step(`Adding ${count} component${count > 1 ? 's' : ''}:`);
      console.log(
        `${chalk.cyan('⏳')} ${updatedComponents
          .map((component) => chalk.yellow(component))
          .join(', ')}`
      );

      let versionManager: string | null =
        config.packageManager || findLockFileType();
      if (!versionManager) {
        versionManager = await promptVersionManager();
      }

      await installDependencies(updatedComponents, versionManager);

      for (const component of updatedComponents) {
        const targetPath = join(
          projectRootPath,
          config.writableComponentsPath,
          component
        );
        await writeComponent(component, targetPath);
      }

      log.success(
        `\x1b[32mDone!\x1b[0m Added ${count} component${
          count > 1 ? 's' : ''
        } to the project.`
      );
    }
  } catch (error) {
    log.error(`\x1b[31mError: ${(error as Error).message}\x1b[0m`);
  }
};

const isComponentInProject = async (
  allComponentsToInstall: string[]
): Promise<string[]> => {
  const currentComponents = fs
    .readdirSync(join(projectRootPath, config.writableComponentsPath))
    .filter((item) => {
      const itemPath = join(
        projectRootPath,
        config.writableComponentsPath,
        item
      );
      return fs.statSync(itemPath).isDirectory();
    });

  const existingComponents = allComponentsToInstall.filter((component) =>
    currentComponents.includes(component)
  );

  if (existingComponents.length > 0) {
    const shouldContinue = await confirm({
      message: `\x1b[33mThe following components are already present in your project: ${existingComponents.join(
        ', '
      )}. Do you want to overwrite them?\x1b[0m`,
    });

    const componentsToAdd = shouldContinue
      ? allComponentsToInstall
      : allComponentsToInstall.filter(
          (component) => !existingComponents.includes(component)
        );
    existingComponentsChecked = true;
    return componentsToAdd;
  }

  return allComponentsToInstall;
};

async function checkIfComponentIsValid(components: string[]): Promise<boolean> {
  try {
    const allComponents = await getAllComponents();
    // Allow gluestack-ui-provider to be added manually even though it's excluded from getAllComponents
    const allowedComponents = [...allComponents, config.providerComponent];
    return components.every((component) =>
      allowedComponents.includes(component)
    );
  } catch (err) {
    log.error(
      `\x1b[31mError fetching available components: ${
        (err as Error).message
      }\x1b[0m`
    );
    return false;
  }
}

const writeComponent = async (component: string, targetPath: string) => {
  try {
    await fs.ensureDir(targetPath);

    const sourcePath = join(
      _homeDir,
      config.gluestackDir,
      config.componentsResourcePath,
      component
    );

    const files = await fs.readdir(sourcePath, { withFileTypes: true });

    for (const file of files) {
      if (file.isFile() && file.name !== 'dependencies.json') {
        await fs.copy(
          join(sourcePath, file.name),
          join(targetPath, file.name),
          { overwrite: true }
        );
      }
    }
  } catch (error) {
    log.error(`\x1b[31mError: ${(error as Error).message}\x1b[0m`);
  }
};

export { componentAdder };