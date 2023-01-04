import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path, Rect } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <Path d="M15 9h.01" />
      <Path d="M9 15h.01" />
    </StyledSvg>
  );
};
Icon.displayName = 'Dice2';
export const Dice2 = React.memo(Icon);
