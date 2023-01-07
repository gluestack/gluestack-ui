import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Line, Path, Rect } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <Path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <Line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </StyledSvg>
  );
};
Icon.displayName = 'Instagram';
export const Instagram = React.memo(Icon);
