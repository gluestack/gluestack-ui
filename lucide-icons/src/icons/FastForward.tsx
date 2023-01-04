import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Polygon } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Polygon points="13 19 22 12 13 5 13 19" />
      <Polygon points="2 19 11 12 2 5 2 19" />
    </StyledSvg>
  );
};
Icon.displayName = 'FastForward';
export const FastForward = React.memo(Icon);
