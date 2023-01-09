import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <Path d="m9 12 2 2 4-4" />
    </StyledSvg>
  );
};
Icon.displayName = 'CheckCircle2';
export const CheckCircle2 = React.memo(Icon);
