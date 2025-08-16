const config = {
  repoUrl: 'https://github.com/gluestack/gluestack-ui.git',
  gluestackDir: '.gluestack/cache/gluestack-ui',
  componentsResourcePath: 'src/components/ui',
  nativeWindRootPath: 'nativewind',
  tailwindConfigRootPath: 'src/gluestack-ui/templates/tailwind.config.js',
  writableComponentsPath: 'components/ui',
  branchName: 'feat/v3', // branch name for the gluestack-ui repo to be used for the CLI
  style: 'nativewind',
  providerComponent: 'gluestack-ui-provider',
  gluestackUIPattern: '@/components/ui/',
  templatesDir: 'packages/gluestack-ui/templates',
  packageManager: null as string | null,
  ignoreComponents: ['utils'] as readonly string[],
};

export { config };
