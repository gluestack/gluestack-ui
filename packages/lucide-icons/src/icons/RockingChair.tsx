import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Line, Path, Polyline } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Polyline points="3.5 2 6.5 12.5 18 12.5" />
      <Line x1="9.5" y1="12.5" x2="5.5" y2="20" />
      <Line x1="15" y1="12.5" x2="18.5" y2="20" />
      <Path d="M2.75 18a13 13 0 0 0 18.5 0" />
    </StyledSvg>
  );
};
Icon.displayName = 'RockingChair';
export const RockingChair = React.memo(Icon);
