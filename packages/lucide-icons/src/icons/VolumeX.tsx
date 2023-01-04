import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Line, Polygon } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <Line x1="22" y1="9" x2="16" y2="15" />
      <Line x1="16" y1="9" x2="22" y2="15" />
    </StyledSvg>
  );
};
Icon.displayName = 'VolumeX';
export const VolumeX = React.memo(Icon);
