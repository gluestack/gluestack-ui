import React from 'react';

import { View } from 'react-native';
import { styled } from '@dank-style/react';
import { Wrapper } from '../../components/Wrapper';
const StyledStyleId = styled(
  View,
  {
    baseStyle: {
      style: {
        width: 100,
        height: 100,
        bg: '$red500',
      },
      state: {
        hover: {
          style: {
            width: 50,
            height: 100,
            bg: '$blue300',
          },
        },
      },
      colorMode: {
        light: {
          style: {
            height: 100,
            bg: '$blue500',
          },
        },
        dark: {
          style: {
            height: 50,
            bg: '$blue500',
          },
        },
      },
    },
  },
  {}
);

export function StyleId() {
  return (
    <Wrapper>
      <StyledStyleId states={{}}></StyledStyleId>
    </Wrapper>
  );
}
