import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Line } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Line x1="5" y1="12" x2="19" y2="12" />
    </StyledSvg>
  );
};
Icon.displayName = 'Minus';
export const Minus = React.memo(Icon);
