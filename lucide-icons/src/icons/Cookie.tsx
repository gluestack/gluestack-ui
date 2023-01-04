import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
      <Path d="M8.5 8.5v.01" />
      <Path d="M16 15.5v.01" />
      <Path d="M12 12v.01" />
      <Path d="M11 17v.01" />
      <Path d="M7 14v.01" />
    </StyledSvg>
  );
};
Icon.displayName = 'Cookie';
export const Cookie = React.memo(Icon);
