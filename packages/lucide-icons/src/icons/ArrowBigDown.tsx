import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M9 3h6v11h4l-7 7-7-7h4z" />
    </StyledSvg>
  );
};
Icon.displayName = 'ArrowBigDown';
export const ArrowBigDown = React.memo(Icon);
