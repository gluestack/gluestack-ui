import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Line, Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Line x1="10" y1="6" x2="21" y2="6" />
      <Line x1="10" y1="12" x2="21" y2="12" />
      <Line x1="10" y1="18" x2="21" y2="18" />
      <Path d="M4 6h1v4" />
      <Path d="M4 10h2" />
      <Path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
    </StyledSvg>
  );
};
Icon.displayName = 'ListOrdered';
export const ListOrdered = React.memo(Icon);
