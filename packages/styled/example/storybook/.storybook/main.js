module.exports = {
  stories: [
    // '../src/components/**/*.stories.mdx',
    // '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
    // '../src/recipes/**/*.stories.mdx',
    // '../src/recipes/**/*.stories.@(js|jsx|ts|tsx)',
    // '../src/hooks/*.stories.mdx',
    // '../src/hooks/*.stories.@(js|jsx|ts|tsx)',
    // '../src/overview/**/*.stories.@(js|jsx|ts|tsx)',
    // '../src/overview/**/*.stories.mdx',
    '../src/skeleton/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/skeleton/**/*.stories.mdx',
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
