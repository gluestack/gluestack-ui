import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path, Polyline } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Polyline points="10 15 15 20 20 15" />
      <Path d="M4 4h7a4 4 0 0 1 4 4v12" />
    </StyledSvg>
  );
};
Icon.displayName = 'CornerRightDown';
export const CornerRightDown = React.memo(Icon);
