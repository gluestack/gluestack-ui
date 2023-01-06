import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path, Rect } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M5 16v2" />
      <Path d="M19 16v2" />
      <Rect x="2" y="8" width="20" height="8" rx="2" />
      <Path d="M18 12h0" />
    </StyledSvg>
  );
};
Icon.displayName = 'RadioReceiver';
export const RadioReceiver = React.memo(Icon);
