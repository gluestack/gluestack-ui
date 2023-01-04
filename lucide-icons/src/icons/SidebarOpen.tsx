import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path, Rect } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <Path d="M9 3v18" />
      <Path d="m14 9 3 3-3 3" />
    </StyledSvg>
  );
};
Icon.displayName = 'SidebarOpen';
export const SidebarOpen = React.memo(Icon);
