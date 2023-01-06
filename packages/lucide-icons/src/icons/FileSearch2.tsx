import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Circle as _Circle, Path, Polyline } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <Polyline points="14 2 14 8 20 8" />
      <_Circle cx="11.5" cy="14.5" r="2.5" />
      <Path d="M13.25 16.25 15 18" />
    </StyledSvg>
  );
};
Icon.displayName = 'FileSearch2';
export const FileSearch2 = React.memo(Icon);
