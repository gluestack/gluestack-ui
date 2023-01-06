import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Line, Polygon } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Polygon points="5 4 15 12 5 20 5 4" />
      <Line x1="19" y1="5" x2="19" y2="19" />
    </StyledSvg>
  );
};
Icon.displayName = 'SkipForward';
export const SkipForward = React.memo(Icon);
