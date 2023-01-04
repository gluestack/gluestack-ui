import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Polyline } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Polyline points="13 17 18 12 13 7" />
      <Polyline points="6 17 11 12 6 7" />
    </StyledSvg>
  );
};
Icon.displayName = 'ChevronsRight';
export const ChevronsRight = React.memo(Icon);
