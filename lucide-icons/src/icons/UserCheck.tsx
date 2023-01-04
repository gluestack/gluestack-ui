import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Circle as _Circle, Path, Polyline } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <_Circle cx="9" cy="7" r="4" />
      <Polyline points="16 11 18 13 22 9" />
    </StyledSvg>
  );
};
Icon.displayName = 'UserCheck';
export const UserCheck = React.memo(Icon);
