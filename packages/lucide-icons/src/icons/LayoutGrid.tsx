import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Rect } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="3" y="3" width="7" height="7" />
      <Rect x="14" y="3" width="7" height="7" />
      <Rect x="14" y="14" width="7" height="7" />
      <Rect x="3" y="14" width="7" height="7" />
    </StyledSvg>
  );
};
Icon.displayName = 'LayoutGrid';
export const LayoutGrid = React.memo(Icon);
