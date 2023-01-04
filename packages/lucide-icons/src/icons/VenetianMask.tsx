import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z" />
      <Path d="M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z" />
      <Path d="M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z" />
    </StyledSvg>
  );
};
Icon.displayName = 'VenetianMask';
export const VenetianMask = React.memo(Icon);
