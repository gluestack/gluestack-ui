import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Line, Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M9.31 9.31 5 21l7-4 7 4-1.17-3.17" />
      <Path d="M14.53 8.88 12 2l-1.17 3.17" />
      <Line x1="2" y1="2" x2="22" y2="22" />
    </StyledSvg>
  );
};
Icon.displayName = 'Navigation2Off';
export const Navigation2Off = React.memo(Icon);
