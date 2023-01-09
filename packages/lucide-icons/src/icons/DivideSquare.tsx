import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Line, Rect } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <Line x1="8" y1="12" x2="16" y2="12" />
      <Line x1="12" y1="16" x2="12" y2="16" />
      <Line x1="12" y1="8" x2="12" y2="8" />
    </StyledSvg>
  );
};
Icon.displayName = 'DivideSquare';
export const DivideSquare = React.memo(Icon);
