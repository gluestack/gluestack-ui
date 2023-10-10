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
        ['Introduction', 'All Components'],
        'Getting Started',
        ['Installation', 'VS Code Extensions'],
        'Core Concepts',
        ['Themed Library', 'Unstyled Library', 'Accessibility'],
        'Performance',
        ['Overview', 'Benchmarks'],
        'Theme Configuration',
        [
          'Theme',
          ['Default Tokens', 'Default Components'],
          'Customizing Theme',
        ],
        'Styling',
        [
          'Overview',
          'Utility and SX Props',
          'State',
          'Color Mode',
          'Responsive',
          'Descendants',
          'Platform Specific',
          'Variants',
        ],
        'Components',
        [
          'Provider',
          ['GluestackUIProvider'],
          'Typography',
          ['Heading', 'Text'],
          'Layout',
          ['Box', 'Center', 'Divider', 'Stack', 'HStack', 'VStack'],
          'Feedback',
          ['Alert', 'Progress', 'Spinner', 'Toast'],
          'Data Display',
          ['Badge', 'Table'],
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
          ['Actionsheet', 'Accordion', 'Tabs'],
          'Media And Icons',
          ['Avatar', 'Icon', 'Image'],
          'Others',
          ['Fab'],
        ],
        'React Native Components',
        [
          'FlatList',
          'ScrollView',
          'View',
          'KeyboardAvoidingView',
          'SectionList',
          'StatusBar',
        ],
        'Hooks',
        ['React Native ARIA', 'useToken', 'useBreakpointValue', 'useColorMode'],
        'Production Optimizations',
        ['With a Babel Plugin'],
        'Guides',
        [
          'Install in Next.js',
          'Install in Expo',
          'Install in React Native',
          'Building Design Systems',
        ],
        'Configuration',
        ['Server-Side Rendering', 'React Server Components'],
        'Advanced',
        ['Fonts', 'Animations'],
        'Recipes',
        ['Card', 'LinearGradient'],
        'Resources',
        ['Todo-List', 'Dashboard App'],
        'Migration',
        ['NativeBase to gluestack-ui'],
        'More',
        ['Roadmap', 'Changelog', 'Contribution Guidelines', 'FAQs'],
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
