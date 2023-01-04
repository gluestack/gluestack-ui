import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Line, Polygon } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Line x1="22" y1="2" x2="11" y2="13" />
      <Polygon points="22 2 15 22 11 13 2 9 22 2" />
    </StyledSvg>
  );
};
Icon.displayName = 'Send';
export const Send = React.memo(Icon);
