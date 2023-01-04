import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="m14 13-7.5 7.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L11 10" />
      <Path d="m16 16 6-6" />
      <Path d="m8 8 6-6" />
      <Path d="m9 7 8 8" />
      <Path d="m21 11-8-8" />
    </StyledSvg>
  );
};
Icon.displayName = 'Gavel';
export const Gavel = React.memo(Icon);
