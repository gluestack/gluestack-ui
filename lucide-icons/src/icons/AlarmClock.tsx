import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Circle as _Circle, Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <_Circle cx="12" cy="13" r="8" />
      <Path d="M12 9v4l2 2" />
      <Path d="M5 3 2 6" />
      <Path d="m22 6-3-3" />
      <Path d="m6 19-2 2" />
      <Path d="m18 19 2 2" />
    </StyledSvg>
  );
};
Icon.displayName = 'AlarmClock';
export const AlarmClock = React.memo(Icon);
