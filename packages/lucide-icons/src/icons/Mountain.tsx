import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </StyledSvg>
  );
};
Icon.displayName = 'Mountain';
export const Mountain = React.memo(Icon);
