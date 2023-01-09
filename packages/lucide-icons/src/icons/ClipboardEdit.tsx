import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path, Rect } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      <Path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
      <Path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5" />
      <Path d="M4 13.5V6a2 2 0 0 1 2-2h2" />
    </StyledSvg>
  );
};
Icon.displayName = 'ClipboardEdit';
export const ClipboardEdit = React.memo(Icon);
