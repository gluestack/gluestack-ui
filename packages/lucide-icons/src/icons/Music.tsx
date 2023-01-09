import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Circle as _Circle, Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M9 18V5l12-2v13" />
      <_Circle cx="6" cy="18" r="3" />
      <_Circle cx="18" cy="16" r="3" />
    </StyledSvg>
  );
};
Icon.displayName = 'Music';
export const Music = React.memo(Icon);
