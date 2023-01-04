import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M17 3v10" />
      <Path d="m12.67 5.5 8.66 5" />
      <Path d="m12.67 10.5 8.66-5" />
      <Path d="M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z" />
    </StyledSvg>
  );
};
Icon.displayName = 'Regex';
export const Regex = React.memo(Icon);
