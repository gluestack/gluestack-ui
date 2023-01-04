import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Line, Polygon } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
      <Line x1="15" y1="9" x2="9" y2="15" />
      <Line x1="9" y1="9" x2="15" y2="15" />
    </StyledSvg>
  );
};
Icon.displayName = 'XOctagon';
export const XOctagon = React.memo(Icon);
