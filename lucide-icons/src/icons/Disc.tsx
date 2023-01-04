import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Circle as _Circle } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <_Circle cx="12" cy="12" r="10" />
      <_Circle cx="12" cy="12" r="3" />
    </StyledSvg>
  );
};
Icon.displayName = 'Disc';
export const Disc = React.memo(Icon);
