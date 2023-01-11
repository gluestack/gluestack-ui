import React from 'react';

import { Text, Pressable } from 'react-native';
import { styled } from '@gluestack/ui-styled';
import { Wrapper } from '../../components/Wrapper';
const StyledButtonVariant = styled(
  Pressable,
  {
    baseStyle: {
      style: {
        p: '$3',
      },
    },
    variants: {
      solid: {
        style: {
          bg: '$primary600',
        },
        descendants: {
          _text: {
            style: {
              color: '$text50',
            },
          },
        },
      },
      subtle: {
        style: {
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
