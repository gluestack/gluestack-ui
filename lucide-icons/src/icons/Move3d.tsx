import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M5 3v16h16" />
      <Path d="m5 19 6-6" />
      <Path d="m2 6 3-3 3 3" />
      <Path d="m18 16 3 3-3 3" />
    </StyledSvg>
  );
};
Icon.displayName = 'Move3d';
export const Move3d = React.memo(Icon);
