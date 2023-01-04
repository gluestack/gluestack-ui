import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="m18 16 4-4-4-4" />
      <Path d="m6 8-4 4 4 4" />
      <Path d="m14.5 4-5 16" />
    </StyledSvg>
  );
};
Icon.displayName = 'Code2';
export const Code2 = React.memo(Icon);
