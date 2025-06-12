const config = {
  repoUrl: 'https://github.com/gluestack/gluestack-ui.git',
  gluestackDir: '.gluestack/cache/gluestack-ui',
  componentsResourcePath: 'packages/components/ui',
  hooksResourcePath: 'packages/components/ui/utils',
  utilsResourcePath: 'packages/utils',
  nativeWindRootPath: 'nativewind',
  expoProject: 'expo',
  nextJsProject: 'nextjs',
  reactNativeCLIProject: 'react-native-cli',
  tailwindConfigRootPath: 'packages/templates/tailwind.config.js',
  writableComponentsPath: 'components/ui',
  writableUtilsPath: 'utils',
  branchName: 'feat/gluestack-ui-cli',
  style: 'nativewind',
  providerComponent: 'gluestack-ui-provider',
  nativewindUtilPattern: '@/utils/gluestack-utils/nativewind/utils/',
  gluestackUIPattern: '@/components/ui/',
  templatesDir: 'packages/templates',
  packageManager: null as string | null,
  // Ignore patterns for component copying (folders to exclude during fs.copy)
  ignoreFolders: ['docs', 'examples'],
  // List of components that should never be added
  ignoreComponents: ['utils'] as readonly string[],
};

export { config };
