import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Circle as _Circle, Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <_Circle cx="12" cy="10" r="8" />
      <_Circle cx="12" cy="10" r="3" />
      <Path d="M7 22h10" />
      <Path d="M12 22v-4" />
    </StyledSvg>
  );
};
Icon.displayName = 'Webcam';
export const Webcam = React.memo(Icon);
