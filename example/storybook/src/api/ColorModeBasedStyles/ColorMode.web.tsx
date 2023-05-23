import React, { memo } from 'react';
import { View, Pressable, Text } from 'react-native';
import { styled } from '@dank-style/react';
import { Wrapper } from '../../components/Wrapper';
import { get } from '@dank-style/color-mode';

const StyledColorMode = memo(
  styled(
    View,
    {
      w: 100,
      h: 100,
      borderRadius: 4,
      borderWidth: 2,
      borderColor: '$primary500',
      // bg: '$primary500',
      variants: {
        action: {
          primary: {
            bg: '$primary500',
          },
        },
        variant: {
          newVariant: {
            bg: '$orange500',
          },
        },
      },
    },
    {}
  )
);
export function ColorMode({ ...args }) {
  const [currentColorMode, setCurrentColorMode] = React.useState(get());

  return (
    <Wrapper colorMode={currentColorMode}>
      <Pressable
        onPress={() => {
          setCurrentColorMode(currentColorMode === 'dark' ? 'light' : 'dark');
        }}
      >
        <Text style={{ color: 'white' }}>
          Toggle {currentColorMode === 'dark' ? 'light' : 'dark'}
        </Text>
      </Pressable>
      <StyledColorMode />
    </Wrapper>
  );
}

export default ColorMode;
