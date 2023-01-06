import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Line, Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M10 10 4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-1.272-2.542" />
      <Path d="M10 2v2.343" />
      <Path d="M14 2v6.343" />
      <Path d="M8.5 2h7" />
      <Path d="M7 16h9" />
      <Line x1="2" y1="2" x2="22" y2="22" />
    </StyledSvg>
  );
};
Icon.displayName = 'FlaskConicalOff';
export const FlaskConicalOff = React.memo(Icon);
