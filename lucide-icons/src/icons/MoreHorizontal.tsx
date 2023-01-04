import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Circle as _Circle } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <_Circle cx="12" cy="12" r="1" />
      <_Circle cx="19" cy="12" r="1" />
      <_Circle cx="5" cy="12" r="1" />
    </StyledSvg>
  );
};
Icon.displayName = 'MoreHorizontal';
export const MoreHorizontal = React.memo(Icon);
