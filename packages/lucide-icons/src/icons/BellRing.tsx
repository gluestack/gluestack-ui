import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <Path d="M13.73 21a2 2 0 0 1-3.46 0" />
      <Path d="M2 8c0-2.2.7-4.3 2-6" />
      <Path d="M22 8a10 10 0 0 0-2-6" />
    </StyledSvg>
  );
};
Icon.displayName = 'BellRing';
export const BellRing = React.memo(Icon);
