import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Line, Polyline } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Line x1="10" y1="6" x2="21" y2="6" />
      <Line x1="10" y1="12" x2="21" y2="12" />
      <Line x1="10" y1="18" x2="21" y2="18" />
      <Polyline points="3 6 4 7 6 5" />
      <Polyline points="3 12 4 13 6 11" />
      <Polyline points="3 18 4 19 6 17" />
    </StyledSvg>
  );
};
Icon.displayName = 'ListChecks';
export const ListChecks = React.memo(Icon);
