import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path, Polyline } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M20 10V7.5L14.5 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h4.5" />
      <Polyline points="14 2 14 8 20 8" />
      <Path d="M16 22a2 2 0 0 1-2-2" />
      <Path d="M20 22a2 2 0 0 0 2-2" />
      <Path d="M20 14a2 2 0 0 1 2 2" />
      <Path d="M16 14a2 2 0 0 0-2 2" />
    </StyledSvg>
  );
};
Icon.displayName = 'FileScan';
export const FileScan = React.memo(Icon);
