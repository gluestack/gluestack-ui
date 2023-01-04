import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Polyline } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Polyline points="7 13 12 18 17 13" />
      <Polyline points="7 6 12 11 17 6" />
    </StyledSvg>
  );
};
Icon.displayName = 'ChevronsDown';
export const ChevronsDown = React.memo(Icon);
