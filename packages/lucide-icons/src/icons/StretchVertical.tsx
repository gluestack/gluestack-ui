import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Rect } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="4" y="2" width="6" height="20" rx="2" />
      <Rect x="14" y="2" width="6" height="20" rx="2" />
    </StyledSvg>
  );
};
Icon.displayName = 'StretchVertical';
export const StretchVertical = React.memo(Icon);
