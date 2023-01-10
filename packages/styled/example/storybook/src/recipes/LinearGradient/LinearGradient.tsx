import React from 'react';
import { styled } from '@gluestack/ui-styled';
import { Wrapper } from '../../components/Wrapper';
import { LinearGradient } from 'expo-linear-gradient';

const StyledLinearGradient = styled(
  LinearGradient,
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

export function LinearGradientExample({ ...args }) {
  return (
    <Wrapper>
      <StyledLinearGradient
        colors={['$amber100', '$green900']}
      ></StyledLinearGradient>
    </Wrapper>
  );
}
