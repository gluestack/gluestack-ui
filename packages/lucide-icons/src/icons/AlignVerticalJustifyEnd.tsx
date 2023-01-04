import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path, Rect } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="5" y="12" width="14" height="6" rx="2" />
      <Rect x="7" y="2" width="10" height="6" rx="2" />
      <Path d="M2 22h20" />
    </StyledSvg>
  );
};
Icon.displayName = 'AlignVerticalJustifyEnd';
export const AlignVerticalJustifyEnd = React.memo(Icon);
