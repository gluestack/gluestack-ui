import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path, Rect } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      <Path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
      <Path d="M16 4h2a2 2 0 0 1 2 2v4" />
      <Path d="M21 14H11" />
      <Path d="m15 10-4 4 4 4" />
    </StyledSvg>
  );
};
Icon.displayName = 'ClipboardCopy';
export const ClipboardCopy = React.memo(Icon);
