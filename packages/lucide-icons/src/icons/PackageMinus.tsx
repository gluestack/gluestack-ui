import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Line, Path, Polyline } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M16 16h6" />
      <Path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" />
      <Path d="M16.5 9.4 7.55 4.24" />
      <Polyline points="3.29 7 12 12 20.71 7" />
      <Line x1="12" y1="22" x2="12" y2="12" />
    </StyledSvg>
  );
};
Icon.displayName = 'PackageMinus';
export const PackageMinus = React.memo(Icon);
