import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M2 20h.01" />
      <Path d="M7 20v-4" />
      <Path d="M12 20v-8" />
      <Path d="M17 20V8" />
      <Path d="M22 4v16" />
    </StyledSvg>
  );
};
Icon.displayName = 'Signal';
export const Signal = React.memo(Icon);
