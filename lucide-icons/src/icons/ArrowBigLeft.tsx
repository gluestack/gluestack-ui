import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="m3 12 7-7v4h11v6H10v4z" />
    </StyledSvg>
  );
};
Icon.displayName = 'ArrowBigLeft';
export const ArrowBigLeft = React.memo(Icon);
