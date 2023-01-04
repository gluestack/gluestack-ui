import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Line, Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="m2 8 2 2-2 2 2 2-2 2" />
      <Path d="m22 8-2 2 2 2-2 2 2 2" />
      <Path d="M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2" />
      <Path d="M16 10.34V6c0-.55-.45-1-1-1h-4.34" />
      <Line x1="2" y1="2" x2="22" y2="22" />
    </StyledSvg>
  );
};
Icon.displayName = 'VibrateOff';
export const VibrateOff = React.memo(Icon);
