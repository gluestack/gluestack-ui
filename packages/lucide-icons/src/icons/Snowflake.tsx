import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Line, Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Line x1="2" y1="12" x2="22" y2="12" />
      <Line x1="12" y1="2" x2="12" y2="22" />
      <Path d="m20 16-4-4 4-4" />
      <Path d="m4 8 4 4-4 4" />
      <Path d="m16 4-4 4-4-4" />
      <Path d="m8 20 4-4 4 4" />
    </StyledSvg>
  );
};
Icon.displayName = 'Snowflake';
export const Snowflake = React.memo(Icon);
