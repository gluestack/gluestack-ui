import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Circle as _Circle, Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M20 7h-9" />
      <Path d="M14 17H5" />
      <_Circle cx="17" cy="17" r="3" />
      <_Circle cx="7" cy="7" r="3" />
    </StyledSvg>
  );
};
Icon.displayName = 'Settings2';
export const Settings2 = React.memo(Icon);
