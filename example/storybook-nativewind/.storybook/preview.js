import { addParameters } from '@storybook/client-api';
import { DocsContainer } from '@storybook/addon-docs/blocks';
import { OverlayProvider } from '@gluestack-ui/overlay';
import { ToastProvider } from '@gluestack-ui/toast';

import { GluestackUIProvider as GluestackUIWithNativewindProvider } from '../src/core-components/nativewind/gluestack-ui-provider';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// global css getting resolved from babel.config.js
import 'global.css';

import { GluestackUIProvider as GluestackUIWithGluestackStyleProvider } from '../src/core-components/themed/gluestack-ui-provider';

import gstheme from './gstheme';
import { themes } from '@storybook/theming';
import { View } from 'react-native';
import { useColorScheme } from 'nativewind';
import { useDarkMode } from '../src/components/hooks/useDarkMode';
import { Platform } from 'react-native';
import { useEffect, useState } from 'react';

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
        'Home',
        [
          'Overview',
          ['Introduction', 'Upgrade to v2'],
          'Getting Started',
          [
            'Installation',
            'Tooling Setup',
            'VS Code Extensions',
            'Figma UI Kit',
            'CLI',
            'gluestack-ui-nativewind-utils',
          ],
          'Core Concepts',
          ['Accessibility', 'Universal'],
          'Performance',
          ['Benchmarks'],
          'Theme Configuration',
          ['Default Tokens', 'Customizing Theme', 'Dark Mode'],
        ],
        'Components',
        [
          'All Components',
          ['All Components'],
          'Typography',
          ['Heading', 'Text'],
          'Layout',
          ['Box', 'Center', 'Divider', 'HStack', 'VStack', 'Grid'],
          'Feedback',
          ['Alert', 'Progress', 'Spinner', 'Toast'],
          'Data Display',
          ['Badge', 'Card', 'Table'],
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
            'Textarea',
          ],
          'Overlay',
          ['AlertDialog', 'Menu', 'Modal', 'Popover', 'Portal', 'Tooltip'],
          'Disclosure',
          ['Actionsheet', 'Accordion', 'BottomSheet'],
          'Media And Icons',
          ['Avatar', 'Image', 'Icon'],
          'Others',
          ['Fab', 'Skeleton'],
        ],
        'Hooks',
        ['useBreakPointValue', 'useMediaQuery'],
        'Apps',
        ['Dashboard App', 'Todo App', 'Starter Kit', 'Storybook App'],
        'Guides',
        [
          'Recipes',
          ['Linear Gradient'],
          'More',
          ['FAQs', 'Releases', 'Roadmap', 'Troubleshooting'],
        ],
      ],
      icons: [
        {
          source: 'lucide-react-native',
          name: 'Home',
          headerTitle: 'Home',
        },
        {
          source: 'lucide-react-native',
          name: 'Component',
          headerTitle: 'Components',
        },
        {
          source: 'lucide-react-native',
          name: 'Layers',
          headerTitle: 'Apps',
        },
        {
          source: 'lucide-react-native',
          name: 'BookOpen',
          headerTitle: 'Guides',
        },
        {
          source: 'lucide-react-native',
          name: 'Anchor',
          headerTitle: 'Hooks',
        },
      ],
    },
  },
};

export const decorators = [
  (Story) => {
    let value = false;

    if (Platform.OS === 'web') {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      value = useDarkMode();
    }
    const [colorMode, setColorMode] = useState(false);

    function getColorMode() {
      //@ts-ignore
      if (Platform.OS === 'web') {
        return value ? 'dark' : 'light';
      } else {
        return isDark ? 'dark' : 'light';
      }
    }
    const { setColorScheme } = useColorScheme();
    useEffect(() => {
      setColorScheme(getColorMode());
      setColorMode(getColorMode());
    }, [getColorMode()]);

    return (
      <GluestackUIWithGluestackStyleProvider colorMode={getColorMode()}>
        <GestureHandlerRootView
          style={{ flex: 1, display: 'flex', height: '100vh' }}
        >
          <GluestackUIWithNativewindProvider mode={getColorMode()}>
            <OverlayProvider style={{ flex: 1, display: 'flex' }}>
              <ToastProvider>
                <View
                  style={{
                    flex: 1,
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Story />
                </View>
              </ToastProvider>
            </OverlayProvider>
          </GluestackUIWithNativewindProvider>
        </GestureHandlerRootView>
      </GluestackUIWithGluestackStyleProvider>
    );
  },
];

addParameters({
  docs: {
    // theme: gstheme,
    inlineStories: false,
    container: ({ children, context }) => {
      return (
        <GluestackUIWithGluestackStyleProvider>
          <GluestackUIWithNativewindProvider>
            <DocsContainer context={context}>
              <GestureHandlerRootView style={{ flex: 1 }}>
                <OverlayProvider style={{ flex: 1 }}>
                  <ToastProvider>{children}</ToastProvider>
                </OverlayProvider>
              </GestureHandlerRootView>
            </DocsContainer>
          </GluestackUIWithNativewindProvider>
        </GluestackUIWithGluestackStyleProvider>
      );
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
