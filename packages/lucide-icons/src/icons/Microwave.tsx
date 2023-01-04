import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path, Rect } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="2" y="4" width="20" height="15" rx="2" />
      <Rect x="6" y="8" width="8" height="7" rx="1" />
      <Path d="M18 8v7" />
      <Path d="M6 19v2" />
      <Path d="M18 19v2" />
    </StyledSvg>
  );
};
Icon.displayName = 'Microwave';
export const Microwave = React.memo(Icon);
