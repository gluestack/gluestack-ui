import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Line, Polyline } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Polyline points="4 14 10 14 10 20" />
      <Polyline points="20 10 14 10 14 4" />
      <Line x1="14" y1="10" x2="21" y2="3" />
      <Line x1="3" y1="21" x2="10" y2="14" />
    </StyledSvg>
  );
};
Icon.displayName = 'Minimize2';
export const Minimize2 = React.memo(Icon);
