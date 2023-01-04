import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path, Polyline } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <Polyline points="14 2 14 8 20 8" />
      <Path d="M8 10v8h8" />
      <Path d="m8 18 4-4" />
    </StyledSvg>
  );
};
Icon.displayName = 'FileAxis3d';
export const FileAxis3d = React.memo(Icon);
