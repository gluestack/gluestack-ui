module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    // "@storybook/addon-react-native-web",
    '@gluestack/storybook-addon',
  ],
  core: {
    builder: 'webpack5',
  },
  framework: '@storybook/react',
};
