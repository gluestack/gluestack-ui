import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M9 2h6l3 7H6l3-7Z" />
      <Path d="M12 9v13" />
      <Path d="M9 22h6" />
    </StyledSvg>
  );
};
Icon.displayName = 'LampFloor';
export const LampFloor = React.memo(Icon);
