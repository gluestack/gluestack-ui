const config = {
  repoUrl: 'https://github.com/gluestack/gluestack-ui.git',
  gluestackDir: '.gluestack/cache/gluestack-ui',
  componentsResourcePath: 'packages/components/ui',
  hooksResourcePath: 'packages/components/ui/utils',
  nativeWindRootPath: 'nativewind',
  expoProject: 'expo',
  nextJsProject: 'nextjs',
  reactNativeCLIProject: 'react-native-cli',
  tailwindConfigRootPath: 'packages/templates/tailwind.config.js',
  writableComponentsPath: 'components/ui',
  branchName: 'feat/v3',
  style: 'nativewind',
  providerComponent: 'gluestack-ui-provider',
  nativewindUtilPattern: '@/utils/gluestack-utils/nativewind/utils/',
  gluestackUIPattern: '@/components/ui/',
  templatesDir: 'packages/templates',
  packageManager: null as string | null,
};

export { config };
