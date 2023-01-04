import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Rect } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="3" y="3" width="7" height="9" />
      <Rect x="14" y="3" width="7" height="5" />
      <Rect x="14" y="12" width="7" height="9" />
      <Rect x="3" y="16" width="7" height="5" />
    </StyledSvg>
  );
};
Icon.displayName = 'LayoutDashboard';
export const LayoutDashboard = React.memo(Icon);
