import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Circle as _Circle, Line, Rect } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <_Circle cx="12" cy="14" r="4" />
      <Line x1="12" y1="6" x2="12.01" y2="6" />
    </StyledSvg>
  );
};
Icon.displayName = 'Speaker';
export const Speaker = React.memo(Icon);
