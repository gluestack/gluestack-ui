module.exports = {
  stories: [
    '../components/Button/*.stories.mdx',
    '../components/Button/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-react-native-web',
  ],
  framework: '@storybook/react',
  typescript: {
    reactDocgen: 'none',
  },
};
