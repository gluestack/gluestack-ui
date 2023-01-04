import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Line, Polyline } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Polyline points="17 11 21 7 17 3" />
      <Line x1="21" y1="7" x2="9" y2="7" />
      <Polyline points="7 21 3 17 7 13" />
      <Line x1="15" y1="17" x2="3" y2="17" />
    </StyledSvg>
  );
};
Icon.displayName = 'ArrowLeftRight';
export const ArrowLeftRight = React.memo(Icon);
