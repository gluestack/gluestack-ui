import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M2 2c4.056 3.007 9.232 9.337 10 20 .897-6.818 1.5-9.5 4-14" />
      <Path d="M20.375 6.533A9.953 9.953 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2c2.003 0 3.869.589 5.433 1.603" />
      <Path d="M17.104 4c-1.002 1.274-1.146 2.586-1.1 4 1.9-.1 3.003-.201 4.3-1.4 1.406-1.3 1.6-2.3 1.7-4.6-2.7.1-3.623.375-4.9 2Z" />
    </StyledSvg>
  );
};
Icon.displayName = 'Vegan';
export const Vegan = React.memo(Icon);
