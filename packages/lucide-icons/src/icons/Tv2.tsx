import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path, Rect } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M7 21h10" />
      <Rect x="2" y="3" width="20" height="14" rx="2" />
    </StyledSvg>
  );
};
Icon.displayName = 'Tv2';
export const Tv2 = React.memo(Icon);
