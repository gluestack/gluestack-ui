import React from 'react';

import { View } from 'react-native';
import { styled } from '@gluestack/ui-styled';
import { Wrapper } from '../../components/Wrapper';
const StyledMediaQuery = styled(
  View,
  {
    baseStyle: {
      style: {},
    },
  },
  {}
);

export function MediaQuery() {
  return (
    <Wrapper>
      <StyledMediaQuery></StyledMediaQuery>
    </Wrapper>
  );
}
