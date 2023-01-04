import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M4 4v16h16" />
      <Path d="m4 20 7-7" />
    </StyledSvg>
  );
};
Icon.displayName = 'Axis3d';
export const Axis3d = React.memo(Icon);
