import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M9 2v6" />
      <Path d="M15 2v6" />
      <Path d="M12 17v5" />
      <Path d="M5 8h14" />
      <Path d="M6 11V8h12v3a6 6 0 1 1-12 0v0Z" />
    </StyledSvg>
  );
};
Icon.displayName = 'Plug2';
export const Plug2 = React.memo(Icon);
