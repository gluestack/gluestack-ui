import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8" />
      <Path d="M5 8h14" />
      <Path d="M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0" />
      <Path d="m12 8 1-6h2" />
    </StyledSvg>
  );
};
Icon.displayName = 'CupSoda';
export const CupSoda = React.memo(Icon);
