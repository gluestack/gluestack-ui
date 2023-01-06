import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Circle as _Circle, Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <_Circle cx="18" cy="18" r="3" />
      <_Circle cx="6" cy="6" r="3" />
      <Path d="M13 6h3a2 2 0 0 1 2 2v7" />
      <Path d="M11 18H8a2 2 0 0 1-2-2V9" />
    </StyledSvg>
  );
};
Icon.displayName = 'GitCompare';
export const GitCompare = React.memo(Icon);
