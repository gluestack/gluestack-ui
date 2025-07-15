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

      // Add additional components to the list
      const allComponentsToInstall = [
        ...new Set([...requestedComponents, ...additionalComponents]),
      ];

      const updatedComponents =
        !existingComponentsChecked && allComponentsToInstall.length
          ? await isComponentInProject(allComponentsToInstall)
          : allComponentsToInstall;
      const count = updatedComponents.length;
      await Promise.all(
        updatedComponents.map(async (component) => {
          const targetPath = join(
            projectRootPath,
            config.writableComponentsPath,
            component
          );

          await writeComponent(component, targetPath);
        })
      )
        .then(async () => {
          let versionManager: string | null = findLockFileType();
          if (!versionManager) {
            versionManager = await promptVersionManager();
          }
          await installDependencies(updatedComponents, versionManager);
          log.success(
            `\x1b[32mDone!\x1b[0m Added new \x1b[1mgluestack-ui\x1b[0m ${
              count === 1 ? 'component' : 'components'
            } into project`
          );
        })
        .catch((err) => {
          log.error(`\x1b[31mError : ${(err as Error).message}\x1b[0m`);
        });
    }
  } catch (err) {
    throw new Error((err as Error).message);
  }
};

const isComponentInProject = async (
  components: string[]
): Promise<string[]> => {
  const alreadyExistingComponents: string[] = [];
  let componentsToAdd: any = [];
  for (const component of components) {
    const pathToCheck = join(
      projectRootPath,
      config.writableComponentsPath,
      component,
      'index.tsx'
    );
    if (fs.existsSync(pathToCheck)) {
      alreadyExistingComponents.push(component);
    }
  }
  //confirm about the already existing components
  if (
    alreadyExistingComponents.length === 1 ||
    alreadyExistingComponents.length > 1
  ) {
    const shouldContinue = await confirmOverride(
      alreadyExistingComponents,
      alreadyExistingComponents.length
    );

    //code to remove already existing components from the list
    componentsToAdd = shouldContinue
      ? components.filter(
          (component) => !alreadyExistingComponents.includes(component)
        )
      : processTerminate('Installation aborted');
    if (shouldContinue) {
      componentsToAdd = components;
    } else {
      componentsToAdd = [];
    }
  } else {
    componentsToAdd = components;
  }

  if (componentsToAdd.length === 0) log.error('No components to be added');
  existingComponentsChecked = true;
  return componentsToAdd;
};

const processTerminate = (message: string) => {
  log.error(message);
  process.exit(1);
};

const checkIfComponentIsValid = async (
  components: string[]
): Promise<boolean> => {
  const componentList = await getAllComponents();
  if (components.every((component) => componentList.includes(component)))
    return true;
  else return false;
};

const writeComponent = async (component: string, targetPath: string) => {
  try {
    await fs.ensureDir(targetPath);

    const sourcePath = join(
      _homeDir,
      config.gluestackDir,
      config.componentsResourcePath,
      component
    );

    // Copy only files from the root directory, excluding subdirectories and dependencies.json
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

const confirmOverride = async (
  component: string[],
  existingCount: number
): Promise<boolean | symbol> => {
  const displayComponent = existingCount === 1 ? component[0] : 'Few';
  const components = existingCount === 1 ? 'component' : 'components';
  const shouldContinue = await confirm({
    message: `\x1b[33mWARNING: ${
      displayComponent[0].toUpperCase() + displayComponent.slice(1)
    } ${components} already exists. Continuing with the installation may result in component replacement if changes are made. Please commit your changes before proceeding with the installation. Continue?\x1b[0m`,
  });

  return shouldContinue;
};

export { componentAdder, getAllComponents };
