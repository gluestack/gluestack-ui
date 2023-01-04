import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Rect } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="6" y="2" width="12" height="20" rx="2" />
    </StyledSvg>
  );
};
Icon.displayName = 'RectangleVertical';
export const RectangleVertical = React.memo(Icon);
