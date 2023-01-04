import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Line, Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M5 13a10 10 0 0 1 14 0" />
      <Path d="M8.5 16.5a5 5 0 0 1 7 0" />
      <Path d="M2 8.82a15 15 0 0 1 20 0" />
      <Line x1="12" y1="20" x2="12.01" y2="20" />
    </StyledSvg>
  );
};
Icon.displayName = 'Wifi';
export const Wifi = React.memo(Icon);
