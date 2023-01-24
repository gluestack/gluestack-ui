/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';

import { Pressable, Text } from 'react-native';
import { styled } from '@dank-style/react';
import { Wrapper } from '../../components/Wrapper';
import { get, set } from '@dank-style/color-mode';

const StyledStateColorMode = styled(
  Pressable,
  {
    'bg': '$primary600',
    'p': '$3',

    '_text': {
      color: '$white',
    },

    ':hover': {
      bg: '$primary700',
    },

    ':active': {
      bg: '$primary800',
    },

    '_dark': {
      'bg': '$green500',

      '_text': {
        color: '$white',
      },

      ':hover': {
        bg: '$green600',
      },

      ':active': {
        bg: '$green700',
      },
    },
  },
  { descendantStyle: ['_text'] }
);

const StyledButtonText = styled(
  Text,
  {},
  {
    ancestorStyle: ['_text'],
  }
);

export function StateColorMode() {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [currectColorMode, setCurrentColorMode] = React.useState(get());
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
      <StyledStateColorMode
        onHoverIn={() => setIsHovered(true)}
        onHoverOut={() => setIsHovered(false)}
        onPressIn={() => setIsActive(true)}
        onPressOut={() => setIsActive(false)}
        states={{
          hover: isHovered,
          active: isActive,
        }}
      >
        <StyledButtonText>Button</StyledButtonText>
      </StyledStateColorMode>
    </Wrapper>
  );
}
