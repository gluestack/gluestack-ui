import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Polygon, Polyline } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Polygon points="12 2 2 7 12 12 22 7 12 2" />
      <Polyline points="2 17 12 22 22 17" />
      <Polyline points="2 12 12 17 22 12" />
    </StyledSvg>
  );
};
Icon.displayName = 'Layers';
export const Layers = React.memo(Icon);
