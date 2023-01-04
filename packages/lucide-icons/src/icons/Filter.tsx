import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Polygon } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </StyledSvg>
  );
};
Icon.displayName = 'Filter';
export const Filter = React.memo(Icon);
