import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M12 3v14" />
      <Path d="M5 10h14" />
      <Path d="M5 21h14" />
    </StyledSvg>
  );
};
Icon.displayName = 'Diff';
export const Diff = React.memo(Icon);
