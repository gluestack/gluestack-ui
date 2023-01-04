import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Circle as _Circle, Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <_Circle cx="12" cy="12" r="10" />
      <Path d="M8 15h8" />
      <Path d="M8 9h2" />
      <Path d="M14 9h2" />
    </StyledSvg>
  );
};
Icon.displayName = 'Annoyed';
export const Annoyed = React.memo(Icon);
