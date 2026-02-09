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

export interface Dependencies {
  [key: string]: ComponentConfig;
}

const _homeDir = os.homedir();

const projectBasedDependencies: Dependencies = {
  'nextjs': {
    dependencies: {
      'react-native-web': '^0.19.12',
      'nativewind': '^4.1.23',
      'react-aria': '^3.45.0',
      '@expo/html-elements': '^0.12.5',
      'tailwind-variants': '^0.1.20',
      '@legendapp/motion': '^2.5.3',
      'react-native-svg': '^15.13.0',
      'dom-helpers': '^5.2.1',
      'react-stately': '^3.39.0',
      '@gluestack-ui/core': '^4.0.0-alpha.0',
      '@gluestack-ui/utils': '^4.0.0-alpha.0',
      '@gluestack/ui-next-adapter': '^4.0.0-alpha.0',
      'react-native-safe-area-context': '^5.6.1',
      'react-native-reanimated': '~4.1.0',
      'react-native-worklets': '^0.5.1',
    },
    devDependencies: {
      '@types/react-native': '0.72.8',
      'tailwindcss': '^3.4.17',
      'autoprefixer': '^10.4.21',
      'postcss': '^8.5.4',
      '@react-native/assets-registry': '^0.79.3',
    },
  },
  'expo': {
    dependencies: {
      'nativewind': '^4.1.23',
      'react-native-safe-area-context': '^5.6.1',
      'react-native-reanimated': '~4.1.0',
      'react-native-worklets': '^0.5.1',
      'react-aria': '^3.45.0',
      '@expo/html-elements': '^0.12.5',
      'tailwind-variants': '^0.1.20',
      '@legendapp/motion': '^2.5.3',
      'react-native-svg': '^15.13.0',
      'react-stately': '^3.39.0',
      '@gluestack-ui/core': '^4.0.0-alpha.0',
      '@gluestack-ui/utils': '^4.0.0-alpha.0',
    },
    devDependencies: {
      'babel-plugin-module-resolver': '^5.0.0',
      'tailwindcss': '^3.4.17',
      'prettier-plugin-tailwindcss': '^0.5.11',
    },
  },
  'react-native-cli': {
    dependencies: {
      'nativewind': '^4.1.23',
      'react-native-safe-area-context': '^5.6.1',
      'react-aria': '^3.45.0',
      '@expo/html-elements': '^0.12.5',
      'tailwind-variants': '^0.1.20',
      '@legendapp/motion': '^2.5.3',
      'react-native-svg': '^15.13.0',
      'react-stately': '^3.39.0',
      'react-native-reanimated': '~4.1.0',
      'react-native-worklets': '^0.5.1',
      '@gluestack-ui/core': '^4.0.0-alpha.0',
      '@gluestack-ui/utils': '^4.0.0-alpha.0',
    },
    devDependencies: {
      'babel-plugin-module-resolver': '^5.0.0',
      'tailwindcss': '^3.4.17',
      'prettier-plugin-tailwindcss': '^0.5.11',
    },
  },
  'expo-uniwind': {
    dependencies: {
      'uniwind': '^1.3.0',
      'react-native-safe-area-context': '^5.6.1',
      'react-native-reanimated': '~4.1.0',
      'react-native-worklets': '^0.5.1',
      'react-aria': '^3.45.0',
      '@expo/html-elements': '^0.12.5',
      'tailwind-variants': '^0.1.20',
      '@legendapp/motion': '^2.5.3',
      'react-native-svg': '^15.13.0',
      'react-stately': '^3.39.0',
      '@gluestack-ui/core': '^4.1.0-alpha.0',
      '@gluestack-ui/utils': '^4.1.0-alpha.0',
    },
    devDependencies: {
      'babel-plugin-module-resolver': '^5.0.0',
      'tailwindcss': '^4.1.18',
    },
  },
  'nextjs-uniwind': {
    dependencies: {
      'react-native-web': '^0.19.12',
      'uniwind': '^1.3.0',
      'react-aria': '^3.45.0',
      '@expo/html-elements': '^0.12.5',
      'tailwind-variants': '^0.1.20',
      '@legendapp/motion': '^2.5.3',
      'react-native-svg': '^15.13.0',
      'react-stately': '^3.39.0',
      '@gluestack-ui/core': '^4.1.0-alpha.0',
      '@gluestack-ui/utils': '^4.1.0-alpha.0',
      '@gluestack/ui-next-adapter': '^4.0.0-alpha.0',
      'react-native-safe-area-context': '^5.6.1',
      'react-native-reanimated': '~4.1.0',
      'react-native-worklets': '^0.5.1',
    },
    devDependencies: {
      '@types/react-native': '0.72.8',
      'tailwindcss': '^4.1.18',
      '@react-native/assets-registry': '^0.79.3',
    },
  },
  'react-native-cli-uniwind': {
    dependencies: {
      'uniwind': '^1.3.0',
      'react-native-safe-area-context': '^5.6.1',
      'react-aria': '^3.45.0',
      '@expo/html-elements': '^0.12.5',
      'tailwind-variants': '^0.1.20',
      '@legendapp/motion': '^2.5.3',
      'react-native-svg': '^15.13.0',
      'react-stately': '^3.39.0',
      'react-native-reanimated': '~4.1.0',
      'react-native-worklets': '^0.5.1',
      '@gluestack-ui/core': '^4.1.0-alpha.0',
      '@gluestack-ui/utils': '^4.1.0-alpha.0',
    },
    devDependencies: {
      'babel-plugin-module-resolver': '^5.0.0',
      'tailwindcss': '^4.1.18',
    },
  },
};

// Get project based dependencies
async function getProjectBasedDependencies(
  projectType: string | undefined,
  style: string
) {
  try {
    if (projectType && projectType !== 'library') {
      const dependencyKey = style === 'uniwind' ? `${projectType}-uniwind` : projectType;

      if (projectBasedDependencies[dependencyKey]) {
        return {
          dependencies: projectBasedDependencies[dependencyKey].dependencies,
          devDependencies:
            projectBasedDependencies[dependencyKey]?.devDependencies || {},
        };
      }
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
    // Determine path based on styling engine
    let componentsPath: string;
    if (config.style === 'uniwind') {
      componentsPath = config.uniwindComponentsPath;
    } else {
      componentsPath = config.componentsResourcePath;
    }

    const dependenciesPath = join(
      _homeDir,
      config.gluestackDir,
      componentsPath,
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
