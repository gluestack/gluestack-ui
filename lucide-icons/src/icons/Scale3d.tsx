import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path, Rect } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M5 7v12h12" />
      <Path d="m5 19 6-6" />
      <Rect x="3" y="3" width="4" height="4" rx="1" />
      <Rect x="17" y="17" width="4" height="4" rx="1" />
    </StyledSvg>
  );
};
Icon.displayName = 'Scale3d';
export const Scale3d = React.memo(Icon);
