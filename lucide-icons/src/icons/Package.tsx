import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Line, Path, Polyline } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
      <Path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <Polyline points="3.29 7 12 12 20.71 7" />
      <Line x1="12" y1="22" x2="12" y2="12" />
    </StyledSvg>
  );
};
Icon.displayName = 'Package';
export const Package = React.memo(Icon);
