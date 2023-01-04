import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Line, Polyline } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Polyline points="8 18 12 22 16 18" />
      <Polyline points="8 6 12 2 16 6" />
      <Line x1="12" y1="2" x2="12" y2="22" />
    </StyledSvg>
  );
};
Icon.displayName = 'MoveVertical';
export const MoveVertical = React.memo(Icon);
