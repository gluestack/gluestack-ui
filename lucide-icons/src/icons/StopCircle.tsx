import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Circle as _Circle, Rect } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <_Circle cx="12" cy="12" r="10" />
      <Rect x="9" y="9" width="6" height="6" />
    </StyledSvg>
  );
};
Icon.displayName = 'StopCircle';
export const StopCircle = React.memo(Icon);
