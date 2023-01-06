import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M18 11.5V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4" />
      <Path d="M14 10V8a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
      <Path d="M10 9.9V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5" />
      <Path d="M6 14v0a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
      <Path d="M18 11v0a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0" />
    </StyledSvg>
  );
};
Icon.displayName = 'Grab';
export const Grab = React.memo(Icon);
