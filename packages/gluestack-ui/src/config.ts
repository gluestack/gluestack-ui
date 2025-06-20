const config = {
  repoUrl: 'https://github.com/gluestack/gluestack-ui.git',
  gluestackDir: '.gluestack/cache/gluestack-ui',
  componentsResourcePath: 'src/components/ui',
  hooksResourcePath: 'src/components/ui/utils',
  utilsResourcePath: 'src/utils',
  nativeWindRootPath: 'nativewind',
  expoProject: 'expo',
  nextJsProject: 'nextjs',
  reactNativeCLIProject: 'react-native-cli',
  tailwindConfigRootPath: 'src/gluestack-ui/templates/tailwind.config.js',
  writableComponentsPath: 'components/ui',
  writableUtilsPath: 'utils',
  branchName: 'fix/restructure',
  style: 'nativewind',
  providerComponent: 'gluestack-ui-provider',
  nativewindUtilPattern: '@/utils/gluestack-utils/nativewind/utils/',
  gluestackUIPattern: '@/components/ui/',
  templatesDir: 'packages/gluestack-ui/templates',
  packageManager: null as string | null,
  // Ignore patterns for component copying (folders to exclude during fs.copy)
  ignoreFolders: ['docs', 'examples'],
  // List of components that should never be added
  ignoreComponents: ['utils'] as readonly string[],
};

export { config };
