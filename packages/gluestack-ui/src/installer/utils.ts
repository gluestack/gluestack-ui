import fs from 'fs';
import { log } from '@clack/prompts';
import { getPackageJsonPath } from '../utils';
import { projectDetector } from '@gluestack/ui-project-detector';

const currDir = process.cwd();
const rootPackageJsonPath: string = getPackageJsonPath();

const addDependencies = async (): Promise<void> => {
  const packageJsonPath = rootPackageJsonPath;
  const projectType = await projectDetector();
  try {
    // Read in the existing package.json file
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

    // Add a new dependency to the package.json file
    packageJson.dependencies = packageJson.dependencies || {};
    packageJson.dependencies['@gluestack-style/react'] = 'latest';
    packageJson.dependencies['@gluestack-ui/provider'] = 'latest';
    packageJson.dependencies['@gluestack-style/animation-plugin'] = 'latest';
    if (projectType.framework === 'Next') {
      packageJson.dependencies['@gluestack/ui-next-adapter'] = 'latest';
    }
    if (projectType.framework == 'Unknown') {
      packageJson.scripts['build'] = 'tsc';
      packageJson.scripts['watch'] = 'tsc --watch';
    }

    // Add a new devDependency to the package.json file
    packageJson.devDependencies = packageJson.devDependencies || {};
    packageJson.devDependencies['react-native-web'] = '^0.18.12';
    packageJson.devDependencies['react-native'] = '^0.70.7';
    packageJson.devDependencies['@types/react-native'] = '^0.71.6';

    // Write the updated package.json file
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  } catch (err) {
    log.error(`\x1b[31mError: ${(err as Error).message}\x1b[0m`);
  }
};

function isStartingWithSrc(input: string): boolean {
  return input.startsWith('./src') || input.startsWith('src');
}

function mergePaths(str1: string, str2: string): string {
  if (str1.startsWith('./')) {
    str1 = str1.slice(2);
  }
  if (str2.endsWith('/')) {
    str2 = str2.slice(0, -1);
  }
  return `${str2}/${str1}`;
}

const isFollowingSrcDir = (): boolean => {
  try {
    const files = fs.readdirSync(currDir);
    if (files.includes('src') && fs.statSync(`${currDir}/src`).isDirectory()) {
      return true;
    }
  } catch (error) {
    console.error(error);
  }
  return false;
};

const isFollowingAppDir = (): boolean => {
  try {
    const files = fs.readdirSync(currDir);
    if (files.includes('app') && fs.statSync(`${currDir}/app`).isDirectory()) {
      return true;
    }
    if (
      files.includes('src') &&
      fs.statSync(`${currDir}/src/app`).isDirectory()
    ) {
      return true;
    }
  } catch (error) {
    console.error(error);
  }
  return false;
};

export {
  addDependencies,
  isFollowingSrcDir,
  isStartingWithSrc,
  mergePaths,
  isFollowingAppDir,
};
