import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M10 2v7.31" />
      <Path d="M14 9.3V1.99" />
      <Path d="M8.5 2h7" />
      <Path d="M14 9.3a6.5 6.5 0 1 1-4 0" />
      <Path d="M5.58 16.5h12.85" />
    </StyledSvg>
  );
};
Icon.displayName = 'FlaskRound';
export const FlaskRound = React.memo(Icon);
