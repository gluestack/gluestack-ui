import { config } from './config';

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

const projectBasedDependencies: Dependencies = {
  nextjs: {
    dependencies: {
      postcss: '',
      autoprefixer: '',
      'react-native-web': '',
    },
    devDependencies: {
      '@types/react-native': '0.72.8',
    },
  },
  expo: {
    dependencies: {
      'react-native-reanimated': '',
    },
  },
  'react-native-cli': {
    dependencies: {
      'react-native-reanimated': '',
    },
    devDependencies: {
      'babel-plugin-module-resolver': '',
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
      projectType &&
      projectType !== 'library'
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

// Get dependencies for a component (simplified version without external config)
const getComponentDependencies = async (
  componentName: string
): Promise<ComponentConfig> => {
  return {
    dependencies: {},
    devDependencies: {},
    additionalComponents: [],
    hooks: [],
  };
};

export { getComponentDependencies, getProjectBasedDependencies };
