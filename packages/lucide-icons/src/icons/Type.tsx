import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Line, Polyline } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Polyline points="4 7 4 4 20 4 20 7" />
      <Line x1="9" y1="20" x2="15" y2="20" />
      <Line x1="12" y1="4" x2="12" y2="20" />
    </StyledSvg>
  );
};
Icon.displayName = 'Type';
export const Type = React.memo(Icon);
