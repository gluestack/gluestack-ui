import React from 'react';

import { Text, Pressable } from 'react-native';
import { styled } from '@gluestack/ui-styled';
import { Wrapper } from '../../components/Wrapper';
const StyledButtonSizes = styled(
  Pressable,
  {
    baseStyle: {
      style: {
        bg: '$primary400',
      },
    },
    sizes: {
      md: {
        style: {
          px: '$3',
          py: '$2.5',
        },
        descendants: {
          _text: {
            style: {
              fontSize: 14,
            },
          },
          _icon: {
            style: {
              w: 14,
              h: 14,
            },
          },
        },
      },
      lg: {
        style: {
          px: '$3',
          py: '$3',
        },
        descendants: {
          _text: {
            style: {
              fontSize: 16,
            },
          },
          _icon: {
            style: {
              w: 16,
              h: 16,
            },
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

export function ButtonSizes({ ...args }) {
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
