import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M4 20h16" />
      <Path d="m6 16 6-12 6 12" />
      <Path d="M8 12h8" />
    </StyledSvg>
  );
};
Icon.displayName = 'Baseline';
export const Baseline = React.memo(Icon);
