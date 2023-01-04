import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path, Rect } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="2" y="5" width="6" height="14" rx="2" />
      <Rect x="12" y="7" width="6" height="10" rx="2" />
      <Path d="M22 2v20" />
    </StyledSvg>
  );
};
Icon.displayName = 'AlignHorizontalJustifyEnd';
export const AlignHorizontalJustifyEnd = React.memo(Icon);
