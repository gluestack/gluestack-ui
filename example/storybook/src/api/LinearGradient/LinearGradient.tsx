import React from 'react';
import { styled } from '@dank-style/react';
import { Wrapper } from '../../components/Wrapper';
import { LinearGradient as expoLinearGradient } from 'expo-linear-gradient';

const StyledLinearGradient = styled(
  expoLinearGradient,
  {
    baseStyle: {
      style: {
        w: '$40',
        h: '$40',
      },
    },
  },
  { resolveProps: ['colors'] },
  {
    propertyResolver: {
      colors: (value: any, resolver: any) => {
        return value.map((val: any) => resolver(val, 'colors'));
      },
    },
  }
);

export function LinearGradient({ ...args }) {
  return (
    <Wrapper>
      <StyledLinearGradient
        colors={['$primary3 00', '$pink300']}
        {...args}
      ></StyledLinearGradient>
    </Wrapper>
  );
}
