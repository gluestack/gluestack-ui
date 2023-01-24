/* eslint-disable react-native/no-inline-styles */
import React, { memo } from 'react';
import { View, Pressable, Text } from 'react-native';
import { styled } from '@dank-style/react';
import { Wrapper } from '../../components/Wrapper';
import { get, onChange, set } from '@dank-style/color-mode';

const StyledColorMode = memo(
  styled(
    View,
    {
      w: 100,
      h: 100,
      bg: '$red500',

      _dark: {
        bg: '$red200',
      },
    },
    {}
  )
);

export function ColorMode({ ...args }) {
  const [currentColorMode, setCurrentColorMode] = React.useState(get());

  React.useEffect(() => {
    set(currentColorMode);
    onChange((colorMode: string) => {
      if (colorMode === 'dark') {
        document.body.classList.remove(`gs-light`);
      } else {
        document.body.classList.remove(`gs-dark`);
      }
      document.body.classList.add(`gs-${colorMode}`);
    });
  }, [currentColorMode]);

  return (
    <Wrapper colorMode={currentColorMode}>
      <Pressable
        style={{
          backgroundColor: 'gray',
          padding: 12,
          marginBottom: 12,
        }}
        onPress={() => {
          setCurrentColorMode(currentColorMode === 'dark' ? 'light' : 'dark');
        }}
      >
        <Text style={{ color: 'white' }}>
          Toggle {currentColorMode === 'dark' ? 'light' : 'dark'}
        </Text>
      </Pressable>
      <StyledColorMode {...args} />
    </Wrapper>
  );
}
