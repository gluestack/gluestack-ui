import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Circle as _Circle, Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z" />
      <Path d="M6 15v-2" />
      <Path d="M12 15V9" />
      <_Circle cx="12" cy="6" r="3" />
    </StyledSvg>
  );
};
Icon.displayName = 'Joystick';
export const Joystick = React.memo(Icon);
