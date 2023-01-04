import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z" />
      <Path d="M2 9v1c0 1.1.9 2 2 2h1" />
      <Path d="M16 11h0" />
    </StyledSvg>
  );
};
Icon.displayName = 'PiggyBank';
export const PiggyBank = React.memo(Icon);
