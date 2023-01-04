import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Line, Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Line x1="9" y1="18" x2="15" y2="18" />
      <Line x1="10" y1="22" x2="14" y2="22" />
      <Path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
    </StyledSvg>
  );
};
Icon.displayName = 'Lightbulb';
export const Lightbulb = React.memo(Icon);
