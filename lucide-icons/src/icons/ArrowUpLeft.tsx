import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Line, Polyline } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Line x1="17" y1="17" x2="7" y2="7" />
      <Polyline points="7 17 7 7 17 7" />
    </StyledSvg>
  );
};
Icon.displayName = 'ArrowUpLeft';
export const ArrowUpLeft = React.memo(Icon);
