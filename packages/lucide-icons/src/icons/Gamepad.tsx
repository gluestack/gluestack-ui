import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Line, Rect } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Line x1="6" y1="12" x2="10" y2="12" />
      <Line x1="8" y1="10" x2="8" y2="14" />
      <Line x1="15" y1="13" x2="15.01" y2="13" />
      <Line x1="18" y1="11" x2="18.01" y2="11" />
      <Rect x="2" y="6" width="20" height="12" rx="2" />
    </StyledSvg>
  );
};
Icon.displayName = 'Gamepad';
export const Gamepad = React.memo(Icon);
