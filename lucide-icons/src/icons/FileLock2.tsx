import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path, Polyline, Rect } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M4 5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4" />
      <Polyline points="14 2 14 8 20 8" />
      <Rect x="2" y="13" width="8" height="5" rx="1" />
      <Path d="M8 13v-2a2 2 0 1 0-4 0v2" />
    </StyledSvg>
  );
};
Icon.displayName = 'FileLock2';
export const FileLock2 = React.memo(Icon);
