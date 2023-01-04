import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M10 9a3 3 0 1 0 0 6" />
      <Path d="M2 12h1" />
      <Path d="M14 21V3" />
      <Path d="M10 4V3" />
      <Path d="M10 21v-1" />
      <Path d="m3.64 18.36.7-.7" />
      <Path d="m4.34 6.34-.7-.7" />
      <Path d="M14 12h8" />
      <Path d="m17 4-3 3" />
      <Path d="m14 17 3 3" />
      <Path d="m21 15-3-3 3-3" />
    </StyledSvg>
  );
};
Icon.displayName = 'SunSnow';
export const SunSnow = React.memo(Icon);
