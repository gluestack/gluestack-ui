import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Line, Path, Polyline } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <Polyline points="14 2 14 8 20 8" />
      <Line x1="9.5" y1="12.5" x2="14.5" y2="17.5" />
      <Line x1="14.5" y1="12.5" x2="9.5" y2="17.5" />
    </StyledSvg>
  );
};
Icon.displayName = 'FileX';
export const FileX = React.memo(Icon);
