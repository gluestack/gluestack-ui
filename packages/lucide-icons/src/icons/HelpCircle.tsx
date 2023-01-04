import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Circle as _Circle, Line, Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <_Circle cx="12" cy="12" r="10" />
      <Path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <Line x1="12" y1="17" x2="12.01" y2="17" />
    </StyledSvg>
  );
};
Icon.displayName = 'HelpCircle';
export const HelpCircle = React.memo(Icon);
