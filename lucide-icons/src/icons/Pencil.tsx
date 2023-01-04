import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Line, Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Line x1="18" y1="2" x2="22" y2="6" />
      <Path d="M7.5 20.5 19 9l-4-4L3.5 16.5 2 22z" />
    </StyledSvg>
  );
};
Icon.displayName = 'Pencil';
export const Pencil = React.memo(Icon);
