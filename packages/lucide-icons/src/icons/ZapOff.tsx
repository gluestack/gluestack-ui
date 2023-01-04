import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Line, Polyline } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Polyline points="12.41 6.75 13 2 10.57 4.92" />
      <Polyline points="18.57 12.91 21 10 15.66 10" />
      <Polyline points="8 8 3 14 12 14 11 22 16 16" />
      <Line x1="2" y1="2" x2="22" y2="22" />
    </StyledSvg>
  );
};
Icon.displayName = 'ZapOff';
export const ZapOff = React.memo(Icon);
