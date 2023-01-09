import React from 'react';

import { View } from 'react-native';
import { styled } from '@gluestack/ui-styled';
import { Wrapper } from '../../components/Wrapper';
const StyledPlatformProps = styled(
  View,
  {
    baseStyle: {
      style: {
        h: '$40',
        w: '$40',
      },
      platform: {
        web: {
          style: { bg: '$red500' },
        },
        android: {
          style: {
            bg: '$green500',
          },
        },
        ios: {
          style: {
            bg: '$blue500',
          },
        },
      },
    },
  },
  {}
);

export function PlatformProps() {
  return (
    <Wrapper>
      <StyledPlatformProps></StyledPlatformProps>
    </Wrapper>
  );
}
