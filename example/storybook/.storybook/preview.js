export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    // inlineStories: false,
  },
  options: {
    storySort: {
      method: '',
      order: [
        'Overview',
        ['Introduction', 'Performance', 'API'],
        'Getting Started',
        [
          'Installation',
          'Install in Expo',
          'Install in Next.js',
          'styled()',
          'StyledProvider',
          'TypeScript',
        ],
        'api',
        [
          'State Based Styles',
          'ColorMode Based Styles',
          'Platform Based Styles',
          'Responsive Styles',
          'Descendants Styles',
          'Variants',
          'Overriding Styles (sx)',
          'Overriding Styles (Utility Props)',
          'Property Resolver',
          'createStyled()',
          'Props Passing',
          'Utility Functions',
          'AsForwarder',
        ],

        'plugins',
        [
          'Intro to Plugins',
          'Fonts Plugin',
          'Animation Plugin',
          'CSS Variables Plugin',
        ],
        'hooks',
        ['useBreakPointValue', 'useMediaQuery', 'useColorMode', 'useToken'],
        'configuration',
        [
          'Theme Tokens',
          'Themes',
          'Breakpoints',
          'Global Style',
          'Customizing Components',
          'SSR',
        ],
        'advanced',
        ['Architecture', 'Specificity', 'Babel Plugins'],
        'more',
        ['Roadmap', 'Changelog'],
      ],
    },
  },
};
