import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Line, Polyline } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" />
      <Line x1="13" y1="19" x2="19" y2="13" />
      <Line x1="16" y1="16" x2="20" y2="20" />
      <Line x1="19" y1="21" x2="21" y2="19" />
    </StyledSvg>
  );
};
Icon.displayName = 'Sword';
export const Sword = React.memo(Icon);
