import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Line, Polyline } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Polyline points="4 17 10 11 4 5" />
      <Line x1="12" y1="19" x2="20" y2="19" />
    </StyledSvg>
  );
};
Icon.displayName = 'Terminal';
export const Terminal = React.memo(Icon);
