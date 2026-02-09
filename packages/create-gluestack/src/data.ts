const data = {
  gitRepo: 'https://github.com/gluestack/gluestack-ui.git',
  branch: 'feat/uniwind-support-exp',
  parentPath: 'apps', // This is the path to the parent directory of the template
  options: {
    framework: {
      default: {
        question: 'What would you like to \x1b[36mbuild\x1b[0m?',
        options: [
          {
            value: 'expo',
            label: 'Expo app',
            hint: 'Expo Router + gluestack-ui',
          },
          {
            value: 'next',
            label: 'Next.js app',
            hint: 'Next App router + gluestack-ui',
          },
          {
            value: 'universal',
            label: 'Universal app (Coming Soon)',
            hint: 'Next App router + Expo Router + gluestack-ui',
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
            label: 'NativeWind (Tailwind v3)',
            hint: 'Stable, production-ready',
            templateName: 'starter-kit-expo',
          },
          {
            value: 'uniwind',
            label: 'UniWind (Tailwind v4)',
            hint: 'Latest Tailwind with new features',
            templateName: 'starter-kit-expo-uniwind',
          },
        ],
      },
      next: {
        question: 'Which \x1b[36mstyling engine\x1b[0m would you like to use?',
        options: [
          {
            value: 'nativewind',
            label: 'NativeWind (Tailwind v3)',
            hint: 'Stable, production-ready',
            templateName: 'starter-kit-next',
          },
        ],
      },
      universal: {
        options: [],
      },
    },
  },
};

export default data;
