import React, { memo } from 'react';
import { View, Pressable, Text } from 'react-native';
import { styled } from '@gluestack-style/react';
import { Wrapper } from '../../components/Wrapper';
import { get } from '@gluestack-style/react';

const StyledColorMode = memo(
  styled(
    View,
    {
      'w': 100,
      'h': 100,
      'bg': '$red500',
      ':hover': {
        // bg: '$blue500',
        _dark: {
          bg: '$green500',
        },
      },
      '_dark': {
        'bg': '$yellow500',
        ':hover': {
          bg: '$green500',
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
      <StyledColorMode {...args} states={{ hover: true }} />
    </Wrapper>
  );
}

export default ColorMode;
