import React from 'react';

import { Pressable } from 'react-native';
import { styled } from '@gluestack-style/react';
import { Wrapper } from '../../components/Wrapper';
const StyledButton = styled(
  Pressable,
  {
    h: '$40',
    w: '$40',

    _web: {
      bg: '$red500',
    },

    _android: {
      bg: '$green500',
    },

    _ios: {
      bg: '$blue500',
    },
  },
  {}
);

export function PlatformBasedStyles({ ...args }) {
  return (
    <Wrapper>
      <StyledButton {...args}></StyledButton>
    </Wrapper>
  );
}
export default PlatformBasedStyles;
