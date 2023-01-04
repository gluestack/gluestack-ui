import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Circle as _Circle, Path, Rect } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <_Circle cx="9" cy="9" r="2" />
      <Path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </StyledSvg>
  );
};
Icon.displayName = 'Image';
export const Image = React.memo(Icon);
