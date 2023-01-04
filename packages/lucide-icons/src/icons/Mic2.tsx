import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Circle as _Circle, Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" />
      <_Circle cx="17" cy="7" r="5" />
    </StyledSvg>
  );
};
Icon.displayName = 'Mic2';
export const Mic2 = React.memo(Icon);
