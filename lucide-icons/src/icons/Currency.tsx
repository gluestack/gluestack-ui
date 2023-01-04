import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Circle as _Circle, Line } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <_Circle cx="12" cy="12" r="8" />
      <Line x1="3" y1="3" x2="6" y2="6" />
      <Line x1="21" y1="3" x2="18" y2="6" />
      <Line x1="3" y1="21" x2="6" y2="18" />
      <Line x1="21" y1="21" x2="18" y2="18" />
    </StyledSvg>
  );
};
Icon.displayName = 'Currency';
export const Currency = React.memo(Icon);
