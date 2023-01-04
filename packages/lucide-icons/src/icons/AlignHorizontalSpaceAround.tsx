import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path, Rect } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="9" y="7" width="6" height="10" rx="2" />
      <Path d="M4 22V2" />
      <Path d="M20 22V2" />
    </StyledSvg>
  );
};
Icon.displayName = 'AlignHorizontalSpaceAround';
export const AlignHorizontalSpaceAround = React.memo(Icon);
