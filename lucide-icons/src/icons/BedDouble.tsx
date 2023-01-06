import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" />
      <Path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
      <Path d="M12 4v6" />
      <Path d="M2 18h20" />
    </StyledSvg>
  );
};
Icon.displayName = 'BedDouble';
export const BedDouble = React.memo(Icon);
