import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M11 4h6l3 7H8l3-7Z" />
      <Path d="M14 11v5a2 2 0 0 1-2 2H8" />
      <Path d="M4 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4v-6Z" />
    </StyledSvg>
  );
};
Icon.displayName = 'LampWallUp';
export const LampWallUp = React.memo(Icon);
