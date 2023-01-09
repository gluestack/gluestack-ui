import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M2 22v-5l5-5 5 5-5 5z" />
      <Path d="M9.5 14.5 16 8" />
      <Path d="m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2" />
    </StyledSvg>
  );
};
Icon.displayName = 'Shovel';
export const Shovel = React.memo(Icon);
