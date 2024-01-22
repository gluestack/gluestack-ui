import { addParameters } from '@storybook/client-api';
import { DocsContainer } from '@storybook/addon-docs/blocks';
import { OverlayProvider } from '@gluestack-ui/overlay';
import { ToastProvider } from '@gluestack-ui/toast';
import gstheme from './gstheme';
import { themes } from '@storybook/theming';
import { useColorScheme } from 'nativewind';
import { Platform } from 'react-native';
import { useState } from 'react';
import { withThemeByClassName } from '@storybook/addon-themes';

// Use imperatively
import '../global.css';
import { useDarkMode } from './use-dark-mode';
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
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
    attributeName: 'data-mode',
  }),
  (Story) => {
    let value = false;

    if (Platform.OS === 'web') {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const value = useDarkMode();
      const { setColorScheme } = useColorScheme();
      setColorScheme(value);
    }
    const [isDark] = useState(false);

    return (
      <OverlayProvider>
        <ToastProvider>
          <Story />
        </ToastProvider>
      </OverlayProvider>
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
