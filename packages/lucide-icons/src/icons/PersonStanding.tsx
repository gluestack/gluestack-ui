import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Circle as _Circle, Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <_Circle cx="12" cy="5" r="1" />
      <Path d="m9 20 3-6 3 6" />
      <Path d="m6 8 6 2 6-2" />
      <Path d="M12 10v4" />
    </StyledSvg>
  );
};
Icon.displayName = 'PersonStanding';
export const PersonStanding = React.memo(Icon);
