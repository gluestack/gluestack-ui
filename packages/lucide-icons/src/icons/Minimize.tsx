import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M8 3v3a2 2 0 0 1-2 2H3" />
      <Path d="M21 8h-3a2 2 0 0 1-2-2V3" />
      <Path d="M3 16h3a2 2 0 0 1 2 2v3" />
      <Path d="M16 21v-3a2 2 0 0 1 2-2h3" />
    </StyledSvg>
  );
};
Icon.displayName = 'Minimize';
export const Minimize = React.memo(Icon);
