import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Line, Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M8 2c3 0 5 2 8 2s4-1 4-1v11" />
      <Path d="M4 22V4" />
      <Path d="M4 15s1-1 4-1 5 2 8 2" />
      <Line x1="2" y1="2" x2="22" y2="22" />
    </StyledSvg>
  );
};
Icon.displayName = 'FlagOff';
export const FlagOff = React.memo(Icon);
