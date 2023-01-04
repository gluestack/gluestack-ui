import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Line, Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" />
      <Path d="M2 12a9 9 0 0 1 8 8" />
      <Path d="M2 16a5 5 0 0 1 4 4" />
      <Line x1="2" y1="20" x2="2.01" y2="20" />
    </StyledSvg>
  );
};
Icon.displayName = 'Cast';
export const Cast = React.memo(Icon);
