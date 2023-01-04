import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M18 7V4H6l6 8-6 8h12v-3" />
    </StyledSvg>
  );
};
Icon.displayName = 'Sigma';
export const Sigma = React.memo(Icon);
