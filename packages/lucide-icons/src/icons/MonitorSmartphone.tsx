import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path, Rect } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8" />
      <Path d="M10 19v-3.96 3.15" />
      <Path d="M7 19h5" />
      <Rect x="16" y="12" width="6" height="10" rx="2" />
    </StyledSvg>
  );
};
Icon.displayName = 'MonitorSmartphone';
export const MonitorSmartphone = React.memo(Icon);
