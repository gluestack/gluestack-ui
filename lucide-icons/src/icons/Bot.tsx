import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Circle as _Circle, Line, Path, Rect } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="3" y="11" width="18" height="10" rx="2" />
      <_Circle cx="12" cy="5" r="2" />
      <Path d="M12 7v4" />
      <Line x1="8" y1="16" x2="8" y2="16" />
      <Line x1="16" y1="16" x2="16" y2="16" />
    </StyledSvg>
  );
};
Icon.displayName = 'Bot';
export const Bot = React.memo(Icon);
