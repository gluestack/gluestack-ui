import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Circle as _Circle, Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <_Circle cx="12" cy="12" r="10" />
      <Path d="M12 18a6 6 0 0 0 0-12v12z" />
    </StyledSvg>
  );
};
Icon.displayName = 'Contrast';
export const Contrast = React.memo(Icon);
