import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M21 3 9 15" />
      <Path d="M12 3H3v18h18v-9" />
      <Path d="M16 3h5v5" />
      <Path d="M14 15H9v-5" />
    </StyledSvg>
  );
};
Icon.displayName = 'Scaling';
export const Scaling = React.memo(Icon);
