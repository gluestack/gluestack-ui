import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path, Polyline } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3" />
      <Polyline points="14 2 14 8 20 8" />
      <Path d="M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      <Path d="m9 18-1.5-1.5" />
    </StyledSvg>
  );
};
Icon.displayName = 'FileSearch';
export const FileSearch = React.memo(Icon);
