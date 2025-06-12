import fs from 'fs-extra';
import path from 'path';
import {
  addIndexFile,
  dashToPascal,
  getConfigComponentPath,
  getPackageJsonPath,
  pascalToDash,
} from '../../utils';
import { isCancel, cancel, confirm, log } from '@clack/prompts';
import os from 'os';
const prompts = require('prompts');

const rootPackageJsonPath: string = getPackageJsonPath();

const homeDir = os.homedir();
let existingComponentsChecked: boolean = false;

const currDir = process.cwd();

const getComponentsList = async (): Promise<Array<string>> => {
  const sourcePath = path.join(
    homeDir,
    '.gluestack',
    'cache',
    'gluestack-ui',
    'example',
    'storybook',
    'src',
    'ui-components'
  );
  return fs.readdirSync(sourcePath);
};

const checkIfComponentIsValid = async (component: string): Promise<boolean> => {
  const componentList = await getComponentsList();

  if (
    componentList.includes(component) ||
    componentList.includes(dashToPascal(component))
  ) {
    return true;
  }
  return false;
};

const componentAdder = async (
  requestedComponent = '',
  showWarning = true,
  isUpdate = false,
  forceUpdate = false
) => {
  if (
    !(await checkIfComponentIsValid(requestedComponent)) &&
    requestedComponent !== '--all' &&
    requestedComponent !== ''
  ) {
    log.error(
      '\x1b[32m' +
        `The ${requestedComponent} does not exists. Kindly choose from the below list.` +
        '\x1b[0m'
    );
  }
  try {
    // Get config
    const sourcePath = path.join(
      homeDir,
      '.gluestack',
      'cache',
      'gluestack-ui',
      'example',
      'storybook',
      'src',
      'ui-components'
    );

    let requestedComponents: string[] = [];
    let addComponents: string[] = [];

    if (requestedComponent === '--all') {
      requestedComponents = getAllComponents(sourcePath);
    } else {
      requestedComponents.push(requestedComponent);
    }

    if (
      !existingComponentsChecked &&
      showWarning &&
      requestedComponent !== '' &&
      !forceUpdate
    ) {
      const updatedComponents = await checkForExistingFolders(
        requestedComponents
      );
      addComponents = [...updatedComponents];
    } else {
      addComponents = requestedComponents;
    }

    await Promise.all(
      addComponents.map(async component => {
        const componentPath = getConfigComponentPath();
        // createFolders(path.join(currDir, componentPath));
        const targetPath = path.join(currDir, componentPath);

        await copyFolders(
          sourcePath,
          targetPath,
          component,
          isUpdate,
          forceUpdate
        );
        addIndexFile(targetPath);
      })
    );
  } catch (err) {
    log.error(`\x1b[31mError: ${(err as Error).message}\x1b[0m`);
  }
};

