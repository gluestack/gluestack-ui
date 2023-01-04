import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path, Rect } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect width="8" height="14" x="8" y="6" rx="4" />
      <Path d="m19 7-3 2" />
      <Path d="m5 7 3 2" />
      <Path d="m19 19-3-2" />
      <Path d="m5 19 3-2" />
      <Path d="M20 13h-4" />
      <Path d="M4 13h4" />
      <Path d="m10 4 1 2" />
      <Path d="m14 4-1 2" />
    </StyledSvg>
  );
};
Icon.displayName = 'Bug';
export const Bug = React.memo(Icon);
