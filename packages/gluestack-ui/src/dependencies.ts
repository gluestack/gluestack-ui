import { config, getActiveComponentsPath } from './config';
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
      'react-aria': '^3.48.0',
      'react-stately': '^3.46.0',
      '@expo/html-elements': '^0.12.5',
      'tailwind-variants': '^0.1.20',
      '@legendapp/motion': '^2.5.3',
      'react-native-svg': '^15.13.0',
      'dom-helpers': '^6.0.1',
      '@gluestack-ui/core': '^5.0.15-alpha.0',
      '@gluestack-ui/utils': '^5.0.6-alpha.0',
      '@gluestack/ui-next-adapter': '^5.0.0-alpha.0',
      'react-native-safe-area-context': '^5.6.1',
      '@react-aria/checkbox': '^3.16.3',
      '@react-aria/focus': '^3.21.3',
      '@react-aria/interactions': '^3.26.0',
      '@react-aria/label': '^3.7.23',
      '@react-aria/menu': '^3.19.4',
      '@react-aria/overlays': '^3.31.0',
      '@react-aria/radio': '^3.12.3',
      '@react-aria/selection': '^3.27.0',
      '@react-aria/slider': '^3.8.3',
      '@react-aria/switch': '^3.7.10',
      '@react-aria/utils': '^3.32.0',
      '@react-aria/visually-hidden': '^3.8.29',
      '@react-aria/ssr': '^3.9.9',
      '@react-aria/dialog': '^3.5.27',
      '@react-stately/checkbox': '^3.7.4',
      '@react-stately/collections': '^3.12.9',
      '@react-stately/menu': '^3.9.10',
      '@react-stately/overlays': '^3.6.22',
      '@react-stately/radio': '^3.11.4',
      '@react-stately/slider': '^3.7.4',
      '@react-stately/toggle': '^3.9.4',
      '@react-stately/tree': '^3.9.5',
      '@react-stately/utils': '^3.11.0',
      '@react-types/button': '^3.14.1',
      '@react-types/checkbox': '^3.10.2',
      '@react-types/menu': '^3.10.5',
      '@react-types/overlays': '^3.9.2',
      '@react-types/radio': '^3.9.2',
      '@react-types/shared': '^3.33.0',
      '@react-types/slider': '^3.8.2',
      '@react-types/switch': '^3.5.15',
      '@react-types/dialog': '^3.5.22',
      'date-fns': '^4.1.0',
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
      'react-aria': '^3.48.0',
      'react-stately': '^3.46.0',
      '@expo/html-elements': '^0.12.5',
      'tailwind-variants': '^0.1.20',
      '@legendapp/motion': '^2.5.3',
      'react-native-svg': '^15.13.0',
      'dom-helpers': '^6.0.1',
      '@gluestack-ui/core': '^5.0.15-alpha.0',
      '@gluestack-ui/utils': '^5.0.6-alpha.0',
      '@react-aria/checkbox': '^3.16.3',
      '@react-aria/focus': '^3.21.3',
      '@react-aria/interactions': '^3.26.0',
      '@react-aria/label': '^3.7.23',
      '@react-aria/menu': '^3.19.4',
      '@react-aria/overlays': '^3.31.0',
      '@react-aria/radio': '^3.12.3',
      '@react-aria/selection': '^3.27.0',
      '@react-aria/slider': '^3.8.3',
      '@react-aria/switch': '^3.7.10',
      '@react-aria/utils': '^3.32.0',
      '@react-aria/visually-hidden': '^3.8.29',
      '@react-aria/ssr': '^3.9.9',
      '@react-aria/dialog': '^3.5.27',
      '@react-stately/checkbox': '^3.7.4',
      '@react-stately/collections': '^3.12.9',
      '@react-stately/menu': '^3.9.10',
      '@react-stately/overlays': '^3.6.22',
      '@react-stately/radio': '^3.11.4',
      '@react-stately/slider': '^3.7.4',
      '@react-stately/toggle': '^3.9.4',
      '@react-stately/tree': '^3.9.5',
      '@react-stately/utils': '^3.11.0',
      '@react-types/button': '^3.14.1',
      '@react-types/checkbox': '^3.10.2',
      '@react-types/menu': '^3.10.5',
      '@react-types/overlays': '^3.9.2',
      '@react-types/radio': '^3.9.2',
      '@react-types/shared': '^3.33.0',
      '@react-types/slider': '^3.8.2',
      '@react-types/switch': '^3.5.15',
      '@react-types/dialog': '^3.5.22',
      'date-fns': '^4.1.0',
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
      'react-aria': '^3.48.0',
      'react-stately': '^3.46.0',
      '@expo/html-elements': '^0.12.5',
      'tailwind-variants': '^0.1.20',
      '@legendapp/motion': '^2.5.3',
      'react-native-svg': '^15.13.0',
      'dom-helpers': '^6.0.1',
      '@gluestack-ui/core': '^5.0.15-alpha.0',
      '@gluestack-ui/utils': '^5.0.6-alpha.0',
      '@react-aria/checkbox': '^3.16.3',
      '@react-aria/focus': '^3.21.3',
      '@react-aria/interactions': '^3.26.0',
      '@react-aria/label': '^3.7.23',
      '@react-aria/menu': '^3.19.4',
      '@react-aria/overlays': '^3.31.0',
      '@react-aria/radio': '^3.12.3',
      '@react-aria/selection': '^3.27.0',
      '@react-aria/slider': '^3.8.3',
      '@react-aria/switch': '^3.7.10',
      '@react-aria/utils': '^3.32.0',
      '@react-aria/visually-hidden': '^3.8.29',
      '@react-aria/ssr': '^3.9.9',
      '@react-aria/dialog': '^3.5.27',
      '@react-stately/checkbox': '^3.7.4',
      '@react-stately/collections': '^3.12.9',
      '@react-stately/menu': '^3.9.10',
      '@react-stately/overlays': '^3.6.22',
      '@react-stately/radio': '^3.11.4',
      '@react-stately/slider': '^3.7.4',
      '@react-stately/toggle': '^3.9.4',
      '@react-stately/tree': '^3.9.5',
      '@react-stately/utils': '^3.11.0',
      '@react-types/button': '^3.14.1',
      '@react-types/checkbox': '^3.10.2',
      '@react-types/menu': '^3.10.5',
      '@react-types/overlays': '^3.9.2',
      '@react-types/radio': '^3.9.2',
      '@react-types/shared': '^3.33.0',
      '@react-types/slider': '^3.8.2',
      '@react-types/switch': '^3.5.15',
      '@react-types/dialog': '^3.5.22',
      'date-fns': '^4.1.0',
    },
    devDependencies: {
      'babel-plugin-module-resolver': '^5.0.0',
      'tailwindcss': '^3.4.17',
      'prettier-plugin-tailwindcss': '^0.5.11',
    },
  },
  'expo-nativewind-v5': {
    dependencies: {
      'nativewind': '^5.0.0-preview.2',
      'react-native-safe-area-context': '^5.6.1',
      'react-aria': '^3.48.0',
      'react-stately': '^3.46.0',
      '@expo/html-elements': '^0.12.5',
      'tailwind-variants': '^0.1.20',
      '@legendapp/motion': '^2.5.3',
      'react-native-svg': '^15.15.3',
      'dom-helpers': '^6.0.1',
      '@gluestack-ui/core': '^5.0.15-alpha.0',
      '@gluestack-ui/utils': '^5.0.6-alpha.0',
      'react-native-css': '^3.0.4',
      '@react-aria/checkbox': '^3.16.3',
      '@react-aria/focus': '^3.21.3',
      '@react-aria/interactions': '^3.26.0',
      '@react-aria/label': '^3.7.23',
      '@react-aria/menu': '^3.19.4',
      '@react-aria/overlays': '^3.31.0',
      '@react-aria/radio': '^3.12.3',
      '@react-aria/selection': '^3.27.0',
      '@react-aria/slider': '^3.8.3',
      '@react-aria/switch': '^3.7.10',
      '@react-aria/utils': '^3.32.0',
      '@react-aria/visually-hidden': '^3.8.29',
      '@react-aria/ssr': '^3.9.9',
      '@react-aria/dialog': '^3.5.27',
      '@react-stately/checkbox': '^3.7.4',
      '@react-stately/collections': '^3.12.9',
      '@react-stately/menu': '^3.9.10',
      '@react-stately/overlays': '^3.6.22',
      '@react-stately/radio': '^3.11.4',
      '@react-stately/slider': '^3.7.4',
      '@react-stately/toggle': '^3.9.4',
      '@react-stately/tree': '^3.9.5',
      '@react-stately/utils': '^3.11.0',
      '@react-types/button': '^3.14.1',
      '@react-types/checkbox': '^3.10.2',
      '@react-types/menu': '^3.10.5',
      '@react-types/overlays': '^3.9.2',
      '@react-types/radio': '^3.9.2',
      '@react-types/shared': '^3.33.0',
      '@react-types/slider': '^3.8.2',
      '@react-types/switch': '^3.5.15',
      '@react-types/dialog': '^3.5.22',
      'date-fns': '^4.1.0',
    },
    devDependencies: {
      'babel-plugin-module-resolver': '^5.0.0',
      'tailwindcss': '^4.2.0',
      '@tailwindcss/postcss': '^4.2.0',
    },
  },
  'expo-uniwind': {
    dependencies: {
      'uniwind': '^1.3.0',
      'react-native-safe-area-context': '^5.6.1',
      'react-aria': '^3.48.0',
      'react-stately': '^3.46.0',
      '@expo/html-elements': '^0.12.5',
      'tailwind-variants': '^0.1.20',
      '@legendapp/motion': '^2.5.3',
      'react-native-svg': '^15.13.0',
      'dom-helpers': '^6.0.1',
      '@gluestack-ui/core': '^5.0.15-alpha.0',
      '@gluestack-ui/utils': '^5.0.6-alpha.0',
      '@react-aria/checkbox': '^3.16.3',
      '@react-aria/focus': '^3.21.3',
      '@react-aria/interactions': '^3.26.0',
      '@react-aria/label': '^3.7.23',
      '@react-aria/menu': '^3.19.4',
      '@react-aria/overlays': '^3.31.0',
      '@react-aria/radio': '^3.12.3',
      '@react-aria/selection': '^3.27.0',
      '@react-aria/slider': '^3.8.3',
      '@react-aria/switch': '^3.7.10',
      '@react-aria/utils': '^3.32.0',
      '@react-aria/visually-hidden': '^3.8.29',
      '@react-aria/ssr': '^3.9.9',
      '@react-aria/dialog': '^3.5.27',
      '@react-stately/checkbox': '^3.7.4',
      '@react-stately/collections': '^3.12.9',
      '@react-stately/menu': '^3.9.10',
      '@react-stately/overlays': '^3.6.22',
      '@react-stately/radio': '^3.11.4',
      '@react-stately/slider': '^3.7.4',
      '@react-stately/toggle': '^3.9.4',
      '@react-stately/tree': '^3.9.5',
      '@react-stately/utils': '^3.11.0',
      '@react-types/button': '^3.14.1',
      '@react-types/checkbox': '^3.10.2',
      '@react-types/menu': '^3.10.5',
      '@react-types/overlays': '^3.9.2',
      '@react-types/radio': '^3.9.2',
      '@react-types/shared': '^3.33.0',
      '@react-types/slider': '^3.8.2',
      '@react-types/switch': '^3.5.15',
      '@react-types/dialog': '^3.5.22',
      'date-fns': '^4.1.0',
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
      'react-aria': '^3.48.0',
      'react-stately': '^3.46.0',
      '@expo/html-elements': '^0.12.5',
      'tailwind-variants': '^0.1.20',
      '@legendapp/motion': '^2.5.3',
      'react-native-svg': '^15.13.0',
      'dom-helpers': '^6.0.1',
      '@gluestack-ui/core': '^5.0.15-alpha.0',
      '@gluestack-ui/utils': '^5.0.6-alpha.0',
      '@gluestack/ui-next-adapter': '^5.0.0-alpha.0',
      'react-native-safe-area-context': '^5.6.1',
      '@react-aria/checkbox': '^3.16.3',
      '@react-aria/focus': '^3.21.3',
      '@react-aria/interactions': '^3.26.0',
      '@react-aria/label': '^3.7.23',
      '@react-aria/menu': '^3.19.4',
      '@react-aria/overlays': '^3.31.0',
      '@react-aria/radio': '^3.12.3',
      '@react-aria/selection': '^3.27.0',
      '@react-aria/slider': '^3.8.3',
      '@react-aria/switch': '^3.7.10',
      '@react-aria/utils': '^3.32.0',
      '@react-aria/visually-hidden': '^3.8.29',
      '@react-aria/ssr': '^3.9.9',
      '@react-aria/dialog': '^3.5.27',
      '@react-stately/checkbox': '^3.7.4',
      '@react-stately/collections': '^3.12.9',
      '@react-stately/menu': '^3.9.10',
      '@react-stately/overlays': '^3.6.22',
      '@react-stately/radio': '^3.11.4',
      '@react-stately/slider': '^3.7.4',
      '@react-stately/toggle': '^3.9.4',
      '@react-stately/tree': '^3.9.5',
      '@react-stately/utils': '^3.11.0',
      '@react-types/button': '^3.14.1',
      '@react-types/checkbox': '^3.10.2',
      '@react-types/menu': '^3.10.5',
      '@react-types/overlays': '^3.9.2',
      '@react-types/radio': '^3.9.2',
      '@react-types/shared': '^3.33.0',
      '@react-types/slider': '^3.8.2',
      '@react-types/switch': '^3.5.15',
      '@react-types/dialog': '^3.5.22',
      'date-fns': '^4.1.0',
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
      'react-aria': '^3.48.0',
      'react-stately': '^3.46.0',
      '@expo/html-elements': '^0.12.5',
      'tailwind-variants': '^0.1.20',
      '@legendapp/motion': '^2.5.3',
      'react-native-svg': '^15.13.0',
      'dom-helpers': '^6.0.1',
      '@gluestack-ui/core': '^5.0.15-alpha.0',
      '@gluestack-ui/utils': '^5.0.6-alpha.0',
      '@react-aria/checkbox': '^3.16.3',
      '@react-aria/focus': '^3.21.3',
      '@react-aria/interactions': '^3.26.0',
      '@react-aria/label': '^3.7.23',
      '@react-aria/menu': '^3.19.4',
      '@react-aria/overlays': '^3.31.0',
      '@react-aria/radio': '^3.12.3',
      '@react-aria/selection': '^3.27.0',
      '@react-aria/slider': '^3.8.3',
      '@react-aria/switch': '^3.7.10',
      '@react-aria/utils': '^3.32.0',
      '@react-aria/visually-hidden': '^3.8.29',
      '@react-aria/ssr': '^3.9.9',
      '@react-aria/dialog': '^3.5.27',
      '@react-stately/checkbox': '^3.7.4',
      '@react-stately/collections': '^3.12.9',
      '@react-stately/menu': '^3.9.10',
      '@react-stately/overlays': '^3.6.22',
      '@react-stately/radio': '^3.11.4',
      '@react-stately/slider': '^3.7.4',
      '@react-stately/toggle': '^3.9.4',
      '@react-stately/tree': '^3.9.5',
      '@react-stately/utils': '^3.11.0',
      '@react-types/button': '^3.14.1',
      '@react-types/checkbox': '^3.10.2',
      '@react-types/menu': '^3.10.5',
      '@react-types/overlays': '^3.9.2',
      '@react-types/radio': '^3.9.2',
      '@react-types/shared': '^3.33.0',
      '@react-types/slider': '^3.8.2',
      '@react-types/switch': '^3.5.15',
      '@react-types/dialog': '^3.5.22',
      'date-fns': '^4.1.0',
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
  style: string,
  isMonorepo: boolean = false
) {
  try {
    // Monorepo mode: install shared styling deps at the root so all workspace
    // apps can consume them.  We reuse the Next.js dependency set because
    // monorepo mode always enforces NativeWind v4 (same as Next.js).
    if (isMonorepo) {
      const monoKey = style === 'uniwind' ? 'nextjs-uniwind' : 'nextjs';
      if (projectBasedDependencies[monoKey]) {
        return {
          dependencies: projectBasedDependencies[monoKey].dependencies,
          devDependencies:
            projectBasedDependencies[monoKey]?.devDependencies || {},
        };
      }
    }

    if (projectType && projectType !== 'library') {
      const dependencyKey =
        style === 'uniwind'
          ? `${projectType}-uniwind`
          : style === 'nativewind-v5'
            ? `${projectType}-nativewind-v5`
            : projectType;

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
    const dependenciesPath = join(
      _homeDir,
      config.gluestackDir,
      getActiveComponentsPath(),
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
