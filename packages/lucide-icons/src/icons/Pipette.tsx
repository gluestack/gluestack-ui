import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="m2 22 1-1h3l9-9" />
      <Path d="M3 21v-3l9-9" />
      <Path d="m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z" />
    </StyledSvg>
  );
};
Icon.displayName = 'Pipette';
export const Pipette = React.memo(Icon);
