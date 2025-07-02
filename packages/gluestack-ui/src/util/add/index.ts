import fs from 'fs-extra';
import chalk from 'chalk';
import os from 'os';
import { basename, join, parse } from 'path';
import { log, confirm } from '@clack/prompts';
import { config } from '../../config';
import {
  checkComponentDependencies,
  getAllComponents,
  installDependencies,
  projectRootPath,
  removeHyphen,
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
    const res = await sortComponentsAndHooks(componentArgs);
    let componentsToAdd = res.components;
    let hooksToAdd = res.hooks;
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

      const { hooks, components: additionalComponents } =
        await checkComponentDependencies(requestedComponents);
      hooksToAdd = Array.from(hooks);

      // Include additional components from dependencies.json files
      const allComponents = [...requestedComponents, ...additionalComponents];
      const uniqueComponents = Array.from(new Set(allComponents));

      // Show user what additional components are being added
      if (additionalComponents.length > 0) {
        console.log(
          `\n📦 \x1b[36mAdditional components found in dependencies:\x1b[0m`
        );
        additionalComponents.forEach((component) => {
          console.log(`   • ${component}`);
        });
        console.log('');
      }

      const updatedComponents =
        !existingComponentsChecked && uniqueComponents.length
          ? await isComponentInProject(uniqueComponents)
          : uniqueComponents;
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

          // Show summary of what was added
          console.log(
            `\n✅ \x1b[32mSuccessfully added ${count} component${count === 1 ? '' : 's'}:\x1b[0m`
          );
          updatedComponents.forEach((component) => {
            console.log(`   • ${component}`);
          });

          log.success(
            `\x1b[32mDone!\x1b[0m Added new \x1b[1mgluestack-ui\x1b[0m ${count === 1 ? 'component' : 'components'} into project`
          );
        })
        .catch((err) => {
          log.error(`\x1b[31mError : ${(err as Error).message}\x1b[0m`);
        });
    }
    if (hooksToAdd.length > 0) await hookAdder(hooksToAdd);
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
    await fs.copy(
      join(
        _homeDir,
        config.gluestackDir,
        config.componentsResourcePath,
        component
      ),
      join(targetPath),
      {
        overwrite: true,
        filter: (src: string) => {
          const relativePath = src.replace(
            join(
              _homeDir,
              config.gluestackDir,
              config.componentsResourcePath,
              component
            ),
            ''
          );

          // Skip if the path starts with any of the ignored folders
          for (const ignoreFolder of config.ignoreFolders) {
            if (
              relativePath.startsWith(`/${ignoreFolder}`) ||
              relativePath.startsWith(`\\${ignoreFolder}`)
            ) {
              return false;
            }
          }

          // Skip dependencies.json file
          if (
            relativePath === '/dependencies.json' ||
            relativePath === '\\dependencies.json' ||
            relativePath === 'dependencies.json'
          ) {
            return false;
          }

          return true;
        },
      }
    );
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

const hookAdder = async (requestedHook: string[]) => {
  try {
    log.info(`\n\x1b[1mAdding new hook...\x1b[0m\n`);
    await writeHook(requestedHook);
    log.success(
      `\x1b[32mDone!\x1b[0m Added new \x1b[1mgluestack-ui\x1b[0m hook into project`
    );
  } catch (err) {
    log.error(`\x1b[31mError: ${(err as Error).message}\x1b[0m`);
  }
};

const sortComponentsAndHooks = async (
  inputNames: string[] | undefined
): Promise<{ hooks: string[]; components: string[] }> => {
  if (!inputNames || inputNames.length === 0) {
    return { hooks: [], components: [] };
  }

  const hooksPath = join(
    _homeDir,
    config.gluestackDir,
    config.hooksResourcePath
  );
  const hooksList = fs
    .readdirSync(hooksPath)
    .map((file) => removeHyphen(parse(file).name).toLowerCase());

  const result = inputNames.reduce(
    (acc, name) => {
      const lowercaseName = name.toLowerCase();
      if (hooksList.includes(lowercaseName)) {
        acc.hooks.push(name);
      } else {
        acc.components.push(name);
      }
      return acc;
    },
    { hooks: [] as string[], components: [] as string[] }
  );

  return result;
};

const hookFileName = async (hook: string): Promise<string> => {
  const hooksList = fs.readdirSync(
    join(_homeDir, config.gluestackDir, config.hooksResourcePath)
  );
  let fileName = '';
  hooksList.forEach((file) => {
    if (removeHyphen(parse(file).name) == hook.toLowerCase()) {
      fileName = basename(file);
    }
  });
  return fileName;
};
const writeHook = async (hooksArray: string[]) => {
  for (const hook of hooksArray) {
    const fileName = await hookFileName(hook);
    const utilsPath = join(
      projectRootPath,
      config.writableComponentsPath,
      'utils',
      fileName
    );
    const sourceFilePath = join(
      _homeDir,
      config.gluestackDir,
      config.hooksResourcePath,
      fileName
    );
    if (fs.existsSync(utilsPath)) {
      const shouldOverride = await confirmHookOverride(hook);
      if (!shouldOverride) {
        processTerminate('Installation aborted');
      }
    }

    try {
      await fs.ensureFile(utilsPath);
      await fs.copy(sourceFilePath, utilsPath);
    } catch (error) {
      log.error(`Error adding hook ${hook}: ${(error as Error).message}`);
    }
  }
};

const confirmHookOverride = async (hook: string): Promise<boolean | symbol> => {
  const shouldContinue = await confirm({
    message: `\x1b[33mWARNING: ${
      hook[0].toUpperCase() + hook.slice(1)
    } hook already exists. Continuing with the installation may result in hook replacement if changes are made. Please commit your changes before proceeding with the installation. Continue?\x1b[0m`,
  });

  return shouldContinue;
};

export { componentAdder, getAllComponents };
