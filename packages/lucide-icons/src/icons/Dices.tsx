import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path, Rect } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="2" y="10" width="12" height="12" rx="2" ry="2" />
      <Path d="m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6" />
      <Path d="M6 18h.01" />
      <Path d="M10 14h.01" />
      <Path d="M15 6h.01" />
      <Path d="M18 9h.01" />
    </StyledSvg>
  );
};
Icon.displayName = 'Dices';
export const Dices = React.memo(Icon);
