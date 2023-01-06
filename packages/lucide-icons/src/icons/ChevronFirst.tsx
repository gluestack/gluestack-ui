import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path, Polyline } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Polyline points="17 18 11 12 17 6" />
      <Path d="M7 6v12" />
    </StyledSvg>
  );
};
Icon.displayName = 'ChevronFirst';
export const ChevronFirst = React.memo(Icon);
