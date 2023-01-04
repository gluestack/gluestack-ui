import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Circle as _Circle, Rect } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="1" y="5" width="22" height="14" rx="7" ry="7" />
      <_Circle cx="16" cy="12" r="3" />
    </StyledSvg>
  );
};
Icon.displayName = 'ToggleRight';
export const ToggleRight = React.memo(Icon);
