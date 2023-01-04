import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z" />
      <Path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" />
      <Path d="M4 15v-3a6 6 0 0 1 6-6h0" />
      <Path d="M14 6h0a6 6 0 0 1 6 6v3" />
    </StyledSvg>
  );
};
Icon.displayName = 'HardHat';
export const HardHat = React.memo(Icon);
