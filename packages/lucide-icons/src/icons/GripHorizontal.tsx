import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Circle as _Circle } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <_Circle cx="12" cy="9" r="1" />
      <_Circle cx="19" cy="9" r="1" />
      <_Circle cx="5" cy="9" r="1" />
      <_Circle cx="12" cy="15" r="1" />
      <_Circle cx="19" cy="15" r="1" />
      <_Circle cx="5" cy="15" r="1" />
    </StyledSvg>
  );
};
Icon.displayName = 'GripHorizontal';
export const GripHorizontal = React.memo(Icon);
