import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M21 2v6h-6" />
      <Path d="M21 13a9 9 0 1 1-3-7.7L21 8" />
    </StyledSvg>
  );
};
Icon.displayName = 'RotateCw';
export const RotateCw = React.memo(Icon);
