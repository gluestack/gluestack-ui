import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <Path d="M17 18h1" />
      <Path d="M12 18h1" />
      <Path d="M7 18h1" />
    </StyledSvg>
  );
};
Icon.displayName = 'Factory';
export const Factory = React.memo(Icon);
