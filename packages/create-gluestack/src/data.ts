const data = {
  gitRepo: 'https://github.com/gluestack/gluestack-ui.git',
  branch: 'feat/v5-cli',
  parentPath: 'apps', // This is the path to the parent directory of the template
  options: {
    framework: {
      default: {
        question: 'What would you like to \x1b[36mbuild\x1b[0m?',
        options: [
          {
            value: 'expo',
            label: 'Expo app',
            hint: 'Expo Router + gluestack-ui v5',
          },
          {
            value: 'next',
            label: 'Next.js app',
            hint: 'Next App Router + gluestack-ui (NativeWind v4)',
          },
          {
            value: 'universal',
            label: 'Universal app (Coming Soon)',
            hint: 'Next App Router + Expo Router + gluestack-ui',
          },
        ],
      },
    },
    stylingEngine: {
      expo: {
        question: 'Which \x1b[36mstyling engine\x1b[0m would you like to use?',
        options: [
          {
            value: 'nativewind',
            label: 'NativeWind v5 (Tailwind v4)',
            hint: 'Expo & React Native CLI, recommended',
            templateName: 'starter-kit-expo',
          },
          {
            value: 'uniwind',
            label: 'UniWind (Tailwind v4)',
            hint: 'Expo-only, no PostCSS build step',
            templateName: 'starter-kit-expo-uniwind',
          },
        ],
      },
      next: {
        question: 'Which \x1b[36mstyling engine\x1b[0m would you like to use?',
        options: [
          {
            value: 'nativewind',
            label: 'NativeWind v4 (Tailwind v3)',
            hint: 'gluestack-ui v5 Next.js support coming soon',
            templateName: 'starter-kit-next',
          },
        ],
      },
      universal: {
        options: [
          {
            value: 'nativewind',
            label: 'NativeWind v4 (Tailwind v3)',
            hint: 'Expo + Next.js monorepo — NativeWind v5 Next.js support coming soon',
            templateName: 'starter-kit-monorepo',
          },
        ],
      },
    },
  },
};

export default data;
