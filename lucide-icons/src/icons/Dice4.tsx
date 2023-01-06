import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path, Rect } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <Path d="M16 8h.01" />
      <Path d="M8 8h.01" />
      <Path d="M8 16h.01" />
      <Path d="M16 16h.01" />
    </StyledSvg>
  );
};
Icon.displayName = 'Dice4';
export const Dice4 = React.memo(Icon);
