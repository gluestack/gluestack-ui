import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Line, Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M9 17H7A5 5 0 0 1 7 7" />
      <Path d="M15 7h2a5 5 0 0 1 4 8" />
      <Line x1="8" y1="12" x2="12" y2="12" />
      <Line x1="2" y1="2" x2="22" y2="22" />
    </StyledSvg>
  );
};
Icon.displayName = 'Link2Off';
export const Link2Off = React.memo(Icon);
