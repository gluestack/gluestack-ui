import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Polygon } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Polygon points="11 19 2 12 11 5 11 19" />
      <Polygon points="22 19 13 12 22 5 22 19" />
    </StyledSvg>
  );
};
Icon.displayName = 'Rewind';
export const Rewind = React.memo(Icon);
