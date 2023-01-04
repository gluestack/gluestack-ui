import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M3 2v6h6" />
      <Path d="M21 12A9 9 0 0 0 6 5.3L3 8" />
      <Path d="M21 22v-6h-6" />
      <Path d="M3 12a9 9 0 0 0 15 6.7l3-2.7" />
    </StyledSvg>
  );
};
Icon.displayName = 'RefreshCcw';
export const RefreshCcw = React.memo(Icon);
