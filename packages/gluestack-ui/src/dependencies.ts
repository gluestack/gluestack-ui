import { config } from './config';
import fs from 'fs-extra';
import { join } from 'path';
import os from 'os';

export interface Dependency {
  [key: string]: string;
}
export interface ComponentConfig {
  dependencies: Dependency;
  devDependencies?: Dependency;
  additionalComponents?: string[];
  hooks?: string[];
}

export type Dependencies = Record<ProjectType, ComponentConfig>;

const _homeDir = os.homedir();

export enum ProjectType {
  nextjs = 'nextjs',
  expo = 'expo',
  reactNative = 'react-native-cli',
  library = 'library',
}

export function isProjectType(
  projectType: unknown
): projectType is ProjectType {
  return (
    typeof projectType === 'string' &&
    Object.values(ProjectType).includes(projectType as ProjectType)
  );
}

const projectBasedDependencies: Dependencies = {
  [ProjectType.library]: {
    dependencies: {},
    devDependencies: {},
  },
  [ProjectType.nextjs]: {
    dependencies: {
      'react-native-web': '^0.19.12',
      'nativewind': '^4.1.23',
      'tailwindcss': '^3.4.17',
      'react-aria': '^3.33.0',
      '@expo/html-elements': '^0.10.1',
      'tailwind-variants': '^0.1.20',
      '@legendapp/motion': '^2.3.0',
      'react-native-svg': '^15.2.0',
      'dom-helpers': '^5.2.1',
      'react-stately': '^3.39.0',
      '@gluestack-ui/core': 'alpha',
      '@gluestack-ui/utils': 'alpha',
      '@gluestack/ui-next-adapter': 'alpha',
    },
    devDependencies: {
      '@types/react-native': '0.72.8',
      'autoprefixer': '^10.4.21',
      'postcss': '^8.5.4',
      '@react-native/assets-registry': '^0.79.3',
    },
  },
  [ProjectType.expo]: {
    dependencies: {
      'nativewind': '^4.1.23',
      'tailwindcss': '^3.4.17',
      'react-native-safe-area-context': '^4.11.0',
      'react-aria': '^3.33.0',
      '@expo/html-elements': '^0.10.1',
      'tailwind-variants': '^0.1.20',
      '@legendapp/motion': '^2.3.0',
      'react-native-svg': '^15.2.0',
      'react-stately': '^3.39.0',
      '@gluestack-ui/core': 'alpha',
      '@gluestack-ui/utils': 'alpha',
    },
  },
  [ProjectType.reactNative]: {
    dependencies: {
      'nativewind': '^4.1.23',
      'tailwindcss': '^3.4.17',
      'react-native-safe-area-context': '^4.11.0',
      'react-aria': '^3.33.0',
      '@expo/html-elements': '^0.10.1',
      'tailwind-variants': '^0.1.20',
      '@legendapp/motion': '^2.3.0',
      'react-native-svg': '^15.2.0',
      'react-stately': '^3.39.0',
      'react-native-reanimated': '^3.17.4',
      '@gluestack-ui/core': 'alpha',
      '@gluestack-ui/utils': 'alpha',
    },
    devDependencies: {
      'babel-plugin-module-resolver': '^5.0.0',
    },
  },
};

// Get project based dependencies
async function getProjectBasedDependencies(
  projectType: string | undefined,
  style: string
) {
  try {
    if (
      style === config.nativeWindRootPath &&
      isProjectType(projectType) &&
      projectType !== ProjectType.library
    ) {
      return {
        dependencies: projectBasedDependencies[projectType].dependencies,
        devDependencies:
          projectBasedDependencies[projectType]?.devDependencies || {},
      };
    }
    return { dependencies: {}, devDependencies: {} };
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

// Get dependencies for a component by reading its dependencies.json file
const getComponentDependencies = async (
  componentName: string
): Promise<ComponentConfig> => {
  try {
    const dependenciesPath = join(
      _homeDir,
      config.gluestackDir,
      config.componentsResourcePath,
      componentName,
      'dependencies.json'
    );

    if (fs.existsSync(dependenciesPath)) {
      const dependenciesContent = await fs.readJSON(dependenciesPath);
      return {
        dependencies: dependenciesContent.dependencies || {},
        devDependencies: dependenciesContent.devDependencies || {},
        additionalComponents: dependenciesContent.components || [],
        hooks: dependenciesContent.hooks || [],
      };
    }

    return {
      dependencies: {},
      devDependencies: {},
      additionalComponents: [],
      hooks: [],
    };
  } catch (error) {
    return {
      dependencies: {},
      devDependencies: {},
      additionalComponents: [],
      hooks: [],
    };
  }
};

export { getComponentDependencies, getProjectBasedDependencies };
