import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Line, Polyline } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Line x1="3" y1="12" x2="21" y2="12" />
      <Polyline points="8 8 12 4 16 8" />
      <Polyline points="16 16 12 20 8 16" />
    </StyledSvg>
  );
};
Icon.displayName = 'SeparatorHorizontal';
export const SeparatorHorizontal = React.memo(Icon);
