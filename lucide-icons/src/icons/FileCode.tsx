import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path, Polyline } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4" />
      <Polyline points="14 2 14 8 20 8" />
      <Path d="m9 18 3-3-3-3" />
      <Path d="m5 12-3 3 3 3" />
    </StyledSvg>
  );
};
Icon.displayName = 'FileCode';
export const FileCode = React.memo(Icon);
