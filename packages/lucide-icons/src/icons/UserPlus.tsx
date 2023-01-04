import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Circle as _Circle, Line, Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <_Circle cx="9" cy="7" r="4" />
      <Line x1="19" y1="8" x2="19" y2="14" />
      <Line x1="22" y1="11" x2="16" y2="11" />
    </StyledSvg>
  );
};
Icon.displayName = 'UserPlus';
export const UserPlus = React.memo(Icon);
