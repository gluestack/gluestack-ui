import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M8 3H5a2 2 0 0 0-2 2v3" />
      <Path d="M21 8V5a2 2 0 0 0-2-2h-3" />
      <Path d="M3 16v3a2 2 0 0 0 2 2h3" />
      <Path d="M16 21h3a2 2 0 0 0 2-2v-3" />
    </StyledSvg>
  );
};
Icon.displayName = 'Maximize';
export const Maximize = React.memo(Icon);
