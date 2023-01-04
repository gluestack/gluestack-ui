import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="m5.2 6.2 1.4 1.4" />
      <Path d="M2 13h2" />
      <Path d="M20 13h2" />
      <Path d="m17.4 7.6 1.4-1.4" />
      <Path d="M22 17H2" />
      <Path d="M22 21H2" />
      <Path d="M16 13a4 4 0 0 0-8 0" />
      <Path d="M12 5V2.5" />
    </StyledSvg>
  );
};
Icon.displayName = 'Haze';
export const Haze = React.memo(Icon);
