import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="m21 12-7-7v4H3v6h11v4z" />
    </StyledSvg>
  );
};
Icon.displayName = 'ArrowBigRight';
export const ArrowBigRight = React.memo(Icon);
