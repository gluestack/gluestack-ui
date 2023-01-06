import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M4.5 3h15" />
      <Path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" />
      <Path d="M6 14h12" />
    </StyledSvg>
  );
};
Icon.displayName = 'Beaker';
export const Beaker = React.memo(Icon);
