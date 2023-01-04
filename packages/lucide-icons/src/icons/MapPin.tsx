import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Circle as _Circle, Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <_Circle cx="12" cy="10" r="3" />
    </StyledSvg>
  );
};
Icon.displayName = 'MapPin';
export const MapPin = React.memo(Icon);
