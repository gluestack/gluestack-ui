import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Line, Polyline } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Line x1="12" y1="19" x2="12" y2="5" />
      <Polyline points="5 12 12 5 19 12" />
    </StyledSvg>
  );
};
Icon.displayName = 'ArrowUp';
export const ArrowUp = React.memo(Icon);
