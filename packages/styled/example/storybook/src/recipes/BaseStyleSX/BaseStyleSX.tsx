import React from 'react';

import { Text, Pressable } from 'react-native';
import { styled } from '@gluestack/ui-styled';
import { Wrapper } from '../../components/Wrapper';
const StyledBaseStyleSX = styled(
  Pressable,
  {
    baseStyle: {
      style: {
        bg: '$red500',
        p: '$3',
      },
    },
  },
  {}
);

const StyledButtonText = styled(
  Text,
  {
    baseStyle: {
      style: {
        color: '$white',
      },
    },
  },
  {}
);

export function BaseStyleSX() {
  return (
    <Wrapper>
      <StyledBaseStyleSX sx={{ style: { bg: '$primary600', rounded: '$md' } }}>
        <StyledButtonText>Button Using BaseStyle</StyledButtonText>
      </StyledBaseStyleSX>
    </Wrapper>
  );
}
