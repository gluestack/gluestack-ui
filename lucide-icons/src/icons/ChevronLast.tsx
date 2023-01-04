import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path, Polyline } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Polyline points="7 18 13 12 7 6" />
      <Path d="M17 6v12" />
    </StyledSvg>
  );
};
Icon.displayName = 'ChevronLast';
export const ChevronLast = React.memo(Icon);
