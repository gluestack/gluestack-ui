/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';
import { Svg } from 'react-native-svg';
import { Circle, Line, Polyline, Rect } from 'react-native-svg';
import { styled } from '@gluestack/ui-styled';
import { Wrapper } from '../../components/Wrapper';

const StyledIcons = styled(
  Svg,
  {
    baseStyle: {
      style: {
        width: 24,
        height: 24,
        stroke: '$white',
        viewBox: '0 0 24 24',
        fill: 'none',
        strokeWidth: 2,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        margin: 12,
      },
    },
  },
  {
    resolveProps: ['stroke'],
  },
  {
    propertyTokenMap: {
      stroke: 'colors',
    },
  }
);

export function Icons() {
  return (
    <Wrapper>
      <View
        style={{
          backgroundColor: 'black',
          padding: 24,
          display: 'flex',
        }}
      >
        <StyledIcons>
          <Circle cx="12" cy="12" r="10" />
          <Polyline points="12 16 16 12 12 8" />
          <Line x1="8" y1="12" x2="16" y2="12" />
        </StyledIcons>
        <StyledIcons>
          <Rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <Polyline points="11 3 11 11 14 8 17 11 17 3" />
        </StyledIcons>
        <StyledIcons>
          <Line x1="21" y1="6" x2="3" y2="6" />
          <Line x1="17" y1="12" x2="7" y2="12" />
          <Line x1="19" y1="18" x2="5" y2="18" />
        </StyledIcons>
      </View>
    </Wrapper>
  );
}
