import { addParameters } from '@storybook/client-api';
import { DocsContainer } from '@storybook/addon-docs/blocks';
import { config } from '@custom-ui/config';
import { Center, GluestackUIProvider } from '@custom-ui/themed';
import gstheme from './gstheme';
import { themes } from '@storybook/theming';
import '../global.css';
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: '',
      order: [
        'Overview',
        ['Introduction'],
        'Design Tokens',
        [
          'Colors',
          'Typography',
          'Space',
          'Opacity',
          'Breakpoints',
          'Borders',
          'Radii',
          'Shadows',
        ],
        'components',
        ['PRIMITIVES', 'COMPOSITES', 'CUSTOM'],
      ],
    },
  },
};

export const decorators = [
  (Story) => {
    return (
      <GluestackUIProvider config={config}>
        <Center>
          <Story />
        </Center>
      </GluestackUIProvider>
    );
  },
];

addParameters({
  docs: {
    theme: gstheme,
    inlineStories: false,
    container: ({ children, context }) => {
      return <DocsContainer context={context}>{children}</DocsContainer>;
    },
  },
  darkMode: {
    current: 'light',
    light: {
      ...themes.light,
      brandTitle: 'Gluestack Design System',
      brandUrl: '/',
      brandImage: '/images/logo-light.png',
    },
    dark: {
      ...themes.dark,
      brandTitle: 'Gluestack Design System',
      brandUrl: '/',
      brandImage: '/images/logo-dark.png',
    },
  },
});
