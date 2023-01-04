import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Circle as _Circle, Line, Polyline } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <_Circle cx="12" cy="12" r="10" />
      <Polyline points="16 12 12 8 8 12" />
      <Line x1="12" y1="16" x2="12" y2="8" />
    </StyledSvg>
  );
};
Icon.displayName = 'ArrowUpCircle';
export const ArrowUpCircle = React.memo(Icon);
