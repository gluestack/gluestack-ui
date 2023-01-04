import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Polyline, Rect } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <Polyline points="11 3 11 11 14 8 17 11 17 3" />
    </StyledSvg>
  );
};
Icon.displayName = 'Album';
export const Album = React.memo(Icon);
