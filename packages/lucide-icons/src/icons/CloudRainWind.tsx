import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <Path d="m9.2 22 3-7" />
      <Path d="m9 13-3 7" />
      <Path d="m17 13-3 7" />
    </StyledSvg>
  );
};
Icon.displayName = 'CloudRainWind';
export const CloudRainWind = React.memo(Icon);
