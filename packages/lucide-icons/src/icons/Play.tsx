import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Polygon } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Polygon points="5 3 19 12 5 21 5 3" />
    </StyledSvg>
  );
};
Icon.displayName = 'Play';
export const Play = React.memo(Icon);
