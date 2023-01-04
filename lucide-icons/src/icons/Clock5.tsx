import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Circle as _Circle, Polyline } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <_Circle cx="12" cy="12" r="10" />
      <Polyline points="12 6 12 12 14.5 16" />
    </StyledSvg>
  );
};
Icon.displayName = 'Clock5';
export const Clock5 = React.memo(Icon);
