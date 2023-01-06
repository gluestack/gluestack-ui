import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Polyline } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Polyline points="15 18 9 12 15 6" />
    </StyledSvg>
  );
};
Icon.displayName = 'ChevronLeft';
export const ChevronLeft = React.memo(Icon);
