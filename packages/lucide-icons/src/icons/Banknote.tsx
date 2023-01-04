import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Circle as _Circle, Path, Rect } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="2" y="6" width="20" height="12" rx="2" />
      <_Circle cx="12" cy="12" r="2" />
      <Path d="M6 12h.01M18 12h.01" />
    </StyledSvg>
  );
};
Icon.displayName = 'Banknote';
export const Banknote = React.memo(Icon);
