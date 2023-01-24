/* eslint-disable react-native/no-inline-styles */
import React, { memo } from 'react';
import { View, Pressable, Text } from 'react-native';
import { styled } from '@dank-style/react';
import { Wrapper } from '../../components/Wrapper';
import { get, set } from '@dank-style/color-mode';

const StyledColorMode = memo(
  styled(
    View,
    {
      w: 100,
      h: 100,
      bg: '$red500',

      _dark: {
        bg: '$info600',
      },
    },
    {}
  )
);

export function ColorMode() {
  const [currectColorMode, setCurrentColorMode] = React.useState(get());

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
      <StyledColorMode />
    </Wrapper>
  );
}
