const data = {
  gitRepo: 'https://github.com/gluestack/gluestack-ui.git',
  branch: 'feat/v3',
  parentPath: 'apps', // This is the path to the parent directory of the template
  options: {
    framework: {
      default: {
        question: 'What would you like to \x1b[36mbuild\x1b[0m?',
        options: [
          {
            value: 'starter-kit-expo',
            label: 'Expo app',
            hint: 'Expo Router + gluestack-ui',
          },
          {
            value: 'starter-kit-next',
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
  },
};

export default data;
