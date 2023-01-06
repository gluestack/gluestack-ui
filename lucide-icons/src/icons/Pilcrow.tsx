import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M13 4v16" />
      <Path d="M17 4v16" />
      <Path d="M19 4H9.5a4.5 4.5 0 0 0 0 9H13" />
    </StyledSvg>
  );
};
Icon.displayName = 'Pilcrow';
export const Pilcrow = React.memo(Icon);
