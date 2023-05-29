import React from 'react';

import { View, Text } from 'react-native';
import { styled } from '@gluestack-style/react';
import { Wrapper } from '../../components/Wrapper';
const StyledMediaQuery = styled(
  View,
  {
    'p': '$6',
    'justifyContent': 'center',
    'alignItems': 'center',

    '_text': {
      color: '$white',
    },

    '@base': {
      bg: '$primary500',
    },

    '@sm': {
      bg: '$red500',
    },

    '@md': {
      bg: '$green500',
    },

    '@lg': {
      bg: '$blue500',
    },

    '@xl': {
      bg: '$pink500',
    },
  },
  {}
);

export function ResponsiveStyles({ ...args }) {
  return (
    <Wrapper>
      <StyledMediaQuery {...args}>
        <Text>Resize Screen</Text>
      </StyledMediaQuery>
    </Wrapper>
  );
}

export default ResponsiveStyles;
