import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Circle as _Circle, Line } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <_Circle cx="18" cy="5" r="3" />
      <_Circle cx="6" cy="12" r="3" />
      <_Circle cx="18" cy="19" r="3" />
      <Line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <Line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </StyledSvg>
  );
};
Icon.displayName = 'Share2';
export const Share2 = React.memo(Icon);
