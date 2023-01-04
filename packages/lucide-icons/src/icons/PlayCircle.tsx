import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Circle as _Circle, Polygon } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <_Circle cx="12" cy="12" r="10" />
      <Polygon points="10 8 16 12 10 16 10 8" />
    </StyledSvg>
  );
};
Icon.displayName = 'PlayCircle';
export const PlayCircle = React.memo(Icon);
