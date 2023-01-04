import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Circle as _Circle, Line } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <_Circle cx="12" cy="12" r="10" />
      <Line x1="12" y1="8" x2="12" y2="16" />
      <Line x1="8" y1="12" x2="16" y2="12" />
    </StyledSvg>
  );
};
Icon.displayName = 'PlusCircle';
export const PlusCircle = React.memo(Icon);
