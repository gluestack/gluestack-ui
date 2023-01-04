import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Line, Polyline } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Line x1="7" y1="17" x2="17" y2="7" />
      <Polyline points="7 7 17 7 17 17" />
    </StyledSvg>
  );
};
Icon.displayName = 'ArrowUpRight';
export const ArrowUpRight = React.memo(Icon);
