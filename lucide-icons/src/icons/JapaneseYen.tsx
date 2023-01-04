import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M12 9.5V21m0-11.5L6 3m6 6.5L18 3" />
      <Path d="M6 15h12" />
      <Path d="M6 11h12" />
    </StyledSvg>
  );
};
Icon.displayName = 'JapaneseYen';
export const JapaneseYen = React.memo(Icon);
