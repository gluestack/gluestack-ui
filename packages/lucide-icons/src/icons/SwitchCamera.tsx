import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Circle as _Circle, Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5" />
      <Path d="M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5" />
      <_Circle cx="12" cy="12" r="3" />
      <Path d="m18 22-3-3 3-3" />
      <Path d="m6 2 3 3-3 3" />
    </StyledSvg>
  );
};
Icon.displayName = 'SwitchCamera';
export const SwitchCamera = React.memo(Icon);
