import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M18 12.5V10a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4" />
      <Path d="M14 11V9a2 2 0 1 0-4 0v2" />
      <Path d="M10 10.5V5a2 2 0 1 0-4 0v9" />
      <Path d="m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5" />
    </StyledSvg>
  );
};
Icon.displayName = 'HandMetal';
export const HandMetal = React.memo(Icon);
