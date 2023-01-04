import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" />
      <Path d="m12 12 4 10 1.7-4.3L22 16Z" />
    </StyledSvg>
  );
};
Icon.displayName = 'Inspect';
export const Inspect = React.memo(Icon);
