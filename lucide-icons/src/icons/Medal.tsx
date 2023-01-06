import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Circle as _Circle, Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" />
      <Path d="M11 12 5.12 2.2" />
      <Path d="m13 12 5.88-9.8" />
      <Path d="M8 7h8" />
      <_Circle cx="12" cy="17" r="5" />
      <Path d="M12 18v-2h-.5" />
    </StyledSvg>
  );
};
Icon.displayName = 'Medal';
export const Medal = React.memo(Icon);
