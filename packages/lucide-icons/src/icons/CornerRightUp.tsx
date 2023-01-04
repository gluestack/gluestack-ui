import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path, Polyline } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Polyline points="10 9 15 4 20 9" />
      <Path d="M4 20h7a4 4 0 0 0 4-4V4" />
    </StyledSvg>
  );
};
Icon.displayName = 'CornerRightUp';
export const CornerRightUp = React.memo(Icon);
