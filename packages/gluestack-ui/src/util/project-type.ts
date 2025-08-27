import fs from 'fs-extra';
import { config } from '../config';
import { log, isCancel, cancel, select } from '@clack/prompts';
import { getConfirmation } from './get-confirmation';
import { rootPackageJsonPath } from './package-json-path';
import { ProjectType } from '../dependencies';

async function getFrameworkInput(): Promise<ProjectType> {
  const frameworkInput = await select({
    message: 'Please select the framework you are using:',
    options: [
      {
        value: ProjectType.nextjs,
        label: 'Next Js',
      },
      { value: ProjectType.expo, label: 'Expo' },
      {
        value: ProjectType.reactNative,
        label: 'React Native CLI',
      },
      {
        value: ProjectType.library,
        label: 'library',
      },
    ],
  });
  if (isCancel(frameworkInput)) {
    cancel('Operation cancelled.');
    process.exit(1);
  }
  return frameworkInput as ProjectType;
}

//function to detect type of project
export async function detectProjectType(
  directoryPath: string
): Promise<string> {
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
          ? ProjectType.nextjs
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
          ? ProjectType.expo
          : await getFrameworkInput();
      } else if (
        isReactNative &&
        dependencies['react-native'] &&
        !dependencies.expo
      ) {
        return (await getConfirmation(
          'Detected a React Native CLI project, continue?'
        ))
          ? ProjectType.reactNative
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
