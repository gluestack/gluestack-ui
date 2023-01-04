import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M4 12h8" />
      <Path d="M4 18V6" />
      <Path d="M12 18V6" />
      <Path d="M17 10v4h4" />
      <Path d="M21 10v8" />
    </StyledSvg>
  );
};
Icon.displayName = 'Heading4';
export const Heading4 = React.memo(Icon);
