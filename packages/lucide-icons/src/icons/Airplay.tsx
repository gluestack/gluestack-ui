import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path, Polygon } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" />
      <Polygon points="12 15 17 21 7 21 12 15" />
    </StyledSvg>
  );
};
Icon.displayName = 'Airplay';
export const Airplay = React.memo(Icon);
