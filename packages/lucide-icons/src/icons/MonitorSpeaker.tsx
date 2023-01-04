import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Circle as _Circle, Path, Rect } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M5.5 20H8" />
      <Path d="M17 9h.01" />
      <Rect x="12" y="4" width="10" height="16" rx="2" />
      <Path d="M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4" />
      <_Circle cx="17" cy="15" r="1" />
    </StyledSvg>
  );
};
Icon.displayName = 'MonitorSpeaker';
export const MonitorSpeaker = React.memo(Icon);
