import React from 'react';

import { Text, Pressable } from 'react-native';
import { styled } from '@dank-style/react';
import { Wrapper } from '../../components/Wrapper';
const StyledButtonSizes = styled(
  Pressable,
  {
    bg: '$primary400',

    variants: {
      sizes: {
        md: {
          px: '$3',
          py: '$2.5',

          _text: {
            fontSize: 14,
          },

          _icon: {
            w: 14,
            h: 14,
          },
        },

        lg: {
          px: '$3',
          py: '$3',

          _text: {
            fontSize: 16,
          },

          _icon: {
            w: 16,
            h: 16,
          },
        },
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

export function ButtonSizes() {
  return (
    <Wrapper>
      <StyledButtonSizes size={'md'}>
        <StyledButtonText>Md Button</StyledButtonText>
      </StyledButtonSizes>
      <StyledButtonSizes size="lg" mt={10}>
        <StyledButtonText>Lg Button</StyledButtonText>
      </StyledButtonSizes>
    </Wrapper>
  );
}
