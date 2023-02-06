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
          'ColorMode Based Styles',
          'Descendants Styles',
          'Overriding Styles with sx',
          'Utility props',
          'Platform Based Styles',
          'Property Resolver',
          'Responsive Styles',
          'State Bases Styles',
        ],
        'configuration',
        ['Theme Tokens', 'Breakpoints', 'Custom Theming', 'SSR'],
        'advanced',
        ['Architecture', 'Specificity', 'Babel Plugins'],
      ],
    },
  },
};
