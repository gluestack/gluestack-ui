import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Polygon } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    </StyledSvg>
  );
};
Icon.displayName = 'Volume';
export const Volume = React.memo(Icon);
