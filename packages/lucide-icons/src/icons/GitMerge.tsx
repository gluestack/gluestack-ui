import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Circle as _Circle, Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <_Circle cx="18" cy="18" r="3" />
      <_Circle cx="6" cy="6" r="3" />
      <Path d="M6 21V9a9 9 0 0 0 9 9" />
    </StyledSvg>
  );
};
Icon.displayName = 'GitMerge';
export const GitMerge = React.memo(Icon);
