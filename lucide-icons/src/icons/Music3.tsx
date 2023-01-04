import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Circle as _Circle, Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <_Circle cx="12" cy="18" r="4" />
      <Path d="M16 18V2" />
    </StyledSvg>
  );
};
Icon.displayName = 'Music3';
export const Music3 = React.memo(Icon);
