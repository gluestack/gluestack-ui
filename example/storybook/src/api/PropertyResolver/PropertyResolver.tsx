import React from 'react';
import { View } from 'react-native';
import { styled } from '@gluestack-style/react';
import { Wrapper } from '../../components/Wrapper';
import { LinearGradient } from 'expo-linear-gradient';

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
  LinearGradient,
  {
    bg: '$primary500',
    h: '$40',
    w: '$40',
  },
  { resolveProps: ['colors'] },
  {
    propertyTokenMap: {},
    // propertyResolver: {
    //   props: {
    //     colors: (value: any, resolver: any) => {
    //       return value.map((color: any) => resolver(color));
    //     },
    //   },
    //   backgroundColor: (value: any, resolver: any) => {
    //     return hexToRGB(resolver(value), 0.5);
    //   },
    // },
  }
);

export function PropertyResolver({ ...args }: any) {
  return (
    <Wrapper>
      <StyledPropertyResolver
        colors={['$red400', '$blue300']}
        {...args}
      ></StyledPropertyResolver>
    </Wrapper>
  );
}
export default PropertyResolver;
