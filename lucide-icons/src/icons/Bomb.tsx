import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Circle as _Circle, Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <_Circle cx="11" cy="13" r="9" />
      <Path d="m19.5 9.5 1.8-1.8a2.4 2.4 0 0 0 0-3.4l-1.6-1.6a2.41 2.41 0 0 0-3.4 0l-1.8 1.8" />
      <Path d="m22 2-1.5 1.5" />
    </StyledSvg>
  );
};
Icon.displayName = 'Bomb';
export const Bomb = React.memo(Icon);
