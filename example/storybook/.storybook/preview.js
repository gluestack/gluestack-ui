import { addParameters } from '@storybook/client-api';
import { DocsContainer } from '@storybook/addon-docs/blocks';
import { GluestackUIProvider } from '../src/ui-components';
import { config } from '../src/gluestack-ui.config';
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
        ['Introduction', 'Accessibility'],
        'Getting Started',
        [
          'Installation',
          'Install in Expo',
          'Install in Next.js',
          'Install in React Native',
          'CLI',
          'SSR',
        ],
        'Components',
        [
          'Provider',
          ['Provider'],
          'Typography',
          ['Heading', 'Text'],
          'Layout',
          ['Box', 'Center', 'Divider', 'Stack', 'HStack', 'VStack'],
          'Feedback',
          ['Alert', 'Progress', 'Spinner', 'Toast'],
          'Data Display',
          ['Badge'],
          'Forms',
          [
            'Button',
            'Checkbox',
            'FormControl',
            'Input',
            'Link',
            'Pressable',
            'Radio',
            'Select',
            'Slider',
            'Switch',
            'Tabs',
            'Textarea',
          ],
          'Overlay',
          ['AlertDialog', 'Menu', 'Modal', 'Popover', 'Tooltip'],
          'Disclosure',
          ['Actionsheet'],
          'Media And Icons',
          ['Avatar', 'Icon', 'Image'],
          'Others',
          ['Fab'],
        ],
        'Advanced',
        ['Fonts', 'Animations'],
        'More',
        ['Roadmap', 'Changelog'],
      ],
    },
  },
};

import { useDarkMode } from '../src/hooks/useDarkMode';
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
      <GluestackUIProvider config={config.theme}>
        <Story />
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
          <GluestackUIProvider config={config.theme} colorMode={getColorMode()}>
            {children}
          </GluestackUIProvider>
        </DocsContainer>
      );
    },
  },
});
