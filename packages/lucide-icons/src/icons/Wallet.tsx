import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" />
      <Path d="M4 6v12c0 1.1.9 2 2 2h14v-4" />
      <Path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z" />
    </StyledSvg>
  );
};
Icon.displayName = 'Wallet';
export const Wallet = React.memo(Icon);
