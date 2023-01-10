import React from 'react';

import { View } from 'react-native';
import { styled } from '@gluestack/ui-styled';
import { Wrapper } from '../../components/Wrapper';
const StyledView = styled(
  View,
  {
    baseStyle: {
      style: {
        bg: '$red500',
        w: 300,
        h: 100,
      },
    },
  },
  {}
);

const StyledComposition = styled(
  StyledView,
  {
    baseStyle: {
      style: {
        bg: '$blue500',
        h: 100,
        // w: 100,
      },
    },
  },
  {}
);

export function Composition() {
  return (
    <Wrapper>
      <StyledComposition></StyledComposition>
    </Wrapper>
  );
}
