import React from 'react';

import { Text, Pressable } from 'react-native';
import { styled } from '@dank-style/react';
import { Wrapper } from '../../components/Wrapper';
const StyledButtonVariant = styled(
  Pressable,
  {
    baseStyle: {
      p: '$3',
    },
    variants: {
      variant: {
        solid: {
          bg: '$primary600',
          _text: {
            color: '$text50',
          },
        },
        subtle: {
          bg: '$primary100',
        },
      },
    },
  },
  {
    descendantStyle: ['_text'],
  }
);

const StyledButtonText = styled(
  Text,
  {},
  {
    ancestorStyle: ['_text'],
  }
);

export function ButtonVariant({ ...args }) {
  return (
    <Wrapper>
      <StyledButtonVariant variant="subtle">
        <StyledButtonText>Button Subtle</StyledButtonText>
      </StyledButtonVariant>
      <StyledButtonVariant variant="solid" mt={10}>
        <StyledButtonText>Button Solid</StyledButtonText>
      </StyledButtonVariant>
    </Wrapper>
  );
}
