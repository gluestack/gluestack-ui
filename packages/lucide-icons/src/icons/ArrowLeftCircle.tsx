import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Circle as _Circle, Line, Polyline } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <_Circle cx="12" cy="12" r="10" />
      <Polyline points="12 8 8 12 12 16" />
      <Line x1="16" y1="12" x2="8" y2="12" />
    </StyledSvg>
  );
};
Icon.displayName = 'ArrowLeftCircle';
export const ArrowLeftCircle = React.memo(Icon);
