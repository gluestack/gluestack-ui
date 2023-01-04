import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Circle as _Circle, Polygon } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <_Circle cx="12" cy="12" r="10" />
      <Polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </StyledSvg>
  );
};
Icon.displayName = 'Compass';
export const Compass = React.memo(Icon);
