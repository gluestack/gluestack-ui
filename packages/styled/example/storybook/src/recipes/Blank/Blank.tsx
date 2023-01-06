import React from 'react';

import { Text, Pressable } from 'react-native';
import { styled } from '@gluestack/ui-styled';
import { Wrapper } from '../../components/Wrapper';
const StyledButton = styled(
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

const StyledButtonText = styled(Text, {}, {});

export function Blank() {
  return (
    <Wrapper>
      <StyledButton>
        <StyledButtonText>Button Using Blank</StyledButtonText>
      </StyledButton>
    </Wrapper>
  );
}
