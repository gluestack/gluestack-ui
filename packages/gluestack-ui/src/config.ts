const config = {
  repoUrl: 'https://github.com/gluestack/gluestack-ui.git',
  gluestackDir: '.gluestack/cache/gluestack-ui',
  gluestackTemplatesCacheDir: '.gluestack/cache/gluestack-ui-templates',
  componentsResourcePath: 'src/components/ui',
  nativewindV5ComponentsPath: 'apps/starter-kit-expo/components/ui',
  uniwindComponentsPath: 'apps/starter-kit-expo-uniwind/components/ui',
  nativeWindRootPath: 'nativewind',
  expoProject: 'expo',
  nextJsProject: 'nextjs',
  reactNativeCLIProject: 'react-native-cli',
  tailwindConfigRootPath: 'src/gluestack-ui/templates/tailwind.config.js',
  writableComponentsPath: 'components/ui',
  branchName: 'main-v4-alpha',       // NativeWind v4 branch
  v5BranchName: 'feat/nw-v5-alpha',  // NativeWind v5 / UniWind branch
  style: 'nativewind' as 'nativewind' | 'nativewind-v5' | 'uniwind',
  providerComponent: 'gluestack-ui-provider',
  gluestackUIPattern: '@/components/ui/',
  templatesDir: 'packages/gluestack-ui/templates',
  packageManager: null as string | null,
  yesToAll: false,
  ignoreComponents: ['utils'] as readonly string[],
};

export function setStylingEngine(engine: 'nativewind' | 'nativewind-v5' | 'uniwind') {
  config.style = engine;
}

// Returns the correct repo branch for the active styling engine.
export function getActiveBranchName(): string {
  return config.style === 'nativewind-v5' || config.style === 'uniwind'
    ? config.v5BranchName
    : config.branchName;
}

export { config };
