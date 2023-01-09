import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Circle as _Circle, Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M20 16.2A4.5 4.5 0 0 0 17.5 8h-1.8A7 7 0 1 0 4 14.9" />
      <_Circle cx="12" cy="17" r="3" />
      <Path d="M12 13v1" />
      <Path d="M12 20v1" />
      <Path d="M16 17h-1" />
      <Path d="M9 17H8" />
      <Path d="m15 14-.88.88" />
      <Path d="M9.88 19.12 9 20" />
      <Path d="m15 20-.88-.88" />
      <Path d="M9.88 14.88 9 14" />
    </StyledSvg>
  );
};
Icon.displayName = 'CloudCog';
export const CloudCog = React.memo(Icon);
