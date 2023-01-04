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
      <Polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5" />
      <Line x1="5" y1="14" x2="9" y2="18" />
      <Line x1="7" y1="17" x2="4" y2="20" />
      <Line x1="3" y1="19" x2="5" y2="21" />
    </StyledSvg>
  );
};
Icon.displayName = 'Swords';
export const Swords = React.memo(Icon);
