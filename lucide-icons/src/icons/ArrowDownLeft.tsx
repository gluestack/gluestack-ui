import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Line, Polyline } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Line x1="17" y1="7" x2="7" y2="17" />
      <Polyline points="17 17 7 17 7 7" />
    </StyledSvg>
  );
};
Icon.displayName = 'ArrowDownLeft';
export const ArrowDownLeft = React.memo(Icon);
