import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Rect } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="2" y="4" width="20" height="6" rx="2" />
      <Rect x="2" y="14" width="20" height="6" rx="2" />
    </StyledSvg>
  );
};
Icon.displayName = 'StretchHorizontal';
export const StretchHorizontal = React.memo(Icon);