const copyFolders = async (
  sourcePath: string,
  targetPath: string,
  specificComponent: string,
  isUpdate: boolean,
  forceUpdate = false
): Promise<void> => {
  const groupedComponents: Record<string, string[]> = {};
  let specificComponentType: string | undefined;

  //  Traverse all components
  try {
    fs.readdirSync(sourcePath).forEach((component: string) => {
      if (
        component !== 'index.ts' &&
        component !== 'index.tsx' &&
        component !== 'Provider'
      ) {
        // Read in the existing package.json file
        const packageJsonPath = path.join(sourcePath, component, 'config.json');

        const packageJson = JSON.parse(
          fs.readFileSync(packageJsonPath, 'utf8')
        );
        let componentType: string | undefined;

        if (packageJson.keywords.indexOf('components') !== -1) {
          componentType = packageJson.keywords[1];
        }

        if (componentType) {
          const cliComponent = pascalToDash(component);
          groupedComponents[componentType] =
            groupedComponents[componentType] || [];
          groupedComponents[componentType].push(cliComponent);
        }

        const sourceComponent = pascalToDash(component);

        if (sourceComponent.toLowerCase() === specificComponent.toLowerCase()) {
          specificComponentType = componentType;
        }
      }
    });
  } catch (err) {
    log.error(`\x1b[31mError: ${(err as Error).message}\x1b[0m`);
    return;
  }
  let selectedComponents: any = [];

  // Ask component type
  if (!specificComponentType) {
    let selectedComponentType: any = [];
    while (selectedComponentType.length === 0) {
      const selectedComponent = await prompts([
        {
          type: 'multiselect',
          name: 'value',
          message: 'Select the type of components:',
          choices: Object.keys(groupedComponents).map(type => {
            return { value: type, title: type };
          }),
          validate: (value: any) => value.length > 0,
          instructions: false,
        },
      ]);

      selectedComponentType = selectedComponent.value;
    }

    if (isCancel(selectedComponentType)) {
      cancel('Operation cancelled.');
      process.exit(0);
    }

    if (Array.isArray(selectedComponentType)) {
      await Promise.all(
        selectedComponentType.map(async (component: any) => {
          if (groupedComponents[component].length !== 0) {
            const selectComponents = await prompts([
              {
                type: 'multiselect',
                name: 'value',
                message: 'Select the type of components:',
                choices: groupedComponents[component].map(type => {
                  return { title: type, value: type };
                }),
                instructions: false,
              },
            ]);

            const selectComponentsValue = selectComponents.value;

            // const selectComponents = await multiselect({
            //   message: `Select ${component} components:`,
            //   options: groupedComponents[component].map((type) => {
            //     return { value: type, label: type };
            //   }),
            //   required: true,
            // });
            if (isCancel(selectComponentsValue)) {
              cancel('Operation cancelled.');
              process.exit(0);
            }
            selectedComponents[component] = selectComponentsValue;
          } else {
            log.error(
              `\x1b[31mError: No components of ${component} type!\x1b[0m`
            );
          }
        })
      );
    }
  } else {
    selectedComponents[specificComponentType] = [specificComponent];
  }

  await Promise.all(
    Object.keys(selectedComponents).map(component => {
      // createFolders(path.join(targetPath, component));
      selectedComponents[component].map((subcomponent: any) => {
        // Add Packages
        const originalComponentPath = dashToPascal(subcomponent);

        const compPackageJsonPath = path.join(
          sourcePath,
          originalComponentPath,
          'config.json'
        );

        const compPackageJson = JSON.parse(
          fs.readFileSync(compPackageJsonPath, 'utf8')
        );

        if (
          compPackageJson.componentDependencies &&
          compPackageJson.componentDependencies.length > 0
        ) {
          compPackageJson.componentDependencies.map(
            async (component: string) => {
              await componentAdder(component, false, true, forceUpdate);
            }
          );
        }

        const rootPackageJson = JSON.parse(
          fs.readFileSync(rootPackageJsonPath, 'utf8')
        );

        rootPackageJson.dependencies = {
          ...rootPackageJson.dependencies,
          ...compPackageJson.dependencies,
        };

        fs.writeFileSync(
          rootPackageJsonPath,
          JSON.stringify(rootPackageJson, null, 2)
        );

        // createFolders(path.join(targetPath, component, originalComponentPath));

        fs.copySync(
          path.join(sourcePath, originalComponentPath),
          path.join(targetPath, component, originalComponentPath)
        );

        if (
          fs.existsSync(
            path.join(
              targetPath,
              component,
              originalComponentPath,
              'config.json'
            )
          )
        ) {
          fs.unlinkSync(
            path.join(
              targetPath,
              component,
              originalComponentPath,
              'config.json'
            )
          );
        }

        if (!isUpdate) {
          log.success(
            `\x1b[32m✅  ${'\u001b[1m' +
              originalComponentPath +
              '\u001b[22m'} \x1b[0m component added successfully!`
          );
        } else {
          log.success(
            `\x1b[32m✅  ${'\u001b[1m' +
              originalComponentPath +
              '\u001b[22m'} \x1b[0m component updated successfully!`
          );
        }
      });
    })
  );
};

const checkForExistingFolders = async (
  specificComponents: string[]
): Promise<string[]> => {
  const alreadyExistingComponents: string[] = [];
  let selectedComponents: any = [];

  for (const component of specificComponents) {
    const componentPath = getConfigComponentPath();
    const pathToCheck = path.join(
      currDir,
      componentPath,
      'core',
      dashToPascal(component)
    );
    if (fs.existsSync(pathToCheck)) {
      alreadyExistingComponents.push(component);
    }
  }

  if (alreadyExistingComponents.length === 1) {
    const shouldContinue = await confirm({
      message: `The ${alreadyExistingComponents[0]} component already exists. Kindly proceed if you wish to replace. Be advised that if there are any interdependent components, proceeding will result in their dependent components being replaced as well.`,
    });
    if (isCancel(shouldContinue)) {
      cancel('Operation cancelled.');
      process.exit(0);
    }
    if (shouldContinue) {
      selectedComponents = alreadyExistingComponents;
    }
  } else if (alreadyExistingComponents.length > 0) {
    const selectComponentsValue = await prompts([
      {
        type: 'multiselect',
        name: 'value',
        message: `The following components already exists. Kindly choose the ones you wish to replace. Be advised that if there are any interdependent components, selecting them for replacement will result in their dependent components being replaced as well.`,
        choices: alreadyExistingComponents.map(component => ({
          title: component,
          value: component,
        })),
        instructions: false,
      },
    ]);

    selectedComponents = selectComponentsValue.value;

    if (isCancel(selectedComponents)) {
      cancel('Operation cancelled.');
      process.exit(0);
    }
  }

  // Remove repeated components from all components
  const filteredComponents = specificComponents.filter(
    component => !alreadyExistingComponents.includes(component)
  );

  // Add selected components to all components
  const updatedComponents = filteredComponents.concat(selectedComponents);
  existingComponentsChecked = true;
  return updatedComponents;
};

const getAllComponents = (source: string): string[] => {
  const requestedComponents: string[] = [];

  fs.readdirSync(source).forEach((component: string) => {
    if (
      !(
        component === 'index.ts' ||
        component === 'index.tsx' ||
        component === 'Provider'
      )
    ) {
      const packageJsonPath = path.join(source, component, 'config.json');

      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      let componentType;
      if (packageJson.keywords.indexOf('components') !== -1) {
        componentType = packageJson.keywords[1];
      }
      if (componentType) {
        const cliComponent = pascalToDash(component);
        requestedComponents.push(cliComponent);
      }
    }
  });

  return requestedComponents;
};

export { componentAdder };
