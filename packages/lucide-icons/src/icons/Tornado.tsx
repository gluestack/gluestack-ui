import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M21 4H3" />
      <Path d="M18 8H6" />
      <Path d="M19 12H9" />
      <Path d="M16 16h-6" />
      <Path d="M11 20H9" />
    </StyledSvg>
  );
};
Icon.displayName = 'Tornado';
export const Tornado = React.memo(Icon);
