import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Circle as _Circle, Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <_Circle cx="16" cy="4" r="1" />
      <Path d="m18 19 1-7-5.87.94" />
      <Path d="m5 8 3-3 5.5 3-2.21 3.1" />
      <Path d="M4.24 14.48c-.19.58-.27 1.2-.23 1.84a5 5 0 0 0 5.31 4.67c.65-.04 1.25-.2 1.8-.46" />
      <Path d="M13.76 17.52c.19-.58.27-1.2.23-1.84a5 5 0 0 0-5.31-4.67c-.65.04-1.25.2-1.8.46" />
    </StyledSvg>
  );
};
Icon.displayName = 'Accessibility';
export const Accessibility = React.memo(Icon);
