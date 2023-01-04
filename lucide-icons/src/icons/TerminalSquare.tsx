import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path, Rect } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="m7 11 2-2-2-2" />
      <Path d="M11 13h4" />
      <Rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    </StyledSvg>
  );
};
Icon.displayName = 'TerminalSquare';
export const TerminalSquare = React.memo(Icon);
