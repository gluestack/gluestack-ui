import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M19 20 10 4" />
      <Path d="m5 20 9-16" />
      <Path d="M3 20h18" />
      <Path d="m12 15-3 5" />
      <Path d="m12 15 3 5" />
    </StyledSvg>
  );
};
Icon.displayName = 'Tent';
export const Tent = React.memo(Icon);
