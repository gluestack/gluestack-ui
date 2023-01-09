import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M11 12H3" />
      <Path d="M16 6H3" />
      <Path d="M16 18H3" />
      <Path d="M21 12h-6" />
    </StyledSvg>
  );
};
Icon.displayName = 'ListMinus';
export const ListMinus = React.memo(Icon);
