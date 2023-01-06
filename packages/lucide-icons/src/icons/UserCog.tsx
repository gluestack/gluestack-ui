import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Circle as _Circle, Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <_Circle cx="9" cy="7" r="4" />
      <_Circle cx="19" cy="11" r="2" />
      <Path d="M19 8v1" />
      <Path d="M19 13v1" />
      <Path d="m21.6 9.5-.87.5" />
      <Path d="m17.27 12-.87.5" />
      <Path d="m21.6 12.5-.87-.5" />
      <Path d="m17.27 10-.87-.5" />
    </StyledSvg>
  );
};
Icon.displayName = 'UserCog';
export const UserCog = React.memo(Icon);
