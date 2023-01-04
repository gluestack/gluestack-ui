import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Circle as _Circle, Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <_Circle cx="4" cy="20" r="1" />
      <_Circle cx="10" cy="7" r="1" />
      <Path d="M4 20 19 5" />
      <Path d="m21 3-3 1 2 2 1-3Z" />
      <Path d="m10 7-5 5 2 5" />
      <Path d="m10 14 5 2 4-4" />
      <Path d="m18 12 1-1 1 1-1 1-1-1Z" />
    </StyledSvg>
  );
};
Icon.displayName = 'Usb';
export const Usb = React.memo(Icon);
