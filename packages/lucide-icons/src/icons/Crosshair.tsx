import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Circle as _Circle, Line } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <_Circle cx="12" cy="12" r="10" />
      <Line x1="22" y1="12" x2="18" y2="12" />
      <Line x1="6" y1="12" x2="2" y2="12" />
      <Line x1="12" y1="6" x2="12" y2="2" />
      <Line x1="12" y1="22" x2="12" y2="18" />
    </StyledSvg>
  );
};
Icon.displayName = 'Crosshair';
export const Crosshair = React.memo(Icon);
