import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path, Rect } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
      <Path d="M6 8h.001" />
      <Path d="M10 8h.001" />
      <Path d="M14 8h.001" />
      <Path d="M18 8h.001" />
      <Path d="M8 12h.001" />
      <Path d="M12 12h.001" />
      <Path d="M16 12h.001" />
      <Path d="M7 16h10" />
    </StyledSvg>
  );
};
Icon.displayName = 'Keyboard';
export const Keyboard = React.memo(Icon);
