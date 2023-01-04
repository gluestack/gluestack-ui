import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M12 22v-7l-2-2" />
      <Path d="M17 8v.8A6 6 0 0 1 13.8 20v0H10v0A6.5 6.5 0 0 1 7 8h0a5 5 0 0 1 10 0Z" />
      <Path d="m14 14-2 2" />
    </StyledSvg>
  );
};
Icon.displayName = 'Shrub';
export const Shrub = React.memo(Icon);
