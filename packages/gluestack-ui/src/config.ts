const config = {
  repoUrl: 'https://github.com/gluestack/gluestack-ui.git',
  gluestackDir: '.gluestack/cache/gluestack-ui',
  componentsResourcePath: 'src/components/ui',
  uniwindComponentsPath: 'apps/starter-kit-expo-uniwind/components/ui',
  nativeWindRootPath: 'nativewind',
  expoProject: 'expo',
  nextJsProject: 'nextjs',
  reactNativeCLIProject: 'react-native-cli',
  tailwindConfigRootPath: 'src/gluestack-ui/templates/tailwind.config.js',
  writableComponentsPath: 'components/ui',
  branchName: 'feat/uniwind-support-exp',  // branch name for the gluestack-ui repo to be used for the CLI
  style: 'nativewind' as 'nativewind' | 'uniwind',
  providerComponent: 'gluestack-ui-provider',
  gluestackUIPattern: '@/components/ui/',
  templatesDir: 'packages/gluestack-ui/templates',
  packageManager: null as string | null,
  yesToAll: false,
  ignoreComponents: ['utils'] as readonly string[],
};

export function setStylingEngine(engine: 'nativewind' | 'uniwind') {
  config.style = engine;
}

export { config };
