import React from 'react';
import { View, Text } from 'react-native';
import { styled } from '@dank-style/react';
import { Wrapper } from '../../components/Wrapper';
const StyledUtilityProps = styled(
  View,
  {
    baseStyle: {
      style: {
        w: '$40',
        h: '$40',
        bg: '$red500',
      },
    },
  },
  {}
);

export function UtilityProps({ ...args }) {
  return (
    <Wrapper>
      <StyledUtilityProps bg="$violet500" {...args}></StyledUtilityProps>
    </Wrapper>
  );
}
