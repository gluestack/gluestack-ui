import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Circle as _Circle, Line, Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <_Circle cx="12" cy="12" r="10" />
      <Path d="M16 16s-1.5-2-4-2-4 2-4 2" />
      <Line x1="9" y1="9" x2="9.01" y2="9" />
      <Line x1="15" y1="9" x2="15.01" y2="9" />
    </StyledSvg>
  );
};
Icon.displayName = 'Frown';
export const Frown = React.memo(Icon);
