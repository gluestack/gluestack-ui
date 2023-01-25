import React from 'react';
import { View } from 'react-native';
import { styled } from '@dank-style/react';
import { Wrapper } from '../../components/Wrapper';

function hexToRGB(hex: any, alpha: any) {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
  } else {
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
}

const StyledPropertyResolver = styled(
  View,
  {
    bg: '$primary500',
    h: '$40',
    w: '$40',
  },
  {},
  {
    propertyResolver: {
      backgroundColor: (value: any, resolver: any) => {
        return hexToRGB(resolver(value), 0.5);
      },
    },
  }
);

export function PropertyResolver({ ...args }: any) {
  return (
    <Wrapper>
      <StyledPropertyResolver {...args}></StyledPropertyResolver>
    </Wrapper>
  );
}
