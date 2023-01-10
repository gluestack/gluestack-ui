/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import { View, Pressable, Text } from 'react-native';
import { styled } from '@gluestack/ui-styled';
import { Wrapper } from '../../components/Wrapper';
import { get, onChange, set } from '@gluestack/color-mode';

const StyledColorMode = styled(
  View,
  {
    baseStyle: {
      style: {
        w: 100,
        h: 100,
        bg: '$red500',
      },
      colorMode: {
        dark: {
          style: {
            bg: '$info600',
          },
        },
      },
    },
  },
  {}
);

export function ColorMode() {
  const [currectColorMode, setCurrentColorMode] = React.useState(get());
  const isDark = useDarkMode();

  React.useEffect(() => {
    set(isDark ? 'dark' : 'light');
    setCurrentColorMode(get());
    onChange((currentColorMode: string) => {
      if (currentColorMode === 'dark') {
        document.body.classList.remove(`gs-light`);
      } else {
        document.body.classList.remove(`gs-dark`);
      }
      document.body.classList.add(`gs-${currentColorMode}`);
    });
    document.body.classList.add(`gs-${get()}`);
  }, [isDark]);

  return (
    <Wrapper>
      <Pressable
        style={{
          backgroundColor: 'gray',
          padding: 12,
          marginBottom: 12,
        }}
        onPress={() => {
          set(get() === 'dark' ? 'light' : 'dark');
          setCurrentColorMode(get());
        }}
      >
        <Text style={{ color: 'white' }}>
          Toggle {currectColorMode === 'dark' ? 'light' : 'dark'}
        </Text>
      </Pressable>
      <StyledColorMode />
    </Wrapper>
  );
}
