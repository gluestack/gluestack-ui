import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Line, Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Line x1="2" y1="2" x2="22" y2="22" />
      <Path d="M8.5 16.5a5 5 0 0 1 7 0" />
      <Path d="M2 8.82a15 15 0 0 1 4.17-2.65" />
      <Path d="M10.66 5c4.01-.36 8.14.9 11.34 3.76" />
      <Path d="M16.85 11.25a10 10 0 0 1 2.22 1.68" />
      <Path d="M5 13a10 10 0 0 1 5.24-2.76" />
      <Line x1="12" y1="20" x2="12.01" y2="20" />
    </StyledSvg>
  );
};
Icon.displayName = 'WifiOff';
export const WifiOff = React.memo(Icon);
