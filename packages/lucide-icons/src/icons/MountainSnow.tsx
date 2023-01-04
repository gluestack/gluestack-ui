import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="m8 3 4 8 5-5 5 15H2L8 3z" />
      <Path d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19" />
    </StyledSvg>
  );
};
Icon.displayName = 'MountainSnow';
export const MountainSnow = React.memo(Icon);
