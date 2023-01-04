import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Circle as _Circle, Line } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <_Circle cx="12" cy="12" r="10" />
      <Line x1="15" y1="9" x2="9" y2="15" />
      <Line x1="9" y1="9" x2="15" y2="15" />
    </StyledSvg>
  );
};
Icon.displayName = 'XCircle';
export const XCircle = React.memo(Icon);
