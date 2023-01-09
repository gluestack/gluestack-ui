import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M21.3 8.7 8.7 21.3c-1 1-2.5 1-3.4 0l-2.6-2.6c-1-1-1-2.5 0-3.4L15.3 2.7c1-1 2.5-1 3.4 0l2.6 2.6c1 1 1 2.5 0 3.4Z" />
      <Path d="m7.5 10.5 2 2" />
      <Path d="m10.5 7.5 2 2" />
      <Path d="m13.5 4.5 2 2" />
      <Path d="m4.5 13.5 2 2" />
    </StyledSvg>
  );
};
Icon.displayName = 'Ruler';
export const Ruler = React.memo(Icon);
