import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path, Polyline } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Polyline points="15 10 20 15 15 20" />
      <Path d="M4 4v7a4 4 0 0 0 4 4h12" />
    </StyledSvg>
  );
};
Icon.displayName = 'CornerDownRight';
export const CornerDownRight = React.memo(Icon);
