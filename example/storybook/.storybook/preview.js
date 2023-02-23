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
        ['Installation', 'Styled', 'StyledProvider', 'TypeScript'],
        'api',
        [
          'State Based Styles',
          'ColorMode Based Styles',
          'Platform Based Styles',
          'Responsive Styles',
          'Descendants Styles',
          'Variants',
          'Overriding Styles with sx',
          'Utility props',
          'Property Resolver',
          'createStyled',
          'Props Passing',
          'Utility Functions',
        ],
        'plugins',
        ['Introduction', 'CSSVariables', 'Animation Plugin'],
        'configuration',
        ['Theme Tokens', 'Breakpoints', 'SSR'],
        'advanced',
        ['Architecture', 'Specificity', 'Babel Plugins'],
      ],
    },
  },
};
