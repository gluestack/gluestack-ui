const config = {
  repoUrl: 'https://github.com/gluestack/gluestack-ui.git',
  gluestackDir: '.gluestack/cache/gluestack-ui',
  gluestackTemplatesCacheDir: '.gluestack/cache/gluestack-ui-templates',
  componentsResourcePath: 'apps/starter-kit-expo/components/ui',
  nextjsComponentsPath: 'apps/starter-kit-next/components/ui',
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

// Sync check — no fs imports needed; uses require('fs') to avoid circular deps.
function isNextjsProject(): boolean {
  const fs = require('fs') as typeof import('fs');
  const path = require('path') as typeof import('path');
  const cwd = process.cwd();
  return ['next.config.js', 'next.config.mjs', 'next.config.ts'].some((f) =>
    fs.existsSync(path.join(cwd, f))
  );
}

// Returns the correct components path in the cloned cache based on the active
// styling engine AND project type (Next.js gets its own provider/components).
export function getActiveComponentsPath(): string {
  if (config.style === 'uniwind') return config.uniwindComponentsPath;
  if (config.style === 'nativewind-v5') return config.nativewindV5ComponentsPath;
  if (isNextjsProject()) return config.nextjsComponentsPath;
  return config.componentsResourcePath;
}

// Returns the correct repo branch for the active styling engine.
export function getActiveBranchName(): string {
  return config.style === 'nativewind-v5' || config.style === 'uniwind'
    ? config.v5BranchName
    : config.branchName;
}

export { config };
