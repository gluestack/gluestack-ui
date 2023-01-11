import React from 'react';

import { View, Text } from 'react-native';
import { styled } from 'dank-style';
import { Wrapper } from '../../components/Wrapper';
const StyledMediaQuery = styled(
  View,
  {
    baseStyle: {
      style: {
        p: '$6',
        justifyContent: 'center',
        alignItems: 'center',
      },
      descendants: {
        _text: {
          style: {
            color: '$white',
          },
        },
      },
      queries: [
        {
          condition: '$base',
          value: {
            style: {
              bg: '$primary500',
            },
          },
        },
        {
          condition: '$sm',
          value: {
            style: {
              bg: '$red500',
            },
          },
        },
        {
          condition: '$md',
          value: {
            style: {
              bg: '$green500',
            },
          },
        },
        {
          condition: '$lg',
          value: {
            style: {
              bg: '$blue500',
            },
          },
        },
        {
          condition: '$xl',
          value: {
            style: {
              bg: '$pink500',
            },
          },
        },
      ],
    },
  },
  { descendantStyle: ['_text'] }
);

const StyledText = styled(
  Text,
  {},
  {
    ancestorStyle: ['_text'],
  }
);

export function MediaQuery({ ...args }) {
  return (
    <Wrapper>
      <StyledMediaQuery>
        <StyledText>Resize Screen</StyledText>
      </StyledMediaQuery>
    </Wrapper>
  );
}
