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
        !existingComponentsChecked && allComponentsToInstall.length
          ? await isComponentInProject(allComponentsToInstall)
          : allComponentsToInstall;
      const count = updatedComponents.length;
      if (count === 0) {
        log.step(`No new components to add.`);
        return;
      }
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
