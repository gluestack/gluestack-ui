import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M12 6v12" />
      <Path d="M17.196 9 6.804 15" />
      <Path d="m6.804 9 10.392 6" />
    </StyledSvg>
  );
};
Icon.displayName = 'Asterisk';
export const Asterisk = React.memo(Icon);
