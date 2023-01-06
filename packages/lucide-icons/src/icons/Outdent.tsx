import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Line, Polyline } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Polyline points="7 8 3 12 7 16" />
      <Line x1="21" y1="12" x2="11" y2="12" />
      <Line x1="21" y1="6" x2="11" y2="6" />
      <Line x1="21" y1="18" x2="11" y2="18" />
    </StyledSvg>
  );
};
Icon.displayName = 'Outdent';
export const Outdent = React.memo(Icon);
