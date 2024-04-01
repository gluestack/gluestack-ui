import { addParameters } from '@storybook/client-api';
import { DocsContainer } from '@storybook/addon-docs/blocks';
import { OverlayProvider } from '@gluestack-ui/overlay';
import { ToastProvider } from '@gluestack-ui/toast';

import { GluestackUIProvider as GluestackUIWithNativewindProvider } from '../src/core-components/nativewind/gluestack-ui-provider';

// global css getting resolved from babel.config.js
import 'global.css';

import { GluestackUIProvider as GluestackUIWithGluestackStyleProvider } from '../src/core-components/themed/gluestack-ui-provider';

import gstheme from './gstheme';
import { themes } from '@storybook/theming';
import { View } from 'react-native';
import { useColorScheme } from 'nativewind';
import { useDarkMode } from '../src/hooks/useDarkMode';
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
        'Overview',
        ['Introduction'],
        'Getting Started',
        ['Installation', 'Tooling Setup'],
        'Core Concepts',
        ['Accessibility', 'Universal'],
        'Theme Configuration',
        ['Default Tokens', 'Customizing Theme'],
        'Components',
        [
          'Typography',
          ['Heading', 'Text'],
          'Layout',
          ['Box', 'Center', 'Divider', 'HStack', 'VStack'],
          'Feedback',
          ['Alert', 'Progress', 'Spinner', 'Toast'],
          'Data Display',
          ['Badge', 'Card'],
          'Forms',
          [
            'Button',
            'Checkbox',
            'FormControl',
            'Input',
            'Link',
            'Pressable',
            'Radio',
            'Slider',
            'Switch',
            'Textarea',
          ],
          'Overlay',
          ['AlertDialog', 'Menu', 'Modal', 'Popover', 'Tooltip'],
          'Disclosure',
          ['Actionsheet', 'Accordion'],
          'Media And Icons',
          ['Avatar', 'Image', 'Icon'],
          'Others',
          ['Fab'],
        ],
        'More',
        ['Changelog'],
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
      <GluestackUIWithGluestackStyleProvider colorMode={colorMode}>
        <GluestackUIWithNativewindProvider mode={colorMode}>
          <OverlayProvider style={{ flex: 1 }}>
            <ToastProvider>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Story />
              </View>
            </ToastProvider>
          </OverlayProvider>
        </GluestackUIWithNativewindProvider>
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
              <OverlayProvider style={{ flex: 1 }}>
                <ToastProvider>{children}</ToastProvider>
              </OverlayProvider>
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
