import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path, Rect } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="6" y="14" width="9" height="6" rx="2" />
      <Rect x="6" y="4" width="16" height="6" rx="2" />
      <Path d="M2 2v20" />
    </StyledSvg>
  );
};
Icon.displayName = 'AlignStartVertical';
export const AlignStartVertical = React.memo(Icon);
