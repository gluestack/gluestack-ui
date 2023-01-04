import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M4 12h8" />
      <Path d="M4 18V6" />
      <Path d="M12 18V6" />
      <Path d="m17 12 3-2v8" />
    </StyledSvg>
  );
};
Icon.displayName = 'Heading1';
export const Heading1 = React.memo(Icon);
