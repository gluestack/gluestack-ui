import { addParameters } from '@storybook/client-api';
import { DocsContainer } from '@storybook/addon-docs/blocks';
import { config } from '@gluestack-ui/config';
import { Center, GluestackUIProvider } from '@gluestack-ui/themed';
import { useState } from 'react';
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
        [
          'useBreakPointValue',
          'useMedia',
          'useColorMode',
          'useToken',
          'useStyled',
          'useTheme',
        ],
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

import { useDarkMode } from '../src/ui/hooks/useDarkMode';
import { Platform } from 'react-native';

export const decorators = [
  (Story) => {
    let value = false;

    if (Platform.OS === 'web') {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      value = useDarkMode();
    }
    const [isDark] = useState(false);

    function getColorMode() {
      //@ts-ignore
      if (Platform.OS === 'web') {
        return value ? 'dark' : 'light';
      } else {
        return isDark ? 'dark' : 'light';
      }
    }
    return (
      <GluestackUIProvider
        config={config}
        // colorMode={getColorMode()}
        // components={components}
      >
        <Center>
          <Story />
        </Center>
      </GluestackUIProvider>
    );
  },
];

addParameters({
  docs: {
    container: ({ children, context }) => {
      let value = false;

      if (Platform.OS === 'web') {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        value = useDarkMode();
      }
      const [isDark] = useState(false);

      function getColorMode() {
        //@ts-ignore
        if (Platform.OS === 'web') {
          return value ? 'dark' : 'light';
        } else {
          return isDark ? 'dark' : 'light';
        }
      }

      return (
        <DocsContainer context={context}>
          <GluestackUIProvider config={config} colorMode={getColorMode()}>
            {children}
          </GluestackUIProvider>
        </DocsContainer>
      );
    },
  },
});
