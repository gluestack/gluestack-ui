module.exports = {
  stories: [
    '../src/components/**/*.stories.mdx',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/recipes/**/*.stories.mdx',
    '../src/recipes/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/hooks/*.stories.mdx',
    '../src/hooks/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    'storybook-dark-mode',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-react-native-web',
    '@storybook/addon-docs',
  ],
  framework: '@storybook/react',
  typescript: {
    reactDocgen: 'none',
  },
};
