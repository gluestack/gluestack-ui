import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Line } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Line x1="22" y1="6" x2="2" y2="6" />
      <Line x1="22" y1="18" x2="2" y2="18" />
      <Line x1="6" y1="2" x2="6" y2="22" />
      <Line x1="18" y1="2" x2="18" y2="22" />
    </StyledSvg>
  );
};
Icon.displayName = 'Frame';
export const Frame = React.memo(Icon);
