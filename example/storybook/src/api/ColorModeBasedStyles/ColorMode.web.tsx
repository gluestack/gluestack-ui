/* eslint-disable react-native/no-inline-styles */
import React, { memo } from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import { View, Pressable, Text } from 'react-native';
import { styled } from '@dank-style/react';
import { Wrapper } from '../../components/Wrapper';
import { get, onChange, set } from '@dank-style/color-mode';

const StyledColorMode = memo(
  styled(
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
  )
);

export function ColorMode({ ...args }) {
  const [currectColorMode, setCurrentColorMode] = React.useState(get());
  const isDark = useDarkMode();

  // React.useEffect(() => {
  //   set(isDark ? 'dark' : 'light');
  //   setCurrentColorMode(get());
  //   // onChange((currentColorMode: string) => {
  //   //   if (currentColorMode === 'dark') {
  //   //     document.body.classList.remove(`gs-light`);
  //   //   } else {
  //   //     document.body.classList.remove(`gs-dark`);
  //   //   }
  //   //   document.body.classList.add(`gs-${currentColorMode}`);
  //   // });
  //   document.body.classList.add(`gs-${get()}`);
  // }, [isDark]);

  return (
    <Wrapper colorMode={currectColorMode}>
      <Pressable
        style={{
          backgroundColor: 'gray',
          padding: 12,
          marginBottom: 12,
        }}
        onPress={() => {
          // set(get() === 'dark' ? 'light' : 'dark');
          setCurrentColorMode(currectColorMode === 'dark' ? 'light' : 'dark');
        }}
      >
        <Text style={{ color: 'white' }}>
          Toggle {currectColorMode === 'dark' ? 'light' : 'dark'}
        </Text>
      </Pressable>
      <StyledColorMode {...args} />
    </Wrapper>
  );
}
