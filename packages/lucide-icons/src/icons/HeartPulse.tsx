import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
      <Path d="M3.5 12h6l.5-1 2 4.5 2-7 1.5 3.5h5" />
    </StyledSvg>
  );
};
Icon.displayName = 'HeartPulse';
export const HeartPulse = React.memo(Icon);
