import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Circle as _Circle, Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <_Circle cx="6" cy="15" r="4" />
      <_Circle cx="18" cy="15" r="4" />
      <Path d="M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2" />
      <Path d="M2.5 13 5 7c.7-1.3 1.4-2 3-2" />
      <Path d="M21.5 13 19 7c-.7-1.3-1.5-2-3-2" />
    </StyledSvg>
  );
};
Icon.displayName = 'Glasses';
export const Glasses = React.memo(Icon);
